import React, { useState } from 'react';
import {
  Heart,
  Star,
  Quote,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  MessageSquare,
  Sparkles,
} from 'lucide-react';
import { STUDENT_TESTIMONIALS, FREQUENT_QUESTIONS } from '../data/thaynamData';

export const StudentVoice: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section id="testimonials" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-rose-50 text-rose-800 border border-rose-200">
            <Heart className="w-3.5 h-3.5 text-rose-600 fill-rose-600" />
            <span>Góc Sinh viên UEH & Cựu Người học</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Những Kỷ niệm & Lời Tri ân Thầy Nam
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Sự trưởng thành và thành công của sinh viên trên con đường sự nghiệp và học thuật là món quà quý giá nhất trong sự nghiệp trồng người của Thầy.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {STUDENT_TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-6 rounded-3xl bg-slate-50 border border-slate-200/90 hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Top rating stars & quote icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-slate-300" />
                </div>

                {/* Comment text */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-6">
                  "{t.comment}"
                </p>
              </div>

              {/* Author info */}
              <div className="pt-4 border-t border-slate-200/70 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-700 to-indigo-600 text-white font-bold text-sm flex items-center justify-center shrink-0 shadow-2xs">
                  {t.avatarLetter}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">
                    {t.name}
                  </h4>
                  <p className="text-[11px] text-slate-500 font-medium">
                    {t.cohort}
                  </p>
                  {t.achievement && (
                    <span className="inline-block mt-1 text-[10px] font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200/60">
                      {t.achievement}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center space-y-2 mb-8">
            <h3 className="text-2xl font-bold text-slate-900 flex items-center justify-center gap-2">
              <HelpCircle className="w-6 h-6 text-blue-700" />
              <span>Câu hỏi Thường gặp của Sinh viên (FAQ)</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              Giải đáp nhanh các thắc mắc về thi cử, tài liệu học tập và hướng dẫn nghiên cứu
            </p>
          </div>

          <div className="space-y-3">
            {FREQUENT_QUESTIONS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 bg-white overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-semibold text-slate-900 text-sm hover:text-blue-800 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <span className="p-1 rounded-lg bg-slate-100 text-slate-500 shrink-0">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
