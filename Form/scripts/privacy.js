// Privacy screen logic
const agreeBox = document.getElementById("agree");
const continueBtn = document.getElementById("continue-btn");

// Enable/disable the Continue button based on whether the privacy policy is agreed to
agreeBox.addEventListener("change", () => {
    continueBtn.disabled = !agreeBox.checked;
});

// When Continue is clicked, redirect to survey page
continueBtn.addEventListener("click", () => {
    window.location.href = "survey.html";
});