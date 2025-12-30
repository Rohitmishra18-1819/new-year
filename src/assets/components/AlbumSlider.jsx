import { useState } from "react";
import albumData from "../data/album";
import "./StylishAlbum.css";

export default function AlbumSlider({ onBack }) {
  const [active, setActive] = useState(null);

  return (
    <div className="album-page">

      <button className="back-btn" onClick={onBack}>⬅ Back</button>

      <h1 className="album-title">📸 Our Photo Album 💖</h1>

      <div className="polaroid-grid">
        {albumData.map((item, index) => (
          <div
            key={item.id}
            className={`polaroid-card rotate-${index % 6}`}
            onClick={() => setActive(item)}
          >
            <img src={item.image} alt="memory" />
            <span className="polaroid-text">💌 Memory</span>
          </div>
        ))}
      </div>

      {active && (
        <div className="album-modal" onClick={() => setActive(null)}>
          <div
            className="album-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={active.image} alt="full" />
            <p className="modal-shayari">{active.shayari}</p>
            <button onClick={() => setActive(null)}>❌ Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
