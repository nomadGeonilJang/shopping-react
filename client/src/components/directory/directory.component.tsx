import React from "react";
import "./directory.styles.scss";

import MenuItem from "components/menu-item/menu-item.component";
import { useDirectory } from "utils/redux/directory/directory.hooks";


const Directory = () => {  
  const { sections } = useDirectory();
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