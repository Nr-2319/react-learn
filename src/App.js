import React, { useContext, useReducer, useState } from "react";
import "./App.css";
// import Counter from "./components/Counter";
import videosDB from "./data/data";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";
import ThemeContext from "./context/ThemeContext";

function App() {
    console.log("render App");

    const [editableVideo, setEditableVideo] = useState(null);
    // const [videos, setVideos] = useState(videosDB);
    const [videos, dispatch] = useReducer(videoReducer, videosDB);

    const [mode, setMode] = useState("darkMode");

    const themeContext = useContext(ThemeContext);

    function videoReducer(videos, action) {
        switch (action.type) {
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

    function editVideo(id) {
        const toUpdate = videos.find((v) => v.id === id);

        setEditableVideo(toUpdate);
    }

    return (
        <ThemeContext.Provider value={mode}>
            <div className={`App ${mode}`} onClick={() => console.log("App")}>
            <button
                onClick={() => {
                    setMode(mode === "darkMode" ? "lightMode" : "darkMode");
                }}
            >
                Change Mode
            </button>
                <div className="app-header">Your Tube</div>

                <AddVideo
                    dispatch={dispatch}
                    editableVideo={editableVideo}
                ></AddVideo>

                <VideoList
                    dispatch={dispatch}
                    editVideo={editVideo}
                    videos={videos}
                ></VideoList>

                {/* <Counter></Counter> */}
            </div>
        </ThemeContext.Provider>
    );
}

export default App;
