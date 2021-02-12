import React, { useEffect } from "react";
import "../css/Piano.css";
import AudioPlayer from "./AudioPlayer";
import Keys from "./Keys";

function Piano() {
  const audioPlayer = AudioPlayer();

  useEffect(() => {
    audioPlayer.setInstrument("acoustic_grand_piano");
  }, []);

  const handleClick = (event) => {
    let note = event.target.dataset.note;
    audioPlayer.playNote(note);
  };

  const handleKeyDown = (event) => {
    console.log(event.key);
    switch (event.key) {
      case "a":
        return audioPlayer.playNote("C4");
      case "w":
        return audioPlayer.playNote("C#4");
      case "s":
        return audioPlayer.playNote("D4");
      case "e":
        return audioPlayer.playNote("D#4");
      case "d":
        return audioPlayer.playNote("E4");
      case "f":
        return audioPlayer.playNote("F4");
      case "t":
        return audioPlayer.playNote("F#4");
      case "g":
        return audioPlayer.playNote("G4");
      case "y":
        return audioPlayer.playNote("G#4");
      case "h":
        return audioPlayer.playNote("A4");
      case "u":
        return audioPlayer.playNote("A#4");
      case "j":
        return audioPlayer.playNote("B4");
      case "k":
        return audioPlayer.playNote("C5");
      case "o":
        return audioPlayer.playNote("C#5");
      case "l":
        return audioPlayer.playNote("D5");
      case "p":
        return audioPlayer.playNote("D#5");
      case ";":
        return audioPlayer.playNote("E5");
      case "'":
        return audioPlayer.playNote("F5");
      default:
        return;
    }
  }

  return (
    <div className="piano-container">
      <Keys onClick={handleClick} onKeyDown={handleKeyDown}/>
    </div>
  );
}

export default Piano;