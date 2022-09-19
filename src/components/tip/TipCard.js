import React from "react"
import "./Tip.css"

export const TipCard = ({ tip }) => {
  return (
    <div className="card">
      <div className="card__title">go gal!trip tip</div>
      <p className="card__content">{tip.tip}</p>
    </div>
  );
}