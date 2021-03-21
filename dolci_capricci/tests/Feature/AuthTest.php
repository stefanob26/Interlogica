<?php

namespace Tests\Feature;

use App\Models\Sweet;
use http\Client\Curl\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Hash;
use Tests\TestCase;

class AuthTest extends TestCase
{

    use RefreshDatabase;

    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_example()
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }

    /**
     * Test for login
     */
    public function test_login(){


        \App\Models\User::create([
            'name' => 'Test',
            'email'=>'test@email.test',
            'password'=>Hash::make('test')
        ]);

        $response = $this->post('/api/login', ['email'=>'test@email.test', 'password'=>'test'])->assertCreated();
    }

    public function test_logout(){
        $response = $this->delete('/api/logout', [])
    }
}
