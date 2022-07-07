import React from "react";
import { Link } from "react-router-dom";

const BookInfo = () => {
  return (
    <div className="container">
      <div className="col-xs-12 col-sm-12 col-md-9 col-truyen-main">
        <div
          className="col-xs-12 col-info-desc"
          itemScope
          itemType="http://schema.org/Book"
        >
          <div className="title-list">
            <h2>Thông tin truyện</h2>
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4 info-holder">
            <h3 className="title name-story visible-xs" itemProp="name">
              Đỉnh Cấp Tư Chất , Lặng Lẽ Tu Luyện Ngàn Vạn Năm
            </h3>
            <div className="books">
              <div className="book">
                <img
                  src="https://123truyen.com/index.php/images/2022/06/dinh-cap-tu-chat-lang-le-tu-luyen-ngan-van-nam.jpeg"
                  alt="Đỉnh Cấp Tư Chất , Lặng Lẽ Tu Luyện Ngàn Vạn Năm"
                  itemProp="image"
                  width={221}
                  height={300}
                />
              </div>
            </div>
            <div className="info">
              <div>
                <h3>Tác giả:</h3>
                <a
                  itemProp="author"
                  href="https://123truyen.com/index.php/tac-gia/ta-tam-vi-man"
                  title="Tìm các tác phẩm, truyện thơ do tác giả Tà Tâm Vị Mẫn sáng tác"
                >
                  Tà Tâm Vị Mẫn
                </a>
              </div>
              <div>
                <h3>Thể loại:</h3>
                <a
                  itemProp="genre"
                  href="https://123truyen.com/index.php/the-loai/huyen-huyen"
                  title="Thể loại Huyền Huyễn"
                >
                  Huyền Huyễn
                </a>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-8 col-md-8 desc">
            <h1 className="title hidden-xs name-story" itemProp="name">
              Đỉnh Cấp Tư Chất , Lặng Lẽ Tu Luyện Ngàn Vạn Năm
            </h1>
            <div className="desc-text desc-text-full" itemProp="about">
              <p>
                Lâm Phàm trùng sinh huyền huyễn thế giới, bỏ ra mười tám năm
                xoát ra đỉnh cấp tư chất.
                <br />
                <br />【 linh mạch: Hỗn độn linh mạch, tuyệt thế linh mạch, ẩn
                chứa toàn thuộc tính linh mạch, tăng lên nghìn lần tốc độ tu
                luyện. 】<br />
                <br />
                【. . .<br />
                <br />
                Tác phẩm nhãn hiệu: Sảng văn vô địch cẩu vương hệ thống
              </p>{" "}
            </div>
            <div className="showmore">
              <a className="btn btn-default btn-xs" title="Xem thêm">
                Xem thêm »
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookInfo;
