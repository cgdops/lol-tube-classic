import React from 'react';
import { X, ThumbsUp, ThumbsDown, Share2, Flag, ExternalLink } from 'lucide-react';

export default function VideoModal({ video, onClose, relatedVideos, onSelectRelated }) {
  if (!video) return null;

  const embedUrl = `https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`;
  const watchUrl = `https://www.youtube.com/watch?v=${video.id}`;
  const likeRatio = video.likeRatio || 97;

  return (
    <div className="yt-modal-backdrop" onClick={onClose}>
      <div className="yt-modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="yt-modal-header">
          <h3>{video.title}</h3>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <a
              href={watchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="yt-filter-btn"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 4, padding: '4px 10px', fontSize: '12px', textDecoration: 'none', color: '#333', background: '#f8f8f8', border: '1px solid #ccc', borderRadius: '2px' }}
            >
              <ExternalLink size={13} />
              <span>Watch on YouTube</span>
            </a>
            <button className="yt-close-btn" onClick={onClose} title="Close Player">
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="yt-modal-body">
          {/* Main Video & Details Column */}
          <div className="yt-main-player-col">
            <div className="yt-player-frame">
              <iframe
                src={embedUrl}
                title={video.title}
                width="100%"
                height="100%"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <div className="yt-video-details">
              <h1 className="yt-video-title">{video.title}</h1>

              <div className="yt-video-actions-bar">
                <div className="yt-channel-info">
                  <div className="yt-channel-avatar">
                    {video.channelTitle ? video.channelTitle.charAt(0).toUpperCase() : 'Y'}
                  </div>
                  <div>
                    <div className="yt-channel-name">{video.channelTitle}</div>
                    <div style={{ fontSize: '11px', color: '#666' }}>Published in {video.year || 2013}</div>
                  </div>
                  <button className="yt-sub-btn" onClick={() => alert(`Subscribed to ${video.channelTitle}!`)}>
                    Subscribe
                  </button>
                </div>

                <div className="yt-stats-info">
                  <div className="yt-view-count">{video.viewCount || '2,450,120 views'}</div>
                  <div className="yt-like-bar-container" title={`${likeRatio}% Likes`}>
                    <div className="yt-like-bar-fill" style={{ width: `${likeRatio}%` }}></div>
                  </div>
                  <div className="yt-like-text">
                    <ThumbsUp size={11} style={{ display: 'inline', marginRight: 3 }} />
                    <span>{likeRatio}% rating</span>
                  </div>
                </div>
              </div>

              {/* Description Box */}
              <div className="yt-description-box">
                <div className="yt-pub-date">Uploaded on {video.publishedAt ? new Date(video.publishedAt).toLocaleDateString() : `Jan 15, ${video.year || 2013}`}</div>
                <p>{video.description}</p>
                <div style={{ marginTop: 12, paddingTop: 8, borderTop: '1px solid #e5e5e5', fontSize: '11px', color: '#888' }}>
                  Category: Gaming | Game: League of Legends (Classic Season {video.year === 2013 ? '3' : video.year === 2012 ? '2' : '1'})
                </div>
              </div>
            </div>
          </div>

          {/* Related Videos Sidebar */}
          <div className="yt-related-col">
            <div className="yt-related-title">Up Next (Classic LoL)</div>
            <div className="yt-related-list">
              {relatedVideos
                .filter((r) => r.id !== video.id)
                .slice(0, 7)
                .map((item) => (
                  <div
                    key={item.id}
                    className="yt-related-item"
                    onClick={() => onSelectRelated(item)}
                  >
                    <img
                      src={item.thumbnail || `https://img.youtube.com/vi/${item.id}/hqdefault.jpg`}
                      alt={item.title}
                      className="yt-related-thumb"
                      onError={(e) => {
                        e.target.src = `https://img.youtube.com/vi/${item.id}/hqdefault.jpg`;
                      }}
                    />
                    <div className="yt-related-info">
                      <div className="yt-related-item-title">{item.title}</div>
                      <div className="yt-related-channel">{item.channelTitle}</div>
                      <div className="yt-related-views">{item.viewCount || '1.2M views'}</div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
