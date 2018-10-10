import React, { Component } from 'react';

class Bills extends Component {
  render() {
    return (
      <div className="SubHeader">
        <div className="detail container">
  <div className="card" style={{width: 300}}>
    <div className="card_name card-body">
      <h4 className="card-title">Hóa đơn</h4>
      <p className="card-text">Tên khách hàng: Nguyễn Văn A</p>
      <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">
        Chi tiết
      </button>
      {/* The Modal */}
      <div className="card_detail modal" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="row_detail row">
              <div className="col_detail col-md-5">
                <h5>CHI TIẾT HÓA ĐƠN</h5>
                <hr />
                <p>Họ tên: Nguyễn Văn A</p>
                <p>Địa chỉ: Quận 9</p>
                <p>Số ĐT: 09122434</p>
                <hr />
                <h6>Tổng tiền: 100 000vnd</h6>
              </div>
              <div className="list col-md-7">
                <p>Trà sữa nhà làm -<span> Số lượng: 5</span></p>
                <p>Trà sữa trân châu đen -<span> Số lượng: 6</span></p>
                <p>Trà sữa thạch - <span> Số lượng: 6</span></p>
                <p>Trà sữa thạch - <span> Số lượng: 6</span></p>
                <button type="button" className="btn_detail btn btn-danger">Đã thanh toán</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

      </div>
    );
  }
}

export default Bills;