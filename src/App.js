import React, { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import PlayButton from "./components/PlayButton";
import Video from "./components/Video";
import videosDB from "./data/data";

function App() {
    console.log("render App");

    const [videos, setVideos] = useState(videosDB);

    return (
        <div className="App" onClick={() => console.log("App")}>
            <div className="app-header">Your Tube</div>
            <button
                onClick={() => {
                    setVideos([
                        ...videos,
                        {
                            id: videos.length + 1,
                            title: "Goa Baga Beach",
                            views: "50K",
                            time: "1 sec ago",
                            channel: "Goa Trills",
                            verified: true,
                        },
                    ]);
                }}
            >
                Add Videos
            </button>

            {videos.map((video) => (
                <Video
                    id={video.id}
                    key={video.id}
                    title={video.title}
                    views={video.views}
                    time={video.time}
                    channel={video.channel}
                    verified={video.verified}
                >
                    <PlayButton
                        onPlay={(msg) => console.log(msg, video.title)}
                        onPause={(msg) => console.log(msg, video.title)}
                    >
                        {video.title}
                    </PlayButton>
                </Video>
            ))}

            <Counter></Counter>
        </div>
    );
}

export default App;
