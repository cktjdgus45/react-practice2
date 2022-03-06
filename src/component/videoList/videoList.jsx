import React from 'react';
import VideoCard from '../videoCard/videoCard';
import styles from './videoList.module.css';

const VideoList = ({ videos, setClickedVideo, layout }) => {

    return (
        <div className={styles.wrapper}>
            {
                videos.map(video => {
                    return (
                        <VideoCard key={JSON.stringify(video.id)} layout={layout} setClickedVideo={setClickedVideo} videoId={video.id.videoId} video={video.snippet} />
                    )
                })
            }
        </div>
    )
}

export default VideoList;