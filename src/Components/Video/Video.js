import React, { useRef, useState } from 'react'
import VideoFooter from '../VideoFooter/VideoFooter';
import VideoSidebar from '../VideoSidebar/VideoSidebar';
import './Video.css';

function Video({ url, channel, description, song, likes, messages, shares }) {
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);

    const handleVideoPress = () => {
        // If video is playing stop it
        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
        } else {
            videoRef.current.play();
            setPlaying(true);
        }
        // If video is paused, run it.
    }

    return (
        <div className='video'>
            <video onClick={handleVideoPress} className='video__player' ref={videoRef} loop src={url} ></video>

            {/* Video Footer */}
            <VideoFooter channel={channel} description={description} song={song} />

            {/* Video Sidebar */}
            <VideoSidebar likes={likes} shares={shares} messages={messages} />
        </div>
    )
}

export default Video
