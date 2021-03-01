import React from "react";
import useGoTo from "utils/hooks/useGoTo";
import "./menu-item.styles.scss";

type MenuItem = {
    title:string;
    imageUrl:string;
    size?:string;
    linkUrl?:string;
}
const MenuItem = ( { title, imageUrl, size, linkUrl }:MenuItem ) =>{

  const goTo = useGoTo( );
  
  return  (
    <div
      className={`menu-item ${size ? size : ""}`.trim() }
      onClick={()=>goTo( linkUrl )}
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
};

export default MenuItem;