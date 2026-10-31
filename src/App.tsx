import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { CoursesSection } from './components/CoursesSection';
import { ResourceLibrary } from './components/ResourceLibrary';
import { AiAssistantSection } from './components/AiAssistantSection';
import { ResearchMentorship } from './components/ResearchMentorship';
import { StudentVoice } from './components/StudentVoice';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { QuickSearchModal } from './components/QuickSearchModal';

export default function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedCourseFilter, setSelectedCourseFilter] = useState<string | null>(null);

  const handleNavigateToAi = () => {
    const aiSection = document.getElementById('ai-assistant');
    if (aiSection) {
      aiSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectResourceForCourse = (courseCode: string) => {
    setSelectedCourseFilter(courseCode);
    const resSection = document.getElementById('resources');
    if (resSection) {
      resSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Top Navbar */}
      <Navbar
        onOpenSearch={() => setIsSearchOpen(true)}
        onNavigateToAi={handleNavigateToAi}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onNavigateToAi={handleNavigateToAi} />

        {/* About ThS. Nguyễn Phương Nam */}
        <AboutSection />

        {/* Courses & Syllabi */}
        <CoursesSection onSelectResourceForCourse={handleSelectResourceForCourse} />

        {/* Open Resource Library & Downloads */}
        <ResourceLibrary
          filterCourseCode={selectedCourseFilter}
          onClearCourseFilter={() => setSelectedCourseFilter(null)}
        />

        {/* Gemini Thinking Mode AI Academic Assistant */}
        <AiAssistantSection />

        {/* Research & Mentorship Awards (UEH500 & Euréka) */}
        <ResearchMentorship />

        {/* Student Testimonials & FAQ */}
        <StudentVoice />

        {/* Contact & Office Hours Booking */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Quick Spotlight Search Modal (Ctrl+K) */}
      <QuickSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectCourse={handleSelectResourceForCourse}
      />
    </div>
  );
}
