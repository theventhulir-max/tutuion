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
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '35px',
          marginBottom: '40px'
        }} className="footer-responsive-grid">
          
          {/* Col 1: Brand & Bio */}
          <div>
            <div style={{ marginBottom: '16px' }}>
              <Logo size={46} showText={true} isWhite={true} />
            </div>

            <p style={{ fontSize: '0.88rem', color: '#bfdbfe', lineHeight: 1.6, marginBottom: '20px' }}>
              {lang === 'ta'
                ? 'கடந்த 13 ஆண்டுகளாக 100% தேர்ச்சியுடன் மாணவர்களின் கல்விப் பயணத்தை வெற்றிகரமாக்கும் முதன்மை பயிற்சி மையம்.'
                : 'Over 13+ continuous years of 100% pass results. Dedicated to transforming school & college students into confident toppers.'}
            </p>

            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              borderRadius: '8px',
              background: 'rgba(245, 158, 11, 0.2)',
              border: '1px solid rgba(245, 158, 11, 0.4)',
              color: '#fbbf24',
              fontSize: '0.82rem',
              fontWeight: 800
            }}>
              <Award size={16} />
              <span>100% Pass Record Since 2013</span>
            </div>
          </div>

          {/* Col 2: Korukkupet Branch */}
          <div>
            <h4 style={{
              fontSize: '1.05rem',
              fontWeight: 800,
              color: '#ffffff',
              marginBottom: '16px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <MapPin size={18} style={{ color: '#60a5fa' }} />
              <span>Korukkupet Branch (3rd Branch)</span>
            </h4>
            <p style={{ fontSize: '0.86rem', color: '#cbd5e1', lineHeight: 1.6, marginBottom: '14px' }}>
              {tuitionData.branches[0].address[lang] || tuitionData.branches[0].address.en}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.86rem' }}>
              <a href={`tel:${tuitionData.phones[0]}`} style={{ color: '#93c5fd', display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none' }}>
                <Phone size={14} />
                <span>{tuitionData.displayPhones[0]}</span>
              </a>
              <a href={`tel:${tuitionData.phones[1]}`} style={{ color: '#93c5fd', display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none' }}>
                <Phone size={14} />
                <span>{tuitionData.displayPhones[1]}</span>
              </a>
            </div>
          </div>

          {/* Col 3: Tondiarpet Branch */}
          <div>
            <h4 style={{
              fontSize: '1.05rem',
              fontWeight: 800,
              color: '#ffffff',
              marginBottom: '16px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <MapPin size={18} style={{ color: '#34d399' }} />
              <span>Tondiarpet Branch</span>
            </h4>
            <p style={{ fontSize: '0.86rem', color: '#cbd5e1', lineHeight: 1.6, marginBottom: '14px' }}>
              {tuitionData.branches[1].address[lang] || tuitionData.branches[1].address.en}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.86rem' }}>
              <a href={`mailto:${tuitionData.email}`} style={{ color: '#6ee7b7', display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none' }}>
                <Mail size={14} />
                <span>{tuitionData.email}</span>
              </a>
              <div style={{ color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.82rem' }}>
                <Clock size={14} />
                <span>Morning: 6:00 AM | Evening: 5:00 - 9:30 PM</span>
              </div>
            </div>
          </div>

          {/* Col 4: Quick Contact Action */}
          <div>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#ffffff', marginBottom: '16px' }}>
              Direct Contact
            </h4>
            <p style={{ fontSize: '0.84rem', color: '#cbd5e1', lineHeight: 1.5, marginBottom: '16px' }}>
              Speak directly with Academic Director <strong>D. Paranthaman (M.Sc., M.Phil., M.Ed.)</strong> for admission advice.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <button
                onClick={onOpenAdmission}
                style={{
                  background: '#0052cc',
                  color: '#ffffff',
                  padding: '12px',
                  borderRadius: '999px',
                  fontSize: '0.88rem',
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
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  background: '#00875a',
                  color: '#ffffff',
                  padding: '11px',
                  borderRadius: '999px',
                  fontWeight: 800,
                  fontSize: '0.88rem',
                  textDecoration: 'none',
                  boxShadow: '0 4px 10px rgba(0, 135, 90, 0.3)'
                }}
              >
                <MessageCircle size={16} />
                <span>WhatsApp Enquiry</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.15)',
          paddingTop: '25px',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '15px',
          fontSize: '0.82rem',
          color: '#cbd5e1'
        }}>
          <div>
            © {new Date().getFullYear()} JP Goodwill Tuition Centre (குட்வில் டியூஷன் சென்டர்). All Rights Reserved.
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <span>Korukkupet • Tondiarpet • Chennai</span>
            <button
              onClick={scrollToTop}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                color: '#ffffff',
                background: 'rgba(255, 255, 255, 0.1)',
                padding: '6px 12px',
                borderRadius: '6px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                cursor: 'pointer'
              }}
            >
              <span>Back to Top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-responsive-grid {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
          }
          footer {
            padding: 45px 0 85px 0 !important;
          }
        }
      `}</style>
    </footer>
  );
}
