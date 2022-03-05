import React from 'react';
import styles from './videoCard.module.css';

const VideoCard = ({ video }) => {
    return (
        <div className={styles.video}>
            <img src={video.thumbnail} alt="thumbnail" className={styles.thumbnail} />
            <div className={styles.info}>
                <h3 className={styles.title}>{video.title}</h3>
                <p className={styles.channelTitle}>{video.channelTitle}</p>
            </div>
        </div>
    )
}

export default VideoCard;