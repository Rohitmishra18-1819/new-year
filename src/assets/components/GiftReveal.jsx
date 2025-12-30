import { useState } from "react";
import ScratchCard from "./ScratchCard";
import giftImg from "../../image/Gift.png";
import heartImg from "../../image/smile1.jpg";
import "./GiftFlow.css";

export default function GiftReveal({ onAlbum, onMusic }) {
  const [giftOpened, setGiftOpened] = useState(false);
  const [showScratch, setShowScratch] = useState(false);
  const [scratched, setScratched] = useState(false);

  return (
    <div
      className="gift-bg full-screen"
      style={{
        backgroundImage: `url(${heartImg})`,
      }}
    >
      {/* STEP 1: GIFT IMAGE */}
      {!giftOpened && (
        <div className="gift-center">
          <h1 className="gift-title">🎁 Tap the Gift 🎁</h1>

          <img
            src={giftImg}
            alt="gift"
            className="gift-img"
            onClick={() => setGiftOpened(true)}
          />
        </div>
      )}

      {/* STEP 2 */}
      {giftOpened && !showScratch && (
        <div className="gift-center">
          <h1 className="gift-title">🎉 Happy New Year Sona ❤️</h1>
          <p className="gift-sub">(Tap to reveal your surprise)</p>

          <button className="continue-btn" onClick={() => setShowScratch(true)}>
            ✨ Continue ✨
          </button>
        </div>
      )}

      {/* STEP 3 */}
      {showScratch && !scratched && (
        <div className="gift-center">
          <h1 className="gift-title">✨ Scratch to Reveal ✨</h1>
          <ScratchCard onDone={() => setScratched(true)} />
        </div>
      )}

      {/* STEP 4 */}
      {scratched && (
        <div className="gift-center">
          <h1 className="gift-title">💖 Choose Your Surprise 💖</h1>

          <div className="choice-buttons">
            <button onClick={onAlbum}>📖 Open Album</button>
            <button onClick={onMusic}>🎵 Play Music</button>
          </div>
        </div>
      )}
    </div>
  );
}
