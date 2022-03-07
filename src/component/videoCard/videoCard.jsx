import React from 'react';
import styles from './videoCard.module.css';

const VideoCard = ({ video, setClickedVideo, layout, videoId }) => {

    function handleClick(e) {
        setClickedVideo({ ...video, videoId });
    }

    function decodingString(str) {
        const textArea = document.createElement('textarea');
        textArea.innerHTML = str;
        return textArea.value;
    }

    return (
        <div className={`${styles.video} ${layout ? `${styles.grid}` : `${styles.flex}`}`} onClick={handleClick}>
            <img src={video.thumbnails.default.url} alt="thumbnail" className={styles.thumbnail} />
            <div className={styles.info}>
                <h3 className={styles.title}>{decodingString(video.title)}</h3>
                <p className={styles.channelTitle}>{video.channelTitle}</p>
            </div>
        </div>
    )
}

export default VideoCard;