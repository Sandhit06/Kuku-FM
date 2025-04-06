from gtts import gTTS
import uuid
import os

def text_to_speech(text):
    tts = gTTS(text)
    filename = f"{uuid.uuid4()}.mp3"
    path = f"./audio_outputs/{filename}"
    os.makedirs("audio_outputs", exist_ok=True)
    tts.save(path)
    return filename
