import React, { useRef } from "react";

export default function ProductCard(props) {
  let h1Ref = useRef(null);
  const changeColor = () => {
    if (h1Ref.current) {
      if (h1Ref.current.style.color === "cyan") {
        h1Ref.current.style.color = "black";
        return;
      }
      h1Ref.current.style.color = "cyan";
    }
  };

  return (
    <div>
      <h1 ref={h1Ref} onClick={changeColor}>
        {props.title}
      </h1>
      <p>{props.price}</p>
    </div>
  );
}
