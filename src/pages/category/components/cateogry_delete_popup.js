import React, { useState } from "react";

import {
  createNewCategory,
  deleteCategory,
} from "../../../data/repository/category_repository";
import DialogApp from "../../util/component/dialog_app";
import InputApp from "../../util/component/input_app";
import { validateCategory } from "../../util/validation";

export const CategoryDeletePopup = ({ category, onSuccess }) => {
  const [isOpen, setIsShowing] = useState(false);

  const [errorFied, setShowErrorField] = useState("");

  const deleteCategoryPopup = () => {
    deleteCategory(category.id).then((data) => {
      if (data.category) {
        setIsShowing(false);
        onSuccess();
      }
      if (data.error) {
        setShowErrorField(data.error);
      }
    });
  };

  return (
    <div>
      <button
        type="button"
        className="btn btn-danger"
        onClick={(event) => setIsShowing(true)}
      >
        <i className="fa-solid fa-trash-can"></i>
      </button>
      <DialogApp
        isOpen={isOpen}
        btnCloseClicked={(event) => setIsShowing(false)}
      >
        <div className="text-center" style={{ border: "15px" }}>
          <p>
            Bạn có thực sự muốn xóa thể loại <b>"{category.name}"</b> ?
          </p>
          <button
            tyle="button"
            className="btn btn-danger"
            onClick={deleteCategoryPopup}
          >
            Xóa
          </button>
        </div>
      </DialogApp>
    </div>
  );
};
export default CategoryDeletePopup;
