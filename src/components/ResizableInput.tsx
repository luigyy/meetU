//@ts-nocheck
import "../resizableInput.css";
import React from "react";
const { useState, useRef, useEffect } = React;

const ResizableInput = () => {
  const [content, setContent] = useState("");
  const [width, setWidth] = useState(0);
  const span = useRef();

  useEffect(() => {
    setWidth(span.current.offsetWidth);
  }, [content]);

  const changeHandler = (evt) => {
    setContent(evt.target.value);
  };

  return (
    <wrapper is="custom">
      <span id="hide" ref={span}>
        {content}
      </span>
      <input type="text" style={{ width }} autoFocus onChange={changeHandler} />
    </wrapper>
  );
};
export default ResizableInput;
