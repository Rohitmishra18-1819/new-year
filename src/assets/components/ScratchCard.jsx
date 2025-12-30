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

  const scratch = (e) => {
    if (completed) return;
    const rect = canvasRef.current.getBoundingClientRect();
    const ctx = canvasRef.current.getContext("2d");

    ctx.beginPath();
    ctx.arc(
      e.clientX - rect.left,
      e.clientY - rect.top,
      22,
      0,
      Math.PI * 2
    );
    ctx.fill();

    const pixels = ctx.getImageData(0, 0, 300, 150).data;
    let cleared = 0;
    for (let i = 3; i < pixels.length; i += 4) {
      if (pixels[i] === 0) cleared++;
    }
    if (cleared / (300 * 150) > 0.4 && !completed) {
      setCompleted(true);
      onDone();
    }
  };

  return (
    <canvas
      ref={canvasRef}
      onPointerMove={scratch}
      style={{ borderRadius: "15px", touchAction: "none" }}
    />
  );
}
