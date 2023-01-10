import React from 'react';
import "./Feed.css";
import MessageSender from './MessageSender';
import Post from './Post';
import StoryReel from './StoryReel';
import MyImage from "./img/IMG_20220322_035607.jpg";

function Feed() {
  return (
    <div className="feed">
        <StoryReel />
        <MessageSender />
        <Post
          profilePic={MyImage}
          message="WOW this works."
          timestamp="This is a timestamp"
          username="Hojat Joshani"
          image="https://cdn.thegazelle.org/gazelle/2022/09_25_2022/DinaMobaraki_MahsaAmini.jpg"
        />
        <Post />
        <Post />
    </div>
  )
}

export default Feed;