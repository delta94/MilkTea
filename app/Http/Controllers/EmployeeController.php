<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Employee;
use App\Users;
use DB;

class EmployeeController extends Controller
{
    //
    function __construct()
    {

        $this->t = new ToolkitController();
    }
	public function Get_All_Employee()
	{
		
		return DB::table('Employee')->get();
		
	}
	public function Get_All_Employee_Search($keySearch)
    {
        $employee = DB::table('Employee')->where('Name', 'like', '%' . $this->t->vn_to_str(trim($keySearch)) . '%')->get()->toJson();
        return \response()->json(array('code' => 'ok', 'value' => $employee));
    }

    public function Insert_Employee(Request $request)
    {

        // try {
        //     if (\Session::has('account')) {

        //         $emp = \Session::get('account');
                $arrJson = json_decode($request->getContent(), true);
                $o = (object)$arrJson;

                if ($this->t->NotNullOrEmpty($o)) {

                    $employee = new Employee();
                    $user = new Users();
                    $employee->Name = $o->_Name;
					$employee->Phone = $o->_Phone;
					$employee->Address = $o->_Address;
                    $user->IsEmployee = 1;
                    $user->Password = md5(sha1(123456));
                    $user_post = $this->t->getFirstCharterWordNotUpper($this->t->vn_to_str(trim($o->_Name)));
                    $user_check = \App\Users::select('UserName')->where('UserName', 'like', '%' . $user_post . '%')->get();

                    if (count($user_check) >= 99) {

                        $userName = $user_post . (count($user_check) + 1);

                    } elseif (count($user_check) > 9 && count($user_check) < 99) {

                        $userName = $user_post . '0' . (count($user_check) + 1);

                    } elseif (count($user_check) > 0 && count($user_check) < 9) {

                        $userName = $user_post . '00' . (count($user_check) + 1);

                    } else {

                        $userName = $user_post . '001';
                    }
                    $user->UserName = $userName;
                    $flag = $employee->save();
                    $user->UserID = $employee->id;
                    $flag2 = $user->save();
                    $idCreated = array(
                        'id' => $employee->id, 
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
    public function Edit_Employee_By_ID(Request $request)
    {
        try {
            $arrJson = json_decode($request->getContent(), true);
            $o = (object)$arrJson;


            if ($this->t->NotNullOrEmpty($o)) {

                \App\Employee::where('ID', '=', $o->_ID)->update([
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
    public function Select_Employee_By_ID($ID)
    {

        try {


            if ($this->t->NotNullOrEmpty($ID)) {

                $employee = DB::table("Employee as a")->whereRaw("a.ID = " . $ID)->select(DB::raw('a.ID, a.Name, a.Phone, a.Address'))->get()->toJson();


                return \response()->json(array('code' => 'ok', 'value' => $employee));
            } else {
                return \response()->json(array('code' => 'alert', 'value' => "Tham số truyền vào bị rỗng !"));

            }
        } catch (\Exception $e) {

            return \response()->json(array('code' => 'error', 'value' => $e->getMessage()));

        }


    }
}
