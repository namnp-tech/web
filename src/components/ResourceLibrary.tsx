import React, { useState } from 'react';
import {
  FileDown,
  Search,
  Filter,
  FileText,
  FileSpreadsheet,
  FileCode,
  CheckCircle2,
  Download,
  Eye,
  Sparkles,
  Calendar,
  X,
  ExternalLink,
  BookOpen,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { RESOURCE_ITEMS, ResourceItem } from '../data/thaynamData';

interface ResourceLibraryProps {
  filterCourseCode?: string | null;
  onClearCourseFilter?: () => void;
}

export const ResourceLibrary: React.FC<ResourceLibraryProps> = ({
  filterCourseCode,
  onClearCourseFilter,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Tất cả');
  const [downloadingId, setDownloadingId] = useState<string | null>(null);
  const [downloadSuccessItem, setDownloadSuccessItem] = useState<ResourceItem | null>(null);
  const [previewModalItem, setPreviewModalItem] = useState<ResourceItem | null>(null);

  const categories = [
    'Tất cả',
    'Slide bài giảng',
    'Đề thi & Giới hạn ôn tập',
    'Dữ liệu thực hành',
    'Mẫu NCKH & Biểu mẫu',
  ];

  const handleDownload = (item: ResourceItem) => {
    setDownloadingId(item.id);

    // Simulate realistic download progress
    setTimeout(() => {
      setDownloadingId(null);
      setDownloadSuccessItem(item);

      // Trigger festive confetti
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.7 },
      });

      // Auto dismiss success prompt after 4 seconds
      setTimeout(() => {
        setDownloadSuccessItem(null);
      }, 4000);
    }, 1200);
  };

  const filteredResources = RESOURCE_ITEMS.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
      item.courseCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === 'Tất cả' || item.category === selectedCategory;

    const matchesCourse =
      !filterCourseCode || item.courseCode.toLowerCase() === filterCourseCode.toLowerCase();

    return matchesSearch && matchesCategory && matchesCourse;
  });

  const getFormatBadge = (format: ResourceItem['format']) => {
    switch (format) {
      case 'PDF':
        return <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-red-100 text-red-700 border border-red-200">PDF</span>;
      case 'PPTX':
        return <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-amber-100 text-amber-700 border border-amber-200">PPTX</span>;
      case 'SAV':
        return <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-blue-100 text-blue-700 border border-blue-200">SPSS (.SAV)</span>;
      case 'XLSX':
        return <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-100 text-emerald-700 border border-emerald-200">EXCEL (.XLSX)</span>;
      case 'DOCX':
        return <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-indigo-100 text-indigo-700 border border-indigo-200">WORD (.DOCX)</span>;
      default:
        return <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-slate-100 text-slate-700">FILE</span>;
    }
  };

  return (
    <section id="resources" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
            <FileDown className="w-3.5 h-3.5" />
            <span>Kho Học liệu Mở thaynam.top</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Kho Tài nguyên, Slide & Giới hạn Ôn tập
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Toàn bộ tài liệu chính thống phục vụ học tập, ôn thi kết thúc học phần và làm nghiên cứu khoa học sinh viên được chia sẻ miễn phí 100%.
          </p>
        </div>

        {/* Thầy Nam Quick Cheat-Sheets Highlights */}
        <div className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-900 to-indigo-900 text-white shadow-sm flex items-center justify-between">
            <div>
              <span className="text-[10px] uppercase font-bold text-blue-200 tracking-wider">Cẩm nang độc quyền</span>
              <h4 className="font-bold text-sm text-white mt-0.5">Bí kíp đọc bảng hồi quy SPSS trong 5 phút</h4>
              <p className="text-xs text-blue-200/90 mt-1">Nắm trọn ý nghĩa R-Square, Sig F, Beta và VIF</p>
            </div>
            <button
              onClick={() => handleDownload(RESOURCE_ITEMS[1])}
              className="p-2.5 rounded-xl bg-white/20 hover:bg-white/30 text-white transition-colors shrink-0 ml-3"
              title="Tải ngay"
            >
              <Download className="w-4 h-4" />
            </button>
          </div>

          <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-800 to-teal-900 text-white shadow-sm flex items-center justify-between">
            <div>
              <span className="text-[10px] uppercase font-bold text-emerald-200 tracking-wider">Mẫu chuẩn UEH500</span>
              <h4 className="font-bold text-sm text-white mt-0.5">Template Đề cương NCKH & Thang đo Likert</h4>
              <p className="text-xs text-emerald-200/90 mt-1">Đã định dạng sẵn theo quy chuẩn NCKH UEH 2025</p>
            </div>
            <button
              onClick={() => handleDownload(RESOURCE_ITEMS[3])}
              className="p-2.5 rounded-xl bg-white/20 hover:bg-white/30 text-white transition-colors shrink-0 ml-3"
              title="Tải ngay"
            >
              <Download className="w-4 h-4" />
            </button>
          </div>

          <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-900 to-violet-900 text-white shadow-sm flex items-center justify-between">
            <div>
              <span className="text-[10px] uppercase font-bold text-purple-200 tracking-wider">Bộ dữ liệu thực hành</span>
              <h4 className="font-bold text-sm text-white mt-0.5">File dữ liệu mẫu SPSS Gen Z (N=420)</h4>
              <p className="text-xs text-purple-200/90 mt-1">Sẵn sàng để chạy Cronbach Alpha và EFA</p>
            </div>
            <button
              onClick={() => handleDownload(RESOURCE_ITEMS[2])}
              className="p-2.5 rounded-xl bg-white/20 hover:bg-white/30 text-white transition-colors shrink-0 ml-3"
              title="Tải ngay"
            >
              <Download className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-slate-50 p-4 sm:p-6 rounded-2xl border border-slate-200/80 mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Tìm slide, đề thi, dataset, từ khóa..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    selectedCategory === cat
                      ? 'bg-blue-800 text-white shadow-2xs'
                      : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Active Course filter notification */}
          {filterCourseCode && (
            <div className="flex items-center justify-between p-2.5 bg-blue-100/70 border border-blue-200 rounded-xl text-xs text-blue-900">
              <span className="font-semibold">
                Đang lọc tài liệu theo môn học: <strong className="uppercase">{filterCourseCode}</strong>
              </span>
              <button
                onClick={onClearCourseFilter}
                className="underline font-bold hover:text-blue-950 text-xs"
              >
                Xóa bộ lọc môn
              </button>
            </div>
          )}
        </div>

        {/* Success Alert Banner when downloaded */}
        {downloadSuccessItem && (
          <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-900 flex items-center justify-between animate-in slide-in-from-top duration-300">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-sm">
                  Đã tải xuống thành công tài liệu: {downloadSuccessItem.title}
                </p>
                <p className="text-xs text-emerald-700">
                  Tài liệu học tập mở thuộc bản quyền chia sẻ của ThS. Nguyễn Phương Nam (thaynam.top). Chúc bạn học tốt!
                </p>
              </div>
            </div>
            <button
              onClick={() => setDownloadSuccessItem(null)}
              className="text-emerald-700 hover:text-emerald-900 text-sm font-semibold"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Resources Cards List */}
        {filteredResources.length === 0 ? (
          <div className="text-center py-12 bg-slate-50 rounded-2xl border border-dashed border-slate-300">
            <FileText className="w-10 h-10 text-slate-400 mx-auto mb-2" />
            <p className="text-slate-600 font-semibold text-sm">Không tìm thấy tài liệu phù hợp.</p>
            <p className="text-slate-400 text-xs mt-1">Vui lòng thử từ khóa khác hoặc xóa bộ lọc chuyên mục.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {filteredResources.map((res) => (
              <div
                key={res.id}
                className="p-5 rounded-2xl border border-slate-200 bg-white hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Top info */}
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      {getFormatBadge(res.format)}
                      <span className="text-[11px] font-semibold text-slate-500">
                        {res.courseCode}
                      </span>
                    </div>
                    <span className="text-xs text-slate-400 font-medium">
                      {res.size} • {res.downloadCount.toLocaleString()} lượt tải
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-slate-900 text-base leading-snug mb-2 hover:text-blue-800 transition-colors">
                    {res.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-3">
                    {res.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {res.tags.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-slate-100 text-slate-600"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Card Actions */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    Cập nhật: {res.updatedDate}
                  </span>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setPreviewModalItem(res)}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Chi tiết</span>
                    </button>

                    <button
                      disabled={downloadingId === res.id}
                      onClick={() => handleDownload(res)}
                      className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                        downloadingId === res.id
                          ? 'bg-blue-300 text-white cursor-wait'
                          : 'bg-blue-800 hover:bg-blue-900 text-white shadow-2xs'
                      }`}
                    >
                      {downloadingId === res.id ? (
                        <>
                          <div className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Đang chuẩn bị...</span>
                        </>
                      ) : (
                        <>
                          <Download className="w-3.5 h-3.5" />
                          <span>Tải về</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* Preview & Detail Modal */}
      {previewModalItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 space-y-5">
            <div className="flex items-start justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                {getFormatBadge(previewModalItem.format)}
                <span className="text-xs text-slate-500 font-semibold">{previewModalItem.courseCode}</span>
              </div>
              <button
                onClick={() => setPreviewModalItem(null)}
                className="p-1 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {previewModalItem.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {previewModalItem.description}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-2 text-slate-700">
              <div className="flex justify-between">
                <span className="text-slate-500">Dung lượng file:</span>
                <span className="font-semibold">{previewModalItem.size}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Chuyên mục:</span>
                <span className="font-semibold">{previewModalItem.category}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Ngày cập nhật:</span>
                <span className="font-semibold">{previewModalItem.updatedDate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Lượt tải về:</span>
                <span className="font-semibold">{previewModalItem.downloadCount.toLocaleString()} lượt</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 text-xs text-blue-900 leading-relaxed">
              💡 <strong>Lời dặn của Thầy Nam:</strong> Hãy đọc kỹ phần tóm tắt lý thuyết trước khi bắt tay vào chạy dữ liệu thực hành. Nếu có điểm nào chưa rõ về kết quả mô hình, em có thể sử dụng mục "Trợ lý AI Thầy Nam" ở bên dưới để được hướng dẫn chi tiết nhé!
            </div>

            <div className="pt-2 flex items-center justify-end gap-2 border-t border-slate-100">
              <button
                onClick={() => setPreviewModalItem(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl"
              >
                Đóng
              </button>
              <button
                onClick={() => {
                  handleDownload(previewModalItem);
                  setPreviewModalItem(null);
                }}
                className="px-5 py-2 text-xs font-semibold text-white bg-blue-800 hover:bg-blue-900 rounded-xl flex items-center gap-1.5 shadow-sm"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Bắt đầu tải về</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
