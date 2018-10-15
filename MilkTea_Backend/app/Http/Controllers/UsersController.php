<?php

namespace App\Http\Controllers;
use App\Users;
use Illuminate\Http\Request;
use Firebase\JWT\JWT;
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
        // try {
//      chú ý  phải có using mới xài được DB::
//        $data = 'ok';

            //Lấy request về tham số object được truyền vào từ vue
            $arrJson = json_decode($request->getContent(), true);
            //Ép kiểu mảng thành kiểu stdClass  sau đó chỉ sử dụng vd: $o->FullName;
            $o = (object)$arrJson;


            if ($this->t->NotNullOrEmpty($o) == true) {
                $data = DB::select(
                    'EXECUTE Login_User ?, ?',
                    [$o->_UserName, md5(sha1($o->_Password))]
                );
                // if ($data->count() > 0) {
                //     $objEmp = $data->get(0);

                    $key = "thanhnhi";

                    // \Session::put('account', $objEmp);
                    $jwt = JWT::encode($data,$key);

                    return \response()->json(array('code' => 'ok', 'value' => $jwt));
                // } else {
                //     return \response()->json(array('code' => 'alert', 'value' => 'Tài khoản không tồn tại'));
                // }
            } else {
                return \response()->json(array('code' => 'alert', 'value' => 'Tài khoản hoặc mặt khẩu không chính xác !'));
            }
        // } catch (\Exception $e) {
        //     return \response()->json(array('code' => 'error', 'value' => $e));
        // }
//

    }


    public function Logout()
    {
        try {

                $arrJson = json_decode($request->getContent(), true);
                $o = (object)$arrJson;
                if ($this->t->NotNullOrEmpty($o) == true) {

                    if (isset($o->_token)) {
                        $emp = $this->t->JWT_Decode($o->_token);

                        return \response()->json(array('code' => 'ok', 'value' => 'ok'));

                    } else {

                        return \response()->json(array('code' => 'alert', 'value' => 'Vui lòng đăng nhập'));
                    }
                } else {

                    return \response()->json(array('code' => 'alert', 'value' => 'Tham số truyền vào bị rỗng'));
                }


        } catch (\Exception $e) {
            return \response()->json(array('code' => 'error', 'value' => $e));
        }
//

    }
}
