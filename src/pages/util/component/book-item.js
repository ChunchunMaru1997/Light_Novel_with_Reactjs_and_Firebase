import React from "react";
import { Link } from "react-router-dom";

const BookItem = (props) => {
  return (
    <div className="col">
      <div
        className="media"
        style={{ display: "flex", alignItems: "flex-start" }}
      >
        <Link
          to={props.bookPath}
          className="nh-thumb nh-thumb--72 shadow mr-3"
          style={{ marginRight: "1rem" }}
        >
          <img src={props.imagePath} alt="" width="72" />
        </Link>
        <div className="media-body">
          <h2
            className="fz-body text-overflow-1-lines mb-2 "
            style={{
              fontSize: ".9375rem",
              marginBottom: "0.5rem",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 1,
              overflow: "hidden",
              textOverflow: "ellipses",
            }}
          >
            <Link
              to={props.bookPath}
              className="d-block"
              style={{ color: "#333" }}
            >
              {props.bookName}
            </Link>
          </h2>
          <div
            className=" fz-14 text-overflow-2-lines"
            style={{
              fontSize: ".875rem",
              color: "#666",
              overflow: "hidden",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 2,
            }}
          >
            {props.bookDetail}
          </div>
          <div
            className="d-flex align-items-center mt-2 py-1"
            style={{
              marginTop: "0.5rem",
              paddingBottom: "0.25rem",
              paddingTop: "0.25rem",
            }}
          >
            <div
              className="d-flex align-items-center mr-auto"
              style={{ color: "#666", marginRight: "auto" }}
            >
              <span
                className="truncate-140 text-left"
                style={{
                  maxWidth: "140px",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  textAlign: "left",
                }}
              >
                <i
                  className="fas fa-user"
                  style={{
                    display: "inline-block",
                    WebkitFontSmoothing: "antialiased",
                  }}
                ></i>
                {props.bookAuthor}{" "}
              </span>
            </div>
            <Link to={props.bookCategoryLink}>
              <span className="d-inline-block border border-primary small px-2 text-primary truncate-100">
                {props.bookCategory}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookItem;
