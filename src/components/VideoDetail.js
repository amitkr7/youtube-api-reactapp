import React from 'react';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading.....</div>;
  }

  const videosrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div className='ui segment'>
      <div className='ui embed'>
        <iframe src={videosrc} frameborder='0' title={video.snippet.title} />
      </div>
      <h3 className='header'>{video.snippet.title}</h3>
      <p>{video.snippet.description}</p>
    </div>
  );
};

export default VideoDetail;
