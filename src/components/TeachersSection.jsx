import React from 'react';
import { Phone, MessageCircle, Award, ChevronRight, GraduationCap, CheckCircle2 } from 'lucide-react';

export default function TeachersSection({ lang, onOpenAdmission }) {
  const teachers = [
    {
      nameEn: 'D. PARANTHAMAN',
      nameTa: 'D. பரந்தாமன்',
      degrees: 'M.Sc., M.Phil., M.Ed.',
      role: 'Founder & Director',
      subject: 'Biology & Life Sciences',
      exp: '15+ Yrs Exp',
      bio: 'Biology specialist guiding 10th-12th with exam blueprints and centum scoring methods.',
      image: '/images/teachers/avatar_paranthaman.svg',
      phone: '9840052675'
    },
    {
      nameEn: 'E. KAMU',
      nameTa: 'E. காமு',
      degrees: 'M.Sc., B.Ed.',
      role: 'Senior Maths Faculty',
      subject: 'Higher Sec & Engineering Maths',
      exp: '12+ Yrs Exp',
      bio: 'Expert in Calculus, Algebra, and Anna University Engineering Maths (M1, M2).',
      image: '/images/teachers/avatar_kamu.svg',
      phone: '9840052675'
    },
    {
      nameEn: 'P. KEERTHANA',
      nameTa: 'P. கீர்த்தனா',
      degrees: 'M.Sc., B.Ed.',
      role: 'Maths & Stats Mentor',
      subject: 'Business Maths & Statistics',
      exp: '10+ Yrs Exp',
      bio: 'Dedicated mentor for Commerce Business Maths, Probability, and 10th board exams.',
      image: '/images/teachers/avatar_keerthana.svg',
      phone: '9840052675'
    },
    {
      nameEn: 'M. MURUGAN',
      nameTa: 'M. முருகன்',
      degrees: 'M.Sc., M.Phil., B.Ed.',
      role: 'Chemistry Head',
      subject: 'Chemistry & Physical Sciences',
      exp: '14+ Yrs Exp',
      bio: 'Master in Organic Chemistry reactions, equation balancing, and numericals.',
      image: '/images/teachers/avatar_murugan.svg',
      phone: '9840052675'
    },
    {
      nameEn: 'THIRU SAKKARAVARTHI',
      nameTa: 'திரு சக்கரவர்த்தி',
      degrees: 'M.Com., B.Ed.',
      role: 'Commerce Head',
      subject: 'Accountancy & Commerce',
      exp: '11+ Yrs Exp',
      bio: 'Commerce authority simplifying complex journal entries, ledgers, and economics.',
      image: '/images/teachers/avatar_sakkaravarthi.svg',
      phone: '9840052675'
    }
  ];

  return (
    <section id="faculty" style={{
      background: 'linear-gradient(180deg, #f0f7ff 0%, #f8fafc 100%)',
      padding: '80px 0 90px 0',
      borderTop: '1px solid #e2e8f0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      
      {/* Subtle Background Decorative Dots & Glow */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '350px',
        height: '350px',
        background: 'radial-gradient(circle at 10% 10%, rgba(2, 132, 199, 0.08) 0%, rgba(255,255,255,0) 70%)',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle at 90% 90%, rgba(0, 135, 90, 0.06) 0%, rgba(255,255,255,0) 70%)',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px auto' }}>
          <div style={{ marginBottom: '6px' }}>
            <span className="font-script" style={{
              fontSize: '1.9rem',
              fontWeight: 700,
              color: '#0056b3',
              display: 'inline-block',
              position: 'relative'
            }}>
              Our Teachers
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
            fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
            fontWeight: 900,
            fontFamily: 'var(--font-heading)',
            color: '#093f7c',
            lineHeight: 1.2,
            letterSpacing: '-0.02em',
            margin: '0 0 12px 0'
          }}>
            Post-Graduate <span style={{ color: '#00875a' }}>Specialist Faculty</span>
          </h2>

          <p style={{
            fontSize: '0.96rem',
            color: '#64748b',
            lineHeight: 1.6,
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Every subject is taught by dedicated Post-Graduate specialist teachers (M.Sc., M.Phil., M.Ed., M.Com.) who combine deep subject mastery with personalized student mentoring.
          </p>
        </div>

        {/* Teacher Cards Grid (3 on Desktop, 2 on Tablet, 1 on Mobile) */}
        <div className="teachers-modern-grid">
          {teachers.map((t, idx) => (
            <div
              key={idx}
              className="teacher-modern-card"
              style={{
                background: '#ffffff',
                border: '1.5px solid #e2e8f0',
                borderRadius: '20px',
                padding: '28px 22px 22px 22px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                boxShadow: '0 4px 15px rgba(9, 63, 124, 0.04)',
                transition: 'all 0.25s ease',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = '#93c5fd';
                e.currentTarget.style.boxShadow = '0 14px 30px rgba(9, 63, 124, 0.09)';
                const img = e.currentTarget.querySelector('.teacher-photo');
                if (img) img.style.transform = 'scale(1.04)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = '#e2e8f0';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(9, 63, 124, 0.04)';
                const img = e.currentTarget.querySelector('.teacher-photo');
                if (img) img.style.transform = 'scale(1)';
              }}
            >
              
              {/* Larger Circular Teacher Photo & Overlapping Badge */}
              <div style={{
                position: 'relative',
                width: '110px',
                height: '110px',
                marginBottom: '16px'
              }}>
                <img
                  src={t.image}
                  alt={t.nameEn}
                  className="teacher-photo"
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '3.5px solid #ffffff',
                    boxShadow: '0 8px 20px rgba(9, 63, 124, 0.14)',
                    transition: 'transform 0.3s ease',
                    display: 'block'
                  }}
                  onError={(e) => {
                    e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(t.nameEn)}&background=093f7c&color=ffffff&size=200&bold=true`;
                  }}
                />
                
                {/* Overlapping Qualification Badge */}
                <span style={{
                  position: 'absolute',
                  bottom: '-6px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: '#093f7c',
                  color: '#ffffff',
                  fontSize: '0.68rem',
                  fontWeight: 800,
                  padding: '3px 10px',
                  borderRadius: '999px',
                  border: '2px solid #ffffff',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
                  whiteSpace: 'nowrap'
                }}>
                  {t.degrees}
                </span>
              </div>

              {/* Teacher Info Details */}
              <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
                
                {/* English Name (Prominent) */}
                <h3 style={{
                  fontSize: '1.08rem',
                  fontWeight: 900,
                  color: '#093f7c',
                  lineHeight: 1.25,
                  margin: '4px 0 2px 0',
                  letterSpacing: '0.01em'
                }}>
                  {t.nameEn}
                </h3>

                {/* Tamil Name (Smaller Green) */}
                <div style={{
                  fontSize: '0.84rem',
                  fontWeight: 700,
                  color: '#00875a',
                  marginBottom: '4px'
                }}>
                  {t.nameTa}
                </div>

                {/* Designation / Role */}
                <div style={{
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  color: '#64748b',
                  marginBottom: '8px'
                }}>
                  {t.role} • {t.exp}
                </div>

                {/* Subject Specialization Compact Pill */}
                <div style={{
                  fontSize: '0.76rem',
                  fontWeight: 800,
                  color: '#0056b3',
                  background: '#f0f7ff',
                  padding: '4px 12px',
                  borderRadius: '999px',
                  border: '1px solid #dbeafe',
                  marginBottom: '12px',
                  maxWidth: '96%'
                }}>
                  {t.subject}
                </div>

                {/* Teacher Short Bio */}
                <p style={{
                  fontSize: '0.84rem',
                  color: '#475569',
                  lineHeight: 1.5,
                  margin: '0 0 18px 0',
                  flex: 1
                }}>
                  {t.bio}
                </p>

                {/* Bottom Contact Actions (Aligned at exact same bottom position) */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '10px',
                  width: '100%',
                  paddingTop: '12px',
                  borderTop: '1px solid #f1f5f9',
                  marginTop: 'auto'
                }}>
                  {/* Call Action - Blue Outline */}
                  <a
                    href={`tel:${t.phone}`}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      background: '#ffffff',
                      color: '#0056b3',
                      border: '1.5px solid #0056b3',
                      padding: '8px 12px',
                      borderRadius: '999px',
                      fontSize: '0.8rem',
                      fontWeight: 800,
                      textDecoration: 'none',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#0056b3';
                      e.currentTarget.style.color = '#ffffff';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = '#ffffff';
                      e.currentTarget.style.color = '#0056b3';
                    }}
                    title={`Call ${t.nameEn}`}
                  >
                    <Phone size={14} />
                    <span>Call</span>
                  </a>

                  {/* WhatsApp Action - Green Outline */}
                  <a
                    href={`https://wa.me/91${t.phone}?text=Hello%20${encodeURIComponent(t.nameEn)}%20Sir%20-%20Admission%20Enquiry`}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      background: '#ffffff',
                      color: '#00875a',
                      border: '1.5px solid #00875a',
                      padding: '8px 12px',
                      borderRadius: '999px',
                      fontSize: '0.8rem',
                      fontWeight: 800,
                      textDecoration: 'none',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#00875a';
                      e.currentTarget.style.color = '#ffffff';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = '#ffffff';
                      e.currentTarget.style.color = '#00875a';
                    }}
                    title={`WhatsApp ${t.nameEn}`}
                  >
                    <MessageCircle size={15} />
                    <span>WhatsApp</span>
                  </a>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Bottom Direct Guidance Consultation Strip */}
        <div style={{
          background: '#ffffff',
          borderRadius: '20px',
          border: '1.5px solid #e2e8f0',
          padding: '20px 28px',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '16px',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.02)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              background: '#093f7c',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <Award size={22} />
            </div>
            <div>
              <div style={{ fontSize: '1.02rem', fontWeight: 900, color: '#093f7c', fontFamily: 'var(--font-heading)' }}>
                Need Direct Academic Guidance from Director D. Paranthaman?
              </div>
              <div style={{ fontSize: '0.82rem', color: '#64748b', marginTop: '2px' }}>
                M.Sc., M.Phil., M.Ed. (15+ Years Experience) • 9th to 12th Board & Higher Maths Specialist
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <a
              href="tel:9840052675"
              style={{
                background: '#ffffff',
                color: '#093f7c',
                border: '1.5px solid #0056b3',
                padding: '10px 18px',
                borderRadius: '999px',
                fontWeight: 800,
                fontSize: '0.88rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                textDecoration: 'none'
              }}
            >
              <Phone size={15} />
              <span>98400 52675</span>
            </a>

            <button
              onClick={onOpenAdmission}
              style={{
                background: '#00875a',
                color: '#ffffff',
                padding: '10px 20px',
                borderRadius: '999px',
                fontWeight: 800,
                fontSize: '0.88rem',
                border: 'none',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                boxShadow: '0 4px 12px rgba(0, 135, 90, 0.3)'
              }}
            >
              <span>Enrol with Faculty</span>
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

      </div>

      <style>{`
        /* Desktop: 3 Columns */
        .teachers-modern-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-bottom: 40px;
        }

        /* Tablet: 2 Columns */
        @media (max-width: 991px) and (min-width: 641px) {
          .teachers-modern-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 20px !important;
          }
        }

        /* Mobile: 1 Column */
        @media (max-width: 640px) {
          .teachers-modern-grid {
            grid-template-columns: 1fr !important;
            gap: 18px !important;
            margin-bottom: 30px !important;
          }
        }
      `}</style>
    </section>
  );
}
