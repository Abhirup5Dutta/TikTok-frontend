import React, { useEffect, useState } from 'react';
import './App.css';
import Video from './Components/Video/Video';
import axios from './axios';

function App() {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get('/v2/posts');
      setVideos(response.data);

      return response;
    }

    // Calling the function after it fetches data from the database
    fetchPosts();
  }, []);

  console.log(videos);

  return (
    // BEM naming convention
    <div className="app">
      <div className="app__videos">
        {
          videos.map(({ url, channel, description, song, likes, shares, messages }) => (
            <Video
              url={url}
              channel={channel}
              description={description}
              song={song}
              likes={likes}
              shares={shares}
              messages={messages}
            />
          ))
        }
      </div>
    </div>
  );
}

export default App;
