import React from "react";

import sections from "../../utils/defaults/sections";
import MenuItem from "../Directory/MenuItem/MenuItem";
import theme from "./Directory.module.scss";

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections
    };
  }

  render() {
    const { sections: menuItems } = this.state;

    return (
      <div className={theme.directoryMenu}>
        {menuItems.map(({ id, imageUrl, size, title }) => (
          <MenuItem
            key={id}
            id={id}
            imageUrl={imageUrl}
            size={size}
            title={title}
          />
        ))}
      </div>
    );
  }
}

export default Directory;
