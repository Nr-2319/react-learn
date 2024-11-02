import React, { useContext, useState } from "react";
import "./PlayButton.css";
import ThemeContext from "../context/ThemeContext";

const PlayButton = ({ onPlay, onPause, children }) => {
    console.log("render Play Button");

    const [playing, setPlaying] = useState(false);

    const themeContext = useContext(ThemeContext);

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
        <button onClick={handleClick} className={themeContext} >
            {children} {!playing ? "▶️" : "⏸️"}
        </button>
    );
};

export default PlayButton;
