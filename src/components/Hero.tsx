import React from 'react';
import {
  GraduationCap,
  Sparkles,
  BookOpen,
  FileDown,
  Mail,
  MapPin,
  CheckCircle2,
  TrendingUp,
  BrainCircuit,
  ArrowRight,
} from 'lucide-react';
import { THAY_NAM_PROFILE } from '../data/thaynamData';
import portraitImg from '../assets/images/thay_nam_portrait_1793435681145.jpg';

interface HeroProps {
  onNavigateToAi: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigateToAi }) => {
  return (
    <section id="hero" className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-radial-[at_top_right] from-blue-50/70 via-slate-50 to-indigo-50/40">
      {/* Decorative background grid and blurs */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f015_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f015_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-300/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Bio & Highlights (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Top Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-900 border border-blue-200">
                <GraduationCap className="w-3.5 h-3.5 text-blue-700" />
                Giảng viên Khoa Quản trị • Trường Kinh doanh UEH
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-900 border border-emerald-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                thaynam.top
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-violet-100 text-violet-900 border border-violet-200">
                <BrainCircuit className="w-3.5 h-3.5 text-violet-700" />
                AI & EdTech Hub
              </span>
            </div>

            {/* Name & Academic Title */}
            <div>
              <p className="text-sm font-semibold tracking-wider uppercase text-blue-800 mb-1">
                Website Cá nhân & Cổng Học thuật Trực tuyến
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                {THAY_NAM_PROFILE.fullName}
              </h1>
              <p className="mt-2 text-xl sm:text-2xl font-semibold bg-gradient-to-r from-blue-800 via-indigo-700 to-slate-800 bg-clip-text text-transparent">
                Giảng viên • Nhà Nghiên cứu Khoa học • Cố vấn Khởi nghiệp
              </p>
            </div>

            {/* Slogan Quote Box */}
            <div className="relative p-4 sm:p-5 rounded-2xl bg-white/80 border-l-4 border-l-blue-700 border border-slate-200/80 shadow-sm backdrop-blur-sm">
              <p className="italic text-slate-700 text-sm sm:text-base leading-relaxed font-medium">
                "{THAY_NAM_PROFILE.quote}"
              </p>
              <div className="mt-2 flex items-center justify-between text-xs text-slate-500 font-medium">
                <span>— Thầy Nam (Happy Strong – thaynam.top)</span>
                <span className="text-blue-700 font-semibold">Đại học Kinh tế TP.HCM</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-slate-600 text-base leading-relaxed">
              Chào mừng các bạn sinh viên, học viên cao học và quý đồng nghiệp đến với không gian học thuật số của Thầy Nam. Nơi chia sẻ trọn bộ bài giảng, slide môn học, tài liệu ôn thi kết thúc học phần, bộ dữ liệu SPSS/SmartPLS thực hành và trợ lý học tập AI thông minh.
            </p>

            {/* Quick Contact & Office */}
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-600 pt-1">
              <div className="flex items-center gap-1.5 bg-white/70 px-3 py-1.5 rounded-lg border border-slate-200/60 shadow-2xs">
                <Mail className="w-4 h-4 text-blue-700" />
                <a href={`mailto:${THAY_NAM_PROFILE.email}`} className="font-medium text-slate-800 hover:text-blue-700 transition-colors">
                  {THAY_NAM_PROFILE.email}
                </a>
              </div>
              <div className="flex items-center gap-1.5 bg-white/70 px-3 py-1.5 rounded-lg border border-slate-200/60 shadow-2xs">
                <MapPin className="w-4 h-4 text-red-600" />
                <span className="font-medium text-slate-700">UEH Cơ sở 59C Nguyễn Đình Chiểu, Q.3</span>
              </div>
            </div>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#resources"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-800 hover:bg-blue-900 text-white font-semibold text-sm shadow-md shadow-blue-900/15 transition-all hover:translate-y-[-1px]"
              >
                <FileDown className="w-4 h-4" />
                <span>Tải Slide & Đề thi Mẫu</span>
              </a>

              <button
                onClick={onNavigateToAi}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-700 hover:from-indigo-700 hover:to-violet-800 text-white font-semibold text-sm shadow-md shadow-indigo-600/15 transition-all hover:translate-y-[-1px]"
              >
                <Sparkles className="w-4 h-4 text-yellow-300 animate-pulse" />
                <span>Hỏi Thầy Nam AI (Thinking Mode)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                href="#courses"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm border border-slate-300/80 shadow-2xs transition-colors"
              >
                <BookOpen className="w-4 h-4 text-slate-600" />
                <span>Xem Môn học</span>
              </a>
            </div>
          </div>

          {/* Right Column: Portrait Photo & Floating Badges (5 cols) */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md sm:max-w-lg">
              {/* Outer decorative ring */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-500 rounded-3xl opacity-30 blur-xl animate-pulse" />

              {/* Main Photo Card */}
              <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-2xl bg-slate-900">
                <img
                  src={portraitImg}
                  alt="ThS. Nguyễn Phương Nam - Giảng viên Khoa Quản trị UEH"
                  className="w-full h-auto object-cover object-top aspect-[4/5] hover:scale-102 transition-transform duration-500"
                />

                {/* Bottom Overlay Label */}
                <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent text-white text-left">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-lg text-white">ThS. Nguyễn Phương Nam</h3>
                      <p className="text-xs text-blue-200">Khoa Quản trị • Trường Kinh doanh UEH</p>
                    </div>
                    <span className="px-2.5 py-1 text-[11px] font-bold rounded-lg bg-blue-600/90 text-white border border-blue-400/40">
                      thaynam.top
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Stat Badge 1 (Top Left) */}
              <div className="absolute -top-4 -left-4 sm:-left-6 p-3 sm:p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-700 flex items-center justify-center font-bold">
                  <TrendingUp className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <p className="text-lg font-extrabold text-slate-900 leading-none">15+ Năm</p>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">Giảng dạy tại UEH</p>
                </div>
              </div>

              {/* Floating Stat Badge 2 (Bottom Right) */}
              <div className="absolute -bottom-5 -right-4 sm:-right-6 p-3.5 sm:p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/15 text-indigo-700 flex items-center justify-center font-bold">
                  <GraduationCap className="w-5 h-5 text-indigo-700" />
                </div>
                <div>
                  <p className="text-lg font-extrabold text-slate-900 leading-none">12.000+</p>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">Sinh viên đã đồng hành</p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* 4 Stats Metric Counters row */}
        <div className="mt-14 pt-8 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {THAY_NAM_PROFILE.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-2xl bg-white/60 hover:bg-white border border-slate-200/70 shadow-2xs hover:shadow-sm transition-all text-center sm:text-left"
            >
              <p className="text-2xl sm:text-3xl font-extrabold text-blue-900 tracking-tight">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm font-medium text-slate-600 mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
