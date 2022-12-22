import "../resizableInput.css";
import React from "react";
const { useState, useRef, useEffect } = React;

interface ResizableInputProps {
  value?: string | number;
  className?: string;
  customFunc?: (e: any) => void;
  extraWidth: number;
  maxWidth?: string;
  forCards?: boolean;
  cardField?: string;
}

const ResizableInput: React.FC<ResizableInputProps> = ({
  value,
  className,
  extraWidth,
  customFunc,
  maxWidth,
  forCards,
  cardField,
}) => {
  //
  const [content, setContent] = useState(value || "test");
  const [width, setWidth] = useState(0);
  const span = useRef();

  useEffect(() => {
    //@ts-ignore
    setWidth(span.current.offsetWidth);
  }, [content]);

  //@ts-ignore
  const changeHandler = (evt) => {
    setContent(evt.target.value);
    if (customFunc) customFunc(evt.target.value);
  };

  return (
    // @ts-ignore
    <wrapper is="custom">
      {/* @ts-ignore */}
      <span id="hide" ref={span}>
        {content}
      </span>
      <textarea
        className={`mx-2 inline-block rounded-2xl text-center py-1 ${className}`} //add classname
        style={{ width: width + extraWidth, maxWidth: maxWidth }}
        value={content}
        onChange={(e) => changeHandler(e)}
      />
      {/* @ts-ignore */}
    </wrapper>
  );
};
export default ResizableInput;
