cd dolci_capricci

composer install

npm i

php artisan key:generate

php artisan migrate:fresh

php artisan db:seed --class=UsersTableSeeder

php artisan db:seed --class=SweetsTableSeeder

php artisan serve
