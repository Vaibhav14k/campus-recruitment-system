# Internship & Campus Hiring Management Platform

## 📌 Project Overview
This project is a **web-based Internship & Campus Hiring Management Platform** designed to help companies and colleges manage internship applications in a centralized and organized way.

Instead of using Excel sheets, emails, or WhatsApp, this platform allows:
- **Students** to apply for internships and track their application status
- **Admins (Company/TPO)** to post internships, view applicants, and update their status

---

## 🎯 Problem Statement
Many organizations still manage internship and campus hiring manually using spreadsheets and emails.  
This leads to:
- Data inconsistency
- Manual effort
- Lack of transparency for students
- Poor candidate experience

This project solves these problems by providing a **simple, role-based hiring management system**.

---

## 👥 User Roles

### 1️⃣ Student
- Register and login
- View available internships
- Apply for internships
- Track application status (Applied / Shortlisted / Rejected)

### 2️⃣ Admin (Company / TPO)
- Login
- Create internship postings
- View student applications
- Update application status

---

## 🔄 Project Workflow

1. Admin logs in and creates an internship
2. Student registers and logs in
3. Student views internships and applies
4. Application is saved with status = `Applied`
5. Admin reviews applications
6. Admin updates status to `Shortlisted` or `Rejected`
7. Student can see updated status on dashboard

---

## 🛠️ Tech Stack

### Frontend
- React.js
- HTML, CSS, JavaScript
- Axios / Fetch for API calls

### Backend
- Node.js
- Express.js
- JWT Authentication

### Database
- MongoDB

---

## 🏗️ Project Architecture
The project follows a **3-tier architecture**:
- **Frontend** – Handles UI and user interaction
- **Backend** – Handles business logic and APIs
- **Database** – Stores users, internships, and applications

---

## 📁 Project Structure

internship-hiring-platform/
│
├── backend/
│ ├── src/
│ │ ├── models/
│ │ ├── controllers/
│ │ ├── routes/
│ │ ├── middleware/
│ │ └── config/
│ ├── server.js
│ └── package.json
│
├── frontend/
│ ├── src/
│ │ ├── pages/
│ │ ├── components/
│ │ ├── api/
│ │ └── context/
│ ├── App.js
│ └── package.json
│
└── README.md



---

## 🗄️ Database Design

### User
- name
- email
- password
- role (student/admin)

### Internship
- title
- description
- skills
- lastDate

### Application
- studentId
- internshipId
- status

---

## 🔐 Authentication
- JWT-based authentication
- Role-based access control
- Protected routes for admin and student dashboards

---

## 🚀 How to Run the Project

### Backend
```bash
cd backend
npm install
npm start

