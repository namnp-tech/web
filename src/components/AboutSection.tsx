import React from 'react';
import {
  User,
  Calendar,
  MapPin,
  GraduationCap,
  Briefcase,
  Award,
  BookOpenCheck,
  TrendingUp,
  Cpu,
  Layers,
  HeartHandshake,
  CheckCircle,
} from 'lucide-react';
import { THAY_NAM_PROFILE } from '../data/thaynamData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-800 border border-blue-200">
            <User className="w-3.5 h-3.5" />
            <span>Tiểu sử & Hành trình Học thuật</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Về ThS. Nguyễn Phương Nam (Thầy Nam)
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Người thầy, nhà nghiên cứu và cố vấn đồng hành cùng nhiều thế hệ sinh viên Đại học Kinh tế TP.HCM (UEH) trên con đường khai phá tri thức và tư duy khoa học.
          </p>
        </div>

        {/* Top Grid: Info Card & Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Personal Info Snapshot (5 cols) */}
          <div className="lg:col-span-5 bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-2xs space-y-6">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-blue-700" />
              <span>Hồ sơ Giảng viên</span>
            </h3>

            <div className="space-y-4 text-sm divide-y divide-slate-200/60">
              <div className="pt-2 flex justify-between items-center">
                <span className="text-slate-500 font-medium">Họ và tên:</span>
                <span className="font-bold text-slate-900">{THAY_NAM_PROFILE.fullName}</span>
              </div>
              <div className="pt-3 flex justify-between items-center">
                <span className="text-slate-500 font-medium">Năm sinh:</span>
                <span className="font-semibold text-slate-800">{THAY_NAM_PROFILE.birthDate}</span>
              </div>
              <div className="pt-3 flex justify-between items-center">
                <span className="text-slate-500 font-medium">Nơi sinh / Quê quán:</span>
                <span className="font-semibold text-slate-800">{THAY_NAM_PROFILE.birthPlace} ({THAY_NAM_PROFILE.origin})</span>
              </div>
              <div className="pt-3 flex justify-between items-center">
                <span className="text-slate-500 font-medium">Đơn vị công tác:</span>
                <span className="font-semibold text-blue-900 text-right">{THAY_NAM_PROFILE.faculty}</span>
              </div>
              <div className="pt-3 flex justify-between items-center">
                <span className="text-slate-500 font-medium">Trường:</span>
                <span className="font-semibold text-slate-800 text-right">{THAY_NAM_PROFILE.university}</span>
              </div>
              <div className="pt-3 flex justify-between items-center">
                <span className="text-slate-500 font-medium">Email chính thức:</span>
                <a href={`mailto:${THAY_NAM_PROFILE.email}`} className="font-semibold text-blue-700 hover:underline">
                  {THAY_NAM_PROFILE.email}
                </a>
              </div>
              <div className="pt-3 flex justify-between items-center">
                <span className="text-slate-500 font-medium">Website & Nền tảng:</span>
                <span className="font-semibold text-indigo-700">{THAY_NAM_PROFILE.domain} / Happy Strong</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-blue-50/80 border border-blue-200/70 text-xs text-blue-900 leading-relaxed">
              <p className="font-semibold flex items-center gap-1.5 mb-1 text-blue-950">
                <HeartHandshake className="w-4 h-4 text-blue-700" />
                <span>Cam kết Sư phạm:</span>
              </p>
              "Luôn sẵn sàng hỗ trợ, lắng nghe và giải đáp mọi thắc mắc học tập, hướng dẫn sinh viên làm nghiên cứu khoa học với phương pháp chuẩn chỉ nhất."
            </div>
          </div>

          {/* Biography & Educational Philosophy (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-slate-50/50 rounded-2xl p-6 sm:p-8 border border-slate-200/80">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <BookOpenCheck className="w-6 h-6 text-blue-700" />
                <span>Câu chuyện Nghề giáo & Đam mê Nghiên cứu</span>
              </h3>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                ThS. Nguyễn Phương Nam (thường được học trò gọi thân thương là <strong>Thầy Nam</strong>) đã có hơn 15 năm gắn bó bền bỉ với mái trường Đại học Kinh tế TP.HCM (UEH). Với xuất phát điểm từ hoạt động phong trào Đoàn hội và các viện nghiên cứu chuyên sâu, thầy Nam luôn giữ vững ngọn lửa nhiệt huyết, đam mê truyền dạy kiến thức thực chất.
              </p>
              <p className="mt-4 text-slate-700 leading-relaxed text-sm sm:text-base">
                Thầy nổi tiếng với phương pháp tiếp cận <em>"đơn giản hóa những mô hình thống kê phức tạp"</em>, biến những học phần tưởng chừng khô khan như Phương pháp nghiên cứu khoa học, SPSS, SmartPLS, AMOS thành những bài học thực chiến sinh động qua các bài toán thị trường có số liệu thật.
              </p>
              <p className="mt-4 text-slate-700 leading-relaxed text-sm sm:text-base">
                Trang web cá nhân <strong>thaynam.top</strong> cùng hệ thống học trực tuyến <strong>Happy Strong</strong> ra đời từ mong muốn lan tỏa tài liệu mở, giúp sinh viên dù ở bất cứ đâu cũng có thể tiếp cận slide bài giảng, đề thi mẫu và dữ liệu thực hành hoàn toàn miễn phí.
              </p>
            </div>

            {/* Roles and Milestones */}
            <div className="space-y-3">
              <h4 className="text-base font-bold text-slate-900">
                Các dấu ấn & Vị trí công tác tiêu biểu:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {THAY_NAM_PROFILE.roles.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl border border-slate-200 bg-white hover:border-blue-300 transition-colors shadow-2xs"
                  >
                    <span className="text-[11px] font-bold text-blue-800 uppercase tracking-wider block mb-1">
                      {item.period}
                    </span>
                    <h5 className="font-bold text-slate-900 text-sm">{item.role}</h5>
                    <p className="text-xs font-medium text-slate-500 mb-2">{item.organization}</p>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* 4 Core Pillars of Expertise */}
        <div className="pt-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl font-bold text-slate-900">
              4 Trụ cột Chuyên môn & Định hướng Nghiên cứu
            </h3>
            <p className="text-slate-600 text-sm mt-1">
              Sự kết hợp giữa tư duy học thuật hàn lâm và năng lực công nghệ hiện đại
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {THAY_NAM_PROFILE.pillars.map((pillar, idx) => {
              const icons = [
                <BookOpenCheck className="w-6 h-6 text-blue-700" key="1" />,
                <TrendingUp className="w-6 h-6 text-emerald-700" key="2" />,
                <Briefcase className="w-6 h-6 text-amber-700" key="3" />,
                <Cpu className="w-6 h-6 text-purple-700" key="4" />,
              ];

              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {icons[idx]}
                  </div>
                  <h4 className="font-bold text-slate-900 text-base mb-2 group-hover:text-blue-800 transition-colors">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
