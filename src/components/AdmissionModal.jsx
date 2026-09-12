import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, Phone, MessageCircle, MapPin, BookOpen, Clock } from 'lucide-react';
import { tuitionData } from '../data/tuitionData';

export default function AdmissionModal({ isOpen, onClose, lang }) {
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    phone: '',
    studentClass: '10th Standard (SSLC / CBSE)',
    subjectChoice: 'All Core Subjects',
    branch: 'korukkupet',
    learningMode: 'Center Regular Batch',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const branchName = formData.branch === 'korukkupet' ? 'Korukkupet (Kathivakkam H.Rd)' : formData.branch === 'tondiarpet' ? 'Tondiarpet (VOC Nagar)' : 'Home Tuition';
    
    const text = `🎓 *NEW ADMISSION ENQUIRY - JP GOODWILL TUITION CENTRE*%0A` +
      `━━━━━━━━━━━━━━━━━━━━%0A` +
      `*Student Name:* ${formData.studentName}%0A` +
      `*Parent Name:* ${formData.parentName || 'N/A'}%0A` +
      `*Contact Phone:* ${formData.phone}%0A` +
      `*Class / Standard:* ${formData.studentClass}%0A` +
      `*Subjects:* ${formData.subjectChoice}%0A` +
      `*Branch:* ${branchName}%0A` +
      `*Learning Mode:* ${formData.learningMode}%0A` +
      (formData.notes ? `*Student Notes:* ${formData.notes}%0A` : '') +
      `━━━━━━━━━━━━━━━━━━━━%0A` +
      `Please confirm batch timings and seat availability.`;

    window.open(`https://wa.me/${tuitionData.whatsappNumber}?text=${text}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(15, 23, 42, 0.65)',
      backdropFilter: 'blur(6px)',
      zIndex: 2000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      overflowY: 'auto'
    }}>
      <div style={{
        background: '#ffffff',
        borderRadius: '24px',
        width: '100%',
        maxWidth: '620px',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        border: '1.5px solid #dbeafe',
        overflow: 'hidden',
        position: 'relative',
        maxHeight: '90vh',
        display: 'flex',
        flexDirection: 'column'
      }}>
        
        {/* Modal Header */}
        <div style={{
          background: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)',
          color: '#ffffff',
          padding: '24px 28px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start'
        }}>
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '3px 10px',
              borderRadius: '999px',
              background: '#f59e0b',
              color: '#78350f',
              fontSize: '0.72rem',
              fontWeight: 800,
              marginBottom: '6px'
            }}>
              <Sparkles size={13} />
              <span>BATCH 2025 - 2026</span>
            </div>
            <h2 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#ffffff' }}>
              {lang === 'ta' ? 'சேர்க்கை & இலவச மாதிரி வகுப்பு' : 'Admission & Free Demo Class Application'}
            </h2>
            <p style={{ fontSize: '0.84rem', color: '#bfdbfe', marginTop: '4px' }}>
              JP Goodwill Tuition Centre • 13+ Years of 100% Pass Excellence
            </p>
          </div>

          <button
            onClick={onClose}
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.2)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid rgba(255, 255, 255, 0.3)'
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div style={{ padding: '24px 28px', overflowY: 'auto' }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '30px 10px' }}>
              <div style={{
                width: '70px',
                height: '70px',
                borderRadius: '50%',
                background: '#ecfdf5',
                color: '#059669',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px auto',
                border: '2px solid #a7f3d0'
              }}>
                <CheckCircle2 size={40} />
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#064e3b', marginBottom: '8px' }}>
                Admission Request Sent!
              </h3>
              <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '24px' }}>
                Thank you! Your details have been submitted to <strong>D. Paranthaman Sir</strong> & Goodwill Admissions Team. We will call you back shortly.
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '12px' }}>
                <a
                  href={`tel:${tuitionData.phones[0]}`}
                  className="btn-primary"
                  style={{ padding: '12px 24px' }}
                >
                  <Phone size={16} />
                  <span>Call: {tuitionData.displayPhones[0]}</span>
                </a>
                <button
                  onClick={onClose}
                  className="btn-secondary"
                  style={{ padding: '12px 24px' }}
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }} className="modal-two-col">
                <div>
                  <label style={{ fontSize: '0.8rem', fontWeight: 700, color: '#334155', display: 'block', marginBottom: '4px' }}>
                    Student Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Student Name"
                    value={formData.studentName}
                    onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: '8px',
                      border: '1.5px solid #cbd5e1',
                      fontSize: '0.9rem',
                      fontFamily: 'inherit',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '0.8rem', fontWeight: 700, color: '#334155', display: 'block', marginBottom: '4px' }}>
                    Parent / Guardian Name
                  </label>
                  <input
                    type="text"
                    placeholder="Parent Name"
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: '8px',
                      border: '1.5px solid #cbd5e1',
                      fontSize: '0.9rem',
                      fontFamily: 'inherit',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }} className="modal-two-col">
                <div>
                  <label style={{ fontSize: '0.8rem', fontWeight: 700, color: '#334155', display: 'block', marginBottom: '4px' }}>
                    Contact Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="10-digit Mobile Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: '8px',
                      border: '1.5px solid #cbd5e1',
                      fontSize: '0.9rem',
                      fontFamily: 'inherit',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '0.8rem', fontWeight: 700, color: '#334155', display: 'block', marginBottom: '4px' }}>
                    Class / Standard *
                  </label>
                  <select
                    value={formData.studentClass}
                    onChange={(e) => setFormData({ ...formData, studentClass: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: '8px',
                      border: '1.5px solid #cbd5e1',
                      fontSize: '0.9rem',
                      fontFamily: 'inherit',
                      background: '#ffffff'
                    }}
                  >
                    <option value="6th to 8th Standard">6th - 8th Standard (All Subjects)</option>
                    <option value="9th Standard">9th Standard</option>
                    <option value="10th Standard (SSLC / CBSE)">10th Standard (SSLC / CBSE)</option>
                    <option value="11th Standard Maths-Bio">11th Standard (Maths - Science)</option>
                    <option value="11th Standard Commerce">11th Standard (Commerce / Accounts)</option>
                    <option value="12th Standard Maths-Bio">12th Standard (Maths - Science)</option>
                    <option value="12th Standard Commerce">12th Standard (Commerce / Accounts)</option>
                    <option value="Engineering Maths (Anna Univ)">Engineering Maths (Anna Univ M1/M2/M3)</option>
                    <option value="Diploma Mathematics">Diploma Mathematics (DOTE)</option>
                    <option value="Degree Maths & Statistics">Degree Maths & Statistics</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }} className="modal-two-col">
                <div>
                  <label style={{ fontSize: '0.8rem', fontWeight: 700, color: '#334155', display: 'block', marginBottom: '4px' }}>
                    Preferred Branch *
                  </label>
                  <select
                    value={formData.branch}
                    onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: '8px',
                      border: '1.5px solid #cbd5e1',
                      fontSize: '0.9rem',
                      fontFamily: 'inherit',
                      background: '#ffffff'
                    }}
                  >
                    <option value="korukkupet">Korukkupet (Kathivakkam High Rd)</option>
                    <option value="tondiarpet">Tondiarpet (VOC Nagar)</option>
                    <option value="home_tuition">Doorstep Home Tuition</option>
                  </select>
                </div>

                <div>
                  <label style={{ fontSize: '0.8rem', fontWeight: 700, color: '#334155', display: 'block', marginBottom: '4px' }}>
                    Batch / Facility
                  </label>
                  <select
                    value={formData.learningMode}
                    onChange={(e) => setFormData({ ...formData, learningMode: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: '8px',
                      border: '1.5px solid #cbd5e1',
                      fontSize: '0.9rem',
                      fontFamily: 'inherit',
                      background: '#ffffff'
                    }}
                  >
                    <option value="Center Regular Batch">Center Regular Batch (Separate Girls/Boys)</option>
                    <option value="March Exam Night Study Camp">March Exam Night Study Camp</option>
                    <option value="Weekend Mock Test Series">Weekend Only Test Series</option>
                    <option value="1-on-1 Home Tuition">1-on-1 Home Tuition</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{ fontSize: '0.8rem', fontWeight: 700, color: '#334155', display: 'block', marginBottom: '4px' }}>
                  Specific Subject / Any Special Request (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Maths centum preparation, slow learner support, etc."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '8px',
                    border: '1.5px solid #cbd5e1',
                    fontSize: '0.9rem',
                    fontFamily: 'inherit',
                    outline: 'none'
                  }}
                />
              </div>

              <div style={{
                background: '#f0fdf4',
                border: '1px solid #bbf7d0',
                padding: '10px 14px',
                borderRadius: '8px',
                fontSize: '0.8rem',
                color: '#166534',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <CheckCircle2 size={16} style={{ color: '#16a34a', flexShrink: 0 }} />
                <span>Zero registration fee for enquiry. Free counseling with subject faculty included.</span>
              </div>

              <button
                type="submit"
                className="btn-primary"
                style={{
                  width: '100%',
                  padding: '14px',
                  fontSize: '1rem',
                  marginTop: '6px'
                }}
              >
                <MessageCircle size={18} />
                <span>Submit & Connect on WhatsApp</span>
              </button>
            </form>
          )}
        </div>

      </div>

      <style>{`
        @media (max-width: 540px) {
          .modal-two-col {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
