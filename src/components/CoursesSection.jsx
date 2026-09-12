import React, { useState } from 'react';
import { BookOpen, ArrowRight, Sparkles, CheckCircle2, ChevronRight } from 'lucide-react';
import { coursesDetail } from '../data/coursesDetail';
import CourseModal from './CourseModal';

export default function CoursesSection({ lang, onOpenAdmission }) {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const courses = [
    {
      name: 'General Mathematics',
      nameTa: 'பொதுக் கணிதம்',
      category: '9th to 12th Std',
      categoryBg: '#0284c7',
      desc: 'Calculus, Algebra, Trigonometry & Board Centum Blueprint.',
      img: '/images/courses/maths.jpg'
    },
    {
      name: 'Business Maths & Statistics',
      nameTa: 'வணிக கணிதம் & புள்ளியியல்',
      category: 'Commerce +2',
      categoryBg: '#059669',
      desc: 'Probability, Matrices, Applied Statistics & Centum Strategies.',
      img: '/images/courses/business_maths.jpg'
    },
    {
      name: 'Physics',
      nameTa: 'இயற்பியல்',
      category: 'Science +1 / +2',
      categoryBg: '#6366f1',
      desc: 'Optics, Electromagnetism, Formula Derivations & Numericals.',
      img: '/images/courses/physics.jpg'
    },
    {
      name: 'Chemistry',
      nameTa: 'வேதியியல்',
      category: 'Science +1 / +2',
      categoryBg: '#ea580c',
      desc: 'Organic Reactions, Equation Balancing & Chemical Kinetics.',
      img: '/images/courses/chemistry.jpg'
    },
    {
      name: 'Biology (Botany & Zoology)',
      nameTa: 'உயிரியல் (தாவர & விலங்கியல்)',
      category: 'Bio-Science Group',
      categoryBg: '#059669',
      desc: 'Diagram Practice, Life Processes, Genetics & Scoring Techniques.',
      img: '/images/courses/biology.jpg'
    },
    {
      name: 'Accountancy & Commerce',
      nameTa: 'கணக்குப்பதிவியல் & வணிகவியல்',
      category: 'Commerce Group',
      categoryBg: '#0891b2',
      desc: 'Financial Accounting, Journal Ledgers & Company Accounts.',
      img: '/images/courses/accountancy.jpg'
    },
    {
      name: 'Economics & Computer Science',
      nameTa: 'பொருளாதாரம் & கணினி அறிவியல்',
      category: '+1 / +2 Electives',
      categoryBg: '#d97706',
      desc: 'Macro/Micro Economics, Python Coding, OOPs & Algorithms.',
      img: '/images/courses/cs_economics.jpg'
    },
    {
      name: 'Tamil & English Languages',
      nameTa: 'தமிழ் & ஆங்கிலம்',
      category: 'Language Skills',
      categoryBg: '#2563eb',
      desc: 'Grammar Shortcuts, Essay Writing, Prose & High-Scoring Tips.',
      img: '/images/courses/languages.jpg'
    },
    {
      name: '6th to 8th (All Subjects)',
      nameTa: '6 முதல் 8ம் வகுப்பு வரை',
      category: 'Middle School',
      categoryBg: '#7c3aed',
      desc: 'Strong foundation in Maths, Science, Social & Languages.',
      img: '/images/courses/middle_school.jpg'
    },
    {
      name: '9th & 10th Special Care Batch',
      nameTa: '10ம் வகுப்பு சிறப்பு பயிற்சி',
      category: 'Board Exam Special',
      categoryBg: '#dc2626',
      desc: 'SSLC & CBSE Board Exam Preparation for 480+ / 500 Marks.',
      img: '/images/courses/tenth_special.jpg'
    },
    {
      name: 'Engineering Maths (M1, M2, M3)',
      nameTa: 'பொறியியல் கணிதம் (அண்ணா பல்கலை)',
      category: 'College / Anna Univ',
      categoryBg: '#0284c7',
      desc: 'Matrices, Calculus, Differential Equations & Probability.',
      img: '/images/courses/engineering_maths.jpg'
    },
    {
      name: 'Diploma & Degree Mathematics',
      nameTa: 'டிப்ளமோ & பட்டப்படிப்பு கணிதம்',
      category: 'Polytechnic & Allied',
      categoryBg: '#9333ea',
      desc: 'Applied Engineering Maths, Polytechnic & B.Sc / B.Com Maths.',
      img: '/images/courses/diploma_maths.jpg'
    }
  ];

  const handleCardClick = (courseName) => {
    const detail = coursesDetail[courseName];
    if (detail) {
      setSelectedCourse(detail);
    } else {
      onOpenAdmission();
    }
  };

  return (
    <section id="courses" style={{
      background: '#f8fafc',
      padding: '75px 0 85px 0',
      borderTop: '1px solid #eef2f6'
    }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          gap: '20px',
          marginBottom: '45px'
        }}>
          <div>
            <div style={{ marginBottom: '8px' }}>
              <span className="font-script" style={{
                fontSize: '2rem',
                fontWeight: 700,
                color: '#0056b3',
                display: 'inline-block',
                position: 'relative'
              }}>
                Our Courses
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
              fontSize: 'clamp(2rem, 3.8vw, 2.9rem)',
              fontWeight: 900,
              fontFamily: 'var(--font-heading)',
              color: '#093f7c',
              lineHeight: 1.18,
              letterSpacing: '-0.02em',
              margin: 0
            }}>
              Comprehensive Tuition & <span style={{ color: '#00875a' }}>Specialist Subjects</span>
            </h2>
          </div>

          <p style={{
            fontSize: '1rem',
            color: '#64748b',
            maxWidth: '480px',
            lineHeight: 1.6,
            margin: 0
          }}>
            Every course includes structured study blueprints, weekend unit tests, and dedicated Post-Graduate faculty support.
          </p>
        </div>

        {/* 12 Courses Image Card Grid */}
        <div className="courses-image-grid">
          {courses.map((c, i) => (
            <div
              key={i}
              onClick={() => handleCardClick(c.name)}
              className="course-image-card"
            >
              {/* Image Banner */}
              <div className="course-card-img-wrap">
                <img
                  src={c.img}
                  alt={c.name}
                  className="course-card-img"
                  loading="lazy"
                />
                
                {/* Category Badge Floating Overlay */}
                <div
                  className="course-badge-pill"
                  style={{ background: c.categoryBg }}
                >
                  {c.category}
                </div>
              </div>

              {/* Card Body */}
              <div className="course-card-body">
                <h3 className="course-card-title">
                  {c.name}
                </h3>

                <div className="course-card-ta">
                  {c.nameTa}
                </div>

                <p className="course-card-desc">
                  {c.desc}
                </p>

                {/* Footer Action */}
                <div className="course-card-footer">
                  <span className="course-view-link">
                    <span>View Syllabus</span>
                    <ChevronRight size={14} />
                  </span>

                  <span className="course-enrol-pill">
                    Enrol
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Interactive Course Details Modal */}
      {selectedCourse && (
        <CourseModal
          course={selectedCourse}
          onClose={() => setSelectedCourse(null)}
          lang={lang}
        />
      )}

      <style>{`
        /* Desktop & Tablet Grid */
        .courses-image-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
        }

        .course-image-card {
          background: #ffffff;
          border-radius: 18px;
          border: 1.5px solid #e2e8f0;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0, 50, 120, 0.03);
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
          display: flex;
          flex-direction: column;
        }

        .course-image-card:hover {
          transform: translateY(-5px);
          border-color: #0056b3;
          box-shadow: 0 14px 28px rgba(0, 50, 120, 0.1);
        }

        .course-card-img-wrap {
          position: relative;
          height: 140px;
          width: 100%;
          overflow: hidden;
          background: #e2e8f0;
        }

        .course-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.35s ease;
        }

        .course-image-card:hover .course-card-img {
          transform: scale(1.06);
        }

        .course-badge-pill {
          position: absolute;
          top: 10px;
          right: 10px;
          color: #ffffff;
          font-size: 0.7rem;
          font-weight: 800;
          padding: 3px 9px;
          border-radius: 999px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.25);
          letter-spacing: 0.02em;
        }

        .course-card-body {
          padding: 16px 16px 14px 16px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .course-card-title {
          font-size: 1.02rem;
          font-weight: 900;
          color: #093f7c;
          line-height: 1.3;
          margin-bottom: 2px;
          font-family: var(--font-heading);
        }

        .course-card-ta {
          font-size: 0.8rem;
          font-weight: 700;
          color: #00875a;
          margin-bottom: 8px;
        }

        .course-card-desc {
          font-size: 0.82rem;
          color: #64748b;
          line-height: 1.5;
          margin: 0 0 12px 0;
          flex: 1;
        }

        .course-card-footer {
          display: flex;
          justifyContent: space-between;
          align-items: center;
          padding-top: 10px;
          border-top: 1px solid #f1f5f9;
        }

        .course-view-link {
          display: inline-flex;
          align-items: center;
          gap: 2px;
          color: #0056b3;
          font-size: 0.78rem;
          font-weight: 800;
        }

        .course-enrol-pill {
          background: #e6f7ef;
          color: #00875a;
          font-size: 0.72rem;
          font-weight: 800;
          padding: 3px 10px;
          border-radius: 999px;
        }

        @media (max-width: 1100px) and (min-width: 769px) {
          .courses-image-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }

        /* Mobile Perfect Responsive Layout (2-Column Compact Grid on Phones) */
        @media (max-width: 768px) {
          .courses-image-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 12px !important;
          }

          .course-image-card {
            border-radius: 14px !important;
          }

          .course-card-img-wrap {
            height: 105px !important;
          }

          .course-badge-pill {
            top: 6px !important;
            right: 6px !important;
            font-size: 0.6rem !important;
            padding: 2px 6px !important;
          }

          .course-card-body {
            padding: 10px 10px !important;
          }

          .course-card-title {
            font-size: 0.88rem !important;
            line-height: 1.25 !important;
          }

          .course-card-ta {
            font-size: 0.72rem !important;
            margin-bottom: 4px !important;
          }

          .course-card-desc {
            font-size: 0.74rem !important;
            line-height: 1.35 !important;
            margin-bottom: 8px !important;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }

          .course-card-footer {
            padding-top: 6px !important;
          }

          .course-view-link {
            font-size: 0.72rem !important;
          }

          .course-enrol-pill {
            font-size: 0.65rem !important;
            padding: 2px 7px !important;
          }
        }
      `}</style>
    </section>
  );
}
