import "./Video.css";

const Video = ({ title, channel, views, time, verified, id, children }) => {
    return (
        <>
            <div className="container">
                <div className="pic">
                    <img
                        src={`https://picsum.photos/id/${id + 10}/160/90`}
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
