from pydantic import BaseModel, Field
from typing import List


class UsernameRequest(BaseModel):
    interests: List[str] = Field(
        min_length=1,
        description="List of user interests"
    )


class UsernameResponse(BaseModel):
    suggestions: List[str]