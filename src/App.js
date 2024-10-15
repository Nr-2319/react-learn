import "./App.css";
import PlayButton from "./components/PlayButton";
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
                >
                    <PlayButton
                        onPlay={(msg) => console.log(msg, video.title)}
                        onPause={(msg) => console.log(msg, video.title)}
                    >
                        {video.title}
                    </PlayButton>
                </Video>
            ))}
        </div>
    );
}

export default App;
