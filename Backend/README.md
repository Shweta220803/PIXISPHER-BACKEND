# Backend - Node.js Assignment

A modular backend system built with **Node.js**, **Express**, and **MongoDB** to simulate the core architecture of an AI-powered photography marketplace.


##  Features Implemented

-  JWT-based Auth (client, partner, admin)
-  Partner onboarding & verification
-  Smart lead matching (inquiries)
-  Partner portfolio management
-  Admin dashboard: stats, verifications, reviews, categories
-  Role-based access control middleware



##  Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT for auth
- bcrypt for password hashing
- Postman for API testing


##  Postman Collection

 [Download Collection](./Pixisphere_Backend_API.postman_collection.json)  
Use it to test all APIs from signup to admin dashboards.

##  Installation & Setup

1. Clone the repository:

git clone https://github.com/your-username/pixisphere-backend.git
cd pixisphere-backend

2. Install dependencies:

npm install

3. Create a `.env` file:

PORT=
MONGO_URI=
JWT_SECRET=your_jwt_secret


4. Start the server:

npm start

## 🔐 Auth Roles

- `client` – books services
- `partner` – photographers, studios
- `admin` – verifies partners, manages data

Use role-based tokens to access protected APIs.


##  Deployment (Render)

1. Push your code to GitHub
2. Go to [render.com](https://render.com)
3. Select “Web Service” → Connect repo → Use build command:

npm install && npm start

## 🧾 Key APIs

| Method | Endpoint                 | Role    | Description     |
| ------ | ------------------------ | ------- | --------------- |
| POST   | /api/auth/signup         | All     | Register a user |
| POST   | /api/auth/login          | All     | Login & get JWT |
| POST   | /api/partner/onboard     | Partner | Submit details  |
| GET    | /api/admin/verifications | Admin   | View pending    |
| PUT    | /api/admin/verify/:id    | Admin   | Approve/Reject  |
| POST   | /api/inquiry             | Client  | New inquiry     |
| GET    | /api/inquiry/leads       | Partner | View leads      |
| POST   | /api/partner/portfolio   | Partner | Add image       |
| GET    | /api/admin/stats         | Admin   | Dashboard KPIs  |
