document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    let firstname = document.getElementById('firstname').value;
    let lastname = document.getElementById('lastname').value;
    let email = document.getElementById('email').value;
    let contact = document.getElementById('contact').value;

    if (firstname && lastname && email && contact) {
        document.getElementById('message').textContent = "Registration Complete!";
    } else {
        document.getElementById('message').textContent = "Please fill out all fields.";
    }
});
