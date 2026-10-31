import React, { useState, useEffect } from 'react';
import {
  GraduationCap,
  BookOpen,
  FileDown,
  Award,
  Sparkles,
  MessageSquare,
  Mail,
  Menu,
  X,
  Search,
  ExternalLink,
} from 'lucide-react';
import { THAY_NAM_PROFILE } from '../data/thaynamData';

interface NavbarProps {
  onOpenSearch: () => void;
  onNavigateToAi: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSearch, onNavigateToAi }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'courses', 'resources', 'ai-assistant', 'research', 'testimonials', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'Giới thiệu', id: 'about' },
    { href: '#courses', label: 'Môn học', id: 'courses' },
    { href: '#resources', label: 'Kho Tài liệu & Đề thi', id: 'resources' },
    { href: '#ai-assistant', label: 'Trợ lý AI Thầy Nam', id: 'ai-assistant', isSpecial: true },
    { href: '#research', label: 'NCKH & Giải thưởng', id: 'research' },
    { href: '#testimonials', label: 'Góc Sinh viên', id: 'testimonials' },
    { href: '#contact', label: 'Liên hệ', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200/80'
          : 'bg-white/70 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo / Brand */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-900 to-indigo-600 text-white flex items-center justify-center shadow-md shadow-blue-900/20 group-hover:scale-105 transition-transform">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg text-slate-900 tracking-tight group-hover:text-blue-700 transition-colors">
                  {THAY_NAM_PROFILE.shortName}
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 border border-blue-200/60">
                  UEH
                </span>
              </div>
              <span className="text-xs text-slate-500 font-medium tracking-wide block">
                {THAY_NAM_PROFILE.domain}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  link.isSpecial
                    ? 'text-indigo-700 hover:text-indigo-900 bg-indigo-50/80 hover:bg-indigo-100/90 border border-indigo-200/70 flex items-center gap-1.5'
                    : activeSection === link.id
                    ? 'text-blue-800 bg-blue-50/80 font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/60'
                }`}
              >
                {link.isSpecial && <Sparkles className="w-3.5 h-3.5 text-indigo-600 animate-pulse" />}
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Quick Search */}
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-slate-500 bg-slate-100 hover:bg-slate-200/80 border border-slate-200 rounded-lg transition-colors"
              title="Tìm kiếm môn học, tài liệu (Ctrl+K)"
            >
              <Search className="w-3.5 h-3.5 text-slate-400" />
              <span>Tìm kiếm...</span>
              <kbd className="hidden md:inline-block px-1.5 py-0.5 text-[10px] bg-white border border-slate-200 rounded text-slate-400 shadow-2xs">
                Ctrl K
              </kbd>
            </button>

            {/* AI Assistant Button */}
            <button
              onClick={onNavigateToAi}
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-gradient-to-r from-blue-700 via-indigo-600 to-violet-700 hover:from-blue-800 hover:to-violet-800 rounded-lg shadow-sm hover:shadow transition-all"
            >
              <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
              <span>Hỏi Thầy Nam AI</span>
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenSearch}
              className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg"
              aria-label="Tìm kiếm"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg focus:outline-none"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-b border-slate-200 px-4 pt-2 pb-6 space-y-1 shadow-lg animate-in slide-in-from-top duration-200">
          <div className="pb-3 mb-2 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-blue-900 text-white flex items-center justify-center font-bold text-sm">
                TN
              </div>
              <div>
                <p className="font-semibold text-slate-800 text-sm">{THAY_NAM_PROFILE.fullName}</p>
                <p className="text-xs text-slate-500">{THAY_NAM_PROFILE.faculty}</p>
              </div>
            </div>
          </div>

          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2.5 rounded-lg text-sm font-medium ${
                link.isSpecial
                  ? 'bg-indigo-50 text-indigo-800 font-semibold flex items-center gap-2'
                  : activeSection === link.id
                  ? 'bg-blue-50 text-blue-800 font-semibold'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              {link.isSpecial && <Sparkles className="w-4 h-4 text-indigo-600" />}
              {link.label}
            </a>
          ))}

          <div className="pt-3 mt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigateToAi();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-gradient-to-r from-blue-700 to-indigo-700 text-white text-sm font-semibold shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-yellow-300" />
              <span>Hỏi Trợ lý Học thuật AI (Thinking Mode)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
