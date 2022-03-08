import React from 'react';
import styles from './videoDetail.module.css';

const VideoDetail = ({ video }) => {
    function decodingString(str) {
        const textArea = document.createElement('textarea');
        textArea.innerHTML = str;
        return textArea.value;
    }
    return (
        <div className={styles.videoContainer}>
            <iframe
                title='test'
                id="ytplayer"
                type="text/html"
                className={styles.iframe}
                src={`https://www.youtube.com/embed/${video.videoId}`}
                frameBorder="0"
                allowFullScreen>
            </iframe>
            <div className={styles.info}>
                <h3 className={styles.title}>{decodingString(video.title)}</h3>
                <p className={styles.channelTitle}>{video.channelTitle}</p>
                <p className={styles.description}>{video.description}</p>
            </div>
        </div>
    )
}

export default VideoDetail;