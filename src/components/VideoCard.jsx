import React from 'react';

export default function VideoCard({ video, onClick }) {
  const thumbnailSrc = video.thumbnail || `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;

  return (
    <div className="yt-card" onClick={() => onClick(video)}>
      <div className="yt-thumb-wrapper">
        <img
          src={thumbnailSrc}
          alt={video.title}
          className="yt-thumb"
          onError={(e) => {
            e.target.src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
          }}
        />
        <span className="yt-duration">{video.duration || '3:30'}</span>
        <span className="yt-era-badge">{video.year || '2013'}</span>
      </div>

      <div className="yt-card-title" title={video.title}>
        {video.title}
      </div>

      <div className="yt-card-channel">{video.channelTitle}</div>

      <div className="yt-card-meta">
        <span>{video.viewCount || '1.5M views'}</span>
        <span>•</span>
        <span>{video.year ? `${new Date().getFullYear() - video.year} years ago` : 'Classic'}</span>
      </div>
    </div>
  );
}
