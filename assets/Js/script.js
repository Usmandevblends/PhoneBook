const $button = document.querySelector('#sidebar-toggle');
const $wrapper = document.querySelector('#wrapper');

$button.addEventListener('click', (e) => {
  e.preventDefault();
  $wrapper.classList.toggle('toggled');
});


document.addEventListener("DOMContentLoaded", function() {
  var currentPage = window.location.pathname.split('/').pop(); // Get the current page URL
  var sidebarItems = document.querySelectorAll(".sidebar-nav > li");
  sidebarItems.forEach(function(item) {
      var anchor = item.querySelector("a");
      var href = anchor.getAttribute("href").split('/').pop(); // Get the href attribute of the anchor tag
      if (currentPage === href) {
          item.classList.add("active");
      } else {
          item.classList.remove("active");
      }
  });

  // Add click event listeners to update active class on click
  sidebarItems.forEach(function(item) {
      item.addEventListener("click", function() {
          sidebarItems.forEach(function(item) {
              item.classList.remove("active");
          });
          this.classList.add("active");
      });
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