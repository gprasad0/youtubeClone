import React, { Component } from "react";
import VideoListsDisplay from "./VideoListsDisplay";
const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map(video => {
     
    return <VideoListsDisplay  key = {video.id.videoId} onVideoSelect={onVideoSelect} video={video} />;
  });

  return (
    <div
      className="ui relaxed divided list "
     
    >
      {renderedList} 
    </div>
  );
};

export default VideoList;
