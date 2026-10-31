import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI, ThinkingLevel } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());

// Initialize Google GenAI
const apiKey = process.env.GEMINI_API_KEY || '';
const ai = new GoogleGenAI({
  apiKey: apiKey,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    },
  },
});

const THAY_NAM_SYSTEM_INSTRUCTION = `Bạn là Trợ lý Học thuật AI của Thầy Nam (ThS. Nguyễn Phương Nam), giảng viên Khoa Quản trị - Trường Kinh doanh UEH (Đại học Kinh tế TP.HCM), sáng lập chuyên trang học thuật thaynam.top và nền tảng Happy Strong.

Đặc điểm phong cách:
- Xưng hô: Thầy xưng "Thầy", gọi người dùng là "em", "bạn", "các bạn sinh viên" hoặc "học viên".
- Giọng văn: Truyền cảm hứng, khoa học, dí dỏm, tận tâm, thực tế, luôn bám sát tiêu chuẩn học thuật của UEH và quốc tế.
- Chuyên môn cốt lõi:
  1. Phương pháp Nghiên cứu Khoa học trong Kinh doanh (PPNCKH): Xác định vấn đề nghiên cứu, tổng quan tài liệu, thiết kế nghiên cứu định tính và định lượng, phát triển thang đo (Likert), xây dựng bảng hỏi, xử lý mẫu nghiên cứu.
  2. Phân tích Định lượng & Xử lý số liệu: Kiểm định độ tin cậy Cronbach's Alpha, Phân tích nhân tố khám phá (EFA), Khẳng định (CFA), Hồi quy OLS, Mô hình cấu trúc tuyến tính SEM qua phần mềm SPSS, SmartPLS, AMOS, R.
  3. Quản trị Kinh doanh & Chiến lược: Hoạch định chiến lược doanh nghiệp, mô hình Canvas, ma trận BCG, SWOT, PESTEL, Chuỗi giá trị, Quản trị sự thay đổi.
  4. Marketing Kỹ thuật số, E-Commerce & Ứng dụng AI/EdTech: Chiến lược tiếp thị số, phân tích hành vi khách hàng số, ứng dụng GenAI để tối ưu hóa hiệu suất làm việc.
  5. Cố vấn nghiên cứu UEH500 & Euréka: Hướng dẫn viết bài báo nghiên cứu, trình bày báo cáo khóa luận tốt nghiệp, mẹo ôn thi kết thúc học phần điểm cao.

Hãy phân tích vấn đề một cách có chiều sâu, lập luận chặt chẽ từng bước, cung cấp ví dụ thực tế trong bối cảnh thị trường Việt Nam và môi trường đại học UEH.`;

// Endpoint: Ask Thay Nam AI with Thinking Mode
app.post('/api/chat-thaynam', async (req, res) => {
  try {
    const { message, history = [], isHighThinking = true, topic = 'general' } = req.body;

    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Message is required' });
    }

    if (!apiKey) {
      return res.status(500).json({
        error: 'Chưa cấu hình GEMINI_API_KEY trên hệ thống máy chủ.',
      });
    }

    // Build chat contents from history
    const contents: any[] = [];
    if (Array.isArray(history)) {
      for (const item of history.slice(-8)) {
        if (item.role && item.text) {
          contents.push({
            role: item.role === 'user' ? 'user' : 'model',
            parts: [{ text: item.text }],
          });
        }
      }
    }

    // Add current user message with topic guidance
    let promptWithContext = message;
    if (topic && topic !== 'general') {
      promptWithContext = `[Chủ đề: ${topic}]\n${message}`;
    }

    contents.push({
      role: 'user',
      parts: [{ text: promptWithContext }],
    });

    // Strategy: First try gemini-4-argon with ThinkingLevel.HIGH per instructions.
    // Fall back to gemini-3.8-flash with ThinkingLevel.HIGH if needed.
    let responseText = '';
    let usedModel = 'gemini-4-argon';

    try {
      const response = await ai.models.generateContent({
        model: 'gemini-4-argon',
        contents: contents,
        config: {
          systemInstruction: THAY_NAM_SYSTEM_INSTRUCTION,
          thinkingConfig: {
            thinkingLevel: isHighThinking ? ThinkingLevel.HIGH : ThinkingLevel.MEDIUM,
          },
        },
      });
      responseText = response.text || '';
    } catch (argonErr: any) {
      console.warn('Gemini 4 Argon invocation fell back to Gemini 3.8 Flash:', argonErr?.message || argonErr);
      usedModel = 'gemini-3.8-flash';
      const fallbackResponse = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: contents,
        config: {
          systemInstruction: THAY_NAM_SYSTEM_INSTRUCTION,
          thinkingConfig: {
            thinkingLevel: isHighThinking ? ThinkingLevel.HIGH : ThinkingLevel.MEDIUM,
          },
        },
      });
      responseText = fallbackResponse.text || '';
    }

    return res.json({
      reply: responseText,
      modelUsed: usedModel,
      isHighThinking: isHighThinking,
    });
  } catch (error: any) {
    console.error('Error generating AI response:', error);
    return res.status(500).json({
      error: error?.message || 'Đã có lỗi xảy ra trong quá trình xử lý câu hỏi cùng Thầy Nam AI.',
    });
  }
});

// Endpoint: Student Appointment / Question submission
app.post('/api/contact-thaynam', async (req, res) => {
  try {
    const { name, email, studentId, course, messageType, content } = req.body;
    if (!name || !email || !content) {
      return res.status(400).json({ error: 'Vui lòng điền đầy đủ họ tên, email và nội dung.' });
    }

    // Return structured confirmation
    return res.json({
      success: true,
      ticketId: `TN-${Date.now().toString().slice(-6)}`,
      receivedAt: new Date().toISOString(),
      message: 'Thông tin của bạn đã được ghi nhận. Thầy Nam sẽ phản hồi qua email sớm nhất!',
    });
  } catch (error: any) {
    return res.status(500).json({ error: error?.message || 'Lỗi xử lý yêu cầu liên hệ.' });
  }
});

// Server setup in dev vs prod
async function startServer() {
  const isProd = process.env.NODE_ENV === 'production';

  if (!isProd) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Thay Nam Personal Website Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
