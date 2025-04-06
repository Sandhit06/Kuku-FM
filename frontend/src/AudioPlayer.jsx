import React from "react";

const AudioPlayer = ({ url }) => {
  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold mb-2">🎵 Your AI Audio</h2>
      <audio controls src={url} className="w-full" />
    </div>
  );
};

export default AudioPlayer;
