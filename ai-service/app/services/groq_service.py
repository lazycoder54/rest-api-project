import os
from dotenv import load_dotenv
from groq import Groq

load_dotenv()

client = Groq(
    api_key=os.getenv("GROQ_API_KEY")
)


async def generate_usernames(
    interests: list[str]
):
    prompt = f"""
Generate exactly 3 creative usernames.

Interests:
{", ".join(interests)}

Rules:
- Unique usernames
- Short
- Memorable
- No explanations
- Return one username per line
"""

    response = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[
            {
                "role": "user",
                "content": prompt,
            }
        ],
        temperature=0.9,
    )

    text = (
        response.choices[0]
        .message.content
        .strip()
    )

    suggestions = [
        line.strip()
        for line in text.split("\n")
        if line.strip()
    ]

    return suggestions[:3]