import React from 'react';
import { X, FileText, AlertCircle, ExternalLink, CheckCircle } from 'lucide-react';

export default function TermsModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="yt-modal-backdrop" onClick={onClose}>
      <div className="yt-modal-container" style={{ maxWidth: '680px', height: 'auto', maxHeight: '85vh' }} onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="yt-modal-header" style={{ background: '#333', color: '#fff' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <FileText size={20} />
            <h3 style={{ color: '#fff', margin: 0 }}>Terms of Service — LoL Tube Classic</h3>
          </div>
          <button className="yt-close-btn" onClick={onClose} title="Close Terms of Service" style={{ color: '#fff' }}>
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div style={{ padding: '24px 28px', overflowY: 'auto', maxHeight: 'calc(85vh - 60px)', background: '#fdfdfd', color: '#333', fontSize: '13px', lineHeight: '1.6' }}>
          
          <div style={{ background: '#f5f5f5', border: '1px solid #e0e0e0', padding: '12px 16px', borderRadius: '4px', marginBottom: '20px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
            <AlertCircle size={24} style={{ color: '#666', flexShrink: 0, marginTop: 2 }} />
            <div>
              <strong style={{ color: '#111', fontSize: '14px' }}>Unofficial Non-Commercial Fan Project</strong>
              <p style={{ margin: '4px 0 0', color: '#555', fontSize: '12px' }}>
                LoL Tube Classic is an independent nostalgia project celebrating 2009–2013 League of Legends video history.
              </p>
            </div>
          </div>

          <h4 style={{ margin: '16px 0 8px', fontSize: '15px', color: '#111', borderBottom: '1px solid #eee', paddingBottom: '4px' }}>
            1. Acceptance of Terms
          </h4>
          <p>
            By accessing or using LoL Tube Classic, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please discontinue use of the site.
          </p>

          <h4 style={{ margin: '20px 0 8px', fontSize: '15px', color: '#111', borderBottom: '1px solid #eee', paddingBottom: '4px' }}>
            2. Intellectual Property & Fan Project Disclaimer
          </h4>
          <p>
            League of Legends and Riot Games are trademarks or registered trademarks of Riot Games, Inc. LoL Tube Classic is not endorsed by, directly affiliated with, maintained, authorized, or sponsored by Riot Games, YouTube, or Google LLC. All video content, audio, channel names, and trademarks belong to their respective original creators and rights holders.
          </p>

          <h4 style={{ margin: '20px 0 8px', fontSize: '15px', color: '#111', borderBottom: '1px solid #eee', paddingBottom: '4px' }}>
            3. Use of YouTube Embedded Services
          </h4>
          <p>
            Video streams and search results rely on public YouTube Data API v3 endpoints and official YouTube iframe embeds. By viewing videos on this site, you also agree to be bound by the{' '}
            <a href="https://www.youtube.com/t/terms" target="_blank" rel="noopener noreferrer" style={{ color: '#cc181e', textDecoration: 'underline', display: 'inline-flex', alignItems: 'center', gap: 2 }}>
              YouTube Terms of Service <ExternalLink size={11} />
            </a>.
          </p>

          <h4 style={{ margin: '20px 0 8px', fontSize: '15px', color: '#111', borderBottom: '1px solid #eee', paddingBottom: '4px' }}>
            4. User Conduct & Acceptable Use
          </h4>
          <p>
            You agree to use this application solely for personal, non-commercial entertainment. You agree not to attempt to scrape, disrupt, reverse-engineer, or overload the application or API services.
          </p>

          <h4 style={{ margin: '20px 0 8px', fontSize: '15px', color: '#111', borderBottom: '1px solid #eee', paddingBottom: '4px' }}>
            5. Disclaimer of Warranties & Limitation of Liability
          </h4>
          <p>
            LoL Tube Classic is provided on an "AS IS" and "AS AVAILABLE" basis without warranties of any kind. We do not guarantee uninterrupted availability, error-free operation, or third-party video availability.
          </p>

          <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid #e0e0e0', textAlign: 'center', color: '#666', fontSize: '11px' }}>
            Last updated: July 2026 • LoL Tube Classic
          </div>
        </div>
      </div>
    </div>
  );
}
