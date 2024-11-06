import { useContext } from "react";
import VideosDispatchContext from "../context/VideosDispatchContext";

function useVideoDispatch() {
    return useContext(VideosDispatchContext);
}

export default useVideoDispatch;
