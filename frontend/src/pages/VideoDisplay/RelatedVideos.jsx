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
                            <td>{videoId}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default RelatedVideos;