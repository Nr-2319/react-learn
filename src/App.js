import React, { useCallback, useReducer, useRef, useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";
import ThemeContext from "./context/ThemeContext";
import VideosContext from "./context/VideosContext";
import VideosDispatchContext from "./context/VideosDispatchContext";
import videosDB from "./data/data";

function App() {
    console.log("render App");

    const [editableVideo, setEditableVideo] = useState(null);
    // const [videos, setVideos] = useState(videosDB);
    const [videos, dispatch] = useReducer(videoReducer, []);

    const [mode, setMode] = useState("darkMode");

    const inputRef = useRef(null);

    function videoReducer(videos, action) {
        switch (action.type) {
            case "LOAD": {
                return action.payload;
            }
            case "ADD": {
                return [
                    ...videos,
                    { ...action.payload, id: videos.length + 1 },
                ];
            }

            case "DELETE": {
                return videos.filter((v) => v.id !== action.payload);
            }

            case "UPDATE": {
                const idx = videos.findIndex((v) => v.id === action.payload.id);
                const newVideos = [...videos];
                newVideos.splice(idx, 1, action.payload);
                setEditableVideo(null);
                return newVideos;
            }

            default:
                return videos;
        }
    }

    const editVideo = useCallback(
        function editVideo(id) {
            const toUpdate = videos.find((v) => v.id === id);

            setEditableVideo(toUpdate);
        },
        [videos]
    );

    return (
        <ThemeContext.Provider value={mode}>
            <VideosContext.Provider value={videos}>
                <VideosDispatchContext.Provider value={dispatch}>
                    <div
                        className={`App ${mode}`}
                        onClick={() => console.log("App")}
                    >
                        <button
                            onClick={() => {
                                inputRef.current.jumpTo();
                            }}
                        >
                            Focus
                        </button>
                        <button
                            onClick={() => {
                                setMode(
                                    mode === "darkMode"
                                        ? "lightMode"
                                        : "darkMode"
                                );
                            }}
                        >
                            Change Mode
                        </button>
                        <div className="app-header">Your Tube</div>

                        <Counter></Counter>
                        <AddVideo
                            ref={inputRef}
                            editableVideo={editableVideo}
                        ></AddVideo>

                        <VideoList editVideo={editVideo}></VideoList>
                    </div>
                </VideosDispatchContext.Provider>
            </VideosContext.Provider>
        </ThemeContext.Provider>
    );
}

export default App;
