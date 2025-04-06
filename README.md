# 🎧 Kuku FM AI Audio Journey – GenAI Project

Welcome to the **AI Audio Journey** – an innovative prototype built as part of the Kuku FM Management Trainee (GenAI) application.
This project showcases how **Generative AI** can boost engagement on an OTT audio platform by delivering personalized, AI-crafted audio content based on user mood and preferences.

---

## 🌟 Project Idea

**"AI Audio Journey"** is a dynamic feature that lets users:
- Select a mood (e.g., *Motivational, Calm, Funny*)
- Set a preferred listening duration
- Receive a **custom-generated audio experience** crafted by AI

The audio is generated in real-time using text generation + TTS models and played back within the app, enhancing retention and making users return for a fresh experience every day.

---

## 🛠️ Tech Stack

### 🔹 Frontend (React + Vite)
- User mood + duration selection
- Trigger API calls to backend
- Audio playback UI

### 🔹 Backend (FastAPI + Python)
- Text generation logic (mocked for now, can be plugged into GPT/LLMs)
- Text-to-speech using `gTTS`
- Audio file serving with FastAPI

---

## 💻 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/Sandhit06/Kuku-FM
cd Kuku-FM
```

### 2. Backend Setup
```bash
cd backend
python -m venv venv
./venv/Scripts/activate    # Windows
pip install -r requirements.txt
python -m uvicorn main:app --reload
```

### 3. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
Visit: [http://localhost:5173](http://localhost:5173)

---

## 📦 Features

- 🎙️ **AI-Powered Audio Generation** – Personalized every session
- 🎛️ **Minimal UI** – Clean, fast and mobile-friendly
- 🚀 **PWA-Ready Architecture** – Offline access coming soon
- 🧠 **Modular Codebase** – Easy to extend with GPT/LLM APIs or TTS APIs like ElevenLabs

---

## 📊 Future Improvements
- Use **OpenAI / Claude** for story generation
- Use **ElevenLabs / Google TTS** for higher quality voices
- Add **offline storage (IndexedDB)**
- Make it installable via **PWA** for native-like experience

---

## 🤝 Contributing
This prototype is part of a hiring task, but if you're excited about audio + AI, feel free to fork and experiment!

---

## 📄 License
MIT – for educational and demo purposes only.

---

Built with ❤️ for Kuku FM by [@sandhit] 👨‍💻

> “Audio isn't just content, it's a companion. Let's make it smarter.”
