import { Avatar } from "@mui/material";
import React from 'react';
import "./SidebarRow.css";
import MyImage from "./img/IMG_20220322_035607.jpg";

function SidebarRow({ src, Icon, title }) {
  return (
    <div className="sidebarRow">
      {src && <Avatar src={MyImage} />}
      {Icon && <Icon />}
      <h4>{title}</h4>
    </div>
  )
}

export default SidebarRow