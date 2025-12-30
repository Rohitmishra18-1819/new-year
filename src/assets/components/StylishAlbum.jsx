// StylishAlbum.jsx
import "./StylishAlbum.css";
import albumData from "../data/album";

export default function StylishAlbum() {
  return (
    <div className="album-page">
      <h1 className="album-title">💖 Our Love Album 💖</h1>

      <div className="album-grid">
        {albumData.map(item => (
          <div className="album-card" key={item.id}>
            <img src={item.image} alt="memory" />

            <div className="overlay">
              <p>{item.shayari}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
