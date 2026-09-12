import React from 'react';
import { Phone, Mail, MapPin, Clock, Award, ArrowUp, MessageCircle } from 'lucide-react';
import Logo from './Logo';
import { tuitionData } from '../data/tuitionData';

export default function Footer({ lang, onOpenAdmission }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" style={{
      background: '#093f7c',
      color: '#f8fafc',
      padding: '70px 0 30px 0',
      borderTop: '4px solid #00875a',
      position: 'relative'
    }}>
      <div className="container">
        
        {/* Main Footer Grid */}
        <div className="footer-responsive-grid">
          
          {/* Col 1: Brand & Bio */}
          <div className="footer-col-box">
            <div style={{ marginBottom: '12px' }}>
              <Logo size={42} showText={true} isWhite={true} />
            </div>

            <p className="footer-p" style={{ fontSize: '0.88rem', color: '#bfdbfe', lineHeight: 1.55, marginBottom: '14px' }}>
              {lang === 'ta'
                ? 'கடந்த 13 ஆண்டுகளாக 100% தேர்ச்சியுடன் மாணவர்களின் கல்விப் பயணத்தை வெற்றிகரமாக்கும் முதன்மை பயிற்சி மையம்.'
                : 'Over 13+ continuous years of 100% pass results. Dedicated to transforming school & college students into confident toppers.'}
            </p>

            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 10px',
              borderRadius: '6px',
              background: 'rgba(245, 158, 11, 0.2)',
              border: '1px solid rgba(245, 158, 11, 0.4)',
              color: '#fbbf24',
              fontSize: '0.78rem',
              fontWeight: 800
            }}>
              <Award size={14} />
              <span>100% Pass Record Since 2013</span>
            </div>
          </div>

          {/* Col 2: Korukkupet Branch */}
          <div className="footer-col-box">
            <h4 className="footer-h4" style={{
              fontSize: '1.02rem',
              fontWeight: 800,
              color: '#ffffff',
              marginBottom: '12px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              <MapPin size={16} style={{ color: '#60a5fa' }} />
              <span>Korukkupet Branch (3rd Branch)</span>
            </h4>
            <p className="footer-p" style={{ fontSize: '0.84rem', color: '#cbd5e1', lineHeight: 1.5, marginBottom: '10px' }}>
              {tuitionData.branches[0].address[lang] || tuitionData.branches[0].address.en}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.84rem' }}>
              <a href={`tel:${tuitionData.phones[0]}`} style={{ color: '#93c5fd', display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none' }}>
                <Phone size={13} />
                <span>{tuitionData.displayPhones[0]}</span>
              </a>
              <a href={`tel:${tuitionData.phones[1]}`} style={{ color: '#93c5fd', display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none' }}>
                <Phone size={13} />
                <span>{tuitionData.displayPhones[1]}</span>
              </a>
            </div>
          </div>

          {/* Col 3: Tondiarpet Branch */}
          <div className="footer-col-box">
            <h4 className="footer-h4" style={{
              fontSize: '1.02rem',
              fontWeight: 800,
              color: '#ffffff',
              marginBottom: '12px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              <MapPin size={16} style={{ color: '#34d399' }} />
              <span>Tondiarpet Branch</span>
            </h4>
            <p className="footer-p" style={{ fontSize: '0.84rem', color: '#cbd5e1', lineHeight: 1.5, marginBottom: '10px' }}>
              {tuitionData.branches[1].address[lang] || tuitionData.branches[1].address.en}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.84rem' }}>
              <a href={`mailto:${tuitionData.email}`} style={{ color: '#6ee7b7', display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none' }}>
                <Mail size={13} />
                <span>{tuitionData.email}</span>
              </a>
              <div style={{ color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.78rem' }}>
                <Clock size={13} />
                <span>Morning: 6:00 AM | Evening: 5:00 - 9:30 PM</span>
              </div>
            </div>
          </div>

          {/* Col 4: Quick Contact Action */}
          <div className="footer-col-box">
            <h4 className="footer-h4" style={{ fontSize: '1.02rem', fontWeight: 800, color: '#ffffff', marginBottom: '12px' }}>
              Direct Contact
            </h4>
            <p className="footer-p" style={{ fontSize: '0.82rem', color: '#cbd5e1', lineHeight: 1.45, marginBottom: '12px' }}>
              Academic Director: <strong>D. Paranthaman (M.Sc., M.Phil., M.Ed.)</strong>
            </p>
            <div className="footer-btns-wrap" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <button
                onClick={onOpenAdmission}
                className="footer-btn-compact"
                style={{
                  background: '#0052cc',
                  color: '#ffffff',
                  padding: '10px 16px',
                  borderRadius: '999px',
                  fontSize: '0.84rem',
                  fontWeight: 800,
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 4px 10px rgba(0, 82, 204, 0.3)'
                }}
              >
                <span>Apply for Admission</span>
              </button>

              <a
                href={`https://wa.me/${tuitionData.whatsappNumber}?text=Hello%20Goodwill%20Tuition%20Centre`}
                target="_blank"
                rel="noreferrer"
                className="footer-btn-compact"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  background: '#00875a',
                  color: '#ffffff',
                  padding: '10px 16px',
                  borderRadius: '999px',
                  fontWeight: 800,
                  fontSize: '0.84rem',
                  textDecoration: 'none',
                  boxShadow: '0 4px 10px rgba(0, 135, 90, 0.3)'
                }}
              >
                <MessageCircle size={15} />
                <span>WhatsApp Enquiry</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="footer-bottom-bar" style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.12)',
          paddingTop: '20px',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '12px',
          fontSize: '0.80rem',
          color: '#cbd5e1'
        }}>
          <div>
            © {new Date().getFullYear()} JP Goodwill Tuition Centre. All Rights Reserved.
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span>Korukkupet • Tondiarpet • Chennai</span>
            <button
              onClick={scrollToTop}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                color: '#ffffff',
                background: 'rgba(255, 255, 255, 0.1)',
                padding: '4px 10px',
                borderRadius: '6px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                cursor: 'pointer',
                fontSize: '0.76rem'
              }}
            >
              <span>Back to Top</span>
              <ArrowUp size={12} />
            </button>
          </div>
        </div>

      </div>

      <style>{`
        .footer-responsive-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 35px;
          margin-bottom: 35px;
        }
        @media (max-width: 768px) {
          footer {
            padding: 30px 0 60px 0 !important;
          }
          .footer-responsive-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
            margin-bottom: 24px !important;
          }
          .footer-col-box {
            padding-bottom: 16px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          }
          .footer-col-box:last-child {
            border-bottom: none;
            padding-bottom: 0;
          }
          .footer-h4 {
            font-size: 0.95rem !important;
            margin-bottom: 10px !important;
          }
          .footer-p {
            font-size: 0.82rem !important;
            line-height: 1.45 !important;
            margin-bottom: 10px !important;
          }
          .footer-btn-compact {
            padding: 9px 14px !important;
            font-size: 0.82rem !important;
          }
          .footer-bottom-bar {
            padding-top: 16px !important;
            gap: 10px !important;
            font-size: 0.76rem !important;
            text-align: center !important;
            justify-content: center !important;
            flex-direction: column !important;
          }
        }
      `}</style>
    </footer>
  );
}
