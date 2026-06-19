# NagaEd Authentication API

## Developer

**Name:** Pranjit Das

**Email:** [your-email@example.com](mailto:pranjitd865@gmail.com)

---

## Overview

This project is a REST API built with Node.js, Express, and MySQL that provides user registration and authentication functionality.

### Features

* User Registration
* User Login
* JWT Authentication
* Password Hashing using bcrypt
* Protected User Profile Endpoint
* MySQL Database Integration
* Input Validation
* Environment Variable Configuration

---

## Tech Stack

* Node.js
* Express.js
* MySQL
* bcryptjs
* JSON Web Tokens (JWT)
* express-validator
* dotenv

---

## Project Structure

backend/

├── package.json

├── server.js

├── .env.example

├── README.md

└── src/

    ├── app.js

    ├── config/

    │    └── db.js

    ├── controllers/

    │    └── authController.js

    ├── middleware/

    │    ├── authMiddleware.js

    │    └── validationMiddleware.js

    ├── routes/

    │    └── authRoutes.js

    └── services/

        └── authService.js

---

## Installation

### 1. Clone Repository

```bash
git clone <repository-url>
cd backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create MySQL Database

Login to MySQL:

```bash
mysql -u root -p
```

Create database:

```sql
CREATE DATABASE nagaed;
```

Use database:

```sql
USE nagaed;
```

Create users table:

```sql
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(100) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  address TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## Environment Variables

Create a `.env` file in the project root.

Example:

```env
PORT=5000

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=nagaed

JWT_SECRET=your_jwt_secret_key
```

---

## Running the Application

Development Mode:

```bash
npm run dev
```
for frontend:
   bash
cd frontend
npm run dev
```

Server will start on:

```text
http://localhost:5000
```

---

## API Endpoints

### Register User

**POST**

```http
/api/register
```

Request Body:

```json
{
  "username": "Pranjit",
  "email": "pranjit@example.com",
  "password": "password123",
  "address": "Shillong"
}
```

Success Response:

```json
{
  "success": true,
  "message": "User registered",
  "userId": 1
}
```

---

### Login User

**POST**

```http
/api/login
```

Request Body:

```json
{
  "email": "pranjit@example.com",
  "password": "password123"
}
```

Success Response:

```json
{
  "success": true,
  "token": "JWT_TOKEN"
}
```

---

### Get User Profile

**GET**

```http
/api/users/:id
```

Headers:

```http
Authorization: Bearer JWT_TOKEN
```

Success Response:

```json
{
  "success": true,
  "data": {
    "id": 1,
    "username": "Pranjit",
    "email": "pranjit@example.com",
    "address": "Shillong"
  }
}
```

---

## Security Features

* Passwords hashed using bcrypt
* JWT-based authentication
* Environment variables for sensitive configuration
* Request validation using express-validator
* Protected routes using middleware

---

## Health Check

```http
GET /health
```

Response:

```json
{
  "status": "ok"
}
```
