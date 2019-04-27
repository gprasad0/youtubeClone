import React from "react";

const VideoPlayer = ({ selectedVideo }) => {
  if (!selectedVideo) {
    return <div>Loading.....</div>;
  }

  let videoPlayerSrc = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`;
  return (
    <div>
      <div className="ui embed">
        <iframe
          title="video player"
          width="748"
          height="421"
          src={videoPlayerSrc}
        />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{selectedVideo.snippet.title}</h4>
        <p>{selectedVideo.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoPlayer;
