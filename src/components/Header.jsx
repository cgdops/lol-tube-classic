import React, { useState } from 'react';
import { Menu, Search, Upload } from 'lucide-react';

export default function Header({ onSearch, toggleSidebar, searchQuery }) {
  const [term, setTerm] = useState(searchQuery || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(term);
  };

  return (
    <header className="yt-header">
      <div className="yt-header-left">
        <button className="yt-guide-btn" onClick={toggleSidebar} title="Guide menu">
          <Menu size={20} />
        </button>
        <a href="#" className="yt-logo" onClick={() => { setTerm(''); onSearch(''); }}>
          <span>LoL</span>
          <span className="yt-logo-badge">Tube</span>
          <span className="yt-tag-classic">Classic</span>
        </a>
      </div>

      <form className="yt-search-container" onSubmit={handleSubmit}>
        <input
          type="text"
          className="yt-search-input"
          placeholder="Search classic 2009-2013 videos (e.g. AP Yi, Dunkey, SivHD, xPeke)..."
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <button type="submit" className="yt-search-btn" title="Search">
          <Search size={14} />
        </button>
      </form>

      <div className="yt-header-right">
        <button className="yt-upload-btn">
          <Upload size={14} />
          <span>Upload</span>
        </button>
      </div>
    </header>
  );
}
