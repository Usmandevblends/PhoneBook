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


