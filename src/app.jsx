import React, { useState } from 'react';
import './app.css';
import Header from './component/header/header';
import VideoCard from './component/videoCard/videoCard';

const App = (props) => {
  const [videos, setVideos] = useState([
    {
      id: 1,
      thumbnail: "https://i.ytimg.com/vi/gdZLi9oWNZg/mqdefault.jpg",
      title: 'video-title1',
      channelTitle: "HYBE LABELS",
    },
    {
      id: 2,
      thumbnail: "https://i.ytimg.com/vi/gdZLi9oWNZg/mqdefault.jpg",
      title: 'video-title2',
      channelTitle: "HYBE LABELS",
    },
    {
      id: 3,
      thumbnail: "https://i.ytimg.com/vi/gdZLi9oWNZg/mqdefault.jpg",
      title: 'video-title3',
      channelTitle: "HYBE LABELS",
    },
    {
      id: 4,
      thumbnail: "https://i.ytimg.com/vi/gdZLi9oWNZg/mqdefault.jpg",
      title: 'video-title4',
      channelTitle: "HYBE LABELS",
    },
  ]);
  return (
    <div className='app'>
      <Header setVideos={setVideos} />
      <div className="wrapper">
        {
          videos.map(video => {
            return (
              <VideoCard key={video.id} video={video.snippet} />
            )
          })
        }
      </div>
    </div>
  )
}

export default App;