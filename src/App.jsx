import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import HighlightsSection from './components/HighlightsSection';
import TeachersSection from './components/TeachersSection';
import CoursesSection from './components/CoursesSection';
import WhyChooseSection from './components/WhyChooseSection';
import BranchesSection from './components/BranchesSection';
import GallerySection from './components/GallerySection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import AdmissionModal from './components/AdmissionModal';
import MobileBottomBar from './components/MobileBottomBar';

function App() {
  const [lang, setLang] = useState('ta'); // Default to Tamil ('ta')
  const [isAdmissionOpen, setIsAdmissionOpen] = useState(false);

  return (
    <div className="app-container">
      {/* Header matching exact clean light navbar */}
      <Header
        lang={lang}
        setLang={setLang}
        onOpenAdmission={() => setIsAdmissionOpen(true)}
      />

      {/* Main Sections - 100% Light Theme */}
      <main>
        {/* 1. Hero Section */}
        <Hero
          lang={lang}
          onOpenAdmission={() => setIsAdmissionOpen(true)}
        />

        {/* 2. About Us Section */}
        <AboutSection
          lang={lang}
          onOpenAdmission={() => setIsAdmissionOpen(true)}
        />

        {/* 3. Key Highlights Section (Separate dedicated section) */}
        <HighlightsSection
          lang={lang}
          onOpenAdmission={() => setIsAdmissionOpen(true)}
        />

        {/* 4. Our Teachers / PG Faculty Section (Separate dedicated section) */}
        <TeachersSection
          lang={lang}
          onOpenAdmission={() => setIsAdmissionOpen(true)}
        />

        {/* 5. Our Courses */}
        <CoursesSection
          lang={lang}
          onOpenAdmission={() => setIsAdmissionOpen(true)}
        />

        {/* 6. Why Choose Us */}
        <WhyChooseSection
          lang={lang}
          onOpenAdmission={() => setIsAdmissionOpen(true)}
        />

        {/* 7. Our Branches */}
        <BranchesSection
          lang={lang}
          onOpenAdmission={() => setIsAdmissionOpen(true)}
        />

        {/* 8. Our Photo Gallery */}
        <GallerySection
          lang={lang}
        />

        {/* 9. Get in Touch / Contact Section */}
        <ContactSection
          lang={lang}
        />
      </main>

      {/* Footer */}
      <Footer
        lang={lang}
        onOpenAdmission={() => setIsAdmissionOpen(true)}
      />

      {/* Admission Enquiry Modal */}
      <AdmissionModal
        isOpen={isAdmissionOpen}
        onClose={() => setIsAdmissionOpen(false)}
        lang={lang}
      />

      {/* Sticky Mobile Bottom Bar (Phone, WhatsApp, Quick Apply) */}
      <MobileBottomBar
        lang={lang}
        onOpenAdmission={() => setIsAdmissionOpen(true)}
      />
    </div>
  );
}

export default App;
