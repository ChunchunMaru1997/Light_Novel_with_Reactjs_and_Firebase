import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import BookScreen from "./pages/book/book_screen";
import BookInfo from "./pages/book/components/book_info";
import HomeScreen from "./pages/home/home_screen";
import LoginScreen from "./pages/login/login_screen";
import RegisterAccountScreen from "./pages/register_account/register_account_screen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomeScreen />} />
        <Route path="home" element={<HomeScreen />} />
        <Route path="login" element={<LoginScreen />} />
        <Route path="register" element={<RegisterAccountScreen />} />
        <Route path="book" element={<BookScreen />}>
          <Route index element={<BookInfo />} />
          <Route path=":bookID" element={<BookInfo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
