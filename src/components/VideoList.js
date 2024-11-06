import React from "react";
import Video from "./Video";
import PlayButton from "./PlayButton";
import useVideos from "../hooks/Videos";

const VideoList = ({ editVideo }) => {
    const videos = useVideos();
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
        </>
    );
};

export default VideoList;
