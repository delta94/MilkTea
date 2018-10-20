<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

//Table MilkTea
Route::get('Get_All_MilkTea_Search/{keySearch}', 'MilkTeaController@Get_All_MilkTea_Search');
Route::get('Get_All_MilkTea', 'MilkTeaController@Get_All_MilkTea');
Route::post('Insert_MilkTea', 'MilkTeaController@Insert_MilkTea');
Route::post('Edit_MilkTea_By_ID', 'MilkTeaController@Edit_MilkTea_By_ID');
Route::get('Select_MilkTea_By_ID/{ID}', 'MilkTeaController@Select_MilkTea_By_ID');

//Table Product
Route::get('Get_All_Product', 'ProductController@Get_All_Product');
Route::get('Get_All_Product_Search/{keySearch}', 'ProductController@Get_All_Product_Search');
Route::post('Insert_Product', 'ProductController@Insert_Product');
Route::post('Edit_Product_By_ID', 'ProductController@Edit_Product_By_ID');
Route::get('Select_Product_By_ID/{ID}', 'ProductController@Select_Product_By_ID');

//Table Material
Route::get('Get_All_Material', 'MaterialController@Get_All_Material');
Route::get('Get_All_Material_Search/{keySearch}', 'MaterialController@Get_All_Material_Search');
Route::post('Insert_Material', 'MaterialController@Insert_Material');
Route::post('Edit_Material_By_ID', 'MaterialController@Edit_Material_By_ID');
Route::get('Select_Material_By_ID/{ID}', 'MaterialController@Select_Material_By_ID');

Route::get('Get_All_Employee', 'EmployeeController@Get_All_Employee');
Route::get('Get_All_Employee_Search/{keySearch}', 'EmployeeController@Get_All_Employee_Search');
Route::post('Insert_Employee', 'EmployeeController@Insert_Employee');
Route::post('Edit_Employee_By_ID', 'EmployeeController@Edit_Employee_By_ID');
Route::get('Select_Employee_By_ID/{ID}', 'EmployeeController@Select_Employee_By_ID');

Route::group(['middleware' => 'cors'], function() {
    Route::post('/api/your_url', function () {
        return ['status'=>'success'];
     });
 });
Route::group(['middleware' => 'Cors'], function() {
    Route::post('Log_In', 'UsersController@Login');
});
