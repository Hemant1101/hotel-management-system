import React from "react";
// import "./Button.css";
import { Link } from "react-router-dom";

export function Button(props) {
  return (
    <Link to={String(props.routepath)} onClick={props.Onclick}>
      <button className={props.clname}>{props.txtContent}</button>
    </Link>
  );
}
