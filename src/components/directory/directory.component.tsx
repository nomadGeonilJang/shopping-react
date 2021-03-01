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
          .map( section => (
            <MenuItem 
              key={section.id} 
              {...section}
            />
          ) )
      }
    </div>
  );
    
};

export default Directory;