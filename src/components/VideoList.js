import React, { useEffect } from "react";
import Video from "./Video";
import PlayButton from "./PlayButton";
import useVideos from "../hooks/Videos";
import axios from "axios";
import useVideoDispatch from "../hooks/VideoDispatch";

const VideoList = ({ editVideo }) => {
    const url = "https://my.api.mockaroo.com/videos.json?key=0dd50060";

    const videos = useVideos();
    const dispatch = useVideoDispatch();

    async function handleClick(e) {
        const res = await axios.get(url);

        console.log("getVideos");
        dispatch({ type: "LOAD", payload: res.data });
        console.log(res.data);
    }

    useEffect(() => {
        async function getVideos() {
            const res = await axios.get(url);

            console.log("getVideos");
            dispatch({ type: "LOAD", payload: res.data });
            console.log(res.data);
        }

        getVideos();
    }, [dispatch]);

    return (
        <>
            {videos.map((video) => (
                <Video
                    id={video.id}
                    key={video.id}
                    title={video.title}
                    views={video.views}
                    time={video.time}
                    channel={video.channel}
                    verified={video.verified}
                    editVideo={editVideo}
                >
                    <PlayButton
                        onPlay={(msg) => console.log(msg, video.title)}
                        onPause={(msg) => console.log(msg, video.title)}
                    >
                        {video.title}
                    </PlayButton>
                </Video>
            ))}

            <button onClick={handleClick}>Get Videos</button>
        </>
    );
};

export default VideoList;
