import React from 'react';
import { Calendar, CheckCircle2, Info } from 'lucide-react';

export default function EraFilterBar({ activeYear, onSelectYear, apiStatus }) {
  const years = [
    { id: 'ALL', label: 'All Era (2009–2013)' },
    { id: '2009-2010', label: '2009–2010 (Beta / S1)' },
    { id: '2011', label: '2011 (Season 1)' },
    { id: '2012', label: '2012 (Season 2)' },
    { id: '2013', label: '2013 (Season 3)' },
  ];

  return (
    <div className="yt-filter-bar">
      <div className="yt-filter-group">
        <span className="yt-filter-label">
          <Calendar size={13} style={{ display: 'inline', marginRight: 4, verticalAlign: 'middle' }} />
          Era Filter:
        </span>
        {years.map((y) => (
          <button
            key={y.id}
            className={`yt-filter-btn ${activeYear === y.id ? 'active' : ''}`}
            onClick={() => onSelectYear(y.id)}
          >
            {y.label}
          </button>
        ))}
      </div>

      {apiStatus && (
        <div className={`yt-status-badge ${apiStatus.source.includes('CURATED') ? 'api-fallback' : ''}`}>
          {apiStatus.source.includes('LIVE') ? (
            <CheckCircle2 size={13} />
          ) : (
            <Info size={13} />
          )}
          <span>{apiStatus.message}</span>
        </div>
      )}
    </div>
  );
}
