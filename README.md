# Feedback Survey System

A web-based Customer Feedback Survey (CFS) system designed for offices to collect structured feedback and improve public service delivery. Built with a privacy-first approach and a lightweight backend using Google Apps Script.

## 🚀 Overview

This system allows users to submit feedback through a multi-step survey flow:
Privacy Agreement → Survey Form → Success Page.
Submissions are processed via Google Apps Script and stored in a Google Spreadsheet (used as a lightweight database).

Note: The project uses mock/demo data for demonstration purposes.

✨ Key Features
Privacy-first design (RA 10173 – Data Privacy Act of 2012)
Responsive and mobile-friendly UI
Multi-stage form flow
Google reCAPTCHA v2 protection
Dynamic office & service selection
Emoji-based and Likert-scale satisfaction ratings
Optional comments and email follow-up

## 🛠 Tech Stack
Frontend
HTML5, CSS3 (Flexbox, Grid, Custom Properties)
JavaScript (form handling & API integration)
Backend
Google Apps Script (acts as API layer)
Google Sheets (mock data storage)
Security
Google reCAPTCHA v2
HTTPS-based data submission

## 📊 Data Flow
```
User Form Submission
        ↓
Google Apps Script (API)
        ↓
Google Spreadsheet (Mock Data)
```
The spreadsheet is used only as a demo data source.
In production, it would remain private and inaccessible to end users.


## 📁 Project Structure
```
Form/
├── assets/
│ └── image/
│ └── ellidan_logo.png
├── scripts/
│ ├── privacy.js
│ ├── survey.js
│ └── success.js
├── styles/
│ ├── privacy.css
│ ├── survey.css
│ └── success.css
├── index.html # Privacy agreement page
├── survey.html # Main feedback form
├── success.html # Submission confirmation
└── README.md
```
## ⚙️ Setup (Optional Backend)

Deploy a Google Apps Script as a Web App

Update the scriptURL in survey.js

Configure reCAPTCHA site key in survey.html

Deploy on any static hosting (GitHub Pages, Netlify, etc.)

## 🔒 Privacy & Compliance

Clear privacy notice before form access

Optional personal data collection

No sensitive real-world data stored

Mock data used for demo purposes only
