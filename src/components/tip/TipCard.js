import React from "react"
import "./Tip.css"

export const TipCard = ({ tip }) => {
  return (
    <div className="card">
      <div className="card__title">go gal!trip tip</div>
      <div className="card__content">{tip.tip}</div>
    </div>
  );
}