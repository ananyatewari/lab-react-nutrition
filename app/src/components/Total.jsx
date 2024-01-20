import React from "react";
import "../App.css"

export default function Total(props) {
  return (
    <>
      <div className="info">Quantity = {props.quant}</div>
      <div className="info">Total calories = {props.cal}</div>
    </>
  );
}
