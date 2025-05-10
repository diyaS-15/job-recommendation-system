import os
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from dotenv import load_dotenv
load_dotenv()

# create database url (import from .emv)
SQL_ALCHEMY_DATABASE_URL = os.getenv("DATABASE_URL")

# create engine function -> creates a database engine using database url 
engine = create_engine(SQL_ALCHEMY_DATABASE_URL)

# session maker function -> configures session to be used for database operations 
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# base -> base class for models 
Base = declarative_base()

