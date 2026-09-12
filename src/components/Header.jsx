import React, { useState } from 'react';
import { Sparkles, Menu, X } from 'lucide-react';
import Logo from './Logo';
import { tuitionData } from '../data/tuitionData';

export default function Header({ lang, setLang, onOpenAdmission }) {
  const [activeTab, setActiveTab] = useState('Home');
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home', label: { en: 'Home', ta: 'முகப்பு' } },
    { name: 'About', href: '#about', label: { en: 'About Us', ta: 'அறிமுகம்' } },
    { name: 'Highlights', href: '#highlights', label: { en: 'Highlights', ta: 'சிறப்புகள்' } },
    { name: 'Courses', href: '#courses', label: { en: 'Courses', ta: 'பாடங்கள்' } },
    { name: 'Branches', href: '#branches', label: { en: 'Branches', ta: 'கிளைகள்' } },
    { name: 'Gallery', href: '#gallery', label: { en: 'Gallery', ta: 'படங்கள்' } },
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
      {/* Main Navbar with Clean & Spacious Layout */}
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 16px',
        gap: '12px'
      }}>
        
        {/* Brand Logo & Name */}
        <a href="#home" style={{ textDecoration: 'none', flexShrink: 0 }}>
          <Logo size={40} showText={true} />
        </a>

        {/* Center: Clean Nav Links */}
        <nav style={{
          display: 'none',
          alignItems: 'center',
          gap: 'clamp(6px, 1.2vw, 16px)',
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
                  fontSize: '0.86rem',
                  fontWeight: 700,
                  color: isActive ? '#0056b3' : '#334155',
                  textDecoration: 'none',
                  padding: '5px 4px',
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

          {/* Apply Now Pill Button */}
          <button
            onClick={onOpenAdmission}
            className="desktop-apply-btn"
            style={{
              background: '#0052cc',
              color: '#ffffff',
              padding: '7px 14px',
              borderRadius: '999px',
              fontSize: '0.82rem',
              fontWeight: 800,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '5px',
              boxShadow: '0 4px 10px rgba(0, 82, 204, 0.25)',
              border: 'none',
              cursor: 'pointer',
              whiteSpace: 'nowrap'
            }}
          >
            <Sparkles size={13} style={{ color: '#fbbf24' }} />
            <span>{lang === 'ta' ? 'சேர்க்கை' : 'Apply Now'}</span>
          </button>

          {/* Mobile/Tablet Menu Button */}
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

      {/* Mobile/Tablet Menu Drawer */}
      {mobileOpen && (
        <div style={{
          background: '#ffffff',
          borderBottom: '2px solid #e2e8f0',
          padding: '16px 20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
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
                padding: '8px 0',
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
              marginTop: '6px'
            }}
          >
            <Sparkles size={16} style={{ color: '#fbbf24' }} />
            <span>{lang === 'ta' ? 'புதிய சேர்க்கை முன்பதிவு' : 'Apply for Admission'}</span>
          </button>
        </div>
      )}

      <style>{`
        @media (min-width: 1040px) {
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
        @media (max-width: 1039px) {
          .desktop-clean-nav {
            display: none !important;
          }
          .desktop-apply-btn {
            display: none !important;
          }
          .mobile-clean-menu-btn {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
}
