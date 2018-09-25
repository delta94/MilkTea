<?php

namespace App\Http\Controllers;
use App\Users;
use Illuminate\Http\Request;
use DB;

class UsersController extends Controller
{
    //
    function __construct()
    {

        $this->t = new ToolkitController();
    }
    public function Login(Request $request)
    {
        try {
//      chú ý  phải có using mới xài được DB::
//        $data = 'ok';

            //Lấy request về tham số object được truyền vào từ vue
            $arrJson = json_decode($request->getContent(), true);
            //Ép kiểu mảng thành kiểu stdClass  sau đó chỉ sử dụng vd: $o->FullName;
            $o = (object)$arrJson;


            if ($this->t->NotNullOrEmpty($o) == true) {


                $data = DB::table('Users')->where([['UserName', '=', $o->_UserName], ['Password', '=', md5(sha1($o->_Password))]])->get();
                if ($data->count() > 0) {
                    $objEmp = $data->get(0);


                    \Session::put('account', $objEmp);


                    return \response()->json(array('code' => 'ok', 'value' => 'ok'));
                } else {
                    return \response()->json(array('code' => 'alert', 'value' => 'Tài khoản không tồn tại'));
                }
            } else {
                return \response()->json(array('code' => 'alert', 'value' => 'Tài khoản hoặc mặt khẩu không chính xác !'));
            }
        } catch (\Exception $e) {
            return \response()->json(array('code' => 'error', 'value' => $e));
        }
//

    }


    public function Logout()
    {
        try {
//      chú ý  phải có using mới xài được DB::
//        $data = 'ok';


            Session::remove('account');


            return \response()->json(array('code' => 'ok', 'value' => 'ok'));


        } catch (\Exception $e) {
            return \response()->json(array('code' => 'error', 'value' => $e));
        }
//

    }
}
