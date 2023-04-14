import React from "react";
import { forwardRef } from "react";

const VideoPlayer = forwardRef(({ Ref, Video }) => {
    return (
        <div>
            <video src={Video} ref={Ref}></video>
        </div>
    )
})

export default VideoPlayer;