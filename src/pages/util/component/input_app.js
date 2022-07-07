import React from "react";
const textError = {
  color: "#FF0000",
};

export default function InputApp(props) {
  return (
    <div>
      <div className="d-flex flex-row align-items-center mb-4">
        <i className={`${props.icon} fa-lg me-3 fa-fw`} />
        <div className="form-outline flex-fill mb-0">
          <input
            type={props.type}
            id="form3Example1c"
            className="form-control"
            name={props.name}
            onChange={props.onChanged}
          />

          <label className="form-label" htmlFor="form3Example1c">
            {props.label}
          </label>
        </div>
      </div>
      <p style={textError}>{props.error}</p>
    </div>
  );
}
