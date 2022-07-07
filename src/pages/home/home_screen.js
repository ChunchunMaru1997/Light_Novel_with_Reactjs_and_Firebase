import React, { useEffect, useState } from "react";

import { getAllBook } from "../../data/repository/book_reposity";
import BookItem from "../util/component/book-item";
import Header from "../util/component/header";

const HomeScreen = () => {
  const [listBook, setListBook] = useState([]);
  const [errorField, setShowErrorField] = useState();
  const imagePath =
    "https://static.cdnno.com/poster/dinh-cap-tu-chat-lang-le-tu-luyen-ngan-van-nam/150.jpg?1654086063";

  useEffect(() => {
    getAllBook().then(({ books, error }) => {
      if (books) {
        console.log(books);
        let tempListBook = [];
        for (let i = 0; i < books.length; i += 2) {
          let view = (
            <div key={i}>
              <div
                className="row"
                style={{ marginTop: "12px", marginBottom: "12px" }}
                key={`Book ${i}`}
              >
                {books[i] ? (
                  <BookItem
                    key={i}
                    bookPath={"book/" + books[i].id}
                    imagePath={imagePath}
                    bookName={books[i].name ? books[i].name : "Chưa rõ"}
                    bookDetail={
                      books[i].detail
                        ? books[i].detail
                        : "Chưa có bản tóm tắt nội dung của truyện trên. Đang chờ cập nhật. Chưa có bản tóm tắt nội dung của truyện trên. Đang chờ cập nhật."
                    }
                    bookAuthor={books[i].author ? books[i].author : "Chưa rõ"}
                    bookCategoryLink={"category/" + books[i].categoryId}
                    bookCategory={
                      books[i].categoryId ? books[i].categoryId : "Chưa rõ"
                    }
                  />
                ) : (
                  <div className="col"></div>
                )}
                {books[i + 1] ? (
                  <BookItem
                    key={i + 1}
                    bookPath={"book/" + books[i + 1].id}
                    imagePath={imagePath}
                    bookName={books[i + 1].name ? books[i + 1].name : "Chưa rõ"}
                    bookDetail={
                      books[i + 1].detail
                        ? books[i + 1].detail
                        : "Chưa có bản tóm tắt nội dung của truyện trên. Đang chờ cập nhật. Chưa có bản tóm tắt nội dung của truyện trên. Đang chờ cập nhật."
                    }
                    bookAuthor={
                      books[i + 1].author ? books[i + 1].author : "Chưa rõ"
                    }
                    bookCategoryLink={"category/" + books[i + 1].categoryId}
                    bookCategory={
                      books[i + 1].categoryId
                        ? books[i + 1].categoryId
                        : "Chưa rõ"
                    }
                  />
                ) : (
                  <div className="col"></div>
                )}
              </div>
              <hr></hr>
            </div>
          );
          tempListBook.push(view);
        }
        setListBook(tempListBook);
      }
      if (error) {
        setShowErrorField(error);
      }
    });
  }, []);

  return (
    <div>
      <Header />
      <div
        className="home-screen-container"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/images/body-bg-tl.jpg"
          })`,
          position: "absolute",
          zIndex: 0,
          left: "0px",
          overflow: "hidden",
          width: "100%",
          height: "auto",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "50% 0px",
          backgroundSize: "1676px 713px, contain",
        }}
      >
        <div
          className="body-container"
          style={{
            backgroundColor: "#ffffff",
            margin: "8vw",
            padding: "16px",
            borderRadius: "10px",
            color: "#333",
          }}
        >
          <div className="container">{[listBook]}</div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
