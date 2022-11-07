import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const VideoDisplay = () => {

    const {selectedVideo} = useParams()
    return (
        
        <iframe id="ytplayer" type="text/html" width="640" height="360"

// I need a variable to change the key and display a video related to the input
  src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1&origin=http://example.com`}
  frameborder="0"></iframe>
    )
}

export default VideoDisplay;