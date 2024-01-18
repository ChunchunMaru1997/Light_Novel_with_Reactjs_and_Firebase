import React, { useState } from "react";

import { editCategory } from "../../../data/repository/category_repository";
import DialogApp from "../../util/component/dialog_app";
import InputApp from "../../util/component/input_app";
import { validateCategory } from "../../util/validation";

export const CategoryEditPopup = ({ category, onSuccess }) => {
  const [isOpen, setIsShowing] = useState(false);

  const [inputCategory, setInputCategory] = useState("");

  const [errorFied, setShowErrorField] = useState("");

  const handleCategoryTextChange = (event) => {
    setInputCategory(event.target.value);
  };

  const editCategoryPopup = () => {
    if (validateCategory(inputCategory.toLowerCase())) {
      console.log(inputCategory);
      editCategory(category.id, inputCategory.toLowerCase()).then((data) => {
        if (data.category) {
          setIsShowing(false);
          onSuccess(inputCategory.toLowerCase());
        }
        if (data.error) {
          setShowErrorField(data.error);
        }
      });
    } else {
      setShowErrorField("Mời nhập lại tên Thể loại");
    }
  };

  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        onClick={(event) => setIsShowing(true)}
      >
        <i className="fas fa-edit" />
      </button>
      <DialogApp
        isOpen={isOpen}
        btnCloseClicked={(event) => setIsShowing(false)}
      >
        <div className="text-center" style={{ border: "15px" }}>
          <InputApp
            type="input"
            name="categoryName"
            defaultValue={category.name}
            onChanged={handleCategoryTextChange}
            icon="fa-solid fa-bars"
            label="Tên thể loại"
            error={errorFied}
          />

          <button
            tyle="button"
            className="btn btn-primary"
            onClick={editCategoryPopup}
          >
            Sửa
          </button>
        </div>
      </DialogApp>
    </div>
  );
};
export default CategoryEditPopup;
