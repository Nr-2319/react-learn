import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import "./AddVideo.css";
import useVideoDispatch from "../hooks/VideoDispatch";
import { createPortal } from "react-dom";

const initialVideo = {
    time: "1 month ago",
    channel: "nr13",
    verified: true,
    title: "",
    views: "",
};

const AddVideo = forwardRef(function AddVideo({ editableVideo }, ref) {
    const [video, setVideo] = useState(initialVideo);

    const dispatch = useVideoDispatch();

    const iRef = useRef(null)
    useImperativeHandle(ref, ()=>{
        return {
            jumpTo(){
                iRef.current.focus()
            }
        }
    }, [])

    // const inputRef = useRef(null);

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

        // inputRef.current.focus();
    }, [editableVideo]);

    return (
        <form action="">
            <input
                ref={iRef}
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

            {createPortal(<p>
                This child is placed in the document body
            </p>, document.getElementById('root1'))}

        </form>
    );
});

export default AddVideo;
