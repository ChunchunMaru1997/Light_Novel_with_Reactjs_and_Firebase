import React, { useState } from "react";
import { Link } from "react-router-dom";
import CommentScreen from "../comment/comment_screen";

const ChapterScreen = () => {
  const [chap, setChap] = useState([]);

  return (
    <div
      className="body-container"
      style={{
        backgroundColor: "#ffffff",
        marginTop: "12vw",
        padding: "16px",
        borderRadius: "10px",
        color: "#333",
      }}
    >
      <div className="chapter-contaiter p-5" style={{ borderRadius: "0.5rem" }}>
        <div className="contaiter">
          <div className="d-flex flex-row justify-content-around my-4">
            <div type="button" className="btn btn-primary">
              <i
                class="fa-solid fa-arrow-left-long"
                style={{ marginRight: "10px" }}
              ></i>
              <a type="button" href="" className="prev-chap text-white">
                Chương trước
              </a>
            </div>
            <div type="button" className="btn btn-primary">
              <a type="button" href="" className="next-chap text-white">
                Chương sau
              </a>
              <i
                class="fa-solid fa-arrow-right-long"
                style={{ marginLeft: "10px" }}
              ></i>
            </div>
          </div>
          <div className="my-5">
            <h1 className="font-weight-normal my-4">
              Chương 1: Tạp dịch đệ tử!
            </h1>
          </div>
          <div className="d-flex flex-row justify-content-start my-4">
            <div className="font-weight-normal" style={{ marginRight: "40px" }}>
              <i class="fas fa-book" style={{ marginRight: "10px" }}></i>
              <Link to="/book/W9irJhcSrtJ9NhX8Z0JT" className="text-black">
                Y Tiên Cốc Làm Việc Vặt Ba Mươi Năm, Ta Bạch Nhật Phi Thăng
              </Link>
            </div>
            <div className="" style={{ marginRight: "40px" }}>
              <i class="fas fa-user-edit" style={{ marginRight: "10px" }}></i>
              <a href="" className="text-black">
                Liễu Nhất Điều
              </a>
            </div>
            <div className="">
              <i class="fas fa-clock" style={{ marginRight: "10px" }}></i>
              <a className="text-black"> 2021-09-20 15:01:02 </a>
            </div>
          </div>
          <div className="chap-content">
            <p className="" style={{ fontSize: "21px" }}>
              {chapContent()}
            </p>
          </div>
          <div className="d-flex flex-row justify-content-around my-4">
            <div type="button" className="btn btn-primary">
              <i
                class="fa-solid fa-arrow-left-long"
                style={{ marginRight: "10px" }}
              ></i>
              <a type="button" href="" className="prev-chap text-white">
                Chương trước
              </a>
            </div>
            <div type="button" className="btn btn-primary">
              <a type="button" href="" className="next-chap text-white">
                Chương sau
              </a>
              <i
                class="fa-solid fa-arrow-right-long"
                style={{ marginLeft: "10px" }}
              ></i>
            </div>
          </div>
        </div>
        <CommentScreen />
      </div>
    </div>
  );
};

export default ChapterScreen;

