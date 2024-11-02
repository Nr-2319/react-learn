import "./Video.css";

const Video = ({
    title,
    channel,
    views,
    time,
    verified,
    id,
    children,
    dispatch,
    editVideo,
}) => {
    console.log("render Video");

    return (
        <>
            <div className="container">
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
};

export default Video;
