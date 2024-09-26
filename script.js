// Smooth scrolling for navigation links
$(document).ready(function(){
    $('nav a').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            const hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800);
        }
    });

    // Handling contact form submission
    $('#contactForm').on('submit', function(event) {
        event.preventDefault();
        alert('Thank you for your feedback!');
    });

    // Handling login form submission
    $('#loginForm').on('submit', function(event) {
        event.preventDefault();
        alert('Logging you in...');
   
    });

    // Handle registration link click
    $('#registerLink').on('click', function(event) {
        event.preventDefault();
        alert('Redirecting to registration...');
        // Here you would typically redirect to the registration page
        // window.location.href = "registration-link.html";
    });
});
