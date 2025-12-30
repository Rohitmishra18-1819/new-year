import { useRef, useState } from "react";
import albumData from "../data/album";   // 🔁 adjust path if needed
import "./MusicPlayer.css";

export default function MusicPlayer({ onBack }) {
  const audioRefs = useRef([]);
  const [currentPlaying, setCurrentPlaying] = useState(null);

  const handlePlay = (index) => {
    if (currentPlaying !== null && currentPlaying !== index) {
      audioRefs.current[currentPlaying]?.pause();
      audioRefs.current[currentPlaying].currentTime = 0;
    }
    setCurrentPlaying(index);
  };

  return (
    <div className="music-page">

      {/* 🔙 BACK */}
      <button className="back-btn" onClick={onBack}>⬅ Back</button>

    {/* 🎵 HEADER */}
<div className="music-header-wrap">
  <h1 className="music-header-text">
    🎧 Our Music Playlist 🎧
  </h1>
</div>

      {/* 🎶 SONG LIST */}
      <div className="music-list">
        {albumData.map((item, index) => (
          <div key={item.id} className="music-card">

            <div className="music-info">
              <span className="music-icon">🎶</span>
              <span className="song-name">{item.songName}</span>
            </div>

            <audio
              controls
              src={item.song}
              ref={(el) => (audioRefs.current[index] = el)}
              onPlay={() => handlePlay(index)}
            />
          </div>
        ))}
      </div>

    </div>
  );
}
