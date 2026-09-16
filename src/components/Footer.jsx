import React, { useState } from 'react';
import { Phone, Mail, MapPin, ArrowUp, Navigation } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import Logo from './Logo';

export default function Footer({ lang = 'ta', onOpenAdmission }) {
  const [selectedBranch, setSelectedBranch] = useState('tondiarpet');

  const branches = {
    korukkupet: {
      nameEn: 'Korukkupet Campus (Branch 1)',
      nameTa: 'கொருக்குப்பேட்டை கிளை (முதன்மை கிளை)',
      addressEn: 'No: 12, Driver Colony, K.H. Road, Korukkupet, Chennai - 21.',
      addressTa: 'எண்: 12, டிரைவர் காலனி, K.H. ரோடு, கொருக்குப்பேட்டை, சென்னை - 21.',
      landmarkEn: 'Near Kathivakkam High Road Junction',
      landmarkTa: 'கத்திவாக்கம் நெடுஞ்சாலை & டிரைவர் காலனி அருகில்',
      phone: '80155 73223',
      altPhone: '82480 06633',
      timingsEn: '6:00 AM – 9:30 PM',
      timingsTa: 'காலை 6:00 – இரவு 9:30',
      mapQuery: '12 Driver Colony Kathivakkam High Road Korukkupet Chennai 600021',
      mapEmbedUrl: 'https://maps.google.com/maps?q=12+Driver+Colony+Kathivakkam+High+Road+Korukkupet+Chennai+600021&t=&z=15&ie=UTF8&iwloc=&output=embed'
    },
    tondiarpet: {
      nameEn: 'Tondiarpet Campus (Branch 2)',
      nameTa: 'தண்டையார்பேட்டை கிளை (VOC நகர்)',
      addressEn: 'No. 86/40, 8th Cross St, VOC Nagar, Tondiarpet, Chennai - 81.',
      addressTa: 'எண்: 86/40, 8வது குறுக்கு தெரு, வ.உ.சி நகர், தண்டையார்பேட்டை, சென்னை - 81.',
      landmarkEn: 'Near VOC Nagar 8th Cross Street',
      landmarkTa: 'VOC நகர் 8வது குறுக்கு தெரு சந்திப்பு அருகில்',
      phone: '80155 73223',
      altPhone: '82480 06633',
      timingsEn: '6:00 AM – 9:30 PM',
      timingsTa: 'காலை 6:00 – இரவு 9:30',
      mapQuery: '86/40 8th Cross Street VOC Nagar Tondiarpet Chennai 600081',
      mapEmbedUrl: 'https://maps.google.com/maps?q=86+40+8th+Cross+Street+VOC+Nagar+Tondiarpet+Chennai+600081&t=&z=15&ie=UTF8&iwloc=&output=embed'
    }
  };

  const currentBranch = branches[selectedBranch];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" style={{ background: '#ffffff', position: 'relative' }}>
      
      {/* ─── TIER 1: TOP CAMPUS HUB & INTERACTIVE GOOGLE MAP (WHITE BG) ─── */}
      <div style={{
        background: '#ffffff',
        padding: '52px 0 46px 0',
        borderTop: '1px solid #e2e8f0'
      }}>
        <div className="container">
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr 1fr',
            gap: '40px',
            alignItems: 'start'
          }} className="footer-top-grid">
            
            {/* Left Side: Brand Logo, Tagline, 2 Campus Cards & 3 CTAs */}
            <div>
              {/* Logo */}
              <div style={{ marginBottom: '14px' }}>
                <Logo size={46} showText={true} isWhite={false} />
              </div>

              {/* Tagline */}
              <p style={{
                fontSize: '0.96rem',
                color: '#334155',
                lineHeight: 1.6,
                marginBottom: '22px',
                maxWidth: '520px',
                fontWeight: 500
              }}>
                {lang === 'ta'
                  ? '2013 முதல் 100% தேர்ச்சி சாதனையுடன் கொருக்குப்பேட்டை & தண்டையார்பேட்டையில் இயங்கும் முதன்மை பயிற்சி மையம்.'
                  : 'Premier academic coaching institute with 13+ continuous years of 100% board exam pass records across Korukkupet and Tondiarpet.'}
              </p>

              {/* 2 Branch Cards Side-by-Side */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '14px',
                marginBottom: '22px'
              }} className="footer-top-branch-cards">
                
                {/* Korukkupet Card */}
                <div
                  onClick={() => setSelectedBranch('korukkupet')}
                  style={{
                    background: '#ffffff',
                    border: selectedBranch === 'korukkupet' ? '2px solid var(--accent-green)' : '1.5px solid var(--card-border)',
                    borderRadius: '14px',
                    padding: '15px 16px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    boxShadow: selectedBranch === 'korukkupet' ? '0 4px 14px var(--theme-glow)' : '0 2px 6px rgba(0, 0, 0, 0.02)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--accent-green)', fontWeight: 800, fontSize: '0.92rem', marginBottom: '6px' }}>
                    <MapPin size={16} style={{ flexShrink: 0 }} />
                    <span>{lang === 'ta' ? 'கொருக்குப்பேட்டை கிளை' : 'Korukkupet Campus'}</span>
                  </div>
                  <div style={{ fontSize: '0.84rem', color: '#475569', lineHeight: 1.45, marginBottom: '8px' }}>
                    {lang === 'ta' ? branches.korukkupet.addressTa : branches.korukkupet.addressEn}
                  </div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 800, color: 'var(--primary-navy)', display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <Phone size={14} />
                    <span>80155 73223</span>
                  </div>
                </div>

                {/* Tondiarpet Card */}
                <div
                  onClick={() => setSelectedBranch('tondiarpet')}
                  style={{
                    background: '#ffffff',
                    border: selectedBranch === 'tondiarpet' ? '2px solid var(--accent-green)' : '1.5px solid var(--card-border)',
                    borderRadius: '14px',
                    padding: '15px 16px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    boxShadow: selectedBranch === 'tondiarpet' ? '0 4px 14px var(--theme-glow)' : '0 2px 6px rgba(0, 0, 0, 0.02)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--accent-green)', fontWeight: 800, fontSize: '0.92rem', marginBottom: '6px' }}>
                    <MapPin size={16} style={{ flexShrink: 0 }} />
                    <span>{lang === 'ta' ? 'தண்டையார்பேட்டை கிளை' : 'Tondiarpet Campus'}</span>
                  </div>
                  <div style={{ fontSize: '0.84rem', color: '#475569', lineHeight: 1.45, marginBottom: '8px' }}>
                    {lang === 'ta' ? branches.tondiarpet.addressTa : branches.tondiarpet.addressEn}
                  </div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 800, color: 'var(--primary-navy)', display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <Phone size={14} />
                    <span>80155 73223</span>
                  </div>
                </div>

              </div>

              {/* 3 Action Buttons in One Row */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                flexWrap: 'wrap'
              }}>
                <button
                  onClick={onOpenAdmission}
                  style={{
                    background: 'var(--accent-green)',
                    color: '#ffffff',
                    padding: '11px 22px',
                    borderRadius: '999px',
                    fontWeight: 800,
                    fontSize: '0.90rem',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    boxShadow: '0 3px 10px rgba(0, 0, 0, 0.2)'
                  }}
                >
                  <Phone size={15} />
                  <span>{lang === 'ta' ? 'சேர்க்கை முன்பதிவு' : 'Apply for Admission'}</span>
                </button>

                <a
                  href="https://wa.me/918015573223?text=Hello%20JP%20Goodwill%20Tuition%20Centre,%20I%20want%20to%20know%20about%20admissions."
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    background: '#ffffff',
                    color: '#25D366',
                    border: '1.5px solid #25D366',
                    padding: '10px 20px',
                    borderRadius: '999px',
                    fontWeight: 800,
                    fontSize: '0.90rem',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    boxShadow: '0 2px 6px rgba(37, 211, 102, 0.15)',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#25D366';
                    e.currentTarget.style.color = '#ffffff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#ffffff';
                    e.currentTarget.style.color = '#25D366';
                  }}
                >
                  <WhatsAppIcon size={17} />
                  <span>WhatsApp</span>
                </a>

                <a
                  href="tel:8015573223"
                  style={{
                    color: '#0056b3',
                    fontSize: '0.92rem',
                    fontWeight: 800,
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px'
                  }}
                >
                  <Phone size={15} />
                  <span>80155 73223</span>
                </a>
              </div>

            </div>

            {/* Right Side: Map Header, Switcher Tabs & Embedded Google Map Card */}
            <div>
              {/* Header & Active Branch Indicator */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '12px',
                gap: '8px'
              }}>
                <div style={{ fontSize: '0.95rem', fontWeight: 900, color: 'var(--primary-navy)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <MapPin size={17} style={{ color: 'var(--accent-green)' }} />
                  <span>{lang === 'ta' ? 'கிளை இருப்பிடம் (Google Map)' : 'Campus Location Map'}</span>
                </div>

                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: 'var(--accent-green-light)',
                  color: 'var(--accent-green)',
                  padding: '4px 12px',
                  borderRadius: '999px',
                  border: '1px solid var(--accent-green)',
                  fontSize: '0.78rem',
                  fontWeight: 800
                }}>
                  <span style={{
                    width: '7px',
                    height: '7px',
                    borderRadius: '50%',
                    background: '#22c55e',
                    boxShadow: '0 0 0 2px rgba(34, 197, 94, 0.3)'
                  }} />
                  <span>{lang === 'ta' ? (selectedBranch === 'korukkupet' ? 'கொருக்குப்பேட்டை' : 'தண்டையார்பேட்டை') : (selectedBranch === 'korukkupet' ? 'Korukkupet Campus' : 'Tondiarpet Campus')}</span>
                </div>
              </div>

              {/* Map Card */}
              <div style={{
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1.5px solid #d0e7fb',
                background: '#ffffff',
                boxShadow: '0 6px 20px var(--theme-glow)'
              }}>
                <iframe
                  title={currentBranch.nameEn}
                  src={currentBranch.mapEmbedUrl}
                  width="100%"
                  height="185"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

                {/* Bottom Address Strip with Directions Button */}
                <div style={{
                  background: '#ffffff',
                  padding: '12px 16px',
                  borderTop: '1px solid #e2e8f0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '12px'
                }}>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontSize: '0.88rem', fontWeight: 900, color: 'var(--primary-navy)' }}>
                      {lang === 'ta' ? currentBranch.nameTa : currentBranch.nameEn}
                    </div>
                    <div style={{ fontSize: '0.78rem', color: '#64748b', marginTop: '1px' }}>
                      {lang === 'ta' ? currentBranch.landmarkTa : currentBranch.landmarkEn} • {lang === 'ta' ? currentBranch.timingsTa : currentBranch.timingsEn}
                    </div>
                  </div>

                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(currentBranch.mapQuery)}`}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      background: '#0284c7',
                      color: '#ffffff',
                      padding: '7px 15px',
                      borderRadius: '999px',
                      fontSize: '0.82rem',
                      fontWeight: 800,
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px',
                      flexShrink: 0,
                      boxShadow: '0 2px 8px rgba(2, 132, 199, 0.25)'
                    }}
                  >
                    <Navigation size={13} />
                    <span>{lang === 'ta' ? 'வழித்தடம்' : 'Directions'}</span>
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* ─── TIER 2: 4-COLUMN FOOTER & SOCIALS (DARK ELEGANT NAVY BG WITH BRIGHT HIGH-CONTRAST TYPOGRAPHY) ─── */}
      <div style={{
        background: 'linear-gradient(180deg, var(--primary-navy) 0%, #061e38 100%)',
        borderTop: '1px solid rgba(255, 255, 255, 0.15)',
        padding: '50px 0 28px 0',
        color: '#ffffff'
      }}>
        <div className="container">
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr 1.15fr 0.85fr',
            gap: '36px',
            marginBottom: '36px'
          }} className="footer-bottom-columns">
            
            {/* Column 1: Brand & Motto */}
            <div>
              <div style={{ marginBottom: '14px' }}>
                <Logo size={44} showText={true} isWhite={true} />
              </div>
              <p style={{
                fontSize: '0.90rem',
                color: '#f1f5f9',
                lineHeight: 1.65,
                margin: 0,
                fontWeight: 400,
                maxWidth: '310px'
              }}>
                {lang === 'ta'
                  ? 'தரமான வழிகாட்டல் • பிரகாசமான எதிர்காலம். 2013 முதல் வடசென்னையில் 100% தேர்ச்சி சாதனை படைக்கும் பயிற்சி மையம்.'
                  : 'Better Guidance • Brighter Future. Shaping high academic achievers in North Chennai since 2013.'}
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h5 style={{
                fontSize: '1.05rem',
                fontWeight: 800,
                color: '#ffffff',
                margin: '0 0 14px 0',
                fontFamily: 'var(--font-heading)',
                letterSpacing: '0.02em'
              }}>
                {lang === 'ta' ? 'முக்கிய இணைப்புகள்' : 'Quick Links'}
              </h5>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '9px' }}>
                {[
                  { labelTa: 'முகப்பு', labelEn: 'Home', href: '#home' },
                  { labelTa: 'அறிமுகம்', labelEn: 'About Us', href: '#about' },
                  { labelTa: 'சிறப்புகள்', labelEn: 'Highlights', href: '#highlights' },
                  { labelTa: 'பாடங்கள்', labelEn: 'Courses', href: '#courses' },
                  { labelTa: 'கிளைகள்', labelEn: 'Branches', href: '#branches' },
                  { labelTa: 'தொடர்பு', labelEn: 'Contact', href: '#contact' }
                ].map((item, i) => (
                  <li key={i}>
                    <a
                      href={item.href}
                      style={{
                        fontSize: '0.90rem',
                        color: '#f1f5f9',
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        transition: 'all 0.2s ease',
                        fontWeight: 500
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#38bdf8';
                        e.currentTarget.style.transform = 'translateX(4px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = '#f1f5f9';
                        e.currentTarget.style.transform = 'translateX(0)';
                      }}
                    >
                      <span style={{ color: '#38bdf8', fontSize: '0.90rem', fontWeight: 800 }}>›</span>
                      <span>{lang === 'ta' ? item.labelTa : item.labelEn}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Contact Us */}
            <div>
              <h5 style={{
                fontSize: '1.05rem',
                fontWeight: 800,
                color: '#ffffff',
                margin: '0 0 14px 0',
                fontFamily: 'var(--font-heading)',
                letterSpacing: '0.02em'
              }}>
                {lang === 'ta' ? 'தொடர்புக்கு' : 'Contact Us'}
              </h5>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.90rem', color: '#f8fafc' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', lineHeight: 1.5, fontWeight: 400, color: '#f8fafc' }}>
                  <MapPin size={17} style={{ color: '#34d399', flexShrink: 0, marginTop: '2px' }} />
                  <span>{lang === 'ta' ? 'எண்: 12, டிரைவர் காலனி, K.H. ரோடு, கொருக்குப்பேட்டை, சென்னை - 21.' : 'No: 12, Driver Colony, K.H. Road, Korukkupet, Chennai - 21.'}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Phone size={17} style={{ color: '#38bdf8', flexShrink: 0 }} />
                  <a href="tel:8015573223" style={{ color: '#38bdf8', fontWeight: 800, textDecoration: 'none', fontSize: '0.98rem', letterSpacing: '0.02em' }}>80155 73223</a>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Mail size={17} style={{ color: '#93c5fa', flexShrink: 0 }} />
                  <a href="mailto:mentorixacademy.ma@gmail.com" style={{ color: '#f8fafc', textDecoration: 'none', fontWeight: 500 }}>mentorixacademy.ma@gmail.com</a>
                </div>
              </div>
            </div>

            {/* Column 4: Follow Us & Social Icons */}
            <div>
              <h5 style={{
                fontSize: '1.05rem',
                fontWeight: 800,
                color: '#ffffff',
                margin: '0 0 14px 0',
                fontFamily: 'var(--font-heading)',
                letterSpacing: '0.02em'
              }}>
                {lang === 'ta' ? 'சமூக வலைத்தளங்கள்' : 'Follow Us'}
              </h5>

              {/* 4 Social Circular Buttons with Official Inline SVGs */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    background: '#ffffff',
                    color: '#1877f2',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
                    transition: 'transform 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                  title="Facebook"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    background: '#ffffff',
                    color: '#ef4444',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
                    transition: 'transform 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                  title="YouTube"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/918015573223"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    background: '#ffffff',
                    color: '#25D366',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
                    transition: 'transform 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                  title="WhatsApp"
                >
                  <WhatsAppIcon size={18} />
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    background: '#ffffff',
                    color: '#e1306c',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
                    transition: 'transform 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                  title="Instagram"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              </div>

              <div style={{ fontSize: '0.88rem', color: '#f1f5f9', fontWeight: 500, lineHeight: 1.5 }}>
                {lang === 'ta' ? 'பிரகாசமான எதிர்காலத்திற்கு எங்களுடன் இணையுங்கள்' : 'Join us for a better tomorrow'}
              </div>
            </div>

          </div>

          {/* Bottom Copyright & Back to Top */}
          <div style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.15)',
            paddingTop: '18px',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '12px',
            fontSize: '0.88rem',
            color: '#e2e8f0'
          }} className="footer-bottom-bar">
            <div>
              © {new Date().getFullYear()} <strong style={{ color: '#ffffff', fontWeight: 800 }}>JP Goodwill Tuition Centre</strong>. {lang === 'ta' ? 'அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.' : 'All Rights Reserved.'}
            </div>

            <button
              onClick={scrollToTop}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                color: 'var(--primary-navy)',
                background: '#ffffff',
                padding: '7px 16px',
                borderRadius: '999px',
                border: 'none',
                cursor: 'pointer',
                fontSize: '0.84rem',
                fontWeight: 800,
                boxShadow: '0 2px 8px rgba(0,0,0,0.18)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#ffffff';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#ffffff';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <ArrowUp size={13} />
              <span>{lang === 'ta' ? 'மேலே செல்ல' : 'Back to Top'}</span>
            </button>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-top-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          .footer-top-branch-cards {
            grid-template-columns: 1fr !important;
          }
          .footer-bottom-columns {
            grid-template-columns: 1fr 1fr !important;
            gap: 24px !important;
          }
        }
        @media (max-width: 600px) {
          .footer-bottom-columns {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          .footer-bottom-bar {
            flex-direction: column !important;
            text-align: center !important;
            gap: 10px !important;
          }
        }
      `}</style>
    </footer>
  );
}
