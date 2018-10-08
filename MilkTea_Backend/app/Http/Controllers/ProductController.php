<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Product;
use DB;

class ProductController extends Controller
{
    //
	
	function __construct()
    {

        $this->t = new ToolkitController();
    }
	public function Get_All_Product()
	{
		
		return DB::select(DB::raw("exec Select_All_Product"));
		
	}
	public function Get_All_Product_Search($keySearch)
    {
        $product = DB::table('Product')->where('Name', 'like', '%' . $this->t->vn_to_str(trim($keySearch)) . '%')->get()->toJson();
        return \response()->json(array('code' => 'ok', 'value' => $product));
    }

    public function Insert_Product(Request $request)
    {

        // try {
        //     if (\Session::has('account')) {

        //         $emp = \Session::get('account');
                $arrJson = json_decode($request->getContent(), true);
                $o = (object)$arrJson;
                
                if ($this->t->NotNullOrEmpty($o)) {
                    $product = new Product();

                    $product = DB::insert(
                        'exec Insert_Product ?, ?, ?',
                        [$o->_Name, $o->_Phone, $o->_Address]
                    );


                    $flag = $product;

                    if ($flag == true) {
                        return \response()->json(array('code' => 'ok'));
                    } else {
                        return \response()->json(array('code' => 'alert', 'value' => "Thêm nguyên liệu thất bại vui lòng kiểm tra lại"));

                    }
                } else {
                    return \response()->json(array('code' => 'alert', 'value' => "Tham số truyền vào bị rỗng !"));

                }
            // } else {
            //     return \response()->json(array('code' => 'alert', 'value' => 'Vui lòng đăng nhập để sử dụng chức năng trên'));
            // }

        // } catch (\Exception $e) {

        //     return \response()->json(array('code' => 'error', 'value' => $e->getMessage()));

        // }


    }
    public function Edit_Product_By_ID(Request $request)
    {
        try {
            $arrJson = json_decode($request->getContent(), true);
            $o = (object)$arrJson;


            if ($this->t->NotNullOrEmpty($o)) {

                \App\Product::where('ID', '=', $o->_ID)->update([
                    'Name' => trim($o->_Name),
					'Phone' => trim($o->_Phone),
					'Address' => trim($o->_Address)
                ]);


                return \response()->json(array('code' => 'ok', 'value' => 'ok'));
            } else {
                return \response()->json(array('code' => 'alert', 'value' => "Tham số truyền vào bị rỗng !"));

            }


        } catch (\Exception $e) {

            return \response()->json(array('code' => 'error', 'value' => $e->getMessage()));

        }
    }
    public function Select_Product_By_ID($ID)
    {

        try {


            if ($this->t->NotNullOrEmpty($ID)) {

                $product = DB::table("Product as a")->whereRaw("a.ID = " . $ID)->select(DB::raw('a.ID, a.Name, a.Phone, a.Address'))->get()->toJson();


                return \response()->json(array('code' => 'ok', 'value' => $product));
            } else {
                return \response()->json(array('code' => 'alert', 'value' => "Tham số truyền vào bị rỗng !"));

            }
        } catch (\Exception $e) {

            return \response()->json(array('code' => 'error', 'value' => $e->getMessage()));

        }


    }
}
