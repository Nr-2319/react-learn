import React, { useState } from "react";
import "./App.css";
// import Counter from "./components/Counter";
import videosDB from "./data/data";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";

function App() {
    console.log("render App");

    const [videos, setVideos] = useState(videosDB);
    const [editableVideo, setEditableVideo] = useState(null);

    function addVideos(video) {
        setVideos([...videos, { ...video, id: videos.length + 1 }]);
    }

    function deleteVideo(id) {
        const updatedVideos = videos.filter((v) => v.id !== id);
        setVideos(updatedVideos);
    }

    function editVideo(id) {
        const toUpdate = videos.find((v) => v.id === id);

        setEditableVideo(toUpdate);
    }

    function updateVideo(video) {
        const idx = videos.findIndex((v) => v.id === video.id);
        const newVideos = [...videos];
        newVideos.splice(idx, 1, video);

        setVideos(newVideos);
    }

    return (
        <div className="App" onClick={() => console.log("App")}>
            <div className="app-header">Your Tube</div>

            <AddVideo
                addVideos={addVideos}
                updateVideo={updateVideo}
                editableVideo={editableVideo}
            ></AddVideo>

            <VideoList
                deleteVideo={deleteVideo}
                editVideo={editVideo}
                videos={videos}
            ></VideoList>

            {/* <Counter></Counter> */}
        </div>
    );
}

export default App;
