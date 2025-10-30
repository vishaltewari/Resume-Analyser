# 📋 Application Tracker

A modern AI-powered resume analysis and job application tracking system built with React, TypeScript, and Puter Cloud Services.

## ✨ Features

- 🤖 **AI-Powered Resume Analysis** - Get intelligent feedback and ATS scores for your resumes
- 📄 **PDF Processing** - Upload and convert PDF resumes to images using PDF.js
- 🎯 **Job Application Tracking** - Keep track of all your job applications in one place
- 📊 **Performance Metrics** - Visual scoring system with dynamic badges and progress indicators
- 🔐 **Secure Cloud Storage** - Integration with Puter cloud services for file storage and data persistence
- � **Responsive Design** - Works seamlessly across desktop and mobile devices
- ⚡ **Real-time Updates** - Live status updates during resume processing
- 🎨 **Modern UI** - Clean, intuitive interface with smooth animations

## � Tech Stack

- **Frontend**: React 18, TypeScript, React Router
- **Styling**: TailwindCSS with custom animations
- **File Processing**: PDF.js for PDF to image conversion
- **Cloud Services**: Puter (File storage, AI analysis, Key-value store)
- **Build Tool**: Vite with Hot Module Replacement
- **State Management**: React hooks with custom stores

## 📦 Getting Started

### Prerequisites

- Node.js (v20.19.0 or higher)
- npm (v10.9.0 or higher)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/vishaltewari/application_analyser.git
   cd application_analyser
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```bash
   # Add your Puter API credentials
   PUTER_API_KEY=your_puter_api_key_here
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

Your application will be available at `http://localhost:5173`

## 🎯 Usage

### 1. Upload Resume
- Navigate to the upload page
- Fill in job details (Company Name, Job Title, Job Description)
- Drag and drop or click to upload your PDF resume
- Click "Analyze Resume" to start processing

### 2. View Analysis
- Watch real-time progress updates during processing
- Get redirected to the review page upon completion
- View your resume image alongside detailed AI feedback
- See your ATS score with color-coded badges

### 3. Track Applications
- Browse all your submitted applications on the home page
- Click on any resume card to view detailed analysis
- Monitor your application performance over time

## 🏗️ Project Structure

```
app/
├── components/          # Reusable React components
│   ├── FileUploader.tsx    # Drag-and-drop file upload
│   ├── Navbar.tsx          # Navigation component
│   ├── ResumeCard.tsx      # Resume display card
│   ├── ScoreCircle.tsx     # Circular score indicator
│   └── ScoreBadge.tsx      # Score badge with dynamic styling
├── routes/              # Page components
│   ├── home.tsx            # Main dashboard
│   ├── upload.tsx          # Resume upload page
│   └── resume.tsx          # Resume review page
├── lib/                 # Utility functions
│   ├── pdf2img.ts          # PDF to image conversion
│   ├── puter.ts            # Puter cloud integration
│   └── util.ts             # General utilities
├── constants/           # App constants and configurations
└── types/              # TypeScript type definitions
```

## 🔧 Key Components

### FileUploader
Drag-and-drop interface for PDF resume uploads with visual feedback.

### ScoreBadge
Dynamic scoring component with color-coded badges:
- **Green** (70+): Strong
- **Yellow** (50-70): Good Start  
- **Red** (<50): Needs Work

### PDF Processing
Converts uploaded PDF resumes to images for AI analysis and display.

## 🚀 Building for Production

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## 🌐 Deployment

### Vercel (Recommended)

1. **Connect your repository to Vercel**
2. **Add environment variables**:
   - `PUTER_API_KEY`: Your Puter API key
3. **Deploy automatically on push to main branch**

### Other Platforms

The application can be deployed to any platform supporting Node.js applications:
- Netlify
- Railway  
- Heroku
- AWS Amplify
- Digital Ocean App Platform

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [React Router](https://reactrouter.com/)
- Powered by [Puter Cloud Services](https://puter.com/)
- PDF processing by [PDF.js](https://mozilla.github.io/pdf.js/)
- Styled with [TailwindCSS](https://tailwindcss.com/)

---

**Made with ❤️ by [Vishal Tewari](https://github.com/vishaltewari)**
