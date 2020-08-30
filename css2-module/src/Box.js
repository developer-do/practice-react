import React from "react";
import Style from "./Box.module.css";

console.log({ Style });

export default function Box({ size }) {
  if (size === "big") {
    return <div className={`${Style.button} ${Style.big}`}>큰 박스</div>;
  } else {
    return <div className={`${Style.button} ${Style.small}`}>작은 박스</div>;
  }
}
