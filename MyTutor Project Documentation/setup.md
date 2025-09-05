# MyTutor Frontend Setup Guide

This document explains how to set up the **MyTutor Frontend** project using **React + Vite + Tailwind CSS + React Router**.

---

## 1. Project Setup

```bash
# Create a Vite + React project
npm create vite@latest mytutor-frontend --template react
cd mytutor-frontend

# Install dependencies
npm install react-router-dom
npm install tailwindcss postcss autoprefixer
npx tailwindcss init -p
```


Yes 👍 after you **download `setup.md`**, here’s how you use it locally step by step:

---

## 🔹 Steps to Follow on Your Local Machine

1. **Download and Open the File**

   * Save the `setup.md` file somewhere on your system.
   * Open it in **VS Code** or any Markdown viewer.
   * It contains all the commands and structure you need.

2. **Create Your React + Vite Project**

   * Open a terminal in the folder where you want your project.
   * Run the commands in the **Project Setup** section of `setup.md`:

     ```bash
     npm create vite@latest mytutor-frontend --template react
     cd mytutor-frontend
     npm install
     npm install react-router-dom
     npm install tailwindcss postcss autoprefixer
     npx tailwindcss init -p
     ```

3. **Configure Tailwind**

   * Follow the `tailwind.config.js` and `index.css` edits given in the file.

4. **Create Folder Structure**

   * Inside `src/`, create folders:
     `components/`, `pages/`, `utils/`, `context/`, `assets/`.
   * Copy-paste the **dummy data** example (`dummyData.js`) into `utils/`.

5. **Setup Routing**

   * Replace your default `App.jsx` with the routing code from `setup.md`.

6. **Run the Project**

   ```bash
   npm run dev
   ```

   * Your app should open at `http://localhost:5173`.

7. **Start Building Pages**

   * Add `Home.jsx`, `FindTutor.jsx`, `TutorRegister.jsx`, etc. in `src/pages/`.
   * Create `Navbar.jsx`, `Footer.jsx` inside `src/components/`.
   * Use the **dummyData** for tutor cards in the FindTutor page.

---

👉 Basically, the `setup.md` acts like your **step-by-step manual**.
You just need to **follow it line by line** on your local machine.

