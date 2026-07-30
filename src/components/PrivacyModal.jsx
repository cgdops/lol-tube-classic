import React from 'react';
import { X, ShieldCheck, Lock, EyeOff, ServerOff, CheckCircle2, ExternalLink, Trash2, KeyRound } from 'lucide-react';

export default function PrivacyModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="yt-modal-backdrop" onClick={onClose}>
      <div className="yt-modal-container" style={{ maxWidth: '720px', height: 'auto', maxHeight: '88vh' }} onClick={(e) => e.stopPropagation()}>
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
        <div style={{ padding: '24px 28px', overflowY: 'auto', maxHeight: 'calc(88vh - 60px)', background: '#fdfdfd', color: '#333', fontSize: '13px', lineHeight: '1.6' }}>
          
          {/* Top Guarantee Banner */}
          <div style={{ background: '#e6f4ea', border: '1px solid #b7e1cd', padding: '12px 16px', borderRadius: '4px', marginBottom: '20px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
            <CheckCircle2 size={24} style={{ color: '#137333', flexShrink: 0, marginTop: 2 }} />
            <div>
              <strong style={{ color: '#137333', fontSize: '14px' }}>Strict Zero-Data & YouTube API Compliance Guarantee</strong>
              <p style={{ margin: '4px 0 0', color: '#202124', fontSize: '12px' }}>
                LoL Tube Classic does not collect, store, keep, track, or sell user personal data. We comply fully with Google & YouTube API Developer Policies.
              </p>
            </div>
          </div>

          {/* Section 1: Zero Personal Data Collection */}
          <h4 style={{ margin: '16px 0 8px', fontSize: '15px', color: '#111', borderBottom: '1px solid #eee', paddingBottom: '4px', display: 'flex', alignItems: 'center', gap: 6 }}>
            <Lock size={16} style={{ color: '#cc181e' }} />
            1. Zero Personal Data Collection & Storage
          </h4>
          <p>
            LoL Tube Classic does not collect, capture, or store any personally identifiable information (PII) such as names, email addresses, IP addresses, passwords, or personal accounts. No user account registration is required to use this application.
          </p>

          {/* Section 2: Zero Data Sale */}
          <h4 style={{ margin: '20px 0 8px', fontSize: '15px', color: '#111', borderBottom: '1px solid #eee', paddingBottom: '4px', display: 'flex', alignItems: 'center', gap: 6 }}>
            <EyeOff size={16} style={{ color: '#cc181e' }} />
            2. Zero Data Sale or Commercial Transfer
          </h4>
          <p>
            We do not sell, rent, trade, share, or monetize user data with third-party advertisers, data brokers, tracking services, or marketing partners under any circumstances.
          </p>

          {/* Section 3: YouTube API Services & Google Privacy Policy Notice (Required for Google Audit) */}
          <div style={{ background: '#f8f9fa', border: '1px solid #dadce0', borderLeft: '4px solid #cc181e', padding: '16px', borderRadius: '4px', margin: '20px 0' }}>
            <h4 style={{ margin: '0 0 10px', fontSize: '15px', color: '#111', display: 'flex', alignItems: 'center', gap: 6 }}>
              <ExternalLink size={16} style={{ color: '#cc181e' }} />
              3. YouTube API Services & Google Privacy Compliance Notice
            </h4>
            <p style={{ margin: '0 0 10px' }}>
              LoL Tube Classic uses <strong>YouTube API Services</strong> to display public video content, thumbnails, titles, and channel metadata. By using this application, you agree to be bound by the official terms and policies of YouTube and Google:
            </p>
            <ul style={{ margin: '0 0 10px', paddingLeft: '20px' }}>
              <li style={{ marginBottom: '6px' }}>
                <strong>YouTube Terms of Service:</strong>{' '}
                <a href="https://www.youtube.com/t/terms" target="_blank" rel="noopener noreferrer" style={{ color: '#cc181e', textDecoration: 'underline', fontWeight: 600 }}>
                  https://www.youtube.com/t/terms
                </a>
              </li>
              <li>
                <strong>Google Privacy Policy:</strong>{' '}
                <a href="http://www.google.com/policies/privacy" target="_blank" rel="noopener noreferrer" style={{ color: '#cc181e', textDecoration: 'underline', fontWeight: 600 }}>
                  http://www.google.com/policies/privacy
                </a>
              </li>
            </ul>
            <p style={{ margin: 0, fontSize: '12px', color: '#5f6368' }}>
              Notice: This application accesses YouTube API Services exclusively to fetch public video metadata. We do not request, access, store, or modify any user YouTube account data.
            </p>
          </div>

          {/* Section 4: Data Deletion & Access Revocation Policy (Required for Google Audit) */}
          <div style={{ background: '#fce8e6', border: '1px solid #fad2cf', borderLeft: '4px solid #d93025', padding: '16px', borderRadius: '4px', margin: '20px 0' }}>
            <h4 style={{ margin: '0 0 10px', fontSize: '15px', color: '#b31412', display: 'flex', alignItems: 'center', gap: 6 }}>
              <Trash2 size={16} style={{ color: '#d93025' }} />
              4. User Data Deletion & Access Revocation Policy
            </h4>
            <p style={{ margin: '0 0 8px' }}>
              Because LoL Tube Classic does not collect or store user data, we maintain <strong>zero persistent user records</strong> to delete.
            </p>
            <ul style={{ margin: '0 0 10px', paddingLeft: '20px' }}>
              <li style={{ marginBottom: '6px' }}>
                <strong>Clearing Local Cached Search Data:</strong> Any temporary search results cached in your browser's local <code>sessionStorage</code> can be deleted immediately by clearing your web browser cache or closing your browser tab.
              </li>
              <li>
                <strong>Revoking Google Access Permissions:</strong> You can view, manage, or revoke access permissions granted to third-party applications at any time via the official Google Security Settings page:{' '}
                <a href="https://security.google.com/settings/security/permissions" target="_blank" rel="noopener noreferrer" style={{ color: '#d93025', textDecoration: 'underline', fontWeight: 600 }}>
                  https://security.google.com/settings/security/permissions
                </a>
              </li>
            </ul>
          </div>

          {/* Section 5: Local Browser Caching */}
          <h4 style={{ margin: '20px 0 8px', fontSize: '15px', color: '#111', borderBottom: '1px solid #eee', paddingBottom: '4px', display: 'flex', alignItems: 'center', gap: 6 }}>
            <ServerOff size={16} style={{ color: '#cc181e' }} />
            5. Local Browser Session Storage
          </h4>
          <p>
            Temporary search responses are cached solely inside your web browser's local session memory (<code>sessionStorage</code>) to reduce network requests. This data resides exclusively on your local device and is wiped automatically when your browser tab closes.
          </p>

          <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid #e0e0e0', textAlign: 'center', color: '#666', fontSize: '11px' }}>
            Last updated: July 2026 • LoL Tube Classic (YouTube API Compliant)
          </div>
        </div>
      </div>
    </div>
  );
}
