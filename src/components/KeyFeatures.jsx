import React from 'react';
import { Users, Moon, GraduationCap, CalendarCheck, Home, Award, Sparkles, CheckCircle2 } from 'lucide-react';
import { tuitionData } from '../data/tuitionData';

export default function KeyFeatures({ lang, onOpenAdmission }) {
  const iconMap = {
    Users: <Users size={28} style={{ color: '#2563eb' }} />,
    Moon: <Moon size={28} style={{ color: '#7c3aed' }} />,
    GraduationCap: <GraduationCap size={28} style={{ color: '#059669' }} />,
    CalendarCheck: <CalendarCheck size={28} style={{ color: '#ea580c' }} />,
    Home: <Home size={28} style={{ color: '#d97706' }} />,
    Award: <Award size={28} style={{ color: '#0891b2' }} />
  };

  const badgeBgMap = {
    Users: '#eff6ff',
    Moon: '#f5f3ff',
    GraduationCap: '#ecfdf5',
    CalendarCheck: '#fff7ed',
    Home: '#fffbeb',
    Award: '#ecfeff'
  };

  return (
    <section id="features" className="section-padding" style={{ background: '#ffffff' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <span className="section-tag">
            {lang === 'ta' ? 'முக்கிய அம்சங்கள்' : lang === 'th' ? 'Mukkiya Amsangal' : 'Why Choose Goodwill'}
          </span>
          <h2 className="section-title">
            {lang === 'ta' ? (
              <>குட்வில் டியூஷன் சென்டரின் <span className="text-gradient">தனித்துவ சிறப்புகள்</span></>
            ) : lang === 'th' ? (
              <>JP Goodwill Tuition-la Padikkum <span className="text-gradient">Core Advantages</span></>
            ) : (
              <>Exclusive Features of <span className="text-gradient">JP Goodwill Tuition Centre</span></>
            )}
          </h2>
          <p className="section-subtitle">
            {lang === 'ta'
              ? 'கடந்த 13 வருடங்களாக பெற்றோர்களின் அசைக்க முடியாத நம்பிக்கையை பெற்ற தரமான கல்வி கட்டமைப்பு.'
              : 'Our structured methodology, dedicated faculty attention, and specialized study camps guarantee student academic triumph.'}
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '24px'
        }}>
          {tuitionData.keyFeatures.map((feat, index) => {
            const iconBg = badgeBgMap[feat.icon] || '#f1f5f9';
            return (
              <div
                key={index}
                className="premium-card"
                style={{
                  padding: '30px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  border: '1.5px solid #f1f5f9',
                  background: '#ffffff',
                  position: 'relative'
                }}
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                    <div style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '16px',
                      background: iconBg,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '1px solid rgba(0,0,0,0.05)'
                    }}>
                      {iconMap[feat.icon]}
                    </div>
                    <span style={{
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      color: '#94a3b8',
                      letterSpacing: '0.05em'
                    }}>
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 style={{
                    fontSize: '1.28rem',
                    fontWeight: 800,
                    color: '#0f172a',
                    marginBottom: '12px',
                    lineHeight: 1.3
                  }}>
                    {feat.title[lang] || feat.title.en}
                  </h3>

                  {/* Description */}
                  <p style={{
                    fontSize: '0.94rem',
                    color: '#475569',
                    lineHeight: 1.6
                  }}>
                    {feat.description[lang] || feat.description.en}
                  </p>
                </div>

                <div style={{
                  marginTop: '20px',
                  paddingTop: '16px',
                  borderTop: '1px solid #f1f5f9',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.84rem',
                  fontWeight: 700,
                  color: '#2563eb'
                }}>
                  <CheckCircle2 size={16} style={{ color: '#059669' }} />
                  <span>Guaranteed Individual Attention</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlight Callout Box for March Exam Study Camp */}
        <div style={{
          marginTop: '45px',
          background: 'linear-gradient(135deg, #f0fdf4 0%, #ecfeff 100%)',
          border: '2px solid #86efac',
          borderRadius: '20px',
          padding: '30px',
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '24px',
          alignItems: 'center'
        }} className="camp-callout-grid">
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '4px 12px', background: '#059669', color: '#ffffff', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 800, marginBottom: '10px' }}>
              <Moon size={14} />
              <span>SPECIAL FEATURE / சிறப்பு வசதி</span>
            </div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#064e3b', marginBottom: '8px' }}>
              {lang === 'ta'
                ? 'மார்ச் மாத தேர்வு நேரங்களில் இரவு தங்கி படிக்கும் சிறப்பு வசதி!'
                : 'Overnight Study Camps During March Board Examinations'}
            </h3>
            <p style={{ color: '#166534', fontSize: '0.96rem', lineHeight: 1.6 }}>
              {lang === 'ta'
                ? 'பொதுத்தேர்வில் அதிக மதிப்பெண் பெற, ஆசிரியர்கள் முன்னிலையில் சந்தேகங்களை தீர்த்து இரவு முழுவதும் அமைதியான சூழலில் படிக்கும் வாய்ப்பு. சிற்றுண்டி மற்றும் முழு பாதுகாப்பு வசதியுடன்.'
                : 'Dedicated overnight study camps with subject teachers present throughout the night to solve doubts, review formula revisions, and conduct question paper drills.'}
            </p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-start', flexWrap: 'wrap', gap: '12px' }}>
            <button
              onClick={onOpenAdmission}
              className="btn-emerald"
              style={{ padding: '14px 28px' }}
            >
              <Sparkles size={16} />
              <span>{lang === 'ta' ? 'விவரங்களை அறிய' : 'Book Exam Camp Spot'}</span>
            </button>
            <a
              href={`tel:${tuitionData.phones[0]}`}
              className="btn-secondary"
              style={{ background: '#ffffff', padding: '14px 24px' }}
            >
              <span>Call: {tuitionData.displayPhones[0]}</span>
            </a>
          </div>
        </div>

      </div>

      <style>{`
        @media (min-width: 900px) {
          .camp-callout-grid {
            grid-template-columns: 1.5fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
