import { useRef, useState } from "react";
import albumData from "../data/album";
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
    <div className="music-page gallery-bg-animated">
      <button className="back-btn" onClick={onBack}>⬅ Back</button>

      <h1 className="music-header-text">🎧 Our Music Playlist 🎧</h1>

      <div className="music-list">
        {albumData.map((item, index) => (
          <div className="music-card" key={item.id}>
            <span>{item.songName}</span>

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
