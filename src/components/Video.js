import "./Video.css";

const Video = ({ title, channel, views, time }) => {
    return (
        <>
            <div className="container">
                <div className="pic">
                    <img src="https://placehold.co/400x300" alt="placeholder" />
                </div>
                <div className="title">{title}</div>
                <div className="channel">{channel}</div>
                <div className="views">
                    {views} views <span>.</span> {time}
                </div>
            </div>
        </>
    );
};

export default Video;
