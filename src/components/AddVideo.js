import React, { useState } from "react";
import "./AddVideo.css";

const initialVideo = {
    time: "1 month ago",
    channel: "nr13",
    verified: true,
    title: "",
    views: "",
};

const AddVideo = ({ addVideos }) => {
    const [video, setVideo] = useState(initialVideo);

    function handleSubmit(e) {
        e.preventDefault();
        addVideos(video);
        setVideo(initialVideo);
    }
    function handleChange(e) {
        setVideo({ ...video, [e.target.name]: e.target.value });
    }

    return (
        <form action="">
            <input
                type="text"
                name="title"
                id=""
                placeholder="title"
                onChange={handleChange}
                value={video.title}
            />
            <input
                type="text"
                onChange={handleChange}
                placeholder="views"
                name="views"
                id=""
                value={video.views}
            />

            <button onClick={handleSubmit}>Add Videos</button>
        </form>
    );
};

export default AddVideo;
