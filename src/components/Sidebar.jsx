import React from 'react';
import { Home, Trophy, Music, Zap, Flame, Star, Sparkles, Shield } from 'lucide-react';
import { CLASSIC_CATALOG } from '../data/classicCatalog.js';

export default function Sidebar({ activeCategory, onSelectCategory, isOpen, onSelectQuickLink, onOpenPrivacy }) {
  if (!isOpen) return null;

  const countForCategory = (catId) => {
    if (catId === 'ALL') return CLASSIC_CATALOG.length;
    return CLASSIC_CATALOG.filter((item) => item.category === catId).length;
  };

  const categories = [
    { id: 'ALL', label: 'What to Watch', icon: Home, count: 'All' },
    { id: 'dunkey', label: 'Videogamedunkey', icon: Sparkles, count: countForCategory('dunkey') },
    { id: 'sivhd', label: 'SivHD Vault', icon: Zap, count: countForCategory('sivhd') },
    { id: 'montages', label: 'Top 5 Plays & Montages', icon: Trophy, count: countForCategory('montages') },
    { id: 'music', label: 'Music & Parodies', icon: Music, count: countForCategory('music') },
    { id: 'esports', label: 'Esports (S1-S3 Finals)', icon: Flame, count: countForCategory('esports') },
    { id: 'spotlights', label: 'Champion Spotlights', icon: Star, count: countForCategory('spotlights') },
    { id: 'offmeta', label: 'AP & Off-Meta Builds', icon: Shield, count: countForCategory('offmeta') },
  ];

  const handleQuick = (catId, queryText) => {
    if (onSelectQuickLink) {
      onSelectQuickLink(catId, queryText);
    } else {
      onSelectCategory(catId);
    }
  };

  return (
    <aside className="yt-sidebar">
      <div className="yt-guide-group">
        <div className="yt-guide-title">Guide</div>
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isActive = activeCategory === cat.id;
          return (
            <div
              key={cat.id}
              className={`yt-guide-item ${isActive ? 'active' : ''}`}
              onClick={() => onSelectCategory(cat.id)}
            >
              <Icon size={16} />
              <span>{cat.label}</span>
              <span className="yt-guide-badge">{cat.count}</span>
            </div>
          );
        })}
      </div>

      <div className="yt-guide-group">
        <div className="yt-guide-title">Season 3 Classics</div>
        <div className="yt-guide-item" onClick={() => handleQuick('offmeta', 'Deathfire Grasp')}>
          <span>• Deathfire Grasp Rush</span>
        </div>
        <div className="yt-guide-item" onClick={() => handleQuick('sivhd', 'AP Master Yi')}>
          <span>• AP Master Yi Resets</span>
        </div>
        <div className="yt-guide-item" onClick={() => handleQuick('esports', 'xPeke Kassadin')}>
          <span>• xPeke Kassadin Backdoor</span>
        </div>
      </div>

      <div className="yt-guide-group" style={{ marginTop: 'auto', borderTop: '1px solid #e2e2e2', paddingTop: '12px' }}>
        <div
          className="yt-guide-item"
          style={{ fontSize: '11px', color: '#666' }}
          onClick={onOpenPrivacy}
        >
          <Shield size={14} />
          <span>Privacy Policy</span>
        </div>
      </div>
    </aside>
  );
}
