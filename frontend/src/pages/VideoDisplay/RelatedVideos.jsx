import React, { useState } from 'react';

const RelatedVideos = (props) => {


    return(

        <table>
            <thead>
                <tr>
                    <th>Video Id</th>
                </tr>
            </thead>
            <tbody>
                {props.videos.map((videoId, index) => {
                    return(
                        <tr>
                            <td> <iframe id="ytplayer" type="text/html" width="640" height="360"

                            src={`https://www.youtube.com/embed/${videoId}?origin=http://example.com&part=snippet`}
                            frameborder="0"></iframe>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default RelatedVideos;