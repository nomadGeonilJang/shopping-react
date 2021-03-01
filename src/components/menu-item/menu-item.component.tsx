import React from "react";
import "./menu-item.styles.scss";

type MenuItem = {
    title:string;
    imageUrl:string;
    size?:string;
}
const MenuItem = ( { title, imageUrl, size }:MenuItem ) => (
  <div
    className={`${size} menu-item`}
  >
    <div 
      className="background-image" 
      style={{ backgroundImage:`url(${imageUrl})` }}/>
    <div className="content">
      <h1 className="title">{title}</h1>
      <span className="subtitle">show now</span>
    </div>
  </div>
);

export default MenuItem;