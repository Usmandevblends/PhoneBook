const $button = document.querySelector('#sidebar-toggle');
const $wrapper = document.querySelector('#wrapper');

$button.addEventListener('click', (e) => {
  e.preventDefault();
  $wrapper.classList.toggle('toggled');
});


// form validation
document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('loginForm');
  var cancelButton = document.getElementById('cancelButton');

  form.addEventListener('submit', function (event) {
      event.preventDefault();
      event.stopPropagation();

      if (form.checkValidity() === true) {
          document.getElementById('submitMessage').style.display = 'block';
      } else {
          form.classList.add('was-validated');
      }
  }, false);

  cancelButton.addEventListener('click', function () {
      form.reset();
      form.classList.remove('was-validated');
      document.getElementById('submitMessage').style.display = 'none';
  });
});


// add Background color in nav list

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