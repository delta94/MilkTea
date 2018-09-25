<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Material;
use DB;

class MaterialController extends Controller
{
    //
    function __construct()
    {

        $this->t = new ToolkitController();
    }
	public function Get_All_Material()
	{
		
		return DB::table('Material')->get();
		
	}
	public function Get_All_Material_Search($keySearch)
    {
        $material = DB::table('Material')->where('Name', 'like', '%' . $this->t->vn_to_str(trim($keySearch)) . '%')->get()->toJson();
        return \response()->json(array('code' => 'ok', 'value' => $material));
    }

    public function Insert_Material(Request $request)
    {

        // try {
        //     if (\Session::has('account')) {

        //         $emp = \Session::get('account');
                $arrJson = json_decode($request->getContent(), true);
                $o = (object)$arrJson;

                if ($this->t->NotNullOrEmpty($o)) {

                    $material = new Material();
                    $material->Name = $o->_Name;
					$material->Price = $o->_Price;
					$material->Count = $o->_Count;

                    $flag = $material->save();

                    $createdID = $material->id;


                    if ($flag == true) {
                        return \response()->json(array('code' => 'ok', 'value' => $createdID));
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
    public function Edit_Material_By_ID(Request $request)
    {
        try {
            $arrJson = json_decode($request->getContent(), true);
            $o = (object)$arrJson;

            if ($this->t->NotNullOrEmpty($o)) {

                \App\Material::where('ID', '=', $o->_ID)->update([
                    'Name' => trim($o->_Name),
					'Price' => trim($o->_Price),
					'Count' => trim($o->_Count)
                ]);


                return \response()->json(array('code' => 'ok', 'value' => 'ok'));
            } else {
                return \response()->json(array('code' => 'alert', 'value' => "Tham số truyền vào bị rỗng !"));

            }


        } catch (\Exception $e) {

            return \response()->json(array('code' => 'error', 'value' => $e->getMessage()));

        }
    }
    public function Select_Material_By_ID($ID)
    {

        try {


            if ($this->t->NotNullOrEmpty($ID)) {

                $material = DB::table("Material as a")->whereRaw("a.ID = " . $ID)->select(DB::raw('a.ID, a.Name, a.Price, a.Count'))->get()->toJson();


                return \response()->json(array('code' => 'ok', 'value' => $material));
            } else {
                return \response()->json(array('code' => 'alert', 'value' => "Tham số truyền vào bị rỗng !"));

            }
        } catch (\Exception $e) {

            return \response()->json(array('code' => 'error', 'value' => $e->getMessage()));

        }


    }
}
