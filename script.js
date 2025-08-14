document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a.nav-link[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Get the height of the fixed navbar
                const navbarHeight = document.querySelector('.navbar').offsetHeight;

                // Calculate the offset to scroll to
                const offsetTop = targetElement.offsetTop - navbarHeight;

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });

                // Close the navbar toggler on mobile after clicking a link
                const navbarToggler = document.querySelector('.navbar-toggler');
                const navbarCollapse = document.querySelector('#navbarNav');
                if (navbarToggler && navbarCollapse.classList.contains('show')) {
                    navbarToggler.click(); // Simulate a click to close the menu
                }
            }
        });
    });

    // Handle contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault(); // Prevent default form submission

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            console.log('Contact Form Submitted:');
            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Subject:', subject);
            console.log('Message:', message);

            // In a real application, you would send this data to a server
            // using fetch() or XMLHttpRequest.
            alert('Thank you for your message! We will get back to you soon.');

            contactForm.reset(); // Clear the form
        });
    }

    // Optional: Add a "Read More" toggle for article descriptions
    // This is a more advanced feature and would require careful content management
    // document.querySelectorAll('.read-more-btn').forEach(button => {
    //     button.addEventListener('click', function(e) {
    //         e.preventDefault();
    //         const desc = this.closest('.article-content').querySelector('.desc');
    //         if (desc) {
    //             // This is a simplified toggle. For real content, you'd manage full vs truncated text.
    //             if (desc.classList.contains('expanded')) {
    //                 desc.classList.remove('expanded');
    //                 this.textContent = 'Read More';
    //             } else {
    //                 desc.classList.add('expanded');
    //                 this.textContent = 'Show Less';
    //             }
    //         }
    //     });
    // });
});
