from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from ai_generator import generate_script
from tts_service import text_to_speech
import uuid
import os


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/generate-audio/")
async def generate_audio(request: Request):
    data = await request.json()
    mood = data.get("mood", "motivational")
    duration = data.get("duration", 5)

    text_script = generate_script(mood, duration)
    audio_path = text_to_speech(text_script)

    return {"audio_url": f"http://localhost:8000/audio/{audio_path}"}

@app.get("/audio/{filename}")
async def get_audio(filename: str):
    return FileResponse(f"./audio_outputs/{filename}", media_type="audio/mpeg")
