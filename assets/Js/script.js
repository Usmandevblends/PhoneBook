const $button = document.querySelector('#sidebar-toggle');
const $wrapper = document.querySelector('#wrapper');

$button.addEventListener('click', (e) => {
  e.preventDefault();
  $wrapper.classList.toggle('toggled');
});


    // Select all <li> elements
    const navItems = document.querySelectorAll('.sidebar-nav li');

    // Add click event listener to each <li>
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active-background class from all <li>
            navItems.forEach(nav => nav.classList.remove('active-background'));
            
            // Add active-background class to the clicked <li>
            this.classList.add('active-background');
        });
    });

// Validate the form
function validateForm() {
  let firstName = document.getElementById('firstName').value;
  let lastName = document.getElementById('lastName').value;
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (firstName === "" || lastName === "" || email === "" || password === "") {
    alert("All fields are required.");
    return false;
  }
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }
  return true;
}

// Handle form submission
function handleFormSubmit(event) {
  event.preventDefault();
  if (validateForm()) {
    document.getElementById('submitMessage').style.display = 'block';
  }
}

// Reset the form
function resetForm() {
  document.getElementById('firstName').value = '';
  document.getElementById('lastName').value = '';
  document.getElementById('email').value = '';
  document.getElementById('password').value = '';
  document.getElementById('submitMessage').style.display = 'none';
}

// Add event listener to reset form when modal is hidden
document.addEventListener('DOMContentLoaded', function () {
  let loginModal = document.getElementById('loginModal');
  loginModal.addEventListener('hidden.bs.modal', resetForm);

  let form = document.querySelector('form');
  form.addEventListener('submit', handleFormSubmit);
});