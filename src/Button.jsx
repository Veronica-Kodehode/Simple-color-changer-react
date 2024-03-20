import React from "react";
import style from "./Button.module.css";

export const Button = () => {
  function ColorChange() {}

  return (
    <div className={style.container}>
      <button className={`${style.button} ${style.blue}`}>Blue</button>
      <button className={`${style.button} ${style.yellow}`}>Yellow</button>
      <button className={`${style.button} ${style.random}`}>Random</button>
      <button className={`${style.button} ${style.green}`}>Green</button>
      <button className={`${style.button} ${style.red}`}>Red</button>
    </div>
  );
};
