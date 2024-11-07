import React, {
    useCallback,
    useDeferredValue,
    useEffect,
    useMemo,
} from "react";
import Video from "./Video";
import PlayButton from "./PlayButton";
import useVideos from "../hooks/Videos";
import axios from "axios";
import useVideoDispatch from "../hooks/VideoDispatch";
import videosDB from "../data/data";
import moreVideos from "../data/moreData";

const VideoList = ({ editVideo }) => {
    const url = "https://my.api.mockaroo.com/videos.json?key=0dd50060";

    const videos = useVideos();
    const dispatch = useVideoDispatch();

    const defVideos = useDeferredValue(videos);

    async function handleClick(e) {
        // const res = await axios.get(url);

        console.log("getVideos");
        dispatch({ type: "LOAD", payload: moreVideos });
        console.log(moreVideos);
    }

    useEffect(() => {
        async function getVideos() {
            // const res = await axios.get(url);

            console.log("getVideos");
            dispatch({ type: "LOAD", payload: videosDB });
            console.log(videosDB);
        }

        getVideos();
    }, [dispatch]);

    const play = useCallback(() => console.log("Playing.."), []);
    const pause = useCallback(() => console.log("Paused.."), []);

    const memoButton = useMemo(
        () => (
            <PlayButton onPlay={play} onPause={pause}>
                {/* {video.title} */}
                Play Video
            </PlayButton>
        ),
        [pause, play]
    );

    return (
        <>
            <button onClick={handleClick}>Get Videos</button>
            {defVideos.map((video) => (
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
                    {memoButton}
                </Video>
            ))}
        </>
    );
};

export default VideoList;
