import React from "react";
import "../styles/hexCard.scss";

export function HexCard({ id, title }) {
  return (
    <div className='card' key={id}>
      {" "}
      <span className='cardLabel'>{title}</span>
    </div>
  );
}

export default HexCard;
