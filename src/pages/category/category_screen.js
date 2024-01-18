import React, { useEffect, useState } from "react";

import { getAllCategory } from "../../data/repository/category_repository";
import Capitalize from "../util/capitalize";
import CategoryCreatePopup from "./components/cateogry_create_popup";
import CategoryDeletePopup from "./components/cateogry_delete_popup";
import CategoryEditPopup from "./components/cateogry_edit_popup";

const CategoryScreen = () => {
  const [listView, setStateListView] = useState([]);

  useEffect(() => {
    getAllCategory().then((data) => {
      console.log("cate screen");
      if (data.categories) {
        setStateListView(data.categories);
      }
    });
  }, []);

  return (
    <div className="container-fluid" style={{ marginTop: "100px" }}>
      <CategoryCreatePopup
        onSuccess={(category) => {
          setStateListView([category, ...listView]);
        }}
      />
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Firebase ID</th>
            <th scope="col">Tên thể loại</th>
            <th scope="col">Tùy chỉnh</th>
          </tr>
        </thead>
        <tbody>
          {listView.map((category, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{category.id}</td>
              <td>{Capitalize(category.name)}</td>
              <td style={{ display: "flex" }}>
                <CategoryEditPopup
                  onSuccess={(name) => {
                    listView[index].name = name;
                    setStateListView([...listView]);
                  }}
                  category={category}
                />

                <CategoryDeletePopup
                  category={category}
                  onSuccess={() => {
                    listView.splice(index, 1);
                    setStateListView([...listView]);
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default CategoryScreen;
