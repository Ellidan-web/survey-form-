// Form submission handler
const form = document.getElementById("feedback-form");
const submitButton = document.getElementById("submit-button");
let currentSubmissionId = null;

// Listen for the form's submit event
form.addEventListener("submit", async function(e) {
    // Check if reCAPTCHA has been verified
    const captchaResponse = grecaptcha.getResponse();
    if (!captchaResponse) {
        alert("Please verify you are not a robot.");
        submitButton.disabled = false;
        submitButton.value = "Submit Feedback";
        return;
    }

    e.preventDefault();
    submitButton.value = "Submitting...";
    submitButton.disabled = true;

    // URL of the deployed Google Apps Script web app that handles the form submission
    const scriptURL = "";

    // Create a new FormData object from the form element to gather all input values
    const formData = new FormData(form);

    // If this is an edited submission, include the submission ID
    if (currentSubmissionId) {
        formData.append("submissionId", currentSubmissionId);
    }

    try {
        // Send the form data to the Google Apps Script URL using a POST request
        const response = await fetch(scriptURL, { 
            method: 'POST', 
            body: formData 
        });

        // Parse the JSON response from the server
        const result = await response.json();

        // If the response status indicates success
        if (result.status === "success") {
            // If a submissionId is returned in the result
            if (result.submissionId) {
                // Store the submissionId in a variable and in sessionStorage for later use
                currentSubmissionId = result.submissionId;
                sessionStorage.setItem('lastSubmissionId', currentSubmissionId);

                // Convert the formData into a plain object and store it in sessionStorage
                const formDataObj = {};
                formData.forEach((value, key) => formDataObj[key] = value);
                sessionStorage.setItem('lastSubmissionData', JSON.stringify(formDataObj));
            }

            // Redirect to success page
            window.location.href = "success.html";

        } else {
            // If the result status is not 'success', show an error message from the server response
            alert("Error: " + result.message);
        }
    } catch (error) {
        // Catch any network or unexpected errors during submission
        alert("There was an error submitting your feedback. Please try again.");
        console.error("Error!", error);
    } finally {
        // Re-enable the submit button and reset its text regardless of outcome
        submitButton.value = "Submit Feedback";
        submitButton.disabled = false;
    }
});

// Services data
const officeServices = {
  "OFFICE A": [
    "General Inquiry Assistance",
    "Document Request Processing",
    "Information Update Service"
  ],
  "OFFICE B": [
    "Application Submission",
    "Permit Renewal",
    "Complaint Filing"
  ],
  "OFFICE C": [
    "Health Check Services",
    "Medicine Distribution",
    "Medical Document Request"
  ],
  "OFFICE D": [
    "Employment Assistance",
    "Training Enrollment",
    "Benefit Claim Support"
  ],
  "OFFICE E": [
    "Financial Transaction Processing",
    "Fee Processing",
    "Payment Verification"
  ],
  "OFFICE F": [
    "Community Support Service",
    "Welfare Assistance",
    "Referral Issuance"
  ],
  "OFFICE G": [
    "Maintenance Request",
    "Inspection Scheduling",
    "Facility Use Coordination"
  ],
  "OFFICE H": [
    "Record Registration",
    "Certified Copy Request",
    "Details Correction Service"
  ],
  "OFFICE I": [
    "Emergency Support Coordination",
    "Public Safety Information",
    "Training/Drill Assistance"
  ],
  "OFFICE J": [
    "Environmental Compliance Check",
    "Permit Application",
    "Awareness Campaign Service"
  ]
};


// When the "office" dropdown changes, update the available services accordingly
document.getElementById("office").addEventListener("change", function () {
    const office = this.value;
    const serviceSelect = document.getElementById("service");

    // Clear previous options
    serviceSelect.innerHTML = '<option value="" disabled selected>Select the service you availed...</option>';

    // If the selected office has a list of services defined
    if (officeServices[office]) {
        // Loop through each service for the selected office
        officeServices[office].forEach(service => {
            const option = document.createElement("option");
            option.value = service;
            option.textContent = service;
            serviceSelect.appendChild(option);
        });
    }
});

// Check for existing submission on page load
window.addEventListener('load', () => {
    // Retrieve the last submission ID from sessionStorage, if available
    const submissionId = sessionStorage.getItem('lastSubmissionId');

    // If a previous submission ID exists, assign it to the currentSubmissionId variable
    if (submissionId) {
        currentSubmissionId = submissionId;
    }
});
