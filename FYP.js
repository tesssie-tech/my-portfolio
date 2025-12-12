function filterSelection(category) {
            const items = document.getElementsByClassName("filter-item");
            const buttons = document.getElementsByClassName("filter-btn");

            Array.from(buttons).forEach(btn => {
                btn.classList.remove("active");
            });
            event.currentTarget.classList.add("active");

            if (category == "all") category = "";
            
            Array.from(items).forEach(item => {
                item.style.display = "none";
                item.classList.remove("fadeIn"); 
                
                if (item.getAttribute("data-category") === category || category === "") {
                    item.style.display = "flex"; // Changed to flex to keep card layout intact
                    item.style.animation = "fadeIn 0.5s ease-in";
                }
            });
        }
           /* =========================================
   4. CONTACT FORM HANDLER (Clears form after sending)
   ========================================= */
const contactForm = document.getElementById("contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); // 1. Stop the page from refreshing or redirecting

        const formData = new FormData(contactForm);
        
        // 2. Send the data to Formspree using Javascript (AJAX)
        fetch(contactForm.action, {
            method: "POST",
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                // 3. SUCCESS: Alert user and CLEAR THE FORM
                alert("Thanks! Your message has been sent successfully.");
                contactForm.reset(); // <--- This wipes the inputs clean
            } else {
                alert("Oops! There was a problem sending your message. Please try again.");
            }
        }).catch(error => {
            alert("Oops! There was a problem sending your message.");
        });
    });
}
        // Initialize view
        filterSelection("all");

   