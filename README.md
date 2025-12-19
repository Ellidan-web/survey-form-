# Feedback Survey System

A comprehensive web-based feedback collection system designed for offices to measure client satisfaction and improve public service delivery.

---

## 📋 Project Overview

This project implements a **Client Satisfaction Measurement (CSM) system** that allows citizens to provide feedback on their recent transactions with government offices. The system is built with modern web technologies and follows **data privacy best practices**.

---

## 🎯 Features

### Core Functionality
- **Privacy-First Approach:** Compliant with the Data Privacy Act of 2012 (RA 10173)  
- **Multi-Stage Form Process:** Privacy agreement → Survey → Success confirmation  
- **Responsive Design:** Works seamlessly on desktop, tablet, and mobile devices  
- **reCAPTCHA Integration:** Prevents spam submissions  
- **Dynamic Form Elements:** Office-specific services populate automatically  

### Survey Components

**Client Information**
- Client type (Citizen/Business/Organization)  
- Demographic data (age, gender, barangay)  
- Transaction details (date, office, service availed)  

**Service Standards Assessment**
- Awareness and visibility evaluation  
- Helpfulness assessment  
- Multiple choice responses  

**Service Quality Dimensions (SQD)**
- 9-point satisfaction scale with emoji ratings  
- Covers timeliness, fairness, courtesy, and outcome  
- 6-point Likert scale (Strongly Disagree → Strongly Agree + N/A)  

**Optional Feedback**
- Suggestions and comments  
- Optional email collection for follow-up  

---

## 🛠️ Technical Stack

**Frontend**
- HTML5: Semantic markup structure  
- CSS3: Custom properties, Flexbox, Grid, responsive design  
- JavaScript: Form handling, dynamic content, API integration  

**Styling & UX**
- Montserrat Google Font for clean typography  
- CSS Custom Properties for consistent theming  
- Gradient Backgrounds for visual appeal  
- Interactive Elements: hover effects, smooth transitions  
- Accessibility: proper form labels and focus states  

**External Services**
- Google reCAPTCHA v2: Bot protection  
- Google Apps Script: Backend data processing (configurable)  

---
```
## 📁 Project Structure

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
---

## 🚀 Installation & Setup

1. **Clone or download the project files**  
2. **Configure Backend (Optional):**  
   - Set up Google Apps Script for data storage  
   - Update the `scriptURL` in `survey.js` with your web app URL  
   - Configure reCAPTCHA site key in `survey.html`  
3. **Deploy:**  
   - Can be hosted on any web server (Apache, Nginx, GitHub Pages, etc.)  
   - No server-side dependencies required for basic functionality  

---

## ⚙️ Configuration

**reCAPTCHA Setup**
1. Register at [Google reCAPTCHA](https://www.google.com/recaptcha/)  
2. Replace the `data-sitekey` in `survey.html`:

```
<div class="g-recaptcha" data-sitekey="YOUR_ACTUAL_SITE_KEY"></div>
Google Apps Script Integration

Create a new Google Apps Script project

Implement doPost() function to handle form submissions

Deploy as web app and update scriptURL in survey.js
```
## 🎨 Customization
Theming
Modify CSS custom properties in survey.css:

css
Copy code
:root {
    --primary-color: #0069ff;
    --secondary-color: #0580fb;
    /* Update colors to match your organization */
}
Office and Service Configuration
Edit the officeServices object in survey.js to match your offices and services.

Barangay List
Update the barangay options in survey.html to reflect your local units.

## 📊 Data Collected
Required Information

Client type

Transaction date

Gender

Age

Barangay

Office visited

Service availed

Service Standards feedback

Service quality ratings

Optional Information

Suggestions/comments

Email address
```
```
## 🔒 Privacy & Compliance
Data Privacy Act Compliant (Philippines RA 10173)

Transparent Data Handling: clear privacy notice before form entry

Optional Personal Data: email is optional

Secure Transmission via HTTPS
```
```
## 🐛 Troubleshooting
Common Issues

Form not submitting → Check reCAPTCHA and internet connection

Services not loading → Verify officeServices object in survey.js

Styling issues → Ensure all CSS files are properly linked

Debug Mode

Use browser developer tools to monitor JavaScript console errors

## 🤝 Contributing
Fork the project

Create a feature branch

Commit your changes

Push to the branch

Create a Pull Request

## 🆘 Support For technical issues or questions regarding this system, please contact the owner and developer:

ELLIDAN T. MULTO
