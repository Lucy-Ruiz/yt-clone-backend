import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import RelatedVideos from './RelatedVideos';

const VideoDisplay = () => {
    // const [selectedVideoId, setSelectedVideoId] = useState('');
    const {selectedVideo} = useParams()
    // setSelectedVideoId(selectedVideo)

    // async function getRelatedVideos(){
    //     console.log('Obtaining related video to selectedVideos:', selectedVideoId)
    //     return (
  
    //     )
    // }

    return (
    <div>
        <iframe id="ytplayer" type="text/html" width="640" height="360"

  src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1&origin=http://example.com`}
  frameborder="0"></iframe>
  <RelatedVideos/>
   </div>
    )
}

export default VideoDisplay;