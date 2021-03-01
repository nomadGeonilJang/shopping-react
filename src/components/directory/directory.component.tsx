import React, { useState } from "react";
import "./directory.styles.scss";


import data from "constants/directory.data";
import MenuItem from "components/menu-item/menu-item.component";


const Directory = () =>{
  const [ sections ] = useState( data );


  return (
    <div className="directory-menu">
      { 
        sections
          .map( ( { title, imageUrl, size, id } ) => (
            <MenuItem 
              key={id} 
              title={title} 
              imageUrl={imageUrl}
              size={size}
            />
          ) )
      }
    </div>
  );
    
};

export default Directory;