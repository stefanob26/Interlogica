<?php

namespace App\Http\Controllers;

use App\Models\IngredientsList;

class IngredientsListController extends Controller
{
    function getAll()
    {
        $user = auth('sanctum')->user();
        if ($user) {
            $response = IngredientsList::all();

            $this->mapIngredientsList($response);

            return response($response, 200);
        }

        return response('unathorized', 403);
    }

    private function mapIngredientsList($ingredientsList)
    {
        foreach ($ingredientsList as $ingredients) {
            $ingredients->ingredients = json_decode($ingredients->ingredients);
        }
    }
}
