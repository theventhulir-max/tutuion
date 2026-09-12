import React from 'react';
import { MapPin, Phone, Navigation, Building2, CheckCircle2, Clock, Sparkles, MessageCircle, ArrowRight } from 'lucide-react';
import { tuitionData } from '../data/tuitionData';

export default function BranchesSection({ lang = 'ta', onOpenAdmission }) {
  const branches = [
    {
      id: 'korukkupet',
      titleEn: 'Korukkupet Campus (Branch 1)',
      titleTa: 'கொருக்குப்பேட்டை கிளை',
      areaTagEn: 'Korukkupet • Chennai 600021',
      areaTagTa: 'கொருக்குப்பேட்டை • சென்னை 21',
      address: 'No: 12, Driver Colony, Kathivakkam High Road (K.H. Road), Korukkupet, Chennai - 600 021.',
      landmarkEn: 'Near Kathivakkam High Road Junction',
      landmarkTa: 'கத்திவாக்கம் நெடுஞ்சாலை & டிரைவர் காலனி அருகில்',
      phone: '98400 52675',
      altPhone: '82480 06633',
      timingsEn: 'Mon–Sun: 6:00 AM – 9:30 PM',
      timingsTa: 'திங்கள்–ஞாயிறு: காலை 6:00 – இரவு 9:30',
      img: '/images/about_building.jpg',
      featuresTa: ['ஆண் பெண் தனித்தனி வகுப்பு', 'A/C வகுப்பறைகள்', 'CCTV கண்காணிப்பு', 'தேர்வு முகாம் வசதி'],
      featuresEn: ['Separate Boys & Girls Batches', 'Smart Classrooms', 'CCTV Security', 'Night Camp Facility'],
      mapQuery: '12 Driver Colony Kathivakkam High Road Korukkupet Chennai 600021'
    },
    {
      id: 'tondiarpet',
      titleEn: 'Tondiarpet Campus (Branch 2)',
      titleTa: 'தண்டையார்பேட்டை கிளை',
      areaTagEn: 'Tondiarpet • Chennai 600081',
      areaTagTa: 'VOC நகர் • சென்னை 81',
      address: 'No. 86/40, 40th, 8th Cross Street, VOC Nagar, Tondiarpet, Chennai - 600 081.',
      landmarkEn: 'Near VOC Nagar 8th Cross Street',
      landmarkTa: 'VOC நகர் 8வது குறுக்கு தெரு சந்திப்பு அருகில்',
      phone: '98400 52675',
      altPhone: '82480 06633',
      timingsEn: 'Mon–Sun: 6:00 AM – 9:30 PM',
      timingsTa: 'திங்கள்–ஞாயிறு: காலை 6:00 – இரவு 9:30',
      img: '/images/library_study.jpg',
      featuresTa: ['முதுகலை சிறப்பு ஆசிரியர்கள்', 'வாராந்திர தேர்வுகள்', 'அமைதியான கற்றல் சூழல்', '100% தேர்ச்சி சாதனை'],
      featuresEn: ['PG Specialist Faculty', 'Weekly Mock Tests', 'Peaceful Study Ambience', '100% Board Success'],
      mapQuery: '86/40 8th Cross Street VOC Nagar Tondiarpet Chennai 600081'
    }
  ];

  return (
    <section id="branches" style={{
      background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 50%, #f0f7ff 100%)',
      padding: '85px 0 90px 0',
      borderTop: '1px solid #e2e8f0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      
      {/* Decorative Glows */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: '10%',
        width: '350px',
        height: '350px',
        background: 'radial-gradient(circle, rgba(2, 132, 199, 0.06) 0%, rgba(255,255,255,0) 70%)',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Section Header */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          gap: '20px',
          marginBottom: '48px'
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
                {lang === 'ta' ? 'எங்கள் கிளைகள்' : 'Our Branches'}
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
                  உங்களுக்கு அருகிலுள்ள <span style={{ color: '#00875a' }}>முக்கிய கிளைகள்</span>
                </>
              ) : (
                <>
                  Find Us <span style={{ color: '#00875a' }}>Near You</span>
                </>
              )}
            </h2>
          </div>

          <p style={{
            fontSize: '0.96rem',
            color: '#64748b',
            lineHeight: 1.6,
            maxWidth: '500px',
            margin: 0
          }}>
            {lang === 'ta'
              ? 'மாணவர்கள் எளிதில் சென்று பயிலக்கூடிய வகையில் வடசென்னையில் 2 முக்கிய இடங்களில் நவீன வசதிகளுடன் இயங்குகிறது.'
              : 'Two modern, well-equipped campuses strategically located across North Chennai for easy student access.'}
          </p>
        </div>

        {/* 2 Modern Equal-Sized Branch Campus Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '32px',
          marginBottom: '45px'
        }} className="branches-main-grid">
          {branches.map((b) => (
            <div
              key={b.id}
              style={{
                background: '#ffffff',
                borderRadius: '24px',
                border: '1.5px solid #e2e8f0',
                overflow: 'hidden',
                boxShadow: '0 8px 30px rgba(9, 63, 124, 0.06)',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative'
              }}
              className="branch-card-item"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.borderColor = '#93c5fd';
                e.currentTarget.style.boxShadow = '0 18px 40px rgba(9, 63, 124, 0.12)';
                const img = e.currentTarget.querySelector('.branch-img-zoom');
                if (img) img.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = '#e2e8f0';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(9, 63, 124, 0.06)';
                const img = e.currentTarget.querySelector('.branch-img-zoom');
                if (img) img.style.transform = 'scale(1)';
              }}
            >
              <div>
                
                {/* Top Campus Photo with Dark Gradient & Frosted Badges */}
                <div style={{
                  position: 'relative',
                  height: '220px',
                  width: '100%',
                  overflow: 'hidden',
                  background: '#093f7c'
                }}>
                  <img
                    src={b.img}
                    alt={b.titleEn}
                    className="branch-img-zoom"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      transition: 'transform 0.5s ease',
                      opacity: 0.92
                    }}
                  />

                  {/* Gradient Overlay for Text Readability */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(180deg, rgba(9, 63, 124, 0.3) 0%, rgba(9, 63, 124, 0.8) 100%)',
                    pointerEvents: 'none'
                  }} />

                  {/* Top Left: Frosted Location Tag */}
                  <div style={{
                    position: 'absolute',
                    top: '14px',
                    left: '14px',
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(10px)',
                    padding: '6px 14px',
                    borderRadius: '999px',
                    fontSize: '0.80rem',
                    fontWeight: 800,
                    color: '#093f7c',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    boxShadow: '0 4px 14px rgba(0,0,0,0.15)'
                  }}>
                    <MapPin size={14} style={{ color: '#00875a' }} />
                    <span>{lang === 'ta' ? b.areaTagTa : b.areaTagEn}</span>
                  </div>

                  {/* Top Right: Status Badge */}
                  <div style={{
                    position: 'absolute',
                    top: '14px',
                    right: '14px',
                    background: '#00875a',
                    color: '#ffffff',
                    padding: '5px 12px',
                    borderRadius: '999px',
                    fontSize: '0.74rem',
                    fontWeight: 800,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px',
                    boxShadow: '0 4px 10px rgba(0, 135, 90, 0.4)'
                  }}>
                    <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#86efac', display: 'inline-block' }} />
                    <span>{lang === 'ta' ? 'சேர்க்கை நடக்கிறது' : 'Admissions Open'}</span>
                  </div>

                  {/* Bottom Image Title Overlay */}
                  <div style={{
                    position: 'absolute',
                    bottom: '14px',
                    left: '18px',
                    right: '18px',
                    color: '#ffffff'
                  }}>
                    <h3 style={{
                      fontSize: '1.35rem',
                      fontWeight: 900,
                      fontFamily: 'var(--font-heading)',
                      color: '#ffffff',
                      margin: '0 0 2px 0',
                      textShadow: '0 2px 4px rgba(0,0,0,0.4)'
                    }}>
                      {lang === 'ta' ? b.titleTa : b.titleEn}
                    </h3>
                    <div style={{
                      fontSize: '0.86rem',
                      fontWeight: 700,
                      color: '#fde047'
                    }}>
                      {lang === 'ta' ? b.titleEn : b.titleTa}
                    </div>
                  </div>
                </div>

                {/* Card Body Info */}
                <div style={{ padding: '24px 24px 16px 24px' }}>
                  
                  {/* Address Box */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                    color: '#334155',
                    fontSize: '0.92rem',
                    lineHeight: 1.55,
                    marginBottom: '16px',
                    background: '#f8fafc',
                    padding: '14px 16px',
                    borderRadius: '14px',
                    border: '1px solid #e2e8f0'
                  }}>
                    <Building2 size={20} style={{ color: '#0056b3', flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <div style={{ fontWeight: 600 }}>{b.address}</div>
                      <div style={{ fontSize: '0.80rem', color: '#64748b', marginTop: '4px', fontWeight: 600 }}>
                        📍 {lang === 'ta' ? b.landmarkTa : b.landmarkEn}
                      </div>
                    </div>
                  </div>

                  {/* 4 Feature Tags */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '8px',
                    marginBottom: '18px'
                  }}>
                    {(lang === 'ta' ? b.featuresTa : b.featuresEn).map((f, fIdx) => (
                      <div
                        key={fIdx}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          fontSize: '0.78rem',
                          fontWeight: 700,
                          color: '#0f172a',
                          background: '#ffffff',
                          padding: '6px 10px',
                          borderRadius: '8px',
                          border: '1px solid #e2e8f0'
                        }}
                      >
                        <CheckCircle2 size={13} style={{ color: '#00875a', flexShrink: 0 }} />
                        <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{f}</span>
                      </div>
                    ))}
                  </div>

                  {/* Timings & Contact Info */}
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '10px',
                    paddingTop: '12px',
                    borderTop: '1px solid #f1f5f9',
                    fontSize: '0.82rem',
                    color: '#64748b'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 700, color: '#093f7c' }}>
                      <Clock size={15} style={{ color: '#f59e0b' }} />
                      <span>{lang === 'ta' ? b.timingsTa : b.timingsEn}</span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 800, color: '#0056b3' }}>
                      <Phone size={14} />
                      <span>{b.phone}</span>
                    </div>
                  </div>

                </div>
              </div>

              {/* Bottom Actions: Get Directions + Direct Call + WhatsApp */}
              <div style={{
                padding: '0 24px 22px 24px',
                display: 'grid',
                gridTemplateColumns: '1.2fr 1fr 0.45fr',
                gap: '10px',
                marginTop: 'auto'
              }}>
                {/* 1. Get Directions */}
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(b.mapQuery)}`}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    background: '#ffffff',
                    color: '#0056b3',
                    border: '1.5px solid #0056b3',
                    padding: '11px 12px',
                    borderRadius: '999px',
                    fontSize: '0.86rem',
                    fontWeight: 800,
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                    boxShadow: '0 2px 8px rgba(0, 86, 179, 0.08)',
                    whiteSpace: 'nowrap'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#0056b3';
                    e.currentTarget.style.color = '#ffffff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#ffffff';
                    e.currentTarget.style.color = '#0056b3';
                  }}
                >
                  <Navigation size={15} />
                  <span>{lang === 'ta' ? 'திசைகள் (Maps)' : 'Directions'}</span>
                </a>

                {/* 2. Call Button */}
                <a
                  href={`tel:${b.phone}`}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    background: '#093f7c',
                    color: '#ffffff',
                    padding: '11px 12px',
                    borderRadius: '999px',
                    fontSize: '0.86rem',
                    fontWeight: 800,
                    textDecoration: 'none',
                    border: 'none',
                    transition: 'all 0.2s ease',
                    boxShadow: '0 4px 12px rgba(9, 63, 124, 0.25)',
                    whiteSpace: 'nowrap'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#0056b3';
                    e.currentTarget.style.transform = 'translateY(-1px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#093f7c';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <Phone size={15} />
                  <span>{lang === 'ta' ? 'அழைக்க' : 'Call'}</span>
                </a>

                {/* 3. WhatsApp Icon Button */}
                <a
                  href={`https://wa.me/91${b.phone}?text=Hello%20JP%20Goodwill%20Tuition%20Centre,%20I%20want%20to%20enquire%20about%20${encodeURIComponent(b.titleEn)}`}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: '#00875a',
                    color: '#ffffff',
                    padding: '11px 0',
                    borderRadius: '999px',
                    fontSize: '0.86rem',
                    fontWeight: 800,
                    textDecoration: 'none',
                    border: 'none',
                    transition: 'all 0.2s ease',
                    boxShadow: '0 4px 12px rgba(0, 135, 90, 0.25)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-1px)';
                    e.currentTarget.style.boxShadow = '0 6px 16px rgba(0, 135, 90, 0.35)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 135, 90, 0.25)';
                  }}
                  title="WhatsApp"
                >
                  <MessageCircle size={16} />
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* View All Branches / Quick Admission Inquiry Strip */}
        <div style={{
          background: '#ffffff',
          borderRadius: '20px',
          border: '1.5px solid #e2e8f0',
          padding: '22px 28px',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '16px',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.02)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              background: '#e6f7ef',
              color: '#00875a',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <Building2 size={24} />
            </div>
            <div>
              <div style={{ fontSize: '1.05rem', fontWeight: 900, color: '#093f7c', fontFamily: 'var(--font-heading)' }}>
                {lang === 'ta' ? 'உங்கள் பகுதிக்கு அருகிலுள்ள கிளையில் இப்போதே முன்பதிவு செய்யுங்கள்' : 'Visit or Enquire at Your Nearest Campus Today'}
              </div>
              <div style={{ fontSize: '0.84rem', color: '#64748b', marginTop: '2px' }}>
                {lang === 'ta' ? 'கொருக்குப்பேட்டை & தண்டையார்பேட்டை கிளைகளில் புதிய சேர்க்கை நடைபெறுகிறது' : 'Direct admission counselling available at Korukkupet & Tondiarpet branches'}
              </div>
            </div>
          </div>

          <button
            onClick={onOpenAdmission}
            style={{
              background: '#00875a',
              color: '#ffffff',
              padding: '12px 24px',
              borderRadius: '999px',
              fontWeight: 800,
              fontSize: '0.92rem',
              border: 'none',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: '0 4px 14px rgba(0, 135, 90, 0.3)',
              transition: 'all 0.2s ease',
              whiteSpace: 'nowrap'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <span>{lang === 'ta' ? 'இப்போதே சேர்க்கை பெறவும்' : 'Enrol at Nearest Branch'}</span>
            <ArrowRight size={16} />
          </button>
        </div>

      </div>

      <style>{`
        @media (max-width: 860px) {
          .branches-main-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
