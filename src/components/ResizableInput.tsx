import "../resizableInput.css";
import React from "react";
const { useState, useRef, useEffect } = React;

interface ResizableInputProps {
  value?: string;
}

const ResizableInput: React.FC<ResizableInputProps> = ({ value }) => {
  const [content, setContent] = useState(value || "");
  const [width, setWidth] = useState(0);
  const span = useRef();

  useEffect(() => {
    //@ts-ignore
    setWidth(span.current.offsetWidth);
  }, [content]);

  //@ts-ignore
  const changeHandler = (evt) => {
    setContent(evt.target.value);
  };

  return (
    // @ts-ignore
    <wrapper is="custom">
      {/* @ts-ignore */}
      <span id="hide" ref={span}>
        {content}
      </span>
      <input
        type="text"
        style={{ width }}
        value={content}
        placeholder={value}
        autoFocus
        onChange={(e) => changeHandler(e)}
      />
      {/* @ts-ignore */}
    </wrapper>
  );
};
export default ResizableInput;
