import React, { useState } from "react";
const textError = {
  color: "#FF0000",
};

export default function ComboboxApp(props) {
  const { icon, type, name, label, error, data, onItemClick } = props;
  const [value, setValue] = useState(" ");
  const [defaultValue, setDefaultValue] = useState(" ");

  const mapList = () => {
    return data.map((item, index) => (
      <button
        key={index}
        className="dropdown-item"
        type="button"
        onClick={(e) => {
          setValue(item.name);
          onItemClick(item, index);
        }}
      >
        {item.name}
      </button>
    ));
  };

  return (
    <div>
      <div className="d-flex flex-row align-items-center mb-4">
        <i className={`${icon} fa-lg me-3 fa-fw`} />
        <div className="form-outline flex-fill mb-0 dropdown">
          <input
            type={type}
            id="form3Example1c"
            className={
              "form-control dropdown-toggle " + (value !== "" ? " active" : "")
            }
            name={name}
            value={value}
            onChange={(e) => {}}
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          />

          <label className="form-label" htmlFor="form3Example1c">
            {label}
          </label>

          <div
            className="dropdown-menu"
            aria-labelledby="dropdownMenu2"
            style={{ height: "250px", overflow: "scroll" }}
          >
            {mapList()}
          </div>
        </div>
      </div>
      <p style={textError}>{error}</p>
    </div>
  );
}
