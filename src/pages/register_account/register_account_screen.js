import React, { useState } from "react";
import { BrowserRouter as useNavigate } from "react-router-dom";
import { createNewAccount } from "../../data/repository/user_repository";
import InputApp from "../util/component/input_app";
import {
  validateUserName,
  validateEmail,
  validatePassword,
  validatePasswordConfirm,
} from "../util/validation";
const RegisterAccountScreen = () => {
  const [inputField, setInputField] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const [errorField, setShowErrorField] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const inputHandler = (event) => {
    setInputField({
      ...inputField,
      [event.target.name]: event.target.value || "",
    });
  };

  const navigate = useNavigate();

  const registerButton = () => {
    console.log(inputField);
    if (validateUserName(inputField.username)) {
      if (validateEmail(inputField.email)) {
        if (validatePassword(inputField.password)) {
          if (
            validatePasswordConfirm(
              inputField.password,
              inputField.passwordConfirm
            )
          ) {
            //tạo tài khoản
            createNewAccount(
              inputField.username,
              String(inputField.email).toLowerCase().trim(),
              inputField.password
            ).then((data) => {
              if (data.user) {
                //chuyển hướng đến trang login
                navigate("/login");
              }
              if (data.error) {
                // bắt lỗi Email đã tồn tại
                setShowErrorField({
                  ...errorField,
                  email: "Email đã tồn tại",
                });
              }
            });
          } else {
            setShowErrorField({
              // Bắt lỗi nhập lại mật khẩu
              ...errorField,
              passwordConfirm: "Nhập lại mật khẩu không đúng",
            });
          }
        } else {
          setShowErrorField({
            // Bắt lỗi nhập mật khẩu
            ...errorField,
            password: "Mật khẩu phải lớn hơn 6 ký tự",
          });
        }
      } else {
        setShowErrorField({
          //Bắt lỗi nhập email
          ...errorField,
          email: "Email không đúng định dạng",
        });
      }
    } else {
      setShowErrorField({
        //Bắt lỗi nhập tên người dùng
        ...errorField,
        username: "Tên người dùng không được để trống.",
      });
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
                      Đăng ký
                    </p>
                    <form className="mx-1 mx-md-4">
                      <InputApp
                        type="text"
                        name="username"
                        onChanged={inputHandler}
                        icon="fas fa-user"
                        label="Tên người dùng"
                        error={errorField.username}
                      />
                      <InputApp
                        type="email"
                        name="email"
                        onChanged={inputHandler}
                        icon="fas fa-envelope"
                        label="Địa chỉ email"
                        error={errorField.email}
                      />
                      <InputApp
                        type="password"
                        name="password"
                        onChanged={inputHandler}
                        icon="fas fa-lock"
                        label="Mật khẩu"
                        error={errorField.password}
                      />
                      <InputApp
                        type="password"
                        name="passwordConfirm"
                        onChanged={inputHandler}
                        icon="fas fa-key"
                        label="Nhập lại mật khẩu"
                        error={errorField.passwordConfirm}
                      />

                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button
                          type="button"
                          className="btn btn-primary btn-lg"
                          onClick={registerButton}
                        >
                          Đăng ký
                        </button>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterAccountScreen;
