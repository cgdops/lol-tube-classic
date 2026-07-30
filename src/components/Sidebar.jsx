import React from 'react';
import { Home, Trophy, Music, Zap, Flame, Star, Sparkles, Shield } from 'lucide-react';

export default function Sidebar({ activeCategory, onSelectCategory, isOpen }) {
  if (!isOpen) return null;

  const categories = [
    { id: 'ALL', label: 'What to Watch', icon: Home, count: 'All' },
    { id: 'dunkey', label: 'Videogamedunkey', icon: Sparkles, count: '3' },
    { id: 'sivhd', label: 'SivHD Vault', icon: Zap, count: '2' },
    { id: 'montages', label: 'Top 5 Plays & Montages', icon: Trophy, count: '2' },
    { id: 'music', label: 'Music & Parodies', icon: Music, count: '2' },
    { id: 'esports', label: 'Esports (S1-S3 Finals)', icon: Flame, count: '4' },
    { id: 'spotlights', label: 'Champion Spotlights', icon: Star, count: '2' },
    { id: 'offmeta', label: 'AP & Off-Meta Builds', icon: Shield, count: '1' },
  ];

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
        <div className="yt-guide-item" onClick={() => onSelectCategory('offmeta')}>
          <span>• Deathfire Grasp Rush</span>
        </div>
        <div className="yt-guide-item" onClick={() => onSelectCategory('sivhd')}>
          <span>• AP Master Yi Resets</span>
        </div>
        <div className="yt-guide-item" onClick={() => onSelectCategory('esports')}>
          <span>• xPeke Kassadin Backdoor</span>
        </div>
      </div>
    </aside>
  );
}
