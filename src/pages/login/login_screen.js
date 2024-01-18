import { areCookiesEnabled } from "@firebase/util";
import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { Navigate, useNavigate } from "react-router-dom";
import { login } from "../../data/repository/user_repository";
import InputApp from "../util/component/input_app";

const LoginScreen = () => {
  const [inputField, setInputField] = useState({
    email: "",
    password: "",
  });

  const [errorField, setShowErrorField] = useState({
    password: "",
  });

  const inputHandler = (event) => {
    setInputField({
      ...inputField,
      [event.target.name]: event.target.value || "",
    });
  };
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(["cookie-name"]);

  const loginButton = () => {
    // console.log(inputField);
    login(inputField.email, inputField.password).then((data) => {
      if (data.user) {
        console.log(data.user);
        setCookie("user-data", JSON.stringify(data.user));
        if (data.user.isAdmin) {
          navigate("/admin");
        } else {
          navigate("/");
        }
      }
      if (data.error) {
        console.log(data.error);
        setShowErrorField({ password: "email hoặc mật khẩu không đúng" });
      }
    });
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
                      Đăng nhập
                    </p>
                    <form className="mx-1 mx-md-4">
                      <InputApp
                        type="email"
                        name="email"
                        onChanged={inputHandler}
                        icon="fas fa-envelope"
                        label="Địa chỉ email"
                      />
                      <InputApp
                        type="password"
                        name="password"
                        onChanged={inputHandler}
                        icon="fas fa-lock"
                        label="Mật khẩu"
                        error={errorField.password}
                      />

                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button
                          type="button"
                          className="btn btn-primary btn-lg"
                          onClick={loginButton}
                        >
                          Đăng nhập
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

export default LoginScreen;
