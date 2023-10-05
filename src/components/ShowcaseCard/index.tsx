import React from "react";
import { IShowcaseCard } from "./types";
import "./styles.scss";

const ShowcaseCard: React.FC<IShowcaseCard> = ({
  image,
  title,
  description,
  price,
}) => {
  return (
    <div className="showcasecard-container">
      <div className="image-container">
        <img src={image} alt={title} />
      </div>
      <div className="showcasecard-textcontent">
        <h3>{title}</h3>
        <p>{description}</p>
        <h3>{price}</h3>
      </div>
    </div>
  );
};

export default ShowcaseCard;
