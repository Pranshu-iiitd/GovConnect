# 🚀 GovConnect+ / GovMSE – Empowering MSMEs in Delhi

GovConnect+ (Pro Model – GovMSE Edition) is a React + FastAPI powered platform designed to simplify compliance, licensing, and support systems for MSMEs in Delhi’s industrial zones. It aims to reduce dependency on middlemen, provide instant GovScore evaluations, AI guidance, and generate compliance reports.

---

## 🌐 Live Demo
> _(To be added after deployment)_

---

## 📦 Tech Stack

### Frontend (React)
- ✅ React (w/ Hooks)
- ✅ React Router v6
- ✅ Tailwind CSS
- ✅ React Hot Toast
- ✅ Lucide-React (Icons)
- 🔒 html2pdf.js or jsPDF (planned for PDF generation)

### Backend (FastAPI – Currently Optional)
- FastAPI (REST APIs)
- SQLite + SQLAlchemy
- JWT Authentication
- Pydantic for schema validation

> 💡 *Note:* Backend is currently commented out. All core functionality is hardcoded into the frontend for ideathon prototype/demo purposes.

---

## ✨ Key Features

### ✅ Core Modules
- 🔐 **Login / Signup with JWT**
- 🧾 **Submit Complaint** – File complaints from dashboard
- 📜 **User Profile** – View and update user details
- 📋 **Complaint List** – View submitted complaints
- 🧑‍💼 **Admin Panel** – View all users and complaints (role: admin)

---

### 🏆 GovMSE Pro Features
| Feature          | Description |
|------------------|-------------|
| **GovScore**     | Select 6 key documents (e.g., GST, Udyam, FSSAI) to generate a compliance score (out of 100) |
| **AI Assistant** | Hardcoded interactive guide that gives MSME-specific advice based on your score |
| **Checklist**    | (Planned) Steps to achieve full compliance |
| **Report**       | (Pro) Locked for upgrade. Shows a golden lock icon with "Upgrade to Pro" prompt. |

---

## 📁 Project Structure

