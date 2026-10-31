import React, { useState } from 'react';
import {
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Calendar,
  Building,
  GraduationCap,
  MessageSquare,
  AlertCircle,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { THAY_NAM_PROFILE } from '../data/thaynamData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    studentId: '',
    course: 'Phương pháp Nghiên cứu Khoa học (MGT301)',
    messageType: 'Tư vấn Đề tài NCKH / UEH500',
    content: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<{ ticketId: string; message: string } | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.content.trim()) {
      setErrorMessage('Vui lòng điền đầy đủ họ tên, email và nội dung tin nhắn.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch('/api/contact-thaynam', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Có lỗi khi gửi tin nhắn');
      }

      setSubmitSuccess({
        ticketId: data.ticketId || `TN-${Date.now().toString().slice(-6)}`,
        message: data.message || 'Tin nhắn của em đã được chuyển đến Thầy Nam!',
      });

      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
      });

      // Clear input fields
      setFormData({
        name: '',
        email: '',
        studentId: '',
        course: 'Phương pháp Nghiên cứu Khoa học (MGT301)',
        messageType: 'Tư vấn Đề tài NCKH / UEH500',
        content: '',
      });
    } catch (err: any) {
      setErrorMessage(err.message || 'Không thể gửi tin nhắn. Vui lòng thử lại!');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-900 border border-blue-200">
            <Mail className="w-3.5 h-3.5 text-blue-700" />
            <span>Kết nối & Lịch tiếp Sinh viên</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Liên hệ ThS. Nguyễn Phương Nam
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Sinh viên có thể gửi thắc mắc bài học, đăng ký lịch tư vấn đề tài NCKH hoặc liên hệ công việc học thuật qua form bên dưới.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Office info & Hours (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Email Card */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Hộp thư Điện tử Chính thức</h3>
              <p className="text-xs text-slate-500">
                Thầy ưu tiên phản hồi các email học vụ có tiêu đề rõ ràng trong vòng 24 - 48 giờ.
              </p>
              <a
                href={`mailto:${THAY_NAM_PROFILE.email}`}
                className="inline-block text-blue-800 font-bold text-base hover:underline"
              >
                {THAY_NAM_PROFILE.email}
              </a>
            </div>

            {/* Office Locations Card */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-2xs space-y-4">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center">
                <Building className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Địa chỉ Văn phòng UEH</h3>

              <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Cơ sở A (Trụ sở chính):</strong>
                    <p className="text-slate-600">{THAY_NAM_PROFILE.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Cơ sở B (Khoa Quản trị):</strong>
                    <p className="text-slate-600">{THAY_NAM_PROFILE.campusB}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="p-6 rounded-3xl bg-gradient-to-tr from-blue-900 to-indigo-900 text-white shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-200">
                <Clock className="w-4 h-4" />
                <span>Giờ tiếp sinh viên (Office Hours)</span>
              </div>
              <div className="space-y-2 text-xs sm:text-sm">
                <div className="flex justify-between items-center pb-2 border-b border-white/10">
                  <span className="font-medium text-blue-100">Sáng Thứ Ba:</span>
                  <span className="font-bold text-white">08:30 – 11:30 (Trực tiếp / Meet)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-blue-100">Chiều Thứ Năm:</span>
                  <span className="font-bold text-white">13:30 – 16:30 (Trực tiếp / Meet)</span>
                </div>
              </div>
              <p className="text-[11px] text-blue-200/80 pt-1">
                * Vui lòng đặt hẹn trước qua form để Thầy sắp xếp phòng làm việc và chuẩn bị tài liệu phản biện.
              </p>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-blue-700" />
              <span>Gửi Tin nhắn / Đặt lịch Hẹn Tư vấn</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mb-6">
              Điền thông tin bên dưới để gửi câu hỏi trực tiếp vào hòm thư học vụ của Thầy Nam.
            </p>

            {submitSuccess ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-950 space-y-3 text-center">
                <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-lg">Đã gửi thành công!</h4>
                <p className="text-sm text-emerald-800 leading-relaxed">
                  {submitSuccess.message}
                </p>
                <div className="inline-block px-3 py-1 bg-white rounded-lg border border-emerald-200 text-xs font-mono font-bold text-emerald-900">
                  Mã tiếp nhận: {submitSuccess.ticketId}
                </div>
                <div className="pt-2">
                  <button
                    onClick={() => setSubmitSuccess(null)}
                    className="px-4 py-2 text-xs font-semibold rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white transition-colors"
                  >
                    Gửi thêm câu hỏi khác
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMessage && (
                  <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Họ và tên của em <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ví dụ: Nguyễn Văn An"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email liên hệ (UEH hoặc cá nhân) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="an.nguyen@ueh.edu.vn"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Mã số sinh viên (MSSV / Khóa)
                    </label>
                    <input
                      type="text"
                      placeholder="Ví dụ: 31221021234 (K48)"
                      value={formData.studentId}
                      onChange={(e) => setFormData({ ...formData, studentId: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Mục đích liên hệ
                    </label>
                    <select
                      value={formData.messageType}
                      onChange={(e) => setFormData({ ...formData, messageType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    >
                      <option>Tư vấn Đề tài NCKH / UEH500</option>
                      <option>Hỏi bài tập / Thắc mắc dữ liệu SPSS/PLS</option>
                      <option>Đặt lịch hẹn gặp trực tiếp tại UEH</option>
                      <option>Đăng ký Thầy hướng dẫn Khóa luận</option>
                      <option>Hợp tác đào tạo doanh nghiệp</option>
                      <option>Khác</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Môn học liên quan
                  </label>
                  <select
                    value={formData.course}
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                  >
                    <option>Phương pháp Nghiên cứu Khoa học (MGT301)</option>
                    <option>Phân tích Định lượng cho Nhà Quản trị (MGT402)</option>
                    <option>Quản trị Chiến lược & Đổi mới (MGT202)</option>
                    <option>Marketing Kỹ thuật số & TMĐT (MKT305)</option>
                    <option>Sau đại học / Cao học MBA</option>
                    <option>Khác / Chưa học môn nào</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Nội dung câu hỏi hoặc tóm tắt đề tài <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Em chào Thầy Nam! Nhóm em muốn Thầy tư vấn giúp về mô hình nghiên cứu..."
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl bg-blue-800 hover:bg-blue-900 disabled:opacity-50 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Đang gửi thông tin...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Gửi tin nhắn đến Thầy Nam</span>
                    </>
                  )}
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
