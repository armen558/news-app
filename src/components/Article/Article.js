import React from "react";
import imgPlaceholder from "../../assets/images/no-image.jpg";

import './Article.css';

const Article = (props) => {
  return (
    <div className={`article ${props.type ? "source" : ""}`}>
      <div className="img_wrap">{<img onClick={props.clicked} src={String(props.imgUrl) !== "null" ? props.imgUrl : imgPlaceholder} />}</div>
      <div className="text">
        <h3 onClick={props.clicked}>{props.name ? props.name : props.title}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default Article;
