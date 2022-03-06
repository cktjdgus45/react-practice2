import React from 'react';
import styles from './videoCard.module.css';

const VideoCard = ({ video }) => {

    function decodingString(str) {
        const textArea = document.createElement('textarea');
        textArea.innerHTML = str;
        return textArea.value;
    }
    return (
        <div className={styles.video}>
            <img src={video.thumbnails.default.url} alt="thumbnail" className={styles.thumbnail} />
            <div className={styles.info}>
                <h3 className={styles.title}>{decodingString(video.title)}</h3>
                <p className={styles.channelTitle}>{video.channelTitle}</p>
            </div>
        </div>
    )
}

export default VideoCard;