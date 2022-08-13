import {useRef, useEffect} from "react";
import * as stream from "stream";

function App() {

    const video = useRef(null);

    useEffect(() => {
        navigator.mediaDevices.getUserMedia({video: {width: 1280, height: 720}})
            .then(stream => {
                video.current.srcObject = stream;
                video.current.play();
            })
            .catch(err => console.log(err))
    }, [])


    return (
        <>
            <video ref={video} autoPlay muted/>
        </>
    );
}

export default App;