import { useRef, useEffect, useState } from "react";
import scratchImg from "../image/scratch.png";

export default function ScratchCard({ onDone }) {
  const canvasRef = useRef(null);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = 300;
    canvas.height = 150;

    const img = new Image();
    img.src = scratchImg;
    img.onload = () => {
      ctx.globalCompositeOperation = "source-over";
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = "destination-out";
    };
  }, []);

  const getPos = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  const scratch = (e) => {
    if (completed) return;

    const ctx = canvasRef.current.getContext("2d");
    const { x, y } = getPos(e);

    ctx.beginPath();
    ctx.arc(x, y, 22, 0, Math.PI * 2);
    ctx.fill();

    checkProgress();
  };

  const checkProgress = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height).data;

    let cleared = 0;
    for (let i = 3; i < pixels.length; i += 4) {
      if (pixels[i] === 0) cleared++;
    }

    const percent = cleared / (canvas.width * canvas.height);

    if (percent > 0.4 && !completed) {
      setCompleted(true);
      onDone();
    }
  };

  return (
    <canvas
      ref={canvasRef}
      style={{
        borderRadius: "15px",
        touchAction: "none",
        userSelect: "none",
        cursor: "default",
      }}
      onPointerMove={scratch}   // ✅ KEY FIX
    />
  );
}
