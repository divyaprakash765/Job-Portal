
# 💼 Jobify - Job Portal Web App

A full-featured Job Portal web application that enables users to find and apply for job opportunities. It includes advanced search filters, role-based access, and a clean UI for seamless interaction. Built with the MERN stack.

---

## 🚀 Features

- 🔍 Search and filter job listings by title, company, or location  
- 📝 Post, edit, and manage job listings (admin functionality)  
- 👤 Role-based authentication (job seeker / employer)  
- 🗂️ Saved jobs, applied jobs, and custom job tracking  
- 📈 Optimized backend for performance and scalability  
- 💻 Responsive and clean UI for both desktop and mobile  

---

## 🛠️ Tech Stack

- **Frontend:** React.js, Redux Toolkit, Tailwind CSS  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Authentication:** JWT (JSON Web Tokens)  
- **Other Tools:** Postman, Git, GitHub  

---

## 📂 Folder Structure

```
/client
  /src
    /components
    /pages
    /redux
    /services

/server
  /routes
  /controllers
  /models
  /middleware
  /utils
```

---

## 🧑‍💻 Functionality Breakdown

### 👤 User Registration/Login
- Secure signup and login with token-based authentication  
- Different views for job seekers and employers  

### 👨‍💼 Job Seeker
- Browse and filter jobs  
- Save and apply to jobs  
- View application history  

### 🏢 Employer
- Post new job openings  
- Edit and delete existing job posts  
- Manage applicants  

---

## ⚙️ Installation

```bash
git clone https://github.com/your-username/job-portal.git
cd job-portal

# Backend
cd server
npm install
```

---

## 🌐 Environment Variables

Create a `.env` file in the `/server` directory:

```env
PORT=5000
MONGODB_URI=your_mongo_uri
JWT_SECRET=your_jwt_secret
```

---

## ▶️ Running the App

```bash
npm run dev
```

The app will run at:  
`http://localhost:5000`  

---

## 📌 License

MIT License
