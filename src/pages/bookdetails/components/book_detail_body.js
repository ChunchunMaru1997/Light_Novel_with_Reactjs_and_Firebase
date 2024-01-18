import React, { useState } from "react";
import { Link } from "react-router-dom";

const BookDetailBody = () => {
  const tab = [
    {
      title: "Giới thiệu",
      isActive: true,
    },
    {
      title: "Chương",
      isActive: false,
    },
  ];
  const [tabOption, setTabChoose] = useState(tab);
  const [indexSelected, setIndexSelected] = useState(0);

  return (
    <div>
      <div
        id="js-nh-tab"
        role="tablist"
        className="nav nav-tabs nh-nav-tabs mb-4"
      >
        {tabOption.map((tab, index) => (
          <li
            key={index}
            className={
              "nav-item nav-link px-0 py-3 m-4 " +
              (tab.isActive ? "active" : "")
            }
            onClick={(e) => {
              {
                let newTabOption = tabOption.map((e) => ({
                  title: e.title,
                  isActive: e.title == tab.title,
                }));
                setTabChoose(newTabOption);
                setIndexSelected(index);
              }
            }}
          >
            <span className="h4 m-0">{tab.title}</span>
          </li>
        ))}
      </div>
      <div>{indexSelected == 0 ? <BookDescription /> : <ListChap />}</div>
    </div>
  );
};

const ListChap = () => {
  return (
    <div>
      <div className="row">
        <div className="col-4 border-bottom-dashed">
          <div className="media py-2 mb-1">
            <div
              href="y-tien-coc-lam-viec-vat-ba-muoi-nam-ta-bach-nhat-phi-thang/chuong-1"
              className="media-body"
            >
              <Link to={"chapter/1"}>
                <div className="text-overflow-1-lines text-warning">
                  <i class="fa-solid fa-book"></i>
                  {"  "} Chương 01: Tạp dịch đệ tử!
                  <small className="text-muted">(một năm trước)</small>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-4 border-bottom-dashed">
          <div className="media py-2 mb-1">
            <div
              href="y-tien-coc-lam-viec-vat-ba-muoi-nam-ta-bach-nhat-phi-thang/chuong-1"
              className="media-body"
            >
              <Link to={"chapter/1"}>
                <div className="text-overflow-1-lines text-warning">
                  <i class="fa-solid fa-book"></i>
                  {"  "} Chương 01: Tạp dịch đệ tử!
                  <small className="text-muted">(một năm trước)</small>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-4 border-bottom-dashed">
          <div className="media py-2 mb-1">
            <div
              href="y-tien-coc-lam-viec-vat-ba-muoi-nam-ta-bach-nhat-phi-thang/chuong-1"
              className="media-body"
            >
              <Link to={"chapter/1"}>
                <div className="text-overflow-1-lines text-warning">
                  <i class="fa-solid fa-book"></i>
                  {"  "} Chương 01: Tạp dịch đệ tử!
                  <small className="text-muted">(một năm trước)</small>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const BookDescription = () => {
  return (
    <p>
      Tỉnh lại sau giấc ngủ, lại thành mới vừa vào tiên môn tạp dịch đệ tử.
      <br />
      <br />
      Mỗi ngày công việc chính là tại Tịnh Y Đàm bên trong thanh trừ gột rửa Y
      Tiên Cốc bên trong tiên y vì bệnh nhân y bệnh bài độc lúc sinh ra ổ bệnh ô
      uế.
      <br />
      <br />
      Lần thứ nhất nhập Tịnh Y Đàm, Lý Vĩnh Niên liền thu được thiên đạo ban
      thưởng, đến Thánh Nhân pháp bảo thường trú thức hải.
      <br />
      <br />
      Về sau, mỗi lần thanh trừ ổ bệnh ô uế, Lý Vĩnh Niên đều có thể thu hoạch
      khác biệt thiên đạo ban thưởng, bản thân thực lực tu vi cũng không biết
      chưa phát giác bên trong vững bước tăng lên.
      <br />
      <br />
      Cứ như vậy, mười năm lại mười năm, mãi cho đến ba mươi năm sau, Y Tiên Cốc
      bởi vì trị liệu Tử Vi Tiên Đế bất lợi, bị Tử Vi Tiên Đế dắt giận diệt môn,
      bất đắc dĩ, Lý Vĩnh Niên mới tại đất quật bên trong đứng ra, lật tay đem
      Tử Vi Tiên Đế trấn áp.
      <br />
      <br />
      Sau đó, bởi vì khí cơ tiết ra ngoài, làm người giới chỗ không dung, bất
      đắc dĩ, chỉ có thể bạch nhật phi thăng, đặt chân tiên giới.
      <br />
      <br />
      <br />
      ♥♥♥ ỦNG HỘ ĐỂ TA CÓ ĐỘNG LỰC CV NHÉ! ♥♥♥
      <br />
      <br />
      Các bạn ủng hộ bằng 4 phương thức:
      <br />
      1. Đánh giá chất lượng truyện và bản convert.
      <br />
      2. Bấm đề cử, tặng hoa ❁.
      <br />
      3. Ấn nút Tặng kẹo ???? cuối chương.
      <br />
      4. Ấn Nút like
      <br />
      Chân thành cảm ơn
    </p>
  );
};

export default BookDetailBody;
