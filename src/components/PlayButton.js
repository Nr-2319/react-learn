import React, { memo, useContext, useState } from "react";
import "./PlayButton.css";
import ThemeContext from "../context/ThemeContext";

const PlayButton = memo(function PlayButton({ onPlay, onPause, children }) {
    console.log("render Play Button");

    const [playing, setPlaying] = useState(false);

    const themeContext = useContext(ThemeContext);

    const handleClick = (e) => {
        // console.log("event: ", e);
        e.stopPropagation();

        if (playing) {
            onPause();
        } else {
            onPlay();
        }

        setPlaying(!playing);
    };

    return (
        <button onClick={handleClick} className={themeContext}>
            {children} {!playing ? "▶️" : "⏸️"}
        </button>
    );
});

export default PlayButton;
