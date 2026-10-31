import React, { useState, useEffect, useRef } from 'react';
import { Search, X, BookOpen, FileText, Award, ArrowRight, CornerDownLeft } from 'lucide-react';
import { COURSES_LIST, RESOURCE_ITEMS, RESEARCH_AWARDS } from '../data/thaynamData';

interface QuickSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCourse: (courseCode: string) => void;
}

export const QuickSearchModal: React.FC<QuickSearchModalProps> = ({
  isOpen,
  onClose,
  onSelectCourse,
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  // Global keydown for Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Trigger open handled by parent
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const trimmed = query.trim().toLowerCase();

  const matchingCourses = trimmed
    ? COURSES_LIST.filter(
        (c) =>
          c.name.toLowerCase().includes(trimmed) ||
          c.code.toLowerCase().includes(trimmed) ||
          c.englishName.toLowerCase().includes(trimmed)
      )
    : COURSES_LIST.slice(0, 3);

  const matchingResources = trimmed
    ? RESOURCE_ITEMS.filter(
        (r) =>
          r.title.toLowerCase().includes(trimmed) ||
          r.tags.some((t) => t.toLowerCase().includes(trimmed)) ||
          r.courseCode.toLowerCase().includes(trimmed)
      )
    : RESOURCE_ITEMS.slice(0, 3);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="bg-white rounded-3xl max-w-xl w-full shadow-2xl border border-slate-200 overflow-hidden space-y-0">
        
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-100 flex items-center gap-3">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Tìm kiếm môn học, slide bài giảng, đề thi, dataset SPSS..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Search Results list */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-4">
          
          {/* Courses matches */}
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-2 block mb-1">
              Môn học & Học phần
            </span>
            <div className="space-y-1">
              {matchingCourses.map((c) => (
                <a
                  key={c.id}
                  href="#courses"
                  onClick={() => {
                    onClose();
                  }}
                  className="flex items-center justify-between p-2.5 rounded-xl hover:bg-blue-50 text-slate-800 transition-colors group"
                >
                  <div className="flex items-center gap-2.5">
                    <BookOpen className="w-4 h-4 text-blue-700 shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-slate-900 group-hover:text-blue-800">
                        {c.name}
                      </p>
                      <p className="text-[11px] text-slate-500 font-medium">
                        {c.code} • {c.level}
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-700" />
                </a>
              ))}
            </div>
          </div>

          {/* Resources matches */}
          <div className="pt-2 border-t border-slate-100">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-2 block mb-1">
              Tài nguyên & Slide bài giảng
            </span>
            <div className="space-y-1">
              {matchingResources.map((r) => (
                <a
                  key={r.id}
                  href="#resources"
                  onClick={() => {
                    onSelectCourse(r.courseCode);
                    onClose();
                  }}
                  className="flex items-center justify-between p-2.5 rounded-xl hover:bg-emerald-50 text-slate-800 transition-colors group"
                >
                  <div className="flex items-center gap-2.5">
                    <FileText className="w-4 h-4 text-emerald-700 shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-slate-900 line-clamp-1 group-hover:text-emerald-800">
                        {r.title}
                      </p>
                      <p className="text-[11px] text-slate-500">
                        {r.format} • {r.category} • {r.courseCode}
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                    Tải về
                  </span>
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer Key hint */}
        <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
          <span>Nhấn <kbd className="px-1.5 py-0.5 bg-white border border-slate-200 rounded font-mono">ESC</kbd> để đóng</span>
          <span>Thư viện học thuật mở <strong>thaynam.top</strong></span>
        </div>

      </div>
    </div>
  );
};
