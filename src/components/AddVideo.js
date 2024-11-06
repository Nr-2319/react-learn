import React, { useEffect, useState } from "react";
import "./AddVideo.css";
import useVideoDispatch from "../hooks/VideoDispatch";

const initialVideo = {
    time: "1 month ago",
    channel: "nr13",
    verified: true,
    title: "",
    views: "",
};

const AddVideo = ({ editableVideo }) => {
    const [video, setVideo] = useState(initialVideo);

    const dispatch = useVideoDispatch();

    function handleSubmit(e) {
        e.preventDefault();
        if (editableVideo) {
            dispatch({ type: "UPDATE", payload: video });
        } else {
            dispatch({ type: "ADD", payload: video });
        }

        setVideo(initialVideo);
    }
    function handleChange(e) {
        setVideo({ ...video, [e.target.name]: e.target.value });
    }

    // apne aap function chalana
    useEffect(() => {
        if (editableVideo) {
            setVideo(editableVideo);
        }
    }, [editableVideo]);

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

            <button onClick={handleSubmit}>
                {editableVideo ? "Edit" : "Add"} Video
            </button>
        </form>
    );
};

export default AddVideo;
