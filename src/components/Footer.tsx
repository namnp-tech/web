import React from 'react';
import {
  GraduationCap,
  Mail,
  MapPin,
  ArrowUp,
  Heart,
  Globe,
  BookOpen,
  Sparkles,
} from 'lucide-react';
import { THAY_NAM_PROFILE } from '../data/thaynamData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand & Bio (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center font-bold shadow-md">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-white tracking-tight">
                  {THAY_NAM_PROFILE.fullName}
                </h3>
                <p className="text-xs text-blue-400 font-medium">
                  {THAY_NAM_PROFILE.domain} • Khoa Quản trị UEH
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md">
              Cổng thông tin học thuật, chia sẻ slide bài giảng, đề thi mẫu, dữ liệu nghiên cứu khoa học và trợ lý học tập AI dành riêng cho sinh viên và học viên Đại học Kinh tế TP.HCM.
            </p>

            <div className="space-y-1.5 text-xs text-slate-400 pt-2">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href={`mailto:${THAY_NAM_PROFILE.email}`} className="hover:text-white transition-colors">
                  {THAY_NAM_PROFILE.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-red-400 shrink-0" />
                <span>59C Nguyễn Đình Chiểu, P. Võ Thị Sáu, Q.3, TP.HCM</span>
              </div>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Khám phá Nhanh
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <a href="#about" className="hover:text-white transition-colors">Giới thiệu & Tiểu sử Thầy Nam</a>
              </li>
              <li>
                <a href="#courses" className="hover:text-white transition-colors">Môn học & Đề cương chi tiết</a>
              </li>
              <li>
                <a href="#resources" className="hover:text-white transition-colors">Kho Slide & Đề thi kết thúc học phần</a>
              </li>
              <li>
                <a href="#ai-assistant" className="hover:text-white transition-colors flex items-center gap-1.5 text-indigo-300">
                  <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
                  Trợ lý AI Thầy Nam (Thinking Mode)
                </a>
              </li>
              <li>
                <a href="#research" className="hover:text-white transition-colors">Giải thưởng NCKH UEH500 & Euréka</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Lịch tiếp sinh viên & Đặt hẹn</a>
              </li>
            </ul>
          </div>

          {/* Academic Philosophy & Disclaimer (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Triết lý Giáo dục
            </h4>
            <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 text-xs text-slate-300 leading-relaxed italic">
              "{THAY_NAM_PROFILE.quote}"
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Trang web vận hành phi lợi nhuận phục vụ mục đích học tập, nghiên cứu khoa học của sinh viên UEH và cộng đồng người học trên cả nước.
            </p>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} <strong>thaynam.top</strong> • Bản quyền học liệu thuộc ThS. Nguyễn Phương Nam (Khoa Quản trị - UEH).
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition-colors"
            >
              <span>Về đầu trang</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
