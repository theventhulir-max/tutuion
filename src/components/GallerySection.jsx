import React, { useState } from 'react';
import { Sparkles, Maximize2, X, ChevronLeft, ChevronRight, CheckCircle2, Image as ImageIcon } from 'lucide-react';

export default function GallerySection({ lang = 'ta' }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeImageIndex, setActiveImageIndex] = useState(null);

  const categories = [
    { id: 'all', labelTa: 'அனைத்தும்', labelEn: 'All Photos' },
    { id: 'classroom', labelTa: 'வகுப்பறைகள்', labelEn: 'Classrooms' },
    { id: 'camps', labelTa: 'இரவு தேர்வு முகாம்', labelEn: 'Night Study Camps' },
    { id: 'library', labelTa: 'நூலகம் & சுய ஆய்வு', labelEn: 'Study & Library' }
  ];

  const galleryItems = [
    {
      id: 1,
      src: '/images/fresh/gallery_classroom.jpg',
      category: 'classroom',
      titleTa: 'ஊடாடும் ஸ்மார்ட் வகுப்பறை',
      titleEn: 'Interactive Classroom Teaching',
      tagTa: 'வகுப்பறை',
      tagEn: 'Classroom',
      descTa: 'ஆண் பெண் தனித்தனி வகுப்பறைகளில் முதுகலை ஆசிரியர்களின் எளிய கணித விளக்கம்.'
    },
    {
      id: 2,
      src: '/images/fresh/night_camp_ai_full.jpg',
      category: 'camps',
      titleTa: 'மார்ச் அரசு பொதுத்தேர்வு இரவு முகாம்',
      titleEn: 'Supervised Night Study Camps',
      tagTa: 'தேர்வு முகாம்',
      tagEn: 'Night Camp',
      descTa: '10ம் & 12ம் வகுப்பு பொதுத்தேர்வு நேரங்களில் 24 மணி நேர ஆசிரியர் வழிகாட்டலுடன் கூடிய இரவு படிப்பு.'
    },
    {
      id: 3,
      src: '/images/faculty_classroom.jpg',
      category: 'classroom',
      titleTa: 'தனிநபர் சந்தேக தெளிவுபடுத்தல்',
      titleEn: '1-on-1 Faculty Mentoring',
      tagTa: 'வழிகாட்டல்',
      tagEn: 'Mentoring',
      descTa: 'ஒவ்வொரு மாணவனுக்கும் பிரத்யேக சந்தேக தீர்வு மற்றும் சூத்திர பயிற்சி.'
    },
    {
      id: 4,
      src: '/images/fresh/gallery_library.jpg',
      category: 'library',
      titleTa: 'அமைதியான நூலகம் & சுய ஆய்வு',
      titleEn: 'Reference Library & Self-Study',
      tagTa: 'நூலகம்',
      tagEn: 'Library',
      descTa: 'கடந்த 10 ஆண்டு வினாத்தாள்கள் மற்றும் புளூபிரிண்ட் வழிகாட்டல் புத்தகங்கள்.'
    },
    {
      id: 5,
      src: '/images/fresh/gallery_study.jpg',
      category: 'library',
      titleTa: 'குழு கலந்துரையாடல் & மாதிரி தேர்வு',
      titleEn: 'Focused Group Study & Mock Tests',
      tagTa: 'மாதிரி தேர்வு',
      tagEn: 'Mock Test',
      descTa: 'வாராந்திர யூனிட் தேர்வுகள் மற்றும் உடனடி மதிப்பீடு.'
    },
    {
      id: 6,
      src: '/images/exam_prep.jpg',
      category: 'camps',
      titleTa: 'சென்டம் ஸ்கோர் தீவிர பயிற்சி',
      titleEn: 'Centum Score Blueprint Coaching',
      tagTa: 'சென்டம் பூஸ்டர்',
      tagEn: 'Centum Drill',
      descTa: 'முழு மதிப்பெண் பெற வினாத்தாள் திட்டமிடல் மற்றும் நேர மேலாண்மை பயிற்சி.'
    }
  ];

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  const openLightbox = (index) => {
    setActiveImageIndex(index);
  };

  const closeLightbox = () => {
    setActiveImageIndex(null);
  };

  const nextImage = () => {
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex + 1) % filteredItems.length);
    }
  };

  const prevImage = () => {
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section id="gallery" style={{
      background: '#f8fafc',
      padding: '85px 0 90px 0',
      borderTop: '1px solid #e2e8f0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          gap: '20px',
          marginBottom: '36px'
        }}>
          <div>
            <div style={{ marginBottom: '6px' }}>
              <span className="font-script" style={{
                fontSize: '2rem',
                fontWeight: 800,
                color: '#c2410c',
                display: 'inline-block',
                position: 'relative',
                lineHeight: 1.1,
                textShadow: '0 1px 2px rgba(255, 255, 255, 0.8)'
              }}>
                {lang === 'ta' ? 'எங்கள் புகைப்படத் தொகுப்பு' : 'Our Gallery'}
                <span style={{
                  position: 'absolute',
                  bottom: '2px',
                  left: '8%',
                  width: '84%',
                  height: '7px',
                  background: '#fde047',
                  borderRadius: '999px',
                  zIndex: -1,
                  opacity: 0.95
                }} />
              </span>
            </div>

            <h2 style={{
              fontSize: 'clamp(2rem, 3.6vw, 2.85rem)',
              fontWeight: 900,
              fontFamily: 'var(--font-heading)',
              color: '#093f7c',
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
              margin: 0
            }}>
              {lang === 'ta' ? (
                <>
                  நினைவுகளும் <span style={{ color: '#00875a' }}>சாதனைத் தருணங்களும்</span>
                </>
              ) : (
                <>
                  Moments That <span style={{ color: '#00875a' }}>Inspire</span>
                </>
              )}
            </h2>
          </div>

          <p style={{
            fontSize: '0.96rem',
            color: '#64748b',
            lineHeight: 1.6,
            maxWidth: '480px',
            margin: 0
          }}>
            {lang === 'ta'
              ? 'மாணவர்களின் தீவிர ஈடுபாடு, இரவு நேர தேர்வு முகாம்கள் மற்றும் மகிழ்ச்சியான கற்றல் சூழலின் சில புகைப்படக் காட்சிகள்.'
              : 'Glimpses of our vibrant classrooms, overnight board exam study camps, and motivated students.'}
          </p>
        </div>

        {/* Category Filter Pills */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
          marginBottom: '35px'
        }}>
          {categories.map((cat) => {
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  background: isSelected ? '#093f7c' : '#ffffff',
                  color: isSelected ? '#ffffff' : '#334155',
                  border: isSelected ? '1.5px solid #093f7c' : '1.5px solid #e2e8f0',
                  padding: '8px 18px',
                  borderRadius: '999px',
                  fontSize: '0.88rem',
                  fontWeight: 800,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: isSelected ? '0 4px 12px rgba(9, 63, 124, 0.2)' : '0 2px 6px rgba(0,0,0,0.02)'
                }}
              >
                {lang === 'ta' ? cat.labelTa : cat.labelEn}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid (3 Columns on Desktop, 2 Columns on Mobile/Tablet) */}
        <div className="gallery-main-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
          marginBottom: '20px'
        }}>
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              style={{
                position: 'relative',
                borderRadius: '20px',
                overflow: 'hidden',
                background: '#ffffff',
                border: '1.5px solid #e2e8f0',
                boxShadow: '0 4px 18px rgba(9, 63, 124, 0.05)',
                cursor: 'pointer',
                aspectRatio: '16/11',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
              className="gallery-card-hover"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.borderColor = '#93c5fd';
                e.currentTarget.style.boxShadow = '0 16px 36px rgba(9, 63, 124, 0.12)';
                const img = e.currentTarget.querySelector('.gallery-img-tag');
                if (img) img.style.transform = 'scale(1.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = '#e2e8f0';
                e.currentTarget.style.boxShadow = '0 4px 18px rgba(9, 63, 124, 0.05)';
                const img = e.currentTarget.querySelector('.gallery-img-tag');
                if (img) img.style.transform = 'scale(1)';
              }}
            >
              {/* Photo */}
              <img
                src={item.src}
                alt={item.titleEn}
                className="gallery-img-tag"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.4s ease'
                }}
              />

              {/* Gradient Bottom Overlay */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(180deg, rgba(9,63,124,0) 40%, rgba(9,63,124,0.85) 100%)',
                pointerEvents: 'none'
              }} />

              {/* Top Tag Badge */}
              <div style={{
                position: 'absolute',
                top: '12px',
                left: '12px',
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(8px)',
                padding: '4px 12px',
                borderRadius: '999px',
                fontSize: '0.74rem',
                fontWeight: 800,
                color: '#093f7c',
                boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
              }}>
                {lang === 'ta' ? item.tagTa : item.tagEn}
              </div>

              {/* Expand Icon */}
              <div style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: 'rgba(0, 0, 0, 0.5)',
                backdropFilter: 'blur(6px)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Maximize2 size={14} />
              </div>

              {/* Bottom Caption Info */}
              <div style={{
                position: 'absolute',
                bottom: '14px',
                left: '16px',
                right: '16px',
                color: '#ffffff'
              }}>
                <h4 style={{
                  fontSize: '1.02rem',
                  fontWeight: 900,
                  fontFamily: 'var(--font-heading)',
                  color: '#ffffff',
                  margin: '0 0 2px 0',
                  lineHeight: 1.25,
                  textShadow: '0 2px 4px rgba(0,0,0,0.4)'
                }}>
                  {lang === 'ta' ? item.titleTa : item.titleEn}
                </h4>
                <div style={{
                  fontSize: '0.78rem',
                  color: '#fde047',
                  fontWeight: 700,
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis'
                }}>
                  {lang === 'ta' ? item.titleEn : item.titleTa}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Interactive Lightbox Fullscreen Modal */}
      {activeImageIndex !== null && (
        <div
          onClick={closeLightbox}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 9999,
            background: 'rgba(9, 25, 45, 0.92)',
            backdropFilter: 'blur(12px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
        >
          {/* Modal Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              maxWidth: '860px',
              width: '100%',
              background: '#ffffff',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 25px 60px rgba(0,0,0,0.5)',
              animation: 'modalZoom 0.25s ease-out'
            }}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                zIndex: 10,
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'rgba(0, 0, 0, 0.65)',
                color: '#ffffff',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#e11d48'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(0, 0, 0, 0.65)'}
            >
              <X size={22} />
            </button>

            {/* Navigation Prev Button */}
            <button
              onClick={prevImage}
              style={{
                position: 'absolute',
                top: '40%',
                left: '16px',
                zIndex: 10,
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.9)',
                color: '#093f7c',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 14px rgba(0,0,0,0.2)'
              }}
            >
              <ChevronLeft size={24} />
            </button>

            {/* Navigation Next Button */}
            <button
              onClick={nextImage}
              style={{
                position: 'absolute',
                top: '40%',
                right: '16px',
                zIndex: 10,
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.9)',
                color: '#093f7c',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 14px rgba(0,0,0,0.2)'
              }}
            >
              <ChevronRight size={24} />
            </button>

            {/* Lightbox Image Preview */}
            <div style={{ width: '100%', maxHeight: '520px', background: '#093f7c', overflow: 'hidden' }}>
              <img
                src={filteredItems[activeImageIndex].src}
                alt={filteredItems[activeImageIndex].titleEn}
                style={{
                  width: '100%',
                  height: '100%',
                  maxHeight: '520px',
                  objectFit: 'contain',
                  display: 'block'
                }}
              />
            </div>

            {/* Modal Bottom Information */}
            <div style={{ padding: '24px 28px', background: '#ffffff' }}>
              <div style={{
                display: 'inline-block',
                background: '#e6f7ef',
                color: '#00875a',
                fontSize: '0.78rem',
                fontWeight: 800,
                padding: '4px 12px',
                borderRadius: '999px',
                marginBottom: '8px'
              }}>
                {lang === 'ta' ? filteredItems[activeImageIndex].tagTa : filteredItems[activeImageIndex].tagEn}
              </div>

              <h3 style={{
                fontSize: '1.3rem',
                fontWeight: 900,
                color: '#093f7c',
                margin: '0 0 6px 0',
                fontFamily: 'var(--font-heading)'
              }}>
                {lang === 'ta' ? filteredItems[activeImageIndex].titleTa : filteredItems[activeImageIndex].titleEn}
              </h3>

              <p style={{
                fontSize: '0.92rem',
                color: '#475569',
                margin: 0,
                lineHeight: 1.5
              }}>
                {filteredItems[activeImageIndex].descTa}
              </p>
            </div>

          </div>
        </div>
      )}

      <style>{`
        @keyframes modalZoom {
          from { opacity: 0; transform: scale(0.92); }
          to { opacity: 1; transform: scale(1); }
        }
        @media (max-width: 900px) and (min-width: 601px) {
          .gallery-main-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 18px !important;
          }
        }
        @media (max-width: 600px) {
          .gallery-main-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 12px !important;
          }
        }
      `}</style>
    </section>
  );
}
