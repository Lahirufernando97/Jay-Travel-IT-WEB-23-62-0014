
    document.addEventListener("DOMContentLoaded", function () {
        const contactForm = document.getElementById("contactForm");

        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();
            clearErrorMessages();

            const firstName = document.getElementById("firstName").value;
            const lastName = document.getElementById("lastName").value;
            const email = document.getElementById("email").value;
            const phone = document.getElementById("phone").value;
            const subscribe = document.getElementById("subscribe").checked;

            // Validation rules
            const nameRegex = /^[A-Za-z]+$/;
            const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            const phoneRegex = /^\d{10}$/;

            let hasError = false;

            if (!nameRegex.test(firstName) || !nameRegex.test(lastName)) {
                showError("First and Last names should contain only letters.");
                hasError = true;
            }

            if (firstName.length > 20 || lastName.length > 20) {
                showError("First and Last names should be less than 20 characters.");
                hasError = true;
            }

            if (!emailRegex.test(email)) {
                showError("Please enter a valid email address.");
                hasError = true;
            }

            if (!phoneRegex.test(phone)) {
                showError("Phone number should contain exactly 10 digits.");
                hasError = true;
            }

            if (subscribe) {
                alert("Thank you for subscribing to our channel!");
            }

            if (!hasError) {
                alert("Form submitted successfully!");
                contactForm.reset();
            }
        });

        function showError(message) {
            const errorDiv = document.createElement("div");
            errorDiv.className = "alert alert-danger";
            errorDiv.textContent = message;
            contactForm.insertBefore(errorDiv, contactForm.firstChild);
        }

        function clearErrorMessages() {
            const errorMessages = document.querySelectorAll(".alert-danger");
            errorMessages.forEach((errorMessage) => {
                errorMessage.remove();
            });
        }
    });
