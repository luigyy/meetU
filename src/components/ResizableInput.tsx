import "../resizableInput.css";
import React from "react";
const { useState, useRef, useEffect } = React;

interface ResizableInputProps {
  value?: string;
  className?: string;
  extraWidth: number;
}

const ResizableInput: React.FC<ResizableInputProps> = ({
  value,
  className,
  extraWidth,
}) => {
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
        className={`mx-2 text-center py-1 ${className}`} //add classname
        style={{ width: width + extraWidth }}
        value={content}
        onChange={(e) => changeHandler(e)}
      />
      {/* @ts-ignore */}
    </wrapper>
  );
};
export default ResizableInput;
