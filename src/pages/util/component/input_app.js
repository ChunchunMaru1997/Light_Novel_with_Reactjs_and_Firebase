import React from "react";

export default function InputApp(props) {
  return (
    <div>
      <div className="d-flex flex-row align-items-center mb-4">
        <i className={`${props.icon} fa-lg me-3 fa-fw`} />
        <div className="form-outline flex-fill mb-0">
          <input
            type={props.type}
            id="form3Example1c"
            className={"form-control " + (props.defaultValue ? "active" : "")}
            value={props.value}
            defaultValue={props.defaultValue}
            name={props.name}
            onChange={props.onChanged}
          />

          <label className="form-label" htmlFor="form3Example1c">
            {props.label}
          </label>
        </div>
      </div>
      <p style={{ color: "#FF0000" }}>{props.error}</p>
    </div>
  );
}
