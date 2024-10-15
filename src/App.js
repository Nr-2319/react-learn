import "./App.css";
import Video from "./components/Video";
import videos from "./data/data";

function App() {
    return (
        <div className="App">
            <div className="app-header">Your Tube</div>

            {videos.map((video) => (
                <Video
                    id={video.id}
                    key={video.id}
                    title={video.title}
                    views={video.views}
                    time={video.time}
                    channel={video.channel}
                    verified={video.verified}
                ></Video>
            ))}
        </div>
    );
}

export default App;
