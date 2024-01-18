import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { getBook } from "../../data/repository/book_reposity";
import { createNewChapter } from "../../data/repository/chapter_repository";

import InputApp from "../util/component/input_app";
import { validateBook } from "../util/validation";

const ChapterAdd = () => {
  const location = useLocation();
  const bookId = location.pathname.slice(6, location.pathname.length - 12);
  const [inputField, setInputField] = useState({
    bookId: bookId,
    chap: 0,
    title: "",
    content: "",
  });
  const [errorField, setShowErrorField] = useState();
  const [newestChapter, setNewestChapter] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    console.log("add chapter");
    getBook(bookId).then((data) => {
      if (data) {
        setNewestChapter(data.newestChap);
        console.log(newestChapter);
      }
      if (data.error) {
        setShowErrorField(data.error);
      }
    });
  }, []);

  const inputHandle = (event) => {
    setInputField({
      ...inputField,
      [event.target.name]: event.target.value,
    });
  };

  const addChap = () => {
    if (validateBook(inputField.chap)) {
      if (validateBook(inputField.title)) {
        if (validateBook(inputField.content)) {
          console.log(inputField);
          createNewChapter(
            inputField.bookId,
            inputField.chap,
            inputField.title,
            inputField.content
          ).then((data) => {
            if (data.chapter) {
              console.log(data.chapter);
              navigate("/book");
            }
            if (data.error) {
              setShowErrorField(data.error);
            }
          });
        } else {
          setShowErrorField("Mời nhập lại Giới thiệu");
        }
      } else {
        setShowErrorField("Mời nhập lại Tiêu đề");
      }
    } else {
      setShowErrorField("Mời nhập lại số chương");
    }
  };

  return (
    <section className="vh-100" style={{ backgroundColor: "#eee" }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: "25px" }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Thêm chương mới
                    </p>
                    <form className="mx-1 mx-md-4">
                      <InputApp
                        type="number"
                        name="chap"
                        defaultValue={newestChapter}
                        onChanged={inputHandle}
                        icon="fas fa-user"
                        label="Chương"
                      />

                      <InputApp
                        type="input"
                        name="title"
                        onChanged={inputHandle}
                        icon="fa fa-book"
                        label="Tên chương"
                      />

                      <div className="form-group">
                        <label className="form-label" htmlFor="form3Example1c">
                          Nội dung
                        </label>
                        <textarea
                          className="form-control"
                          name="content"
                          onChange={inputHandle}
                          id="exampleFormControlTextarea1"
                          rows="3"
                        ></textarea>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      className="img-fluid"
                      alt="something"
                    />
                  </div>
                </div>
                <button
                  tyle="button"
                  className="btn btn-primary"
                  style={{ marginTop: "30px", marginLeft: "25px" }}
                  onClick={addChap}
                >
                  Thêm
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChapterAdd;
