import React from "react";
import { Link } from "react-router-dom";

const Navigation = props => {
  return (
    <div className={`menu ${props.desktop ? 'desktop' : 'mobile'}`}>
      {props.sources.map((el) => (
        <Link key={el.id} to={`/sources/${el.id}`} onClick={!props.desktop ? props.sidebarToggle : null}>
          {el.name}
        </Link>
      ))}
    </div>
  );
};

export default Navigation;