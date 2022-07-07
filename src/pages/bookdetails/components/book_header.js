import { Outlet } from "react-router-dom";

let bookTagsStyle = {
  background: "black",
};

const BookHeader = () => {
  return (<div className="row">
    <div className="media col-sm-auto">
      <img src="https://static.cdnno.com/poster/y-tien-coc-lam-viec-vat-ba-muoi-nam-ta-bach-nhat-phi-thang/300.jpg?1619836876" alt="Y Tiên Cốc Làm Việc Vặt Ba Mươi Năm, Ta Bạch Nhật Phi Thăng" />
    </div>
    <div className="media-body col-sm">
      <div className="d-flex justify-content-start mb-3">
        <h1 className="h3 mr-2">
          Y Tiên Cốc Làm Việc Vặt Ba Mươi Năm, Ta Bạch Nhật Phi Thăng
        </h1>
      </div>
      <ul className="list-unstyled mb-4">
        <li className="d-inline-block border border-secondary px-3 py-1 text-secondary rounded-pill">
          <span className="text-secondary"> Liễu Nhất Điều </span>
        </li>
        <li className="d-inline-block border border-danger px-3 py-1 text-danger rounded-pill m-2 mr-2 mb-2"> Đang ra </li>
      </ul>
      <ul className="list-unstyled d-flex mb-4">
        <li style={{ marginRight: "30px" }}>
          <div className="font-weight-semibold h4 mb-1">595</div>
          <div>Chương</div>
        </li>
        <li style={{ marginRight: "30px" }}>
          <div className="font-weight-semibold h4 mb-1">
            5
          </div>
          <div>
            Chương/tuần
          </div>
        </li>
        <li style={{ marginRight: "30px" }}>
          <div className="font-weight-semibold h4 mb-1">
            497.6K
          </div>
          <div>
            Lượt đọc
          </div>
        </li>
        <li style={{ marginRight: "30px" }}>
          <div id="bookmarkedValue" className="font-weight-semibold h4 mb-1">
            1150
          </div>
          <div>
            Cất giữ</div>
        </li>
      </ul>
      <ul className="list-unstyled d-flex align-items-center">
        <li id="reading-book" className="m-2 w-150">
          <a href="https://metruyenchu.com/truyen/y-tien-coc-lam-viec-vat-ba-muoi-nam-ta-bach-nhat-phi-thang/chuong-1" className="cursor-pointer btn btn-primary btn-md btn-block btn-shadow font-weight-semibold d-flex align-items-center justify-content-center" style={{ color: 'rgb(255, 255, 255)' }}>
            <i className="nh-icon icon-glass mr-2" />Đọc truyện </a>
        </li>
        <li id="bookmark" className="m-2 w-150">
          <span data-v-20fe2610>
            <a data-v-20fe2610 href="javascript:void(0);" className="btn btn-outline-secondary btn-md btn-block font-weight-semibold d-flex align-items-center justify-content-center">
              <i data-v-20fe2610 className="nh-icon icon-save mr-2" /> Đánh dấu
            </a></span>
        </li>
        <li id="suggest-book" className="m-2 w-150">
          <div data-v-5494eeb4><a data-v-5494eeb4 href="javascript:void(0);" className="btn btn-outline-warning btn-md btn-block bg-yellow-white text-primary font-weight-semibold d-flex align-items-center justify-content-center">{/**/} <i data-v-5494eeb4 className="svg-icon icon-flower mr-2" /> Đề cử
          </a> </div>
        </li>
      </ul>
    </div>
  </div >);
}

export default BookHeader;