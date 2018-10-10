import React, { Component } from 'react';

class Meterial extends Component {
  render() {
    return (
      <div className="SubHeader">
        <div className="material">
  <div className="group_material container">
    <div className="group">
      <div className="material_content">
        <p>Nguyên liệu: Trân châu đen</p>
        <p>Số lượng: 30</p>
      </div>
      <div className="material_content">
        <p>Nguyên liệu: Thạch củ năng</p>
        <p>Số lượng: 40</p>
      </div>
      <div className="material_content">
        <p>Nguyên liệu: Trân châu trắng</p>
        <p>Số lượng: 10</p>
      </div>
      <div className="material_content">
        <p>Nguyên liệu: Thạch bảy màu</p>
        <p>Số lượng: 50</p>
      </div>
    </div>
  </div>
  <div className="detail_material mt-5">
    <form name="#" value="#" method="POST">
      <div className="material_iteam mb-3">
        <label className="txt">Tên nguyên liệu:</label>
        <select className="choice">
          <option />
          <option>Trân châu đen</option>
          <option>Trân châu trắng</option>
          <option>Thạch củ năng</option>
          <option>Thạch bảy màu</option>
          <option>Thạch phô mai</option>
          <option>Đường đen</option>
        </select>
        <button type="button" className="btn_add btn btn-primary ml-3" data-toggle="modal" data-target="#myModal">
          <i className="icon_add_material fa fa-plus" />
        </button>
        {/* The Modal */}
        <div className="form_add modal" id="myModal">
          <div className="add_iteam modal-dialog">
            <div className="form_add_material modal-content">
              <h6>Thêm nguyên liệu</h6>
              <div className="add_content">
                <label className="txt">Tên nguyên liệu:</label>
                <input type="text" name="#" />
              </div>
              <div className="add_content">
                <label className="txt">Giá:</label>
                <input className="price_content" type="text" name="#" />
              </div>
              {/* Modal footer */}
              <div className="add_footer modal-footer">
                <button type="button" className="btn btn-danger" data-dismiss="modal">Thêm</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="material_iteam mb-3">
        <label>Tên nhà cung cấp: </label>
        <select className="choice">
          <option />
          <option>Thảo Nguyên</option>
          <option>BoBapop</option>
          <option>Phúc Long </option>
          <option>Royal</option>
          <option>ShareTea</option>
        </select>
      </div>
      <div className="material_iteam">
        <span>Số lượng:</span>
        <input className="txt_add" type="text" name="#" defaultValue />
        <button className="btn_material btn-danger" type="button">Thêm</button>
      </div>
    </form>
  </div>
</div>

      </div>
    );
  }
}

export default Meterial;