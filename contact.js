document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault(); 
        alert("Thank you for contacting me! I will contact you soon.");
        form.reset(); 
    });
});