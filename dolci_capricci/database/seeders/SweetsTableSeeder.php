<?php

namespace Database\Seeders;

use App\Models\IngredientsList;
use App\Models\Sweet;
use Faker\Factory;
use Illuminate\Database\Seeder;

class SweetsTableSeeder extends Seeder
{

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //Rimuove tutti i record attualmente memorizzati a db
        //Sweet::truncate();

        $faker = Factory::create();

        $unitList = ['g', 'ml', 'cucchiaio', 'tazza'];

        $desserNameList = ['The Hot Fields',
            'The Cunning Wasteland',
            'The Waterless Flatlands',
            'The Unknown Prairie',
            'The Neverending Hinterland',
            'Infernal Flatlands',
            'Mirrored Frontier',
            'Dehydrated Steppes',
            'Decaying Grasslands',
            'Charmed Wastes'
        ];

        for ($i = 0; $i < 10; $i++) {
            $obj = null;

            for ($j = 0; $j < $faker->numberBetween(1, 4); $j++) {
                $obj[$faker->name] = (object)[
                    'qty' => $faker->numberBetween(1, 300),
                    'unit' => $unitList[$faker->numberBetween(0, 3)]
                ];
            }

            $ingredients = IngredientsList::create([
                'ingredients' => json_encode($obj)
            ]);

            Sweet::create(
                [
                    'name' => $desserNameList[$i],
                    'price' => $faker->randomFloat(2, 1, 60),
                    'ingredients' => $ingredients->id,
                    'sold' => false
                ]
            );
        }
    }
}
