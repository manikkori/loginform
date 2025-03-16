document.getElementById('toggle-form').addEventListener('click', function(event) {
    event.preventDefault();
    
    let formTitle = document.getElementById('form-title');
    let submitBtn = document.getElementById('submit-btn');
    let toggleText = document.getElementById('toggle-text');
    let toggleForm = document.getElementById('toggle-form');
    let nameField = document.getElementById('name-field');

    if (submitBtn.textContent === "Login") {
        // Switch to Register Form
        formTitle.textContent = "Register";
        submitBtn.textContent = "Register";
        toggleText.textContent = "Already have an account?";
        toggleForm.textContent = "Login";
        nameField.style.display = "flex";
    } else {
        // Switch back to Login Form
        formTitle.textContent = "Login";
        submitBtn.textContent = "Login";
        toggleText.textContent = "Don't have an account?";
        toggleForm.textContent = "Register";
        nameField.style.display = "none";
    }
});
