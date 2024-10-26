import React, { useState } from "react";
import "./PlayButton.css";

const PlayButton = ({ onPlay, onPause, children }) => {
    console.log("render Play Button")

    const [playing, setPlaying] = useState(false);

    const handleClick = (e) => {
        // console.log("event: ", e);
        e.stopPropagation();

        if (playing) {
            onPause("Paused..");
        } else {
            onPlay("Playing..");
        }

        setPlaying(!playing);
    };

    return (
        <button onClick={handleClick}>
            {children} {!playing ? "▶️" : "⏸️"}
        </button>
    );
};

export default PlayButton;
