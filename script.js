document.addEventListener('DOMContentLoaded', function() {
    const bookingForm = document.getElementById('cafeBookingForm');
    const feedback = document.getElementById('formFeedback');

    if (bookingForm) {
        bookingForm.addEventListener('submit', function(event) {
            //Prevent page refresh
            event.preventDefault();

            // input values
            const name = document.getElementById('userName').value;
            const email = document.getElementById('userEmail').value;
            const date = document.getElementById('bookingDate').value;
            const time = document.getElementById('bookingTime').value;
            const guests = document.getElementById('guestCount').value;

            // Validation Check
            if (name && email && date && time && guests) {
                
                // Show Success Message
                feedback.style.color = "#6F4E37"; 
                feedback.innerHTML = `Thank you, ${name}! Your table for ${guests} on ${date} at ${time} has been requested. We will email a confirmation to ${email} shortly.`;

                //Reset the form fields
                bookingForm.reset();
                
            } else {
                // Show Error Message
                feedback.style.color = "red";
                feedback.innerHTML = "Please fill in all required fields.";
            }
        });
    }
});