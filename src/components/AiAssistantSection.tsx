import React, { useState, useRef, useEffect } from 'react';
import {
  Sparkles,
  BrainCircuit,
  Send,
  RotateCcw,
  Copy,
  Check,
  GraduationCap,
  HelpCircle,
  Lightbulb,
  Cpu,
  ChevronRight,
  ShieldCheck,
  BookOpen,
} from 'lucide-react';

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  text: string;
  timestamp: string;
  isHighThinking?: boolean;
  modelUsed?: string;
}

export const AiAssistantSection: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-1',
      role: 'assistant',
      text: `Chào các em sinh viên và học viên! Thầy là phiên bản Trợ lý Học thuật AI của **Thầy Nam (thaynam.top)**.

Thầy được trang bị công nghệ **Gemini 4 Argon** kết hợp chế độ **High Thinking Mode (Tư duy Sâu)** để cùng các em phân tích chi tiết mọi vấn đề học thuật phức tạp:
- 📊 **Phân tích định lượng:** SPSS, SmartPLS 4, AMOS, hồi quy OLS, Cronbach's Alpha, EFA, CFA, kiểm định SEM.
- 📝 **Phương pháp NCKH:** Xác định Research Gap, thiết kế khung mô hình, viết đề xuất nghiên cứu **UEH500 & Euréka**.
- 🎯 **Ôn thi kết thúc học phần:** Chiến lược giải case study quản trị học, cẩm nang đạt điểm A.

Em đang gặp khúc mắc ở môn học hay đề tài nghiên cứu nào? Cứ đặt câu hỏi bên dưới nhé!`,
      timestamp: 'Vừa xong',
      isHighThinking: true,
      modelUsed: 'gemini-4-argon',
    },
  ]);

  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isHighThinking, setIsHighThinking] = useState(true);
  const [selectedTopic, setSelectedTopic] = useState('general');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const quickPrompts = [
    {
      label: 'Biến trung gian vs Biến điều tiết',
      text: 'Thầy phân tích giúp em sự khác biệt bản chất giữa biến trung gian (Mediator) và biến điều tiết (Moderator) trong mô hình nghiên cứu? Cho ví dụ thực tế trong kinh doanh.',
    },
    {
      label: 'Khi nào dùng SmartPLS thay AMOS?',
      text: 'Thầy cho em hỏi khi nào nên chọn SmartPLS (PLS-SEM) thay vì AMOS (CB-SEM) cho dữ liệu nghiên cứu khoa học sinh viên UEH?',
    },
    {
      label: 'Gợi ý đề tài UEH500 năm 2026',
      text: 'Thầy gợi ý giúp nhóm em 3 hướng đề tài NCKH sinh viên UEH500 tiềm năng liên quan đến Trí tuệ Nhân tạo (GenAI) và Hành vi tiêu dùng của Gen Z?',
    },
    {
      label: 'Cronbach Alpha < 0.6 thì làm sao?',
      text: 'Khi chạy SPSS, nếu hệ số Cronbach Alpha của một nhóm biến thấp hơn 0.6 thì nguyên nhân do đâu và quy trình khắc phục từng bước như thế nào thưa Thầy?',
    },
  ];

  const handleSendMessage = async (customText?: string) => {
    const textToSend = customText || inputMessage;
    if (!textToSend.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      text: textToSend.trim(),
      timestamp: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat-thaynam', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: textToSend.trim(),
          history: messages.map((m) => ({
            role: m.role === 'user' ? 'user' : 'model',
            text: m.text,
          })),
          isHighThinking: isHighThinking,
          topic: selectedTopic,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Lỗi kết nối máy chủ');
      }

      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        role: 'assistant',
        text: data.reply || 'Thầy chưa nhận được phản hồi, em vui lòng thử lại nhé.',
        timestamp: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }),
        isHighThinking: isHighThinking,
        modelUsed: data.modelUsed || 'gemini-4-argon',
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (error: any) {
      const errorMsg: ChatMessage = {
        id: `err-${Date.now()}`,
        role: 'assistant',
        text: `Đã có lỗi xử lý: ${error.message || 'Không thể kết nối đến máy chủ AI'}. Em vui lòng kiểm tra lại kết nối mạng hoặc thử lại sau giây lát!`,
        timestamp: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        role: 'assistant',
        text: 'Cuộc trò chuyện đã được làm mới. Em có câu hỏi học tập hoặc đề tài nghiên cứu nào cần Thầy hỗ trợ không?',
        timestamp: 'Vừa xong',
        isHighThinking: isHighThinking,
        modelUsed: 'gemini-4-argon',
      },
    ]);
  };

  return (
    <section id="ai-assistant" className="py-20 bg-gradient-to-b from-slate-900 via-slate-900 to-indigo-950 text-white relative overflow-hidden">
      {/* Decorative cosmic blurs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
            <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
            <span>Gemini 4 Argon • ThinkingLevel.HIGH</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Trợ lý Học thuật AI Thầy Nam
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Được huấn luyện trên cơ sở kiến thức học phần UEH, kinh nghiệm hướng dẫn NCKH và triết lý sư phạm của ThS. Nguyễn Phương Nam.
          </p>
        </div>

        {/* AI Chat Box Container */}
        <div className="bg-slate-800/80 backdrop-blur-xl rounded-3xl border border-slate-700/80 shadow-2xl overflow-hidden flex flex-col h-[700px]">
          
          {/* Chat Bar Header */}
          <div className="px-6 py-4 bg-slate-800/90 border-b border-slate-700 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center font-bold shadow-md">
                <BrainCircuit className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-sm text-white">Thầy Nam AI Assistant</h3>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-[11px] text-emerald-400 font-semibold">Trực tuyến</span>
                </div>
                <p className="text-[11px] text-slate-400">
                  Cố vấn PPNCKH, Phân tích dữ liệu & Quản trị UEH
                </p>
              </div>
            </div>

            {/* Thinking Mode Switch & Clear Chat */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-slate-900/60 px-3 py-1.5 rounded-xl border border-slate-700 text-xs">
                <Cpu className="w-3.5 h-3.5 text-indigo-400" />
                <span className="text-slate-300 font-medium">Chế độ Tư duy Sâu:</span>
                <button
                  type="button"
                  onClick={() => setIsHighThinking(!isHighThinking)}
                  className={`px-2 py-0.5 rounded text-[10px] font-bold transition-all ${
                    isHighThinking
                      ? 'bg-indigo-600 text-white shadow-2xs'
                      : 'bg-slate-700 text-slate-400'
                  }`}
                  title="Kích hoạt tư duy nhiều bước (ThinkingLevel.HIGH)"
                >
                  {isHighThinking ? 'BẬT (HIGH)' : 'TẮT'}
                </button>
              </div>

              <button
                onClick={handleResetChat}
                className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-700/60 transition-colors"
                title="Làm mới cuộc trò chuyện"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Starter Prompts Chips */}
          <div className="px-6 py-2.5 bg-slate-900/40 border-b border-slate-700/60 overflow-x-auto flex items-center gap-2 scrollbar-none">
            <span className="text-[11px] text-slate-400 font-semibold shrink-0 flex items-center gap-1">
              <Lightbulb className="w-3 h-3 text-amber-400" />
              Hỏi nhanh:
            </span>
            {quickPrompts.map((p, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(p.text)}
                disabled={isLoading}
                className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700/80 shrink-0 transition-colors"
              >
                {p.label}
              </button>
            ))}
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.role === 'assistant' && (
                  <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-1 shadow-sm">
                    TN
                  </div>
                )}

                <div
                  className={`max-w-[85%] sm:max-w-[80%] rounded-2xl p-4 text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-blue-600 text-white rounded-tr-none'
                      : 'bg-slate-900/90 text-slate-100 border border-slate-700/80 rounded-tl-none shadow-sm'
                  }`}
                >
                  {/* Assistant Meta Tags */}
                  {msg.role === 'assistant' && (
                    <div className="flex items-center justify-between text-[11px] text-slate-400 pb-2 mb-2 border-b border-slate-800">
                      <span className="flex items-center gap-1 text-indigo-400 font-semibold">
                        <Cpu className="w-3 h-3" />
                        {msg.modelUsed || 'gemini-4-argon'} • High Thinking
                      </span>
                      <button
                        onClick={() => handleCopy(msg.id, msg.text)}
                        className="text-slate-400 hover:text-white flex items-center gap-1"
                        title="Sao chép câu trả lời"
                      >
                        {copiedId === msg.id ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-400" />
                            <span className="text-emerald-400">Đã chép</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Sao chép</span>
                          </>
                        )}
                      </button>
                    </div>
                  )}

                  {/* Message Content with simple Markdown Formatting */}
                  <div className="whitespace-pre-wrap space-y-2">
                    {msg.text.split('\n\n').map((paragraph, pIdx) => (
                      <p key={pIdx}>
                        {paragraph.split('**').map((chunk, cIdx) =>
                          cIdx % 2 === 1 ? (
                            <strong key={cIdx} className="text-white font-bold">
                              {chunk}
                            </strong>
                          ) : (
                            chunk
                          )
                        )}
                      </p>
                    ))}
                  </div>

                  <div className="mt-2 text-right">
                    <span className="text-[10px] text-slate-400/80">{msg.timestamp}</span>
                  </div>
                </div>

                {msg.role === 'user' && (
                  <div className="w-8 h-8 rounded-lg bg-indigo-700 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-1 shadow-sm">
                    SV
                  </div>
                )}
              </div>
            ))}

            {/* Thinking / Loading Animation */}
            {isLoading && (
              <div className="flex gap-3 justify-start">
                <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-1 animate-pulse">
                  TN
                </div>
                <div className="bg-slate-900/90 text-slate-200 border border-indigo-500/50 rounded-2xl rounded-tl-none p-4 max-w-md shadow-md space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-indigo-400">
                    <BrainCircuit className="w-4 h-4 animate-spin text-indigo-400" />
                    <span>Gemini 4 Argon đang kích hoạt chế độ suy luận chuyên sâu...</span>
                  </div>
                  <p className="text-xs text-slate-400 italic">
                    Đang rà soát kiến thức phương pháp nghiên cứu, chuẩn mực kiểm định thống kê và quy chuẩn UEH...
                  </p>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Chat Input Box */}
          <div className="p-4 bg-slate-900/90 border-t border-slate-700">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                placeholder="Nhập câu hỏi học thuật, thắc mắc SPSS, đề tài NCKH cùng Thầy Nam..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                disabled={isLoading}
                className="flex-1 px-4 py-3 rounded-xl bg-slate-800 text-white placeholder:text-slate-400 border border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
              />

              <button
                type="submit"
                disabled={!inputMessage.trim() || isLoading}
                className="px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold text-sm flex items-center gap-2 shadow-md transition-all shrink-0"
              >
                <span>Gửi</span>
                <Send className="w-4 h-4" />
              </button>
            </form>

            <div className="mt-2 flex items-center justify-between text-[11px] text-slate-400 px-1">
              <span>Được tối ưu cho sinh viên và học viên UEH</span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                Dữ liệu giảng dạy chính thức từ thaynam.top
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
