import React, { useState, useLayoutEffect } from 'react';

function useWindowSize() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  console.log('1, useWindowSize');

  const resize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
    console.log('2, resize');
  };

  useLayoutEffect(() => {
    console.log('3, useLayoutEffect');
    window.addEventListener('resize', resize);
    resize();
    return () => {
      console.log('4, clean up');
      window.removeEventListener('resize', resize);
    };
  }, []);

  return [width, height];
}

export default function App() {
  const [w, h] = useWindowSize();
  return (
    <div>
      {w}x{h}
    </div>
  );
}
