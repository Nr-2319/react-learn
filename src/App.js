import React, { useState } from "react";
import "./App.css";
// import Counter from "./components/Counter";
import videosDB from "./data/data";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";

function App() {
    console.log("render App");

    const [videos, setVideos] = useState(videosDB);

    function addVideos(video) {
        setVideos([...videos, { ...video, id: videos.length + 1 }]);
    }

    return (
        <div className="App" onClick={() => console.log("App")}>
            <div className="app-header">Your Tube</div>

            <AddVideo addVideos={addVideos}></AddVideo>

            <VideoList videos={videos}></VideoList>

            {/* <Counter></Counter> */}
        </div>
    );
}

export default App;
