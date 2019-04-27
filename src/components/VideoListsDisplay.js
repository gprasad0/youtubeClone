import React, { Component } from "react";
import "./videoItem.css";

const VideoListsDisplay = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} className="item video-item">
      <img
        src={video.snippet.thumbnails.high.url}
        alt=""
        className="ui image"
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoListsDisplay;
