import { memo, useContext, useLayoutEffect, useRef } from "react";
import "./Video.css";
import ThemeContext from "../context/ThemeContext";
import useVideoDispatch from "../hooks/VideoDispatch";

const Video = memo(function Video({
    title,
    channel,
    views,
    time,
    verified,
    id,
    children,
    editVideo,
}) {
    console.log("render Video", id);
    const themeContext = useContext(ThemeContext);
    const dispatch = useVideoDispatch();

    const ref = useRef(null);

    // useLayoutEffect(() => {
    //     const { height } = ref.current.getBoundingClientRect();
    //     console.log(height);
    // }, []);

    // useEffect(() => {
    //     const idx = setInterval(() => {
    //         console.log("video playing", id);
    //     }, 5000);

    //     return () => {
    //         clearInterval(idx);
    //     };
    // }, [id]);

    return (
        <>
            <div ref={ref} className={`container ${themeContext}`}>
                <button
                    className="close"
                    onClick={() => {
                        dispatch({ type: "DELETE", payload: id });
                    }}
                >
                    X
                </button>
                <button
                    className="edit"
                    onClick={() => {
                        editVideo(id);
                    }}
                >
                    Edit
                </button>
                <div className="pic">
                    <img
                        src={`https://picsum.photos/id/${id}/160/90`}
                        alt="placeholder"
                    />
                </div>
                <div className="title">{title}</div>
                <div className="channel">
                    {channel}{" "}
                    {verified ? <span>&#9989;</span> : <span>&#10060;</span>}
                </div>

                <div className="views">
                    {views} views <span>.</span> {time}
                </div>

                <div>{children}</div>
            </div>
        </>
    );
});

export default Video;
