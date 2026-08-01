import React from 'react';
import { Shield, FileText, ExternalLink } from 'lucide-react';

export default function Footer({ onOpenPrivacy, onOpenTerms }) {
  return (
    <footer className="yt-footer" style={{ marginTop: '48px', padding: '24px 16px 36px', borderTop: '1px solid #e0e0e0', background: '#fafafa', color: '#666', fontSize: '12px', textAlign: 'center' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
        
        {/* Navigation Links */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px', alignItems: 'center', fontWeight: 500 }}>
          <button
            onClick={onOpenPrivacy}
            style={{ background: 'none', border: 'none', color: '#cc181e', textDecoration: 'underline', cursor: 'pointer', fontSize: '12px', display: 'inline-flex', alignItems: 'center', gap: '4px', padding: 0 }}
          >
            <Shield size={13} />
            <span>Privacy Policy</span>
          </button>

          <span style={{ color: '#ccc' }}>•</span>

          <button
            onClick={onOpenTerms}
            style={{ background: 'none', border: 'none', color: '#333', textDecoration: 'underline', cursor: 'pointer', fontSize: '12px', display: 'inline-flex', alignItems: 'center', gap: '4px', padding: 0 }}
          >
            <FileText size={13} />
            <span>Terms of Service</span>
          </button>

          <span style={{ color: '#ccc' }}>•</span>

          <a
            href="/privacy.html"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#555', textDecoration: 'none', fontSize: '11px', display: 'inline-flex', alignItems: 'center', gap: '3px' }}
          >
            <span>Privacy Page (Static)</span>
            <ExternalLink size={10} />
          </a>

          <span style={{ color: '#ccc' }}>•</span>

          <a
            href="/terms.html"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#555', textDecoration: 'none', fontSize: '11px', display: 'inline-flex', alignItems: 'center', gap: '3px' }}
          >
            <span>Terms Page (Static)</span>
            <ExternalLink size={10} />
          </a>
        </div>

        {/* Disclaimer Notice */}
        <div style={{ fontSize: '11px', color: '#888', maxWidth: '700px', lineHeight: '1.5' }}>
          LoL Tube Classic is an independent, non-commercial fan project celebrating Season 1–3 League of Legends history (2009–2013). 
          League of Legends is a registered trademark of Riot Games, Inc. Video content and metadata are powered by YouTube API Services.
        </div>

        {/* Copyright & Contact Info */}
        <div style={{ fontSize: '11px', color: '#888' }}>
          © 2026 LoL Tube Classic • Developer: Christian Gomez (<a href="mailto:gomezc1998@gmail.com" style={{ color: '#666', textDecoration: 'underline' }}>gomezc1998@gmail.com</a>) • All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
