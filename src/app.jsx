import React, { useEffect, useState } from 'react';
import './app.css';
import Header from './component/header/header';
import VideoDetail from './component/videoDetail/videoDetail';
import VideoList from './component/videoList/videoList';
import axios from 'axios';

const App = (props) => {
  const [videos, setVideos] = useState([]);
  const [clickedVideo, setClickedVideo] = useState(false);

  useEffect(() => {
    axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&chart=mostPopular&maxResults=25&key=${process.env.REACT_APP_APIKEY}`)
      .then(res => setVideos(res.data.items))
      .catch(e => console.log(e));
  }, []);
  return (
    <div className='app'>
      <Header setVideos={setVideos} setClickedVideo={setClickedVideo} />
      <>
        {
          !clickedVideo && <VideoList videos={videos} setClickedVideo={setClickedVideo} />
        }
        {
          clickedVideo &&
          <div className='wrapper'>
            <VideoDetail video={clickedVideo} />
            <VideoList videos={videos} layout={'grid'} setClickedVideo={setClickedVideo} />
          </div>
        }
      </>
    </div>
  )
}

export default App;