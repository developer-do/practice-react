import React from "react";
import Style from "./Button.module.css";
import cn from "classnames";
console.log({ Style });

export default function Button({ size }) {
  const isBig = size === "big";
  return (
    <button
      className={cn(Style.box, { [Style.big]: isBig, [Style.big]: !isBig })}
    >
      {isBig ? "큰 박스" : "작은 박스"}
    </button>
  );
  // if (size === "big") {
  //   return <button className={cn(Style.box, Style.big)}>큰 버튼</button>;
  // } else {
  //   return <button className={cn(Style.box, Style.small)}>작은 버튼</button>;
  // }
}
