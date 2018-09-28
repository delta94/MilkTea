<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\MilkTea;
use DB;

class MilkTeaController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    function __construct()
    {

        $this->t = new ToolkitController();
    }
    public function __invoke(Request $request)
    {
        //
    }

    public function Get_All_MilkTea()
	{
		return DB::table('MilkTea')->get();
    }

    public function Get_All_MilkTea_Search($keySearch)
    {
        $milktea = DB::table('MilkTea')->where('Name', 'like', '%' . $this->t->vn_to_str(trim($keySearch)) . '%')->get()->toJson();
        return \response()->json(array('code' => 'ok', 'value' => $milktea));
    }

    public function Insert_MilkTea(Request $request)
    {

        // try {
        //     if (\Session::has('account')) {

        //         $emp = \Session::get('account');
                $arrJson = json_decode($request->getContent(), true);
                $o = (object)$arrJson;

                if ($this->t->NotNullOrEmpty($o)) {

                    $milktea = new MilkTea();
                    $milktea->Name = $o->_Name;
                    $milktea->Price = $o->_Price;

                    $flag = $milktea->save();

                    $createdID = $milktea->id;


                    if ($flag == true) {
                        return \response()->json(array('code' => 'ok', 'value' => $createdID));
                    } else {
                        return \response()->json(array('code' => 'alert', 'value' => "Thêm trà sữa thất bại vui lòng kiểm tra lại"));

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
    public function Edit_MilkTea_By_ID(Request $request)
    {
        try {
            $arrJson = json_decode($request->getContent(), true);
            $o = (object)$arrJson;


            if ($this->t->NotNullOrEmpty($o)) {

                \App\MilkTea::where('ID', '=', $o->_ID)->update([
                    'Name' => trim($o->_Name),
                    'Price' => trim($o->_Price)
                ]);


                return \response()->json(array('code' => 'ok', 'value' => 'ok'));
            } else {
                return \response()->json(array('code' => 'alert', 'value' => "Tham số truyền vào bị rỗng !"));

            }


        } catch (\Exception $e) {

            return \response()->json(array('code' => 'error', 'value' => $e->getMessage()));

        }
    }
    public function Select_MilkTea_By_ID($ID)
    {

        try {


            if ($this->t->NotNullOrEmpty($ID)) {

                $milktea = DB::table("MilkTea as a")->whereRaw("a.ID = " . $ID)->select(DB::raw('a.ID, a.Name, a.Price'))->get()->toJson();


                return \response()->json(array('code' => 'ok', 'value' => $milktea));
            } else {
                return \response()->json(array('code' => 'alert', 'value' => "Tham số truyền vào bị rỗng !"));

            }
        } catch (\Exception $e) {

            return \response()->json(array('code' => 'error', 'value' => $e->getMessage()));

        }


    }
}
