# NagaED Assignment

## Author

**Pranjit Das**

Email: [pranjitd865@gmail.com](mailto:pranjitd865@gmail.com)

GitHub: https://github.com/lazycoder54

---

## Project Overview

The project consists of:

* React + Vite Frontend
* Flask Backend API
* FastAPI AI Service
* MySQL Database
* Groq LLM Integration

---

## Architecture

![Architecture Diagram](./architecture.png)

---

## Tech Stack

### Frontend

* React
* TypeScript
* Vite
* Nginx

### Backend

* Flask
* SQLAlchemy

### AI Service

* FastAPI
* Groq API

### Database

* MySQL 8

### Containerization

* Docker
* Docker Compose

---

# Setup Instructions

## 1. Clone Repository

```bash
git clone https://github.com/lazycoder54/rest-api-project.git

cd rest-api-project
```

---

## 2. Configure Environment Variables

Create a `.env` file inside the AI Service directory:

```env
GROQ_API_KEY=your_groq_api_key
```

---

# Run Using Docker (Recommended)

## Build and Start Services

```bash
docker compose up --build
```

## Available Services

| Service     | URL                        |
| ----------- | -------------------------- |
| Frontend    | http://localhost:3000      |
| Backend API | http://localhost:5000      |
| AI Service  | http://localhost:8000/docs |

---

# Run Locally (Without Docker)

## Prerequisites

* Python 3.12+
* Node.js 20+
* MySQL 8
* Groq API Key

---

## Step 1: Start MySQL

Create a database:

```sql
CREATE DATABASE NagaEd Assignment;
```

Update database credentials in the backend configuration if necessary.

---

## Step 2: Run Backend (Flask)

```bash
cd backend

python -m venv venv

# Windows
venv\Scripts\activate

# Linux / macOS
source venv/bin/activate

pip install -r requirements.txt

python app.py
```

Backend URL:

```text
http://localhost:5000
```

---

## Step 3: Run AI Service (FastAPI)

```bash
cd ai-service

python -m venv venv

# Windows
venv\Scripts\activate

# Linux / macOS
source venv/bin/activate

pip install -r requirements.txt

uvicorn app.main:app --reload --port 8000
```

AI Service URL:

```text
http://localhost:8000
```

Swagger Documentation:

```text
http://localhost:8000/docs
```

---

## Step 4: Run Frontend

```bash
cd frontend

npm install

npm run dev
```

Frontend URL:

```text
http://localhost:5173
```

---

## Docker Services

The Docker Compose setup includes:

* frontend
* backend
* ai-service
* mysql

---

## Assumptions

* Docker Desktop is installed for containerized deployment.
* MySQL 8 is available for local development.
* Internet connectivity is required for Groq API access.
* Valid Groq API key is configured.

---

## Repository Structure

```text
rest-api-project/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── Dockerfile
│
├── backend/
│   ├── app/
│   └── Dockerfile
│
├── ai-service/
│   ├── app/
│   └── Dockerfile
│
├── architecture.png
├── docker-compose.yml
├── README.md
└── .gitignore
```

---

## Notes

* The system follows a microservice architecture.
* AI functionality is isolated in a dedicated FastAPI service.
* Docker Compose orchestrates all services.
* The frontend is served using Nginx in production containers.
* Username generation is powered by Groq LLM.
