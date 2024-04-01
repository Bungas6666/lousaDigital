import React, { useRef, useEffect } from "react";

function LousaBranca() {
  const canvasRef = useRef(null);
  let isDrawing = false;
  let context;

  useEffect(() => {
    context = canvasRef.current.getContext("2d");
    context.strokeStyle =  "purple";
    context.lineWidth = 10;
  }, []);

  const startDrawing = (e) => {
    isDrawing = true;
    context.beginPath();
    context.moveTo(e.clientX, e.clientY);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    context.lineTo(e.clientX, e.clientY);
    context.stroke();
  };

  const stopDrawing = () => {
    isDrawing = false;
    context.closePath();
  };

  return (
    <div>
      <canvas
        ref={canvasRef}
        width={window.innerWidth}
        height={window.innerHeight}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
      />
    </div>
  );
}

export default LousaBranca;
