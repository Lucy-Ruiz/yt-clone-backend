import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import RelatedVideos from './RelatedVideos';
import key from "../../API_Key.json";
import CreateCommentForm from '../../components/CreateCommentForm/CreateCommentForm';

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
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${selectedVideo}&type=video&key=${key.googleAPIKey}&part=snippet`)
        console.log('Getting related videos to the search:', response.data)
       
        setRelatedVideos(response.data.items)
        //add &part=snippet to request, pass whole response.data.items into setRelatedVideso
    }

// getRelatedVideos()
    return (
    <div>
        <iframe id="ytplayer" type="text/html" width="640" height="360"

  src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1&origin=http://example.com`}
  frameborder="0"></iframe>
  <CreateCommentForm />
  <RelatedVideos videos={relatedVideos} />
   </div>
    )
}

export default VideoDisplay;