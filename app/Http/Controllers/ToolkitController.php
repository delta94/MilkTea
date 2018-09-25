<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ToolkitController extends Controller
{
    //
    public function NotNullOrEmpty($question)
    {
//Kiểm tra xem đối tượng truyền vào là 1 sdtClass hay là 1 tham số kiểu giá trị cơ bản e.g string, int, bool
        if (is_object($question) == true) {

            $countArray = count((array)$question);
            if ($countArray > 0) {
                return true;
            } else {
                return false;
            }


        } else {


            if (is_null($question) == false && isset($question) == true && "" !== $question) {
                return true;
            } else {
                return false;
            }
        }
    }

    public function uploadImage(Request $request)
    {

        //câu để upload image
        if ($request->get('image')) {
            $image = $request->get('image');
            $name = time() . '.' . explode('/', explode(':', substr($image, 0, strpos($image, ';')))[1])[1];
            Image::make($request->get('image'))->save(public_path('/images/') . $name);
        }

        //phải tạo model FileUpload rồi dùng câu bên dưới để lưu thông tin vào DB
//        $image= new FileUpload();
//        $image->image_name = $name;
//        $image->save();

        return response()->json(['success' => 'You have successfully uploaded an image']);

    }
    public function getFirstCharterWordNotUpper($str)
    {
        $tring = $this->vn_to_str(trim($str));

        //get last word
        preg_match('/[^ ]*$/', $tring, $results);
        //check number last word
        if (is_numeric($results[0])) {
            $last_word = $results[0];
        } else {
            $last_word = strtolower($results[0]);
        }
        //remove last word in tring
        $remove_last = preg_replace('/\W\w+\s*(\W*)$/', '$1', $tring);
        $str = explode(' ', $remove_last);
        //insert to Medical_Examine
        $res = '';
        foreach ($str as $key => $value) {
            if ($value != '') {
                if (is_numeric($value)) {
                    $res .= strtolower($value);
                } else {
                    $res .= strtolower($value[0]);
                }

            }
        }

        return $res . $last_word;
    }

    function vn_to_str($str)
    {

        $unicode = array(

            'a' => 'á|à|ả|ã|ạ|ă|ắ|ặ|ằ|ẳ|ẵ|â|ấ|ầ|ẩ|ẫ|ậ',

            'd' => 'đ',

            'e' => 'é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ',

            'i' => 'í|ì|ỉ|ĩ|ị',

            'o' => 'ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ',

            'u' => 'ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự',

            'y' => 'ý|ỳ|ỷ|ỹ|ỵ',

            'A' => 'Á|À|Ả|Ã|Ạ|Ă|Ắ|Ặ|Ằ|Ẳ|Ẵ|Â|Ấ|Ầ|Ẩ|Ẫ|Ậ',

            'D' => 'Đ',

            'E' => 'É|È|Ẻ|Ẽ|Ẹ|Ê|Ế|Ề|Ể|Ễ|Ệ',

            'I' => 'Í|Ì|Ỉ|Ĩ|Ị',

            'O' => 'Ó|Ò|Ỏ|Õ|Ọ|Ô|Ố|Ồ|Ổ|Ỗ|Ộ|Ơ|Ớ|Ờ|Ở|Ỡ|Ợ',

            'U' => 'Ú|Ù|Ủ|Ũ|Ụ|Ư|Ứ|Ừ|Ử|Ữ|Ự',

            'Y' => 'Ý|Ỳ|Ỷ|Ỹ|Ỵ',

        );

        foreach ($unicode as $nonUnicode => $uni) {

            $str = preg_replace("/($uni)/i", $nonUnicode, $str);

        }
//        $str = str_replace(' ', '_', $str);

        return $str;

    }
}
