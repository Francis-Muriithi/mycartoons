import React from "react";
import "../CartoonCard.css";

function CartoonCard(props) {
  console.log(props.name);
  return (
    <>
      <div className="cartoon_card">
        <h3 className="title">{props.name}</h3>
        <div className="poster">
          <img
            className="image_img"
            src={props.image}
            alt=""
            width="400"
            height="300"
          ></img>
          <div className="poster_overlay">
            <p className="description">{props.description}</p>
            <p className="age">
              <strong>Recommended: {props.age}</strong>
            </p>
            <a href={props.video} target="_blank">
            <strong>Watch Now</strong>
          </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartoonCard;
