import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getAllBook } from "../../../data/repository/book_reposity";

const BookInfo = () => {
  const [listView, setStateListView] = useState();
  const [errorField, setShowErrorField] = useState();

  useEffect(() => {
    getAllBook().then((data) => {
      console.log("book screen");
      if (data.books) {
        let newListView = data.books.map((book, index) => (
          <tr key={index}>
            <th scope="row">{index + 1}</th>
            <td>{book.id}</td>
            <td>{book.name}</td>
            <td>
              {book.newestChapter}
              <Link
                to={{
                  pathname: book.id + "/chapter/add",
                }}
              >
                <button className="btn " style={{ marginLeft: "10px" }}>
                  <i className="fa fa-plus" aria-hidden="true" />
                </button>
              </Link>
            </td>
            <td>
              <Link to={book.id + "/edit"}>
                <button type="button" className="btn btn-primary">
                  <i className="fas fa-edit" />
                </button>
              </Link>
            </td>
          </tr>
        ));
        setStateListView(newListView);
      }
    });
  }, []);

  return (
    <div className="container-fluid" style={{ marginTop: "100px" }}>
      <Link to="create">
        <button
          type="button"
          className="btn btn-primary"
          // onClick={navigate("../create")}
        >
          <i className="fa fa-book" style={{ marginRight: "8px" }} />
          Thêm sách
        </button>
      </Link>

      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Firebase ID</th>
            <th scope="col">Tên sách</th>
            <th scope="col">Chương mới nhất</th>
            <th scope="col">Tùy chỉnh</th>
          </tr>
        </thead>
        <tbody>{listView}</tbody>
      </table>
    </div>
  );
};

export default BookInfo;
