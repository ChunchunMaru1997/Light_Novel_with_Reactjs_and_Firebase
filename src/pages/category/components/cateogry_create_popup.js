import React, { useState } from "react";

import { createNewCategory } from "../../../data/repository/category_repository";
import DialogApp from "../../util/component/dialog_app";
import InputApp from "../../util/component/input_app";
import { validateCategory } from "../../util/validation";

export const CategoryCreatePopup = ({ onSuccess }) => {
  const [isOpen, setIsShowing] = useState(false);

  const [inputCategory, setInputCategory] = useState("");

  const [errorFied, setShowErrorField] = useState("");

  const handleCategoryTextChange = (event) => {
    setInputCategory(event.target.value);
  };

  const addCategoryPopup = () => {
    if (validateCategory(inputCategory.toLowerCase())) {
      console.log(inputCategory);
      createNewCategory(inputCategory.toLowerCase()).then((data) => {
        if (data.category) {
          console.log(data.category);
          setIsShowing(false);
          setInputCategory("");
          onSuccess(data.category);
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
        <i className="fa-solid fa-plus" style={{ marginRight: "8px" }} />
        Thêm thể loại
      </button>
      <DialogApp
        isOpen={isOpen}
        btnCloseClicked={(event) => setIsShowing(false)}
      >
        <div className="text-center" style={{ border: "15px" }}>
          <InputApp
            type="input"
            name="categoryName"
            onChanged={handleCategoryTextChange}
            icon="fa-solid fa-bars"
            label="Tên thể loại"
            error={errorFied}
          />

          <button
            tyle="button"
            className="btn btn-primary"
            onClick={addCategoryPopup}
          >
            Thêm
          </button>
        </div>
      </DialogApp>
    </div>
  );
};
export default CategoryCreatePopup;
