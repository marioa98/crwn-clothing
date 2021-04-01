import React from "react";

import sections from "../../utils/defaults/sections"
import MenuItem from "../MenuItem/MenuItem";
import theme from "./Directory.module.scss";

class Directory extends React.Component{
  constructor(){
    super();

    this.state = {
      sections
    }
  }

  render(){
    const { sections: menuItems } = this.state

    return(
      <div className={theme.directoryMenu}>
        {
          menuItems.map((item) => (
            <MenuItem menuItem={item} theme={theme} />
          ))
        }
      </div>
    )
  }
}

export default Directory