<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Bill;
use App\DetailBill;
use DB;
class BillController extends Controller
{
    //
    function __construct()
    {

        $this->t = new ToolkitController();
    }
    public function Get_All_Bill()
	{
		
		return DB::table('Bill')->get();
		
    }
    public function Insert_Bill(Request $request)
    {

        // try {
        //     if (\Session::has('account')) {

        //         $emp = \Session::get('account');
                $arrJson = json_decode($request->getContent(), true);
                $o = (object)$arrJson;

                if ($this->t->NotNullOrEmpty($o)) {

                    $bill = new Bill();
                    $detail = new DetailBill();
                    $bill->Name = $o->_Name;
					$bill->Phone = $o->_Phone;
					$bill->Address = $o->_Address;
                    
                    $flag = $bill->save();
                    $idCreated = array(
                        'id' => $bill->id, 
                        'UserName' => $userName,
                        'Password' => '123456'                    
                    );


                    if ($flag == true && $flag2 == true) {
                        return \response()->json(array('code' => 'ok', 'value' => $idCreated));
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
    
}
