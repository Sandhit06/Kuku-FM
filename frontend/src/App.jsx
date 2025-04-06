import React, { useState } from "react";
import AudioPlayer from "./AudioPlayer";

function App() {
  const [mood, setMood] = useState("motivational");
  const [duration, setDuration] = useState(5);
  const [audioUrl, setAudioUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    const res = await fetch("http://localhost:8000/generate-audio/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ mood, duration }),
    });
    const data = await res.json();
    setAudioUrl(data.audio_url);
    setLoading(false);
  };

  return (
    <div className="p-6 max-w-md mx-auto font-sans text-center">
      <h1 className="text-2xl font-bold mb-4">🎧 AI Audio Journey</h1>

      <div className="mb-3">
        <label className="block mb-1 font-semibold">Mood:</label>
        <select
          value={mood}
          onChange={(e) => setMood(e.target.value)}
          className="p-2 border rounded w-full"
        >
          <option value="motivational">Motivational</option>
          <option value="calm">Calm</option>
          <option value="funny">Funny</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-semibold">Duration (minutes):</label>
        <input
          type="number"
          value={duration}
          onChange={(e) => setDuration(Number(e.target.value))}
          className="p-2 border rounded w-full"
        />
      </div>

      <button
        onClick={handleGenerate}
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
        disabled={loading}
      >
        {loading ? "Generating..." : "Generate Audio"}
      </button>

      {audioUrl && <AudioPlayer url={audioUrl} />}
    </div>
  );
}

export default App;
