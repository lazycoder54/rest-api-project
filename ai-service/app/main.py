from fastapi import FastAPI, HTTPException
from dotenv import load_dotenv

from app.models import (
    UsernameRequest,
    UsernameResponse,
)

from app.services.groq_service import (
    generate_usernames,
)

load_dotenv()

app = FastAPI(
    title="NagaEd AI Username Service",
    description="Generate usernames using Groq",
    version="1.0.0",
)

# Health Check Route
@app.get("/")
async def root():
    return {
        "status": "healthy",
        "service": "NagaEd AI Username Service"
    }

# Main Endpoint
@app.post(
    "/api/suggest-username",
    response_model=UsernameResponse,
)
async def suggest_username(
    payload: UsernameRequest,
):
    try:
        suggestions = await generate_usernames(
            payload.interests
        )

        return {
            "suggestions": suggestions
        }

    except Exception as error:
        raise HTTPException(
            status_code=500,
            detail=str(error)
        )