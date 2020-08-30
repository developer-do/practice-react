import React from "react";
import Style from "./Button.module.scss";

export default function Button({ size }) {
  if (size === "big") {
    return <button className={`${Style.box} ${Style.big}`}>큰 버튼</button>;
  } else {
    return <button className={`${Style.box} ${Style.small}`}>작은 버튼</button>;
  }
}
