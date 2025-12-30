import { useState } from "react";
import NewYearWish from "./assets/components/NewYearWish";
import GiftReveal from "./assets/components/GiftReveal";
import AlbumSlider from "./assets/components/AlbumSlider";
import MusicPlayer from "./assets/components/MusicPlayer";

export default function App() {
  const [step, setStep] = useState("wish");

  return (
    <>
      {step === "wish" && <NewYearWish onNext={() => setStep("gift")} />}

      {step === "gift" && (
        <GiftReveal
          onAlbum={() => setStep("album")}
          onMusic={() => setStep("music")}
        />
      )}

      {step === "album" && (
        <AlbumSlider onBack={() => setStep("gift")} />
      )}

      {step === "music" && (
        <MusicPlayer onBack={() => setStep("gift")} />
      )}
    </>
  );
}
