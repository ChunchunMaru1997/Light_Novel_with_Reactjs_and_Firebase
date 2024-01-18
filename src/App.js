import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import LeftNavigationBar from "./pages/util/component/left_navigation_bar";
import LoginScreen from "./pages/login/login_screen";
import RegisterAccountScreen from "./pages/register_account/register_account_screen";
import CategoryScreen from "./pages/category/category_screen";
import BookScreen from "./pages/book/book_screen";
import UserScreen from "./pages/user/user_screen";
import BookCreateScreen from "./pages/book/components/book_create_screen";
import BookInfo from "./pages/book/components/book_info";
import ChapterAdd from "./pages/chapter/chapter_add";
import BookEditScreen from "./pages/book/components/book_edit_screen";

export default function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid row ">
        <div
          className="col-md-2 shadow-lg p-3 mb-5 bg-white rounded"
          style={{
            marginLeft: "-10px",

            height: "100vh",
          }}
        >
          <LeftNavigationBar />
        </div>
        <div className="col-md-10">
          <Routes>
            <Route index element={<CategoryScreen />} />
            <Route path="category" element={<CategoryScreen />} />
            <Route path="book" element={<BookScreen />}>
              <Route index element={<BookInfo />} />
              <Route path="create" element={<BookCreateScreen />} />
              <Route path=":id/chapter/add" element={<ChapterAdd />} />
              <Route path=":id/edit" element={<BookEditScreen />}></Route>
            </Route>
            <Route path="login" element={<LoginScreen />} />
            <Route path="user" element={<UserScreen />} />
            <Route
              path="register_account"
              element={<RegisterAccountScreen />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
