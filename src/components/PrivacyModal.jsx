import React from 'react';
import { X, ShieldCheck, Lock, EyeOff, ServerOff, CheckCircle2 } from 'lucide-react';

export default function PrivacyModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="yt-modal-backdrop" onClick={onClose}>
      <div className="yt-modal-container" style={{ maxWidth: '680px', height: 'auto', maxHeight: '85vh' }} onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="yt-modal-header" style={{ background: '#cc181e', color: '#fff' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <ShieldCheck size={20} />
            <h3 style={{ color: '#fff', margin: 0 }}>Privacy Policy — LoL Tube Classic</h3>
          </div>
          <button className="yt-close-btn" onClick={onClose} title="Close Privacy Policy" style={{ color: '#fff' }}>
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div style={{ padding: '24px 28px', overflowY: 'auto', maxHeight: 'calc(85vh - 60px)', background: '#fdfdfd', color: '#333', fontSize: '13px', lineHeight: '1.6' }}>
          
          <div style={{ background: '#e6f4ea', border: '1px solid #b7e1cd', padding: '12px 16px', borderRadius: '4px', marginBottom: '20px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
            <CheckCircle2 size={24} style={{ color: '#137333', flexShrink: 0, marginTop: 2 }} />
            <div>
              <strong style={{ color: '#137333', fontSize: '14px' }}>Strict Zero-Data Policy Guarantee</strong>
              <p style={{ margin: '4px 0 0', color: '#202124', fontSize: '12px' }}>
                LoL Tube Classic does not collect, store, track, keep, or sell your personal data in any way, shape, or form.
              </p>
            </div>
          </div>

          <h4 style={{ margin: '16px 0 8px', fontSize: '15px', color: '#111', borderBottom: '1px solid #eee', paddingBottom: '4px', display: 'flex', alignItems: 'center', gap: 6 }}>
            <Lock size={16} style={{ color: '#cc181e' }} />
            1. Zero Personal Data Collection
          </h4>
          <p>
            We do not require user registration, accounts, passwords, or personal identity details (such as names, email addresses, or phone numbers) to use this service. You are free to browse and watch classic videos completely anonymously.
          </p>

          <h4 style={{ margin: '20px 0 8px', fontSize: '15px', color: '#111', borderBottom: '1px solid #eee', paddingBottom: '4px', display: 'flex', alignItems: 'center', gap: 6 }}>
            <ServerOff size={16} style={{ color: '#cc181e' }} />
            2. Zero Data Retention & Storage
          </h4>
          <p>
            We do not maintain any databases, user profiles, or server logs storing your search history, IP address, device fingerprints, or video view history. Search queries are processed transiently in your browser to fetch classic video listings and are never saved.
          </p>

          <h4 style={{ margin: '20px 0 8px', fontSize: '15px', color: '#111', borderBottom: '1px solid #eee', paddingBottom: '4px', display: 'flex', alignItems: 'center', gap: 6 }}>
            <EyeOff size={16} style={{ color: '#cc181e' }} />
            3. Zero Data Sale or Monetization
          </h4>
          <p>
            We do not sell, rent, trade, share, or monetize user information with third-party advertisers, data brokers, tracking companies, or marketing agencies under any circumstances.
          </p>

          <h4 style={{ margin: '20px 0 8px', fontSize: '15px', color: '#111', borderBottom: '1px solid #eee', paddingBottom: '4px' }}>
            4. Local Browser Session Caching
          </h4>
          <p>
            To optimize performance and minimize API usage, temporary query responses may be stored locally inside your web browser's temporary session storage (<code>sessionStorage</code>). This temporary data resides solely on your local device and is automatically erased as soon as you close your browser tab.
          </p>

          <h4 style={{ margin: '20px 0 8px', fontSize: '15px', color: '#111', borderBottom: '1px solid #eee', paddingBottom: '4px' }}>
            5. Embedded Third-Party Content (YouTube)
          </h4>
          <p>
            Video playback is powered via YouTube's official embedded iframe player. Interactions with embedded videos are governed directly by YouTube and Google's standard Privacy Policy.
          </p>

          <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid #e0e0e0', textAlign: 'center', color: '#666', fontSize: '11px' }}>
            Last updated: July 2026 • LoL Tube Classic
          </div>
        </div>
      </div>
    </div>
  );
}
