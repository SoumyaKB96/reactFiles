import React from "react";

export default function ContactCard(props) {
  return (
    <div>
      <img src={props.imgUrl} alt="" />
      <h3>{props.name}</h3>
      <p>{props.phone}</p>
      <p>{props.email}</p>
    </div>
  );
}
