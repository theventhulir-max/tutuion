import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, ArrowRight, MessageCircle, Clock, CheckCircle2 } from 'lucide-react';
import { tuitionData } from '../data/tuitionData';

export default function ContactSection({ lang = 'ta' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    course: '',
    branch: 'Korukkupet',
    message: ''
  });
  const [sent, setSent] = useState(false);

  const handleSend = (e) => {
    e.preventDefault();
    const text = `📬 *NEW ADMISSION / CONTACT ENQUIRY*%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Branch:* ${formData.branch}%0A*Course:* ${formData.course || 'Not Specified'}%0A*Message:* ${formData.message || 'Admission enquiry'}`;
    window.open(`https://wa.me/919840052675?text=${text}`, '_blank');
    setSent(true);
  };

  return (
    <section id="contact" style={{
      background: '#ffffff',
      padding: '85px 0 90px 0',
      borderTop: '1px solid #e2e8f0',
      position: 'relative'
    }}>
      <div className="container">
        
        {/* Main Card Container */}
        <div style={{
          background: 'linear-gradient(135deg, #093f7c 0%, #0056b3 100%)',
          borderRadius: '28px',
          padding: '48px 40px',
          boxShadow: '0 15px 40px rgba(9, 63, 124, 0.2)',
          color: '#ffffff',
          position: 'relative',
          overflow: 'hidden'
        }} className="contact-main-card">
          
          {/* Subtle Background Circles */}
          <div style={{
            position: 'absolute',
            top: '-50px',
            right: '-50px',
            width: '250px',
            height: '250px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.05)',
            pointerEvents: 'none'
          }} />

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '40px',
            alignItems: 'center',
            position: 'relative',
            zIndex: 2
          }} className="contact-split-grid">
            
            {/* Left Info Column */}
            <div>
              <div style={{ marginBottom: '6px' }}>
                <span className="font-script" style={{
                  fontSize: '1.9rem',
                  fontWeight: 800,
                  color: '#fde047',
                  display: 'inline-block',
                  lineHeight: 1.1
                }}>
                  {lang === 'ta' ? 'தொடர்புக்கு' : 'Contact Us'}
                </span>
              </div>

              <h2 style={{
                fontSize: 'clamp(2rem, 3.4vw, 2.75rem)',
                fontWeight: 900,
                fontFamily: 'var(--font-heading)',
                color: '#ffffff',
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
                margin: '0 0 14px 0'
              }}>
                {lang === 'ta' ? (
                  <>
                    எங்களுடன் <span style={{ color: '#86efac' }}>தொடர்பு கொள்ளுங்கள்</span>
                  </>
                ) : (
                  <>
                    Get in <span style={{ color: '#86efac' }}>Touch</span>
                  </>
                )}
              </h2>

              <p style={{
                fontSize: '0.96rem',
                color: '#e0f2fe',
                lineHeight: 1.6,
                marginBottom: '28px',
                maxWidth: '460px'
              }}>
                {lang === 'ta'
                  ? 'சேர்க்கை விவரங்கள், கட்டண முறைகள் மற்றும் சிறப்பு வகுப்புகள் பற்றிய தகவல்களுக்கு எங்களை எப்போது வேண்டுமானாலும் தொடர்பு கொள்ளலாம்.'
                  : 'Reach out to us for admissions, fees structure, branch visits, and expert counselling.'}
              </p>

              {/* Contact Information List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
                
                {/* Phone */}
                <a
                  href="tel:9840052675"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    color: '#ffffff',
                    textDecoration: 'none',
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(8px)',
                    padding: '12px 18px',
                    borderRadius: '14px',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.18)'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'}
                >
                  <div style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    background: '#00875a',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Phone size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.74rem', color: '#bae6fd', fontWeight: 700 }}>
                      {lang === 'ta' ? 'அழைப்பு & ஆலோசனை' : 'Direct Call & Counselling'}
                    </div>
                    <div style={{ fontSize: '1.05rem', fontWeight: 900 }}>
                      98400 52675 / 82480 06633
                    </div>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/919840052675?text=Hi%20JP%20Goodwill%20Tuition%20Centre,%20I%20want%20to%20know%20about%20admissions."
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    color: '#ffffff',
                    textDecoration: 'none',
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(8px)',
                    padding: '12px 18px',
                    borderRadius: '14px',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.18)'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'}
                >
                  <div style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    background: '#25D366',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <MessageCircle size={19} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.74rem', color: '#bae6fd', fontWeight: 700 }}>
                      {lang === 'ta' ? 'உடனடி வாட்ஸ்அப் உதவி' : 'Instant WhatsApp Help'}
                    </div>
                    <div style={{ fontSize: '1.05rem', fontWeight: 900 }}>
                      98400 52675
                    </div>
                  </div>
                </a>

                {/* Campuses Location */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  padding: '12px 18px',
                  borderRadius: '14px',
                  border: '1px solid rgba(255, 255, 255, 0.15)'
                }}>
                  <div style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    background: '#f59e0b',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.74rem', color: '#bae6fd', fontWeight: 700 }}>
                      {lang === 'ta' ? 'கிளைகள் அமைவிடம்' : 'Campuses'}
                    </div>
                    <div style={{ fontSize: '0.96rem', fontWeight: 800 }}>
                      {lang === 'ta' ? 'கொருக்குப்பேட்டை & தண்டையார்பேட்டை (VOC நகர்), சென்னை' : 'Korukkupet & Tondiarpet (VOC Nagar), Chennai'}
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Contact / Admission Enquiry Form */}
            <div style={{
              background: '#ffffff',
              borderRadius: '20px',
              padding: '30px 26px',
              color: '#0f172a',
              boxShadow: '0 10px 30px rgba(0,0,0,0.15)'
            }} className="contact-form-container">
              
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: 900,
                color: '#093f7c',
                margin: '0 0 6px 0',
                fontFamily: 'var(--font-heading)'
              }}>
                {lang === 'ta' ? 'சேர்க்கை முன்பதிவு படிவம்' : 'Quick Admission Enquiry'}
              </h3>
              
              <p style={{ fontSize: '0.84rem', color: '#64748b', marginBottom: '18px' }}>
                {lang === 'ta' ? 'உங்கள் விவரங்களை நிரப்பி நேரடி வாட்ஸ்அப் மூலம் உடனடியாக அனுப்பவும்.' : 'Submit your details to connect directly with our admissions desk.'}
              </p>

              {sent ? (
                <div style={{
                  padding: '24px',
                  background: '#e6f7ef',
                  borderRadius: '14px',
                  color: '#00875a',
                  fontWeight: 800,
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <CheckCircle2 size={32} />
                  <div style={{ fontSize: '1.05rem' }}>
                    {lang === 'ta' ? 'செய்தி அனுப்பப்பட்டது!' : 'Message Sent Successfully!'}
                  </div>
                  <div style={{ fontSize: '0.84rem', color: '#334155', fontWeight: 500 }}>
                    {lang === 'ta' ? 'எங்கள் ஆசிரியர் குழு உங்களை விரைவில் தொடர்புகொள்வார்கள்.' : 'Our faculty will reach out to you shortly.'}
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSend} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {/* Name */}
                  <div>
                    <label style={{ fontSize: '0.78rem', fontWeight: 800, color: '#334155', display: 'block', marginBottom: '4px' }}>
                      {lang === 'ta' ? 'மாணவர் / பெற்றோர் பெயர் *' : 'Student / Parent Name *'}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={lang === 'ta' ? 'பெயரை உள்ளிடவும்' : 'Enter your name'}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '11px 14px',
                        borderRadius: '10px',
                        border: '1.5px solid #cbd5e1',
                        fontSize: '0.9rem',
                        fontFamily: 'inherit',
                        outline: 'none',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label style={{ fontSize: '0.78rem', fontWeight: 800, color: '#334155', display: 'block', marginBottom: '4px' }}>
                      {lang === 'ta' ? 'மொபைல் எண் *' : 'Phone Number *'}
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="98400 52675"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '11px 14px',
                        borderRadius: '10px',
                        border: '1.5px solid #cbd5e1',
                        fontSize: '0.9rem',
                        fontFamily: 'inherit',
                        outline: 'none',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>

                  {/* Course & Branch */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                    <div>
                      <label style={{ fontSize: '0.78rem', fontWeight: 800, color: '#334155', display: 'block', marginBottom: '4px' }}>
                        {lang === 'ta' ? 'வகுப்பு / பாடம்' : 'Class / Course'}
                      </label>
                      <input
                        type="text"
                        placeholder={lang === 'ta' ? 'எ.கா. 10th / 12th Maths' : 'e.g. 10th Maths'}
                        value={formData.course}
                        onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '11px 12px',
                          borderRadius: '10px',
                          border: '1.5px solid #cbd5e1',
                          fontSize: '0.86rem',
                          fontFamily: 'inherit',
                          outline: 'none',
                          boxSizing: 'border-box'
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ fontSize: '0.78rem', fontWeight: 800, color: '#334155', display: 'block', marginBottom: '4px' }}>
                        {lang === 'ta' ? 'விருப்பமான கிளை' : 'Branch'}
                      </label>
                      <select
                        value={formData.branch}
                        onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '11px 12px',
                          borderRadius: '10px',
                          border: '1.5px solid #cbd5e1',
                          fontSize: '0.86rem',
                          fontFamily: 'inherit',
                          outline: 'none',
                          boxSizing: 'border-box',
                          background: '#ffffff'
                        }}
                      >
                        <option value="Korukkupet">{lang === 'ta' ? 'கொருக்குப்பேட்டை' : 'Korukkupet'}</option>
                        <option value="Tondiarpet">{lang === 'ta' ? 'தண்டையார்பேட்டை' : 'Tondiarpet'}</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label style={{ fontSize: '0.78rem', fontWeight: 800, color: '#334155', display: 'block', marginBottom: '4px' }}>
                      {lang === 'ta' ? 'உங்கள் கருத்து / கேள்வி (விருப்பம்)' : 'Message (Optional)'}
                    </label>
                    <textarea
                      rows={2}
                      placeholder={lang === 'ta' ? 'விவரங்களை உள்ளிடவும்...' : 'Type your message...'}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        borderRadius: '10px',
                        border: '1.5px solid #cbd5e1',
                        fontSize: '0.86rem',
                        fontFamily: 'inherit',
                        outline: 'none',
                        resize: 'none',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>

                  {/* Submit via WhatsApp */}
                  <button
                    type="submit"
                    style={{
                      width: '100%',
                      background: '#00875a',
                      color: '#ffffff',
                      padding: '13px',
                      borderRadius: '999px',
                      fontWeight: 900,
                      fontSize: '0.96rem',
                      border: 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      boxShadow: '0 4px 14px rgba(0, 135, 90, 0.3)',
                      transition: 'all 0.2s ease',
                      marginTop: '4px'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                  >
                    <span>{lang === 'ta' ? 'வாட்ஸ்அப் மூலம் உடனடியாக அனுப்பவும்' : 'Submit via WhatsApp'}</span>
                    <ArrowRight size={16} />
                  </button>
                </form>
              )}

            </div>

          </div>

        </div>

      </div>

      <style>{`
        @media (min-width: 960px) {
          .contact-split-grid {
            grid-template-columns: 1.1fr 0.9fr !important;
          }
        }
        @media (max-width: 768px) {
          .contact-main-card {
            padding: 30px 20px !important;
            border-radius: 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
