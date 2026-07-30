import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import EraFilterBar from './components/EraFilterBar';
import VideoCard from './components/VideoCard';
import VideoModal from './components/VideoModal';
import { searchClassicVideos } from './services/youtube';
import { Sparkles, Film, Radio } from 'lucide-react';

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [activeYear, setActiveYear] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [apiStatus, setApiStatus] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Load videos whenever search, year, or category changes (with 350ms search debounce)
  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    const timer = setTimeout(async () => {
      const res = await searchClassicVideos({
        query: searchQuery,
        yearFilter: activeYear,
        category: activeCategory
      });

      if (isMounted) {
        setVideos(res.videos);
        setApiStatus({ source: res.source, message: res.message });
        setLoading(false);
      }
    }, searchQuery ? 350 : 0);

    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, [searchQuery, activeYear, activeCategory]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleSelectCategory = (catId) => {
    setActiveCategory(catId);
  };

  const handleSelectQuickLink = (catId, queryText) => {
    setActiveCategory(catId);
    setSearchQuery(queryText);
  };

  const handleSelectYear = (yearId) => {
    setActiveYear(yearId);
  };

  return (
    <div className="yt-app">
      <Header
        onSearch={handleSearch}
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        searchQuery={searchQuery}
      />

      <div className="yt-main">
        <Sidebar
          activeCategory={activeCategory}
          onSelectCategory={handleSelectCategory}
          onSelectQuickLink={handleSelectQuickLink}
          isOpen={sidebarOpen}
        />

        <main className="yt-content">
          {/* Welcome Nostalgia Banner */}
          <div className="yt-banner">
            <div className="yt-banner-text">
              <h2>Welcome to LoL Tube Classic (2009–2013)</h2>
              <p>Recreating the iconic Season 1–3 YouTube experience: Dunkey, SivHD, Protatomonster, IEM Katowice, and AP Master Yi builds.</p>
            </div>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              <span className="yt-banner-badge">Season 3 Era</span>
            </div>
          </div>

          {/* Era Filter Bar */}
          <EraFilterBar
            activeYear={activeYear}
            onSelectYear={handleSelectYear}
            apiStatus={apiStatus}
          />

          {/* Main Video Feed */}
          {loading ? (
            <div style={{ padding: '40px', textAlign: 'center', color: '#666' }}>
              <Film className="animate-spin" size={32} style={{ margin: '0 auto 12px' }} />
              <div>Loading 2009–2013 League of Legends videos...</div>
            </div>
          ) : videos.length === 0 ? (
            <div style={{ padding: '40px', textAlign: 'center', background: '#fff', border: '1px solid #ddd' }}>
              <h3>No classic videos found</h3>
              <p style={{ color: '#666', marginTop: 6 }}>Try clearing your search or picking a different year filter.</p>
              <button
                className="yt-filter-btn active"
                style={{ marginTop: 12 }}
                onClick={() => { setSearchQuery(''); setActiveYear('ALL'); setActiveCategory('ALL'); }}
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="yt-grid">
              {videos.map((video) => (
                <VideoCard
                  key={video.id}
                  video={video}
                  onClick={(v) => setSelectedVideo(v)}
                />
              ))}
            </div>
          )}
        </main>
      </div>

      {/* Retro Player Modal */}
      {selectedVideo && (
        <VideoModal
          video={selectedVideo}
          onClose={() => setSelectedVideo(null)}
          relatedVideos={videos}
          onSelectRelated={(v) => setSelectedVideo(v)}
        />
      )}
    </div>
  );
}
