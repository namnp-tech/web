import React from 'react';
import {
  Award,
  Trophy,
  BookOpen,
  Users,
  Target,
  CheckCircle2,
  ExternalLink,
  Sparkles,
  FileText,
  Mail,
} from 'lucide-react';
import { RESEARCH_AWARDS, THAY_NAM_PROFILE } from '../data/thaynamData';
import teachingImg from '../assets/images/thay_nam_teaching_1793435703597.jpg';

export const ResearchMentorship: React.FC = () => {
  const mentorshipSteps = [
    {
      step: '01',
      title: 'Xác định Ý tưởng & Lập nhóm',
      desc: 'Nhóm từ 2-4 sinh viên chọn lĩnh vực quan tâm (E-commerce, GenAI, Hành vi tiêu dùng, Quản trị chiến lược) và đọc tối thiểu 10 bài báo quốc tế gần nhất.',
    },
    {
      step: '02',
      title: 'Soạn Đề cương Nghiên cứu (Proposal)',
      desc: 'Chuẩn bị bản đề xuất 3-5 trang theo cấu trúc chuẩn: Tính cấp thiết, Khe hổng nghiên cứu, Khung mô hình lý thuyết và giả thuyết (H1, H2...).',
    },
    {
      step: '03',
      title: 'Gửi Email Đăng ký Hướng dẫn',
      desc: `Gửi proposal về email chính thức: ${THAY_NAM_PROFILE.email} với tiêu đề chuẩn: [Đăng ký NCKH UEH500_Tên đề tài_Trưởng nhóm].`,
    },
    {
      step: '04',
      title: 'Phản biện & Hoàn thiện Thang đo',
      desc: 'Thầy Nam sẽ họp trực tiếp hoặc online cùng nhóm để hiệu chỉnh mô hình, kiểm tra tính đo lường của bảng hỏi trước khi phát khảo sát.',
    },
    {
      step: '05',
      title: 'Xử lý Dữ liệu & Viết Báo cáo Xuất sắc',
      desc: 'Hướng dẫn chạy SPSS / SmartPLS chuyên sâu, diễn giải kết quả số liệu và rèn luyện kỹ năng thuyết trình bảo vệ trước Hội đồng chấm giải.',
    },
  ];

  return (
    <section id="research" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-900 border border-amber-200">
            <Trophy className="w-3.5 h-3.5 text-amber-700" />
            <span>Thành tựu Học thuật & Hướng dẫn Sinh viên</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Nghiên cứu Khoa học & Vinh quang UEH500
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Đồng hành cùng sinh viên từ những bước bỡ ngỡ đầu tiên trong nghiên cứu học thuật đến khi tự tin bước lên bục vinh danh cao nhất tại UEH và toàn quốc.
          </p>
        </div>

        {/* Seminar / Teaching Visual Banner */}
        <div className="mb-16 rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7 h-72 sm:h-96 overflow-hidden">
              <img
                src={teachingImg}
                alt="Thầy Nam giảng dạy chuyên đề phân tích dữ liệu và quản trị tại giảng đường UEH"
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="lg:col-span-5 p-6 sm:p-8 text-white space-y-4">
              <span className="text-xs font-bold text-blue-400 tracking-wider uppercase">
                Phương pháp giảng dạy tương tác
              </span>
              <h3 className="text-xl sm:text-2xl font-bold leading-tight">
                "Nghiên cứu không phải là lý thuyết nằm trên giấy, mà là giải pháp giải quyết vấn đề của xã hội."
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Tại các lớp học của Thầy Nam, mỗi con số, mỗi bảng hồi quy đều gắn liền với câu chuyện thực tế của doanh nghiệp Việt Nam. Sinh viên được rèn luyện khả năng tư duy phản biện độc lập, kỹ năng làm việc với Big Data và ứng dụng công nghệ số vào việc ra quyết định.
              </p>
              <div className="pt-2 flex items-center gap-4 text-xs text-slate-400">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Phương pháp nghiên cứu thực nghiệm
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Mô hình chuẩn quốc tế
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Student Research Awards Showcase */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900">
                Các Đề tài Tiêu biểu Đạt Giải Cao do Thầy Hướng dẫn
              </h3>
              <p className="text-slate-500 text-sm mt-0.5">
                Dấu ấn tự hào của các thế hệ học trò Khoa Quản trị và sinh viên UEH
              </p>
            </div>
            <span className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-xl bg-amber-50 text-amber-800 border border-amber-200">
              <Trophy className="w-3.5 h-3.5 text-amber-600" />
              28+ Giải thưởng các cấp
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {RESEARCH_AWARDS.map((aw) => (
              <div
                key={aw.id}
                className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-amber-300 hover:shadow-md transition-all space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-200 flex items-center gap-1.5">
                    <Trophy className="w-3.5 h-3.5 text-amber-700" />
                    {aw.award}
                  </span>
                  <span className="text-xs font-semibold text-slate-500">{aw.year}</span>
                </div>

                <h4 className="font-bold text-slate-900 text-base leading-snug">
                  {aw.topic}
                </h4>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {aw.description}
                </p>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">
                    Nhóm sinh viên ({aw.cohort}):
                  </span>
                  <span className="font-semibold text-slate-800">
                    {aw.students.join(', ')}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5-Step Roadmap to Register Mentorship */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-sm">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <h3 className="text-2xl font-bold text-slate-900">
              Quy trình 5 Bước Đăng ký Thầy Nam Hướng dẫn NCKH
            </h3>
            <p className="text-slate-600 text-sm mt-1">
              Dành cho sinh viên đăng ký đề tài NCKH cấp Trường (UEH500), Euréka, hoặc Khóa luận tốt nghiệp
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {mentorshipSteps.map((s, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between hover:bg-blue-50/50 hover:border-blue-200 transition-colors"
              >
                <div>
                  <span className="text-2xl font-black text-blue-800 tracking-tight block mb-2">
                    {s.step}
                  </span>
                  <h4 className="font-bold text-slate-900 text-sm mb-2">
                    {s.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600">
              <Mail className="w-4 h-4 text-blue-700" />
              <span>Gửi đề xuất nghiên cứu trực tiếp đến: </span>
              <a href={`mailto:${THAY_NAM_PROFILE.email}`} className="font-bold text-blue-800 underline">
                {THAY_NAM_PROFILE.email}
              </a>
            </div>
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-xl bg-blue-800 hover:bg-blue-900 text-white font-semibold text-xs transition-colors"
            >
              Đặt lịch hẹn tư vấn học thuật
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