const chapContent = () => {
  return (
    <div>
      <div
        id="js-read__content"
        className="nh-read__content post-body"
        style={{
          fontSize: "21px",
          fontFamily: '"Palatino Linotype", sans-serif',
          margin: "auto",
          lineHeight: "140%",
        }}
      >
        {" "}
        "Uy! Tỉnh! Tỉnh!"
        <br />
        <br />
        "Năm ca nhi, ngươi tại sao lại đã ngủ, mau tỉnh lại, ngủ ở chỗ này,
        ngươi không muốn sống nữa a?"
        <br />
        <br />
        "Có nghe hay không, mau tỉnh lại!"
        <br />
        <br />
        "Vương chấp sự thế nhưng là lập tức tới ngay, ngươi nếu là lại không
        tỉnh lại khẳng định sẽ bị xem như là nhập ma nhân ma cho trực tiếp ném
        vào Tịnh Y Đàm nha!"
        <br />
        <br />
        ". . ."
        <br />
        <br />
        Trong mơ mơ màng màng, Lý Vĩnh Niên phảng phất nghe được có người càng
        không ngừng ở bên tai của hắn nói nhao nhao không ngừng, quấy đến hắn
        một trận tâm phiền ý nóng nảy.
        <br />
        <br />
        "Làm cái gì đồ vật, chết đều không cho chết được an tâm sao?"
        <br />
        <br />
        "Lão tử phong quang một thế, tại cái này Giang Thành trên mặt đất làm
        sao cũng coi là cái nhân vật, làm sao cái này trước khi chết cũng không
        thể để cho ta yên tĩnh một hồi sao?"
        <br />
        <br />
        Lý Vĩnh Niên phí sức địa mở hai mắt ra, ý thức vẫn có chút mơ hồ không
        rõ.
        <br />
        <br />
        Bất quá khi ánh mắt của hắn quét về phía cảnh vật trước mắt, phát hiện
        hắn cũng không phải là nằm tại trong biệt thự mình nhiều người trên
        giường lớn, mà là ngồi tựa tại một chỗ lạnh buốt trên thạch bích, trong
        tay trộn lẫn lấy thuốc ngủ ly rượu đỏ, lúc này cũng rỗng tuếch, không
        thấy bóng dáng.
        <br />
        <br />
        Còn có y phục trên người hắn, cũng từ bộ kia hắn thích nhất tơ lụa áo
        ngủ, đổi thành cực kì thô ráp mì chay áo ngắn, nghe còn có một cỗ nhàn
        nhạt chua sưu vị.
        <br />
        <br />
        "Chuyện gì xảy ra, ta không phải là bởi vì sinh ý thất bại lại thân hoạn
        bệnh bất trị, tại nhà mình sẽ phải bị pháp đập trong biệt thự uống thuốc
        tự vận sao?"
        <br />
        <br />
        "Hiện tại đây là tình huống như thế nào, ta đến cùng là chết, vẫn là
        không có chết? Nơi đây lại là địa phương nào?"
        <br />
        <br />
        Một cái giật mình, Lý Vĩnh Niên ý thức hoàn toàn tỉnh táo lại, híp lại
        hai mắt hoàn toàn mở ra, bắt đầu quan sát tỉ mỉ lên trước mắt hoàn cảnh
        cùng cảnh ngộ tới.
        <br />
        <br />
        Đây là một chỗ u ám lạ lẫm không gian, tựa hồ là sơn động loại hình chỗ,
        chung quanh trên vách đá treo mấy chi đang thiêu đốt ánh nến.
        <br />
        <br />
        Bất quá ánh nến không rõ, cũng không có thể đem toàn bộ hang đá hoàn
        toàn chiếu sáng, cho nên đối với xa xa hoàn cảnh thấy cũng không rõ
        ràng.
        <br />
        <br />
        Lý Vĩnh Niên tả hữu dò xét, nhìn thấy bên cạnh mình đứng đấy mười cái
        cùng hắn mặc đồng dạng phục sức người cũng sắp xếp mà đứng, mỗi người
        đều hơi câu lấy thân thể, có mấy cái thậm chí hai chân đều có chút run
        rẩy, tựa hồ đang khẩn trương sợ hãi lấy cái gì.
        <br />
        <br />
        "Cám ơn trời đất, ngươi rốt cục tỉnh!"
        <br />
        <br />
        "Còn không mau đứng vững, không nghe thấy Vương chấp sự bọn hắn đã đến
        cửa sao, lúc này còn ngồi ở chỗ đó, không muốn sống nữa? !"
        <br />
        <br />
        Lúc này, đứng tại Lý Vĩnh Niên bên tay trái một cái hán tử mặt đen gặp
        Lý Vĩnh Niên tỉnh táo lại, trên mặt không khỏi lộ ra vẻ vui mừng, vội
        vàng duỗi ra hai tay, một thanh liền đem Lý Vĩnh Niên cho mang theo đứng
        lên.
        <br />
        <br />
        "Khom người, cúi đầu, muốn mạng sống cũng không cần hết nhìn đông tới
        nhìn tây."
        <br />
        <br />
        Hán tử mặt đen nhỏ giọng nhắc nhở lấy Lý Vĩnh Niên.
        <br />
        <br />
        Lý Vĩnh Niên có chút không rõ ràng cho lắm, bất quá, cảm nhận được hán
        tử mặt đen trong lời nói chỗ vội vàng cùng thiện ý, Lý Vĩnh Niên vẫn là
        dựa vào hắn, ngoan ngoãn địa đứng thẳng lên.
        <br />
        <br />
        Hoàn cảnh lạ lẫm, xa lạ người, lúc này vẫn là nước chảy bèo trôi thỏa
        đáng nhất, ít nhất phải trước hiểu rõ đây là địa phương nào, đến tột
        cùng chuyện gì xảy ra lại nói.
        <br />
        <br />
        "Vị đại ca kia, có thể nói cho đây là địa phương nào sao, ta vì sao lại
        ở chỗ này?" <br />
        <br />
        Lý Vĩnh Niên nhẹ hướng hán tử mặt đen bên người đụng đụng, thấp giọng
        hướng hắn nghe ngóng một câu.
        <br />
        <br />
        Nghe được Lý Vĩnh Niên đối với hắn xưng hô, hán tử mặt đen biến sắc, có
        chút thương hại quay đầu nhìn Lý Vĩnh Niên một chút: "Năm ca nhi, ngươi
        làm sao mà ngay cả ta đều không nhận ra rồi?"
        <br />
        <br />
        "Thật sự là nghiệp chướng a, ngươi mới chỉ bất quá tiến vào một lần Tịnh
        Y Đàm mà thôi, làm sao lại sát khí nhập thể, đả thương thần trí đâu?"
        <br />
        <br />
        "Trước khi tới ta không phải để ngươi uống một ngụm máu chó đen tráng
        dương hộ thân sao, làm sao vẫn là. . ."
        <br />
        <br />
        "Ta là ngươi Lưu Thắng Thúc a, chúng ta một cái trong làng ra, ngươi tất
        cả đều quên sao?"
        <br />
        <br />
        Lưu Thắng Thúc?
        <br />
        <br />
        Tịnh Y Đàm?
        <br />
        <br />
        Máu chó đen?
        <br />
        <br />
        Cái này đều cái gì cùng cái gì nha, Lý Vĩnh Niên vừa muốn lại mở miệng
        hỏi được cụ thể hơn một chút, đột nhiên trán đau xót, một đoạn lại một
        đoạn địa lạ lẫm ký ức bắt đầu không ngừng mà hướng phía trong đầu của
        hắn tràn vào.
        <br />
        <br />
        Chỉ là trong chớp mắt, hắn liền tiếp thu được một cái khác cũng gọi "Lý
        Vĩnh Niên" trùng tên trùng họ người gần như hai mươi năm nhân sinh mảnh
        vỡ kí ức.
        <br />
        <br />
        Lưu Thắng Thúc. . . Tịnh Y Đàm. . . Y Tiên Cốc. . . Nhân ma. . . Mười
        năm ba trăm lượng văn tự bán mình hẹn. . .<br />
        <br />
        Vân vân vân vân, đương những ký ức này mảnh vỡ tất cả đều tại Lý Vĩnh
        Niên trong thức hải dung hợp hội tụ vào một chỗ về sau, Lý Vĩnh Niên
        trong nháy mắt liền hiểu mình trước mắt tình cảnh.
        <br />
        <br />
        "Ta vậy mà xuyên qua!"
        <br />
        <br />
        "Nhập thân vào một cái hôm qua mới vừa mới bán mình đến Y Tiên Cốc nội
        đương tạp dịch đệ tử Lý Vĩnh Niên trên thân!"
        <br />
        <br />
        Trong lòng có dạng này minh ngộ, Lý Vĩnh Niên trực tiếp liền ngây dại.
        <br />
        <br />
        Trừng lớn hai mắt nhìn xem chung quanh loại này đã lạ lẫm lại hoàn cảnh
        quen thuộc, còn có Lưu Thắng Thúc trương này giống như đã từng quen biết
        mặt đen, Lý Vĩnh Niên động kinh đồng dạng địa phi tốc đưa tay tại trên
        người mình sờ tới sờ lui.
        <br />
        <br />
        "Tay của ta!"
        <br />
        <br />
        "Mặt của ta!"
        <br />
        <br />
        "Trái tim của ta!"
        <br />
        <br />
        "Đây hết thảy hết thảy, vậy mà tất cả đều không đồng dạng, ta vậy mà
        thật đến một thế giới khác!"
        <br />
        <br />
        Không để ý đến Lưu Thắng Thúc trên mặt kinh hãi cùng vẻ thuơng hại, Lý
        Vĩnh Niên phối hợp nâng lên hai tay nhìn một chút hai tay của mình, mặc
        dù thô ráp đen nhánh, nhưng lại tuổi trẻ hữu lực.
        <br />
        <br />
        Lại đưa tay sờ soạng một chút mặt mình, trước kia bởi vì thương nghiệp
        xung đột bị người ám toán mà lưu tại trên trán cái kia đạo sâu sẹo, cũng
        đã hoàn toàn biến mất không thấy gì nữa. Hiện tại gương mặt này, mặc dù
        không nhìn thấy bộ dáng, nhưng là chí ít sờ lên còn tính là ngũ quan
        đoan chính.
        <br />
        <br />
        Càng quan trọng hơn là trái tim của hắn, cũng bởi vì lần kia ám toán lưu
        lại tại thể nội một chút độc tố, khiến cho trái tim của hắn sớm già, tùy
        thời đều có ngừng nhảy khả năng.
        <br />
        <br />
        Nhưng là bây giờ, khi hắn hai tay che bên ngực trái trước thời điểm,
        trong lồng ngực kia bịch bịch sinh động hữu lực tiếng tim đập để hắn có
        chút không dám tin, hắn đã rất lâu đều không có cảm nhận được qua nhảy
        lên đến như thế có sức sống nhịp tim ba động!
        <br />
        <br />
        "Quá tốt rồi! Ta Lý Vĩnh Niên lại sống đến giờ!"
        <br />
        <br />
        Lý Vĩnh Niên ở trong lòng cuồng hô, hưng phấn không thôi, mặc dù hắn là
        đã chết qua một lần người, nhưng là, nếu như không phải thật sự bị buộc
        đến tuyệt lộ, phàm là còn có một tia có thể sống tiếp cơ hội, ai lại
        nguyện ý thật đi tìm chết đâu?
        <br />
        <br />
        Lại phải một lần sống lại cơ hội, đơn giản chính là lão thiên đối với
        hắn lớn nhất ban ân.
        <br />
        <br />
        "Một thế này, ta nhất định phải hảo hảo địa hưởng thụ sinh hoạt, bình an
        đến già."
        <br />
        <br />
        Lý Vĩnh Niên ở trong lòng yên lặng cảnh cáo mình:
        <br />
        <br />
        "Tuyệt đối không thể giống như trước kia như thế làm việc xúc động,
        phong mang tất lộ, cần biết súng bắn chim đầu đàn, quá mức rêu rao chỉ
        làm cho mình còn có người nhà chuốc họa a!"
        <br />
        <br />
        Đây là Lý Vĩnh Niên dùng nửa đời trước huyết lệ kinh lịch tổng kết ra
        kinh nghiệm giáo huấn, cũng là hắn tại uống ly kia trộn lẫn thuốc ngủ
        rượu đỏ về sau, một mình nằm ở trên giường chờ chết lúc cuối cùng nhân
        sinh cảm ngộ.
        <br />
        <br />
        Nguyên lai tưởng rằng, người sau khi chết, xong hết mọi chuyện, liền cái
        gì cũng đều không có.
        <br />
        <br />
        Nhưng là bây giờ, hắn nhưng lại có một lần sống lại cơ hội, hết thảy tất
        cả đều lộ ra như vậy địa mỹ hảo.
        <br />
        <br />
        Kèn kẹt câm!
        <br />
        <br />
        Nhưng vào lúc này, sơn động lối vào phương hướng đột nhiên một trận
        cường quang đâm vào, phong bế cửa đá mở rộng, ngay sau đó liền có hơn
        mười đạo thân ảnh từ trên xuống dưới, phân tuần tự nối đuôi nhau mà vào.
        <br />
        <br />
        Sau đó, cửa đá lần nữa khép kín, trong sơn động tia sáng lần nữa lâm vào
        trước đó lờ mờ không rõ bên trong.
        <br />
        <br />
        "Tốt, đầu tiên muốn chúc mừng các ngươi hoàn thành ngày thứ nhất nhập
        môn khảo nghiệm."
        <br />
        <br />
        Cầm đầu một vị thân mang trường sam màu đen trung niên nhân từ trên cao
        nhìn xuống đánh giá Lý Vĩnh Niên bọn hắn đoàn người này, cao giọng nói:
        <br />
        <br />
        "Có thể tại Tịnh Y Đàm ngây ngốc một đêm mà không vào ma, nói rõ các
        ngươi đúng là không có bất kỳ cái gì tu vi phàm nhân thân thể, cũng sơ
        bộ loại bỏ các ngươi là thế lực khác phái tới thám tử cùng gian tế khả
        năng."
        <br />
        <br />
        "Tiếp xuống, các ngươi liền xem như Y Tiên Cốc môn hạ chính thức tạp
        dịch đệ tử , dựa theo lúc trước liền ký kết khế ước, các ngươi kỳ hạn
        công trình là mười năm, mười năm về sau, mặc kệ các ngươi là đi vẫn là
        lưu, Y Tiên Cốc đều sẽ trả cho ngươi nhóm ba trăm lượng bạc ròng thù
        lao."
        <br />
        <br />
        "Đương nhiên, cho lúc trước các ngươi kia mười lượng an gia phí, cũng
        không tại tính toán ở bên trong, điểm này các ngươi hoàn toàn có thể yên
        tâm, chúng ta Y Tiên Cốc thế nhưng là danh môn đại phái, tuyệt đối sẽ
        không tại chút chuyện nhỏ này bên trên từ ô danh âm thanh."
        <br />
        <br />
        Nghe Vương chấp sự kiểu nói này, Lý Vĩnh Niên rõ ràng cảm giác được,
        chung quanh những người này, bao quát bên cạnh hắn Lưu Thắng, tựa hồ
        cũng đồng thời thở dài một hơi, trước đó có chút khẩn trương thậm chí
        hai chân phát run những người kia, cũng rõ ràng buông lỏng rất nhiều.
        <br />
        <br />
        Quả nhiên là có tiền có thể làm quỷ đẩy ma, chỉ cần vừa nhắc tới tiền,
        những người này dũng khí đều trở nên rắn chắc mấy phần.
        <br />
        <br />
        "Đối với các ngươi người an nguy vấn đề, mọi người cũng hoàn toàn không
        cần phải lo lắng, Tịnh Y Đàm cũng không có theo như đồn đại nói tới
        khủng bố như vậy, chỉ cần bình thường các ngươi án lấy quy củ làm việc,
        cẩn thận một chút, bình an vượt qua mười năm này kỳ thật vẫn là rất dễ
        dàng."
        <br />
        <br />
        "Không sợ nói cho các ngươi biết, tại ta Vương mỗ người chấp chưởng Tịnh
        Y Đàm cái này ba mươi mấy năm bên trong, Tịnh Y Đàm bởi vì nhập ma mà
        chết đi phàm nhân tạp dịch, còn không đủ hai tay số lượng, nói cách
        khác, trong các ngươi tuyệt đại đa số người, tại mười năm tạp dịch kỳ
        qua đi, cũng có thể sống mà đi ra Tịnh Y Đàm đại môn!"
        <br />
        <br />
        Nghe được Vương chấp sự giảng giải cùng trấn an, ở đây hơn mười người
        mới tạp dịch tựa hồ trở nên càng thêm tại buông lỏng, bất quá, Lý Vĩnh
        Niên lại lưu ý đến, bên cạnh hắn Lưu Thắng Thúc thần sắc lại là có chút
        không được tự nhiên.
        <br />
        <br />
        "Tốt, nhàn thoại không nói nhiều, tiếp xuống liền bắt đầu cho các ngươi
        phân phối các ngươi sau này riêng phần mình phụ trách khu vực. Niệm đến
        tên ai, ai liền tự mình đứng ra nhận lấy mình thông hành lệnh bài."{" "}
        <br />
        <br />
        "Nhớ lấy, thông hành lệnh bài sau này sẽ là các ngươi tại Tịnh Y Đàm bên
        trong hộ thân phù, mặc kệ đi tới chỗ nào đều muốn cho ta hảo hảo địa đeo
        ở trên người, nếu không, nếu là nhập ma, hoặc là bị Tịnh Y Đàm bên trong
        thủ vệ cùng phòng hộ trận pháp cho trở thành thám tử chém giết, vậy cũng
        chỉ có thể trách chính các ngươi xui xẻo."
        <br />
        <br />
        Trịnh trọng nhắc nhở đám người một câu, Vương chấp sự hắng giọng một
        cái, đưa tay lộ ra một trương tờ đơn, cao giọng niệm hát nói:
        <br />
        <br />
        "Lưu Toàn Trụ, phụ trách Hoàng tự số sáu Tịnh Y Đàm."
        <br />
        <br />
        "Đặng Hoành Đại, phụ trách Thiên tự số tám Tịnh Y Đàm."
        <br />
        <br />
        ". . ."
        <br />
        <br />
        "Lưu Thắng, phụ trách Thiên tự số năm Tịnh Y Đàm."
        <br />
        <br />
        "Lý Vĩnh Niên, phụ trách Địa tự số một Tịnh Y Đàm."
        <br />
        <br />
        ". . ."
        <br />
        <br />
        Nghe tới mình phụ trách khu vực lại là Thiên tự số năm Tịnh Y Đàm thời
        điểm, Lưu Thắng chân một chút liền mềm nhũn, mặt đen phía trên mồ hôi
        lạnh ứa ra, vậy mà đều bắt đầu có chút trắng bệch.
        <br />
        <br />
        Đứng ra đội ngũ đưa tay từ Vương chấp sự sau lưng tùy tùng trong tay
        lĩnh qua một khối thuộc về mình lệnh bài thông hành về sau, Lý Vĩnh Niên
        lần nữa đứng ở Lưu Thắng bên người, hạ thấp giọng hỏi:
        <br />
        <br />
        "Lưu Thắng Thúc, ngươi thế nào?"
        <br />
        <br />
        Lưu Thắng vô lực khẽ lắc đầu, nhìn thoáng qua bên cạnh đã lưu ý đến bọn
        hắn thủ vệ, lại liếc mắt nhìn Lý Vĩnh Niên trong tay viết "Địa tự số
        một" lệnh bài thông hành, đầu cho Lý Vĩnh Niên một cái tự cầu phúc ánh
        mắt, cúi đầu xuống không dám nói nhiều.
        <br />
        <br />
        Lúc này, mười tám tên mới tạp dịch công việc phân phối đã toàn bộ hoàn
        thành, Vương chấp sự lại giao phó đám người vài câu làm việc cho tốt sự
        tình loại sau liền trực tiếp quay người rời đi.
        <br />
        <br />
        Mà Lý Vĩnh Niên, Lưu Thắng bọn hắn, cũng bị Vương chấp sự lưu lại thủ vệ
        cho giám thị, từng cái đi hướng về phía bọn hắn hẳn là phụ trách Tịnh Y
        Đàm khu vực.
        <br />
        <br />
        Trong lúc đó, Lý Vĩnh Niên căn bản cũng không có cơ hội lại tìm Lưu
        Thắng tự thoại, chỉ có thể đi theo thủ vệ, một đường xâm nhập động quật,
        ba ngoặt hai ngoặt địa liền đi tới khắc lấy "Địa tự số một" bảng số
        phòng trong sơn động.
        <br />
        <br />
        Đến trước cửa, thủ vệ dừng bước, đưa tay ra hiệu Lý Vĩnh Niên một mình
        tiến vào bên trong.
        <br />
        <br />
        Lý Vĩnh Niên dò xét chạy bộ đến trước sơn động, bên hông lệnh bài thông
        hành hơi chấn động một chút, nguyên bản phong bế sơn môn từ khải, một cỗ
        lạnh buốt hàn ý từ trong động tràn ra, kích thích Lý Vĩnh Niên thẳng
        rùng mình một cái.
        <br />
        <br />
        "Lề mề cái gì, còn không mau đi vào!"
        <br />
        <br />
        "Nếu là trước khi trời tối không thể đem bên trong ổ bệnh ô uế gột rửa
        sạch sẽ, hôm nay cũng đừng nghĩ lại ăn cơm!"
        <br />
        <br />
        Nhìn thấy Lý Vĩnh Niên đứng tại cổng do do dự dự, sau lưng phụ trách
        trông coi hộ vệ nâng lên một cước đem hắn cho trực tiếp đạp đi vào.
        <br />
        <br />
        Xoát!
        <br />
        <br />
        Theo Lý Vĩnh Niên tiến vào, sau lưng cửa động lần nữa tự động khép kín.
        <br />
        <br />
        Bắc đánh Minh, Nam bình Chiêm, Tây nhập Ai Lao, Chân Lạp. Thịnh thế Đại
        Việt.{" "}
      </div>
    </div>
  );
};
const data = {
  chap: [
    {
      chap: 1,
      chapTitle: "Hanh phúc là đây",
      chapContent:
        "Đêm . Thanh thành hà nội phố đẹp ngời ngợi có con đười ươi ngồi xổm đánh rắm.",
    },
  ],
  book: [
    {
      bookName: "Đối tượng hẹn hò là thàn minh chi nữ",
      bookAuthor: "Vũ Hạ Đích Hảo Đại",
    },
  ],
};
