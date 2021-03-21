<?php

namespace App\Http\Controllers;

use App\Models\IngredientsList;
use App\Models\Sweet;
use DateTime;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\Routing\ResponseFactory;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Validator;

class SweetController extends Controller
{
    function getAll()
    {
        $user = auth('sanctum')->user();

        if ($user) {
            $response = Sweet::all();

            $this->addIngredientsListToSweets($response);

            return response($response, 200);
        }

        return response('user not logged in', 401);

    }

    private function addIngredientsListToSweets($sweets)
    {
        $currentTime = new DateTime();
        foreach ($sweets as $sweet) {
            $sweet->sold = $sweet->sold ? true : false;
            if (new DateTime($sweet->created_at) < $currentTime) {
                switch ($currentTime->diff(new DateTime())->format('%d')) {
                    case "1":
                        $sweet->sale_price = ($sweet->price / 100) * 80;
                        break;
                    case "2":
                        $sweet->sale_price = ($sweet->price / 100) * 20;
                        break;
                }
            }
            $sweet->ingredients = json_decode(
                IngredientsList::find($sweet->ingredients)->ingredients
            );
        }
    }

    function soldSweet($id)
    {

        $user = auth('sanctum')->user();

        if ($user) {
            Sweet::where('id', $id)->update(['sold' => true]);
            $sweet = Sweet::where('id', $id)->first();

            $sweet->sold = $sweet->sold ? true : false;

            return response($sweet, 200);
        }

        return response('user not logged in', 401);
    }

    /**
     * @return Application|ResponseFactory|Response
     * @throws \Exception
     */
    function getAllSoldable()
    {
        $sweets = Sweet::where('sold', false)->where('created_at', '>', Carbon::createFromTimestamp(time() - (86400 * 3)))->get();

        $this->addIngredientsListToSweets($sweets);

        foreach ($sweets as $sweet) {

            $created_at = new DateTime($sweet->created_at);


            /**
             * check when sweet added and calculate sold price
             */
            switch (round((time() - $created_at->getTimestamp()) / (60 * 60 * 24))) {
                case 0:
                    $sweet->sold_price = ($sweet->price / 100) * 80;
                    break;
                case 2:
                    $sweet->sold_price = ($sweet->price / 100) * 20;
                    break;
            }
        }

        return response($sweets, 200);
    }

    /**
     * @param Request $request
     * @return Application|ResponseFactory|Response
     */
    function add(Request $request)
    {

        if ($this->getValidator($request)->fails()) {
            return response('not valid  object', 200);
        }

        $ingredients = IngredientsList::create([
            'ingredients' => json_encode($request->get('ingredients'))
        ]);

        $sweet = Sweet::create(
            [
                'name' => $request->get('name'),
                'price' => $request->get('price'),
                'ingredients' => $ingredients->id,
                'sold' => false
            ]
        );

        $sweet->ingredients = json_decode($ingredients->ingredients);

        return response($sweet, 200);

    }

    /**
     * @param Request $request
     * @return \Illuminate\Contracts\Validation\Validator
     */
    private function getValidator(Request $request)
    {
        return Validator::make($request->all(), [
            'name' => 'required',
            'price' => 'required',
            'ingredients' => 'required'
        ]);
    }
}
