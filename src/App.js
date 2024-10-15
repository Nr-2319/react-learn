import "./App.css";
import Video from "./components/Video";

function App() {
    const channelName = "PeaceKill13";
    return (
        <div className="App">
            <header className="App-header">Hello World</header>
            <Video
                title="ReactJs"
                views="10K"
                time="1 year ago"
                channel={channelName}
            ></Video>
            <Video
                title="NodeJs"
                views="100K"
                time="1 month ago"
                channel={channelName}
            ></Video>
            <Video
                title="Mongo DB tutorial"
                views="100K"
                time="2 month ago"
                channel={channelName}
            ></Video>
        </div>
    );
}

export default App;
