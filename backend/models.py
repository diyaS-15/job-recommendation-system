from sqlalchemy import Column, ForeignKey, String 
from database import database

# USER Table (user info after auth)
class Users(Base):
    __tablename__ = 'users'
    id = Column(int, primary_key=True, index=True)
    name = Column(String, nullable=False)
    email = Column(String, unique=True, nullable=False)

# RESUME Table (parsed resume)
class Resumes(Base):
    __tablename__ = 'resumes' 
    id = Column(int, primary_key=True, index=True)
    user_id = Column(int, ForeignKey("users.id"))
    skills = Column(list[String], nullable=True)
    experience = Column(list[String], nullable=True)

# JOBS Table (all job listing scrapped/api-ed)
class Jobs(Base): 
    __tablename__ = 'jobs'
    id = Column(int, primary_key=True, index=True)
    title 

# RECOMMENDED JOBS (recommended jobs)