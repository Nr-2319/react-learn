import React from "react";
import "./PlayButton.css";

const PlayButton = ({ onPlay, onPause, children }) => {
    let playing = false;

    const handleClick = (e) => {
        console.log("event: ", e);
        e.stopPropagation();
        if (playing) {
            onPause("Paused");
        } else {
            onPlay("Playing");
        }

        playing = !playing;
    };

    return <button onClick={handleClick}>{children}</button>;
};

export default PlayButton;
