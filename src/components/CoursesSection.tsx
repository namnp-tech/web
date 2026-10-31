import React, { useState } from 'react';
import {
  BookOpen,
  GraduationCap,
  Clock,
  Award,
  Layers,
  FileText,
  CheckCircle,
  HelpCircle,
  ArrowRight,
  X,
  FileDown,
} from 'lucide-react';
import { COURSES_LIST, Course } from '../data/thaynamData';

interface CoursesSectionProps {
  onSelectResourceForCourse?: (courseCode: string) => void;
}

export const CoursesSection: React.FC<CoursesSectionProps> = ({ onSelectResourceForCourse }) => {
  const [selectedLevel, setSelectedLevel] = useState<string>('Tất cả');
  const [activeCourseModal, setActiveCourseModal] = useState<Course | null>(null);

  const levels = ['Tất cả', 'Đại học Chính quy', 'Sau đại học (MBA)', 'Đào tạo Doanh nghiệp'];

  const filteredCourses = selectedLevel === 'Tất cả'
    ? COURSES_LIST
    : COURSES_LIST.filter((c) => c.level === selectedLevel);

  return (
    <section id="courses" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-900 border border-blue-200">
            <BookOpen className="w-3.5 h-3.5 text-blue-700" />
            <span>Chương trình Đào tạo & Giảng dạy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Các Môn học & Học phần Phụ trách
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Hệ thống học phần được thiết kế chuẩn mực theo chương trình quốc tế và UEH, tích hợp sâu kiến thức phân tích số liệu và công nghệ ứng dụng.
          </p>

          {/* Level Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {levels.map((lvl) => (
              <button
                key={lvl}
                onClick={() => setSelectedLevel(lvl)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  selectedLevel === lvl
                    ? 'bg-blue-800 text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {lvl}
              </button>
            ))}
          </div>
        </div>

        {/* Courses Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group hover:border-blue-300"
            >
              <div>
                {/* Card Top Meta */}
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-1 text-xs font-bold rounded-lg bg-blue-50 text-blue-700 border border-blue-200/80">
                    {course.code}
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
                    {course.credits} Tín chỉ
                  </span>
                </div>

                <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mb-1">
                  {course.level}
                </span>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-800 transition-colors leading-snug">
                  {course.name}
                </h3>
                <p className="text-xs text-slate-500 italic mb-3">
                  {course.englishName}
                </p>

                <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 mb-4 leading-relaxed">
                  {course.description}
                </p>

                {/* Key Topics Preview */}
                <div className="space-y-1.5 pt-2 border-t border-slate-100 mb-4">
                  <p className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">
                    Nội dung trọng tâm:
                  </p>
                  {course.topics.slice(0, 3).map((topic, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-xs text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                      <span className="line-clamp-1">{topic}</span>
                    </div>
                  ))}
                  {course.topics.length > 3 && (
                    <p className="text-[11px] text-blue-700 font-medium pl-3">
                      +{course.topics.length - 3} chuyên đề khác...
                    </p>
                  )}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                <button
                  onClick={() => setActiveCourseModal(course)}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-800 text-xs font-semibold transition-colors"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Đề cương & Ôn thi</span>
                </button>

                <a
                  href="#resources"
                  onClick={() => onSelectResourceForCourse && onSelectResourceForCourse(course.code)}
                  className="inline-flex items-center justify-center p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                  title="Xem tài liệu môn học này"
                >
                  <FileDown className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Course Detail Modal */}
      {activeCourseModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-slate-100 pb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2.5 py-1 text-xs font-bold rounded-lg bg-blue-100 text-blue-800">
                    {activeCourseModal.code}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    {activeCourseModal.credits} Tín chỉ • {activeCourseModal.level}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  {activeCourseModal.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 italic">
                  {activeCourseModal.englishName}
                </p>
              </div>
              <button
                onClick={() => setActiveCourseModal(null)}
                className="p-2 text-slate-400 hover:text-slate-700 rounded-xl hover:bg-slate-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Description */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                Mô tả học phần:
              </h4>
              <p className="text-sm text-slate-700 leading-relaxed">
                {activeCourseModal.description}
              </p>
            </div>

            {/* Topics Syllabus */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                Các chuyên đề bài giảng (Syllabus):
              </h4>
              <div className="space-y-2">
                {activeCourseModal.topics.map((t, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs sm:text-sm text-slate-700">
                    <span className="w-5 h-5 rounded-md bg-blue-100 text-blue-800 font-bold text-xs flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <span>{t}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Exam Guide Box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/70 border border-amber-200 text-amber-950 space-y-3">
              <div className="flex items-center gap-2 font-bold text-sm text-amber-900">
                <HelpCircle className="w-4 h-4 text-amber-700" />
                <span>Giới hạn ôn thi & Hướng dẫn thi kết thúc học phần của Thầy Nam</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="font-semibold text-slate-600">Hình thức thi: </span>
                  <span className="text-slate-800">{activeCourseModal.examGuide.format}</span>
                </div>
                <div>
                  <span className="font-semibold text-slate-600">Thời gian làm bài: </span>
                  <span className="text-slate-800">{activeCourseModal.examGuide.duration}</span>
                </div>
              </div>
              <div>
                <p className="text-xs font-bold text-amber-900 mb-1">Những điểm then chốt để đạt điểm A/A+:</p>
                <ul className="space-y-1 text-xs text-amber-900/90 pl-4 list-disc">
                  {activeCourseModal.examGuide.keyPoints.map((kp, idx) => (
                    <li key={idx}>{kp}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Footer Modal Action */}
            <div className="pt-2 flex flex-wrap items-center justify-end gap-3 border-t border-slate-100">
              <button
                onClick={() => setActiveCourseModal(null)}
                className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-600 hover:bg-slate-100 transition-colors"
              >
                Đóng
              </button>
              <a
                href="#resources"
                onClick={() => {
                  if (onSelectResourceForCourse) onSelectResourceForCourse(activeCourseModal.code);
                  setActiveCourseModal(null);
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-800 hover:bg-blue-900 text-white text-xs sm:text-sm font-semibold transition-all"
              >
                <FileDown className="w-4 h-4" />
                <span>Tải Toàn bộ Slide & Đề thi môn này</span>
              </a>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
