import React, { useEffect, useState } from "react";
import { getAllUser } from "../../data/repository/user_repository";

const UserScreen = () => {
  const [listView, setStateListView] = useState([]);

  useEffect(() => {
    getAllUser().then((data) => {
      console.log("user screen");

      if (data.users) {
        let newListView = data.users.map((user, index) => (
          <tr key={index}>
            <th scope="row">{index + 1}</th>
            <td>{user.id}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
          </tr>
        ));
        setStateListView(newListView);
      }
    });
  }, []);

  return (
    <div className="container-fluid" style={{ marginTop: "100px" }}>
      {/* <CategoryCreatePopup /> */}
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Firebase ID</th>
            <th scope="col">Tên Người Dùng</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>{listView}</tbody>
      </table>
    </div>
  );
};

export default UserScreen;
