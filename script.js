// Smooth scroll to Resume section when button is clicked
document.getElementById('scrollButton').addEventListener('click', function() {
    document.querySelector('.resume').scrollIntoView({ behavior: 'smooth' });
});

// jQuery: Simple alert when a button is clicked
$(document).ready(function() {
    $("button").click(function() {
        alert("Button Clicked!");
    });
});
