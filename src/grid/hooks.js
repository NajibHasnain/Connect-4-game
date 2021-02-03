import React, { useState, useEffect, useRef } from "react";

const usePrevious = (value) => {
  //console.log("value-->", value);
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
};

export default usePrevious;
