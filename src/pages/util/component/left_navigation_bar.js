import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function LeftNavigationBar() {
  const itemBars = [
    {
      routePath: "category",
      icon: "fa-solid fa-bars",
      title: "Thể loại",
    },
    {
      routePath: "book",
      icon: "fa fa-book",
      title: "Sách",
    },
  ];
  const handleItemClick = (indexSelected) => {
    setHandleItemSelect(
      itemBars.map((item, index) => (
        <ItemNavigationBar
          key={index}
          isSelected={index == indexSelected}
          icon={item.icon}
          routePath={item.routePath}
          title={item.title}
          index={index}
          handleItemSelect={handleItemClick}
        />
      ))
    );
  };
  const [itemBarsView, setHandleItemSelect] = useState(
    itemBars.map((item, index) => (
      <ItemNavigationBar
        key={index}
        isSelected={index == 0}
        icon={item.icon}
        routePath={item.routePath}
        title={item.title}
        handleItemSelect={handleItemClick}
        index={index}
      />
    ))
  );

  return (
    <div>
      <ul className="nav nav-tabs nav-fill">{itemBarsView}</ul>
    </div>
  );
}

// const mouseHover = () => {};
function ItemNavigationBar(props) {
  const onItemClick = () => {
    props.handleItemSelect(props.index);
  };
  return (
    <li className=" container-fluid nav-item" onClick={onItemClick}>
      <Link to={props.routePath}>
        <div className={`nav-link ${props.isSelected ? "active" : ""}`}>
          <i className={props.icon} />
          <span style={{ marginLeft: "15px" }}>{props.title}</span>
        </div>
      </Link>
    </li>
  );
}
