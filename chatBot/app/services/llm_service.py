from openai import OpenAI
from app.config import Config

client = OpenAI(api_key=Config.OPENAI_API_KEY)

SYSTEM_PROMPT = """
Eres el asistente del CV de Rebeca.
Responde solo preguntas profesionales sobre ella.
"""

REBECA_CONTEXT = """
Reebca es desarrolladora backend Python.
Experiencia en Flask, FastAPI, PostgreSQL y Docker.
"""


def ask_llm(user_message: str) -> str:
    completion = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "system", "content": SYSTEM_PROMPT},
            {"role": "system", "content": REBECA_CONTEXT},
            {"role": "user", "content": user_message}
        ],
        temperature=0.3,
    )

    return completion.choices[0].message.content
