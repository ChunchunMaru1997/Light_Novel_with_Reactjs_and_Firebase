import React, { useEffect, useState } from "react";

import InputApp from "../../util/component/input_app";
import { validateBook } from "../../util/validation";
import ComboboxApp from "../../util/component/conbobox_app";
import { getAllCategory } from "../../../data/repository/category_repository";
import { getBook } from "../../../data/repository/book_reposity";
import { useLocation } from "react-router-dom";

const BookEditScreen = () => {
  const location = useLocation();
  const bookId = location.pathname.slice(6, location.pathname.length - 5);
  const [bookInfo, setBookInfo] = useState({});
  const [categoriesData, setCategoriesData] = useState([]);
  const [inputField, setInputField] = useState({
    bookName: "",
    categoryId: "",
    author: "",
    detail: "",
  });

  const [errorField, setShowErrorField] = useState();

  useEffect(() => {
    getBook(bookId).then((data) => {
      if (data) {
        console.log(data);
        // setBookInfo(data)
      }
      if (data.error) {
        setShowErrorField(data.error);
      }
    });
    getAllCategory().then(({ categories, error }) => {
      if (categories) {
        console.log("get all category");
        setCategoriesData(categories);
      }
      if (error) {
        setShowErrorField(error);
      }
    });
  }, []);

  const onItemCategorySelected = (category, _) => {
    setInputField({ ...inputField, categoryId: category.id });
  };

  const inputHandle = (event) => {
    setInputField({
      ...inputField,
      [event.target.name]: event.target.value,
    });
  };

  const editBook = () => {
    console.log(":edit book thanh cong");
    // if (validateBook(inputField.bookName.toLowerCase())) {
    //   if (validateBook(inputField.categoryId)) {
    //     if (validateBook(inputField.author)) {
    //       createNewBook(
    //         inputField.bookName,
    //         inputField.categoryId,
    //         inputField.author,
    //         inputField.detail
    //       ).then((data) => {
    //         if (data.book) {
    //           console.log(data.book);
    //         }
    //         if (data.error) {
    //           setShowErrorField(data.error);
    //         }
    //       });
    //     } else {
    //       setShowErrorField("Mời nhập lại tên Tác giả");
    //     }
    //   } else {
    //     setShowErrorField("Mời chọn thể loại");
    //   }
    // } else {
    //   setShowErrorField("Mời nhập lại tên Sách");
    // }
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
                      Chỉnh sửa sách
                    </p>
                    <form className="mx-1 mx-md-4">
                      <InputApp
                        type="input"
                        name="bookName"
                        onChanged={inputHandle}
                        icon="fa fa-book"
                        label="Tên sách"
                      />
                      <ComboboxApp
                        onItemClick={onItemCategorySelected}
                        data={categoriesData}
                        type="input"
                        name="category"
                        icon="fa-solid fa-bars"
                        label="Thể loại"
                        error=""
                      />
                      <InputApp
                        type="input"
                        name="author"
                        onChanged={inputHandle}
                        icon="fas fa-user"
                        label="Tác giả"
                      />
                      <div className="form-group">
                        <label className="form-label" htmlFor="form3Example1c">
                          Giới thiệu
                        </label>
                        <textarea
                          className="form-control"
                          name="detail"
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
                      alt="Sample image"
                    />
                  </div>
                </div>
                <button
                  tyle="button"
                  className="btn btn-primary"
                  style={{ marginTop: "30px", marginLeft: "25px" }}
                  onClick={editBook}
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

export default BookEditScreen;
