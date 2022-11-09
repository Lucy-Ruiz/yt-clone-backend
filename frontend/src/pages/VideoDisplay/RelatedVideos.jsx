import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RelatedVideos = (props) => {

//look at console log to see correct propeties of 'video' to create linkUrl and get title/description/thumbnail for link text
    return(

        <table>
            <thead>
                <tr>
                    <th>Video Id</th>
                </tr>
            </thead>
            
            <tbody>
                {props.videos.map((video, index) => {
                    console.log('video variable inside RelatedVideos map', video)
                    let linkUrl=`/video/${video.id.videoId}`
                    return(
                        <tr>
                            <img src={video.snippet.thumbnails.default.url}/>
                            <Link to={linkUrl} >{video.snippet.title}</Link>
                            {/* <td> <iframe id="ytplayer" type="text/html" width="640" height="360"

                            src={`https://www.youtube.com/embed/${videoId}?origin=http://example.com&part=snippet`}
                            frameborder="0"></iframe>
                            </td> */}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default RelatedVideos;