import random

def generate_script(mood, duration):
    story_bank = {
        "motivational": [
            "This is your reminder that no dream is too big...",
            "Push yourself, because no one else is going to do it for you."
        ],
        "calm": [
            "Let’s take a deep breath together...",
            "Imagine a peaceful forest..."
        ],
        "funny": [
            "Why did the AI cross the road? To optimize the other side.",
            "Here’s a story of an AI standup comedian..."
        ]
    }

    base = random.choice(story_bank.get(mood, ["Hope you're having a good day!"]))
    return f"{base} This story is generated especially for you."

