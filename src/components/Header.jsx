import React, { useState } from 'react';
import { Sparkles, Menu, X } from 'lucide-react';
import Logo from './Logo';
import { tuitionData } from '../data/tuitionData';

export default function Header({ lang, setLang, onOpenAdmission }) {
  const [activeTab, setActiveTab] = useState('Home');
  const [mobileOpen, setMobileOpen] = useState(false);

  // Exactly 5 clean, essential nav items
  const navLinks = [
    { name: 'Home', href: '#home', label: { en: 'Home', ta: 'முகப்பு' } },
    { name: 'About', href: '#about', label: { en: 'About Us', ta: 'எங்களை பற்றி' } },
    { name: 'Highlights', href: '#highlights', label: { en: 'Highlights', ta: 'அம்சங்கள்' } },
    { name: 'Faculty', href: '#faculty', label: { en: 'Teachers', ta: 'ஆசிரியர்கள்' } },
    { name: 'Courses', href: '#courses', label: { en: 'Courses', ta: 'பாடங்கள்' } },
    { name: 'Branches', href: '#branches', label: { en: 'Branches', ta: 'கிளைகள்' } },
    { name: 'Gallery', href: '#gallery', label: { en: 'Gallery', ta: 'புகைப்படங்கள்' } },
    { name: 'Contact', href: '#contact', label: { en: 'Contact', ta: 'தொடர்பு' } },
  ];

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      background: '#ffffff',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
      borderBottom: '1px solid #eef2f6'
    }}>
      {/* Top Blue Announcement Bar */}
      <div style={{
        background: 'linear-gradient(90deg, #005088 0%, #0066a4 50%, #0284c7 100%)',
        color: '#ffffff',
        fontSize: '0.78rem',
        padding: '6px 0',
        fontWeight: 600
      }}>
        <div className="container" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '6px'
        }}>
          {/* Left Announcement Badge */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'nowrap' }}>
            <span style={{
              background: '#fbbf24',
              color: '#78350f',
              padding: '2px 8px',
              borderRadius: '999px',
              fontSize: '0.68rem',
              fontWeight: 800,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              whiteSpace: 'nowrap'
            }}>
              <span>📢</span> ADMISSIONS OPEN
            </span>
            <span style={{ fontSize: '0.78rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }} className="header-announcement-text">
              13+ Yrs 100% Pass Record • 6th to +2 & Engg
            </span>
          </div>

          {/* Right Phone Numbers */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.78rem' }} className="header-phone-links">
            <a href="tel:9840052675" style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#ffffff', textDecoration: 'none', fontWeight: 700 }}>
              <span style={{ color: '#6ee7b7' }}>📞</span>
              <span>98400 52675</span>
            </a>
            <span style={{ opacity: 0.4 }}>|</span>
            <a href="tel:8248006633" style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#ffffff', textDecoration: 'none', fontWeight: 700 }}>
              <span>82480 06633</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar with Clean & Spacious Layout */}
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        gap: '20px'
      }}>
        
        {/* Brand Logo & Name */}
        <a href="#home" style={{ textDecoration: 'none', flexShrink: 0 }}>
          <Logo size={48} showText={true} />
        </a>

        {/* Center: Simplified Clean Nav Links (Single line with white-space nowrap) */}
        <nav style={{
          display: 'none',
          alignItems: 'center',
          gap: 'clamp(10px, 1.4vw, 20px)',
          flexWrap: 'nowrap'
        }} className="desktop-clean-nav">
          {navLinks.map((link) => {
            const isActive = activeTab === link.name;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveTab(link.name)}
                style={{
                  fontSize: '0.90rem',
                  fontWeight: 700,
                  color: isActive ? '#0056b3' : '#334155',
                  textDecoration: 'none',
                  padding: '6px 2px',
                  position: 'relative',
                  transition: 'all 0.2s ease',
                  borderBottom: isActive ? '2.5px solid #0056b3' : '2.5px solid transparent',
                  whiteSpace: 'nowrap',
                  flexShrink: 0
                }}
                onMouseEnter={(e) => {
                  if (!isActive) e.target.style.color = '#0056b3';
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.target.style.color = '#334155';
                }}
              >
                {link.label[lang] || link.label.ta || link.label.en}
              </a>
            );
          })}
        </nav>

        {/* Right: Language Switcher (EN / தமிழ்) & Apply Now & Mobile Menu */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
          
          {/* Compact Language Toggle (Only EN and தமிழ்) */}
          <div style={{
            display: 'flex',
            background: '#f1f5f9',
            padding: '2px',
            borderRadius: '999px',
            border: '1px solid #e2e8f0'
          }}>
            <button
              onClick={() => setLang('en')}
              style={{
                padding: '3px 8px',
                borderRadius: '999px',
                fontSize: '0.72rem',
                fontWeight: 800,
                background: lang === 'en' ? '#093f7c' : 'transparent',
                color: lang === 'en' ? '#ffffff' : '#64748b',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              EN
            </button>
            <button
              onClick={() => setLang('ta')}
              style={{
                padding: '3px 8px',
                borderRadius: '999px',
                fontSize: '0.72rem',
                fontWeight: 800,
                background: lang === 'ta' ? '#00875a' : 'transparent',
                color: lang === 'ta' ? '#ffffff' : '#64748b',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              தமிழ்
            </button>
          </div>

          {/* Apply Now Pill Button (Desktop only, mobile has sticky bottom bar) */}
          <button
            onClick={onOpenAdmission}
            className="desktop-apply-btn"
            style={{
              background: '#0052cc',
              color: '#ffffff',
              padding: '8px 16px',
              borderRadius: '999px',
              fontSize: '0.84rem',
              fontWeight: 800,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              boxShadow: '0 4px 10px rgba(0, 82, 204, 0.25)',
              border: 'none',
              cursor: 'pointer',
              whiteSpace: 'nowrap'
            }}
          >
            <Sparkles size={14} style={{ color: '#fbbf24' }} />
            <span>{lang === 'ta' ? 'சேர்க்கை' : 'Apply Now'}</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              background: '#f1f5f9',
              color: '#0f172a',
              border: 'none',
              cursor: 'pointer',
              flexShrink: 0
            }}
            className="mobile-clean-menu-btn"
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <div style={{
          background: '#ffffff',
          borderBottom: '2px solid #e2e8f0',
          padding: '16px 20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          boxShadow: '0 10px 20px rgba(0,0,0,0.06)'
        }}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => {
                setActiveTab(link.name);
                setMobileOpen(false);
              }}
              style={{
                fontSize: '1rem',
                fontWeight: 700,
                color: activeTab === link.name ? '#0056b3' : '#1e293b',
                padding: '6px 0',
                textDecoration: 'none',
                borderBottom: '1px solid #f1f5f9'
              }}
            >
              {link.label[lang] || link.label.ta || link.label.en}
            </a>
          ))}
          
          <button
            onClick={() => {
              setMobileOpen(false);
              onOpenAdmission();
            }}
            style={{
              background: '#0052cc',
              color: '#ffffff',
              padding: '12px',
              borderRadius: '999px',
              fontWeight: 800,
              fontSize: '0.94rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              border: 'none',
              marginTop: '4px'
            }}
          >
            <Sparkles size={16} style={{ color: '#fbbf24' }} />
            <span>{lang === 'ta' ? 'புதிய சேர்க்கை முன்பதிவு' : 'Apply for Admission'}</span>
          </button>
        </div>
      )}

      <style>{`
        @media (min-width: 860px) {
          .desktop-clean-nav {
            display: flex !important;
          }
          .desktop-apply-btn {
            display: inline-flex !important;
          }
          .mobile-clean-menu-btn {
            display: none !important;
          }
        }
        @media (max-width: 859px) {
          .desktop-apply-btn {
            display: none !important;
          }
        }
        @media (max-width: 600px) {
          .header-phone-links {
            display: none !important;
          }
          .header-announcement-text {
            font-size: 0.70rem !important;
          }
        }
      `}</style>
    </header>
  );
}
