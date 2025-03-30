// Wait for the document to load
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const submitButton = document.querySelector('.submit-btn');
    const successMessage = document.createElement('div'); // Create success message element
    successMessage.style.display = 'none'; // Hide it initially

    // Insert success message below the form
    form.insertAdjacentElement('beforeend', successMessage);

    // Input Focus Animation
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.style.transition = 'all 0.3s ease';
            input.style.borderColor = 'lightblue'; // Change border color on focus
        });

        input.addEventListener('blur', () => {
            input.style.borderColor = ''; // Reset border color when focus is lost
        });
    });

    // Button Hover Effect (via CSS)
    submitButton.addEventListener('mouseover', () => {
        submitButton.style.transform = 'scale(1.1)'; // Slightly increase the size of the button
        submitButton.style.transition = 'transform 0.2s ease-in-out'; // Smooth transition
    });

    submitButton.addEventListener('mouseout', () => {
        submitButton.style.transform = 'scale(1)'; // Reset the button size
    });

    // Form Submission Animation
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent default form submission

        submitButton.disabled = true; // Disable button to prevent multiple submissions
        submitButton.textContent = 'Submitting...'; // Change button text

        // Simulate a delay (for loading animation) before showing success message
        setTimeout(() => {
            successMessage.style.display = 'block';
            successMessage.style.color = 'green';
            successMessage.style.fontSize = '18px';
            successMessage.textContent = 'Your registration was successful! 🎉';
            submitButton.textContent = 'Sign Up'; // Reset button text
            submitButton.disabled = false; // Re-enable the button
            form.reset(); // Reset form fields after submission
        }, 2000); // Simulate a 2-second delay
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".content");

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("in-view");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.2 }
    );

    sections.forEach(section => {
        observer.observe(section);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const languageBtn = document.querySelector('.language-btn');
    const languageOptions = document.querySelector('.language-options');
    const languageButtons = document.querySelectorAll('.language-option');
    
    // Toggle the language options dropdown
    languageBtn.addEventListener('click', () => {
        languageOptions.classList.toggle('show');
    });

    // Language selection event
    languageButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const lang = e.target.dataset.lang;
            changeLanguage(lang);
            languageOptions.classList.remove('show'); // Close the dropdown after selection
        });
    });

    // Function to change language
    function changeLanguage(lang) {
        if (lang === 'sk') {
            document.querySelector('h2').textContent = 'Spravte si svoj deň!';
            document.querySelector('p').textContent = 'Toto je stránka, kde zdieľame našu misiu, víziu a viac informácií o práci našej charitatívnej organizácie. Sme odhodlaní mať pozitívny dopad na svet.';
            // Update more content based on the selected language...
        } else {
            document.querySelector('h2').textContent = 'Make your day!';
            document.querySelector('p').textContent = 'This is a content page where we share our mission, vision, and more about our charity\'s work. We are dedicated to making a positive impact on the world.';
            // Update more content back to English...
        }
    }
});

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the form from submitting the traditional way

    // Show success message after form submission
    const successMessage = document.getElementById("success-message");
    successMessage.style.display = "block"; // Makes the success message visible

    // Optionally, add a fade-out effect for the success message after 3 seconds
    setTimeout(function() {
        successMessage.style.display = "none"; // Hides the success message after 3 seconds
    }, 3000);

    // Clear form fields after submission
    this.reset();
});





document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");

    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });
});


