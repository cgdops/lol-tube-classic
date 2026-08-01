import React from 'react';
import { X, ShieldCheck, Lock, EyeOff, ServerOff, CheckCircle2, ExternalLink, Trash2, Mail, User } from 'lucide-react';

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
          
          {/* Guarantee Banner */}
          <div style={{ background: '#e6f4ea', border: '1px solid #b7e1cd', padding: '12px 16px', borderRadius: '4px', marginBottom: '20px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
            <CheckCircle2 size={24} style={{ color: '#137333', flexShrink: 0, marginTop: 2 }} />
            <div>
              <strong style={{ color: '#137333', fontSize: '14px' }}>YouTube API Services Developer Policy Compliance</strong>
              <p style={{ margin: '4px 0 0', color: '#202124', fontSize: '12px' }}>
                LoL Tube Classic is fully compliant with YouTube API Developer Policies.
              </p>
            </div>
          </div>

          {/* Contact Information Section (Required by Policy III.A.2i) */}
          <div style={{ background: '#eef3fd', border: '1px solid #c6dafc', borderLeft: '4px solid #1a73e8', padding: '14px 16px', borderRadius: '4px', marginBottom: '20px' }}>
            <h4 style={{ margin: '0 0 8px', fontSize: '14px', color: '#185abc', display: 'flex', alignItems: 'center', gap: 6 }}>
              <Mail size={16} />
              API Client Developer & Contact Information (Policy III.A.2i)
            </h4>
            <div style={{ fontSize: '12px', color: '#3c4043' }}>
              <div><strong>Developer / API Client Owner:</strong> Christian Gomez</div>
              <div><strong>Contact Email:</strong> <a href="mailto:gomezc1998@gmail.com" style={{ color: '#1a73e8', textDecoration: 'underline' }}>gomezc1998@gmail.com</a></div>
              <div><strong>Project Repository:</strong> <a href="https://github.com/cgdops/lol-tube-classic" target="_blank" rel="noopener noreferrer" style={{ color: '#1a73e8', textDecoration: 'underline' }}>https://github.com/cgdops/lol-tube-classic</a></div>
            </div>
          </div>

          {/* Device Storage, Cookies & Similar Tech Disclosure (Required by Policy III.A.2g) */}
          <div style={{ background: '#fff8e1', border: '1px solid #ffe082', borderLeft: '4px solid #f57f17', padding: '14px 16px', borderRadius: '4px', marginBottom: '20px' }}>
            <h4 style={{ margin: '0 0 8px', fontSize: '14px', color: '#b78103', display: 'flex', alignItems: 'center', gap: 6 }}>
              <ServerOff size={16} />
              Device Storage, Cookies & Similar Technologies Disclosure (Policy III.A.2g)
            </h4>
            <p style={{ margin: 0, fontSize: '12px', color: '#424242' }}>
              Notice: This API Client accesses, collects, stores, and uses information directly or indirectly on or from users' devices, including by placing, accessing, or recognizing cookies or similar technologies on users' devices or web browsers. This includes embedded YouTube/Google video player cookies required for video streaming and local browser <code>sessionStorage</code> used temporarily for query caching.
            </p>
          </div>

          {/* Section 1: Zero Personal Data Collection */}
          <h4 style={{ margin: '16px 0 8px', fontSize: '15px', color: '#111', borderBottom: '1px solid #eee', paddingBottom: '4px', display: 'flex', alignItems: 'center', gap: 6 }}>
            <Lock size={16} style={{ color: '#cc181e' }} />
            1. Personal Data Collection & Storage
          </h4>
          <p>
            LoL Tube Classic does not collect or store any personally identifiable information (PII) such as user names, passwords, or personal identity profiles. No user account registration is required to use this application.
          </p>

          {/* Section 2: Zero Data Sale */}
          <h4 style={{ margin: '20px 0 8px', fontSize: '15px', color: '#111', borderBottom: '1px solid #eee', paddingBottom: '4px', display: 'flex', alignItems: 'center', gap: 6 }}>
            <EyeOff size={16} style={{ color: '#cc181e' }} />
            2. Zero Data Sale or Commercial Transfer
          </h4>
          <p>
            We do not sell, rent, trade, share, or monetize user data with third-party advertisers, data brokers, tracking services, or marketing partners under any circumstances.
          </p>

          {/* Section 3: YouTube API Services & Google Privacy Policy Notice */}
          <div style={{ background: '#f8f9fa', border: '1px solid #dadce0', borderLeft: '4px solid #cc181e', padding: '16px', borderRadius: '4px', margin: '20px 0' }}>
            <h4 style={{ margin: '0 0 10px', fontSize: '15px', color: '#111', display: 'flex', alignItems: 'center', gap: 6 }}>
              <ExternalLink size={16} style={{ color: '#cc181e' }} />
              3. YouTube API Services & Google Privacy Compliance Notice
            </h4>
            <p style={{ margin: '0 0 10px' }}>
              LoL Tube Classic uses <strong>YouTube API Services</strong> to display public video content, thumbnails, titles, and channel metadata. By using this application, users agree to be bound by the official terms and policies of YouTube and Google:
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
          </div>

          {/* Section 4: Data Deletion & Access Revocation Policy */}
          <div style={{ background: '#fce8e6', border: '1px solid #fad2cf', borderLeft: '4px solid #d93025', padding: '16px', borderRadius: '4px', margin: '20px 0' }}>
            <h4 style={{ margin: '0 0 10px', fontSize: '15px', color: '#b31412', display: 'flex', alignItems: 'center', gap: 6 }}>
              <Trash2 size={16} style={{ color: '#d93025' }} />
              4. User Data Deletion & Access Revocation Policy
            </h4>
            <ul style={{ margin: '0 0 10px', paddingLeft: '20px' }}>
              <li style={{ marginBottom: '6px' }}>
                <strong>Clearing Local Browser Cache:</strong> Any temporary search results cached in browser <code>sessionStorage</code> can be deleted immediately by clearing your web browser cache or closing your browser tab.
              </li>
              <li>
                <strong>Revoking Google Access Permissions:</strong> Users can view, manage, or revoke access permissions at any time via the official Google Security Settings page:{' '}
                <a href="https://security.google.com/settings/security/permissions" target="_blank" rel="noopener noreferrer" style={{ color: '#d93025', textDecoration: 'underline', fontWeight: 600 }}>
                  https://security.google.com/settings/security/permissions
                </a>
              </li>
            </ul>
          </div>

          <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid #e0e0e0', textAlign: 'center', color: '#666', fontSize: '11px' }}>
            Last updated: August 2026 • LoL Tube Classic (YouTube API Services Compliant)
          </div>
        </div>
      </div>
    </div>
  );
}
