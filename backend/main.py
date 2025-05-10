from fastapi import FastAPI, Path, Query, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware

from typing import List, Optional 
from pydantic import BaseModel
from uuid import UUID

app = FastAPI()

#corsmiddleware helps avoid issues that arise with FastAPI-Next.js interactions
app.add_middleware(
    CORSMiddleware,
    allow_origins=['http://localhost:3001'], 
    allow_credentials=True, 
    allow_methods=['*'],
    allow_headers=['*'],
)

#pydantic basemodels
class UserBase(BaseModel):
    id: UUID
    name: str
    email: str

class JobBase(BaseModel):
    id: UUID
    title: str
    company: str
    description: str 
    tags: List[str]

class ResumeUpload(BaseModel):
    content: str

class ParsedResume(BaseModel):
    skills: List[str]
    experience: List[str]

class RecommendedJobs(BaseModel): 
    job: JobBase
    score: float 

@app.get("/")
def home():
    return{"Message": "Main Homepage Here"}

@app.get("/jobs")
def joblisting():
    return{"Message": "This will return jobs"}

# app function: syncing users from frontend Next Auth 

# app function: resume uploaded + parsing 

# app function: job recommending functionality based on resume (resume extracted -> )

# app function: skill gap analysis takes in jobs + resume skills -> missing skills/suggestions

# USER functions: 
    # get current user info 
    # user upload new resume or update current resume 
    # user recommendations 

# JOB functions: 
    # jobs + filtering 
    # individual job description