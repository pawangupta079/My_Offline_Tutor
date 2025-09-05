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
