import "./NewYearWish.css";

export default function NewYearWish({ onNext }) {
  return (
    <div className="ny-bg">

      {/* ❤️ HEARTS */}
      <span className="heart h1">❤️</span>
      <span className="heart h2">💖</span>
      <span className="heart h3">❤️</span>

      {/* 🦋 BUTTERFLIES */}
      <span className="butterfly b1">🦋</span>
      <span className="butterfly b2">🦋</span>
      <span className="butterfly b3">🦋</span>
      <span className="butterfly b4">🦋</span>
      <span className="butterfly b5">🦋</span>

      {/* ⭐ STARS */}
      <span className="star s1">⭐</span>
      <span className="star s2">✨</span>
      <span className="star s3">⭐</span>
      <span className="star s4">✨</span>
      <span className="star s5">⭐</span>
      <span className="star s6">✨</span>

      {/* 🎆 CRACKERS */}
      <span className="cracker c1">🎆</span>
      <span className="cracker c2">🎇</span>
      <span className="cracker c3">🎆</span>
      <span className="cracker c4">🎇</span>
      <span className="cracker c5">🎆</span>
      <span className="cracker c6">🎇</span>

      {/* 🎉 CENTER BOX */}
      <div className="wish-box" onClick={onNext}>
        <h1>🎉 Happy New Year 🎉</h1>
        <h2>Sona ❤️</h2>
        <p>(Tap to continue)</p>
      </div>

    </div>
  );
}
