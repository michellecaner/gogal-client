import React from "react"
import "./Tip.css"

export const TipCard = ({ tip }) => {
  return (
    <div className="card">
      <div className="card-content">
        <h3 className="card-tip">Go Gal Trip Tip</h3>
          {tip.tip}
      </div>
    </div>
  );
}