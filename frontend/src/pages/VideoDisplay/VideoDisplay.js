import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import RelatedVideos from './RelatedVideos';
import key from "../../API_Key.json";

const VideoDisplay = () => {
    // const [selectedVideoId, setSelectedVideoId] = useState('');
    const [relatedVideos, setRelatedVideos] = useState ([]);
    const {selectedVideo} = useParams()
    // setSelectedVideoId(selectedVideo)
    useEffect(() => {
        getRelatedVideos();
    }, [])
    async function getRelatedVideos(){
        console.log('Obtaining related video to selectedVideos:', selectedVideo)
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${selectedVideo}&type=video&key=${key.googleAPIKey}`)
        console.log('Getting related videos to the search:', response.data)
        let relatedVideoIds = response.data.items.map((video, index) => {
            return(video.id.videoId)
        }) 
        setRelatedVideos(relatedVideoIds)
    }
// getRelatedVideos()
    return (
    <div>
        <iframe id="ytplayer" type="text/html" width="640" height="360"

  src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1&origin=http://example.com`}
  frameborder="0"></iframe>
  <RelatedVideos videos={relatedVideos} />
   </div>
    )
}

export default VideoDisplay;