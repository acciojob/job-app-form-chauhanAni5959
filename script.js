// Basic client-side validation for the form
document.getElementById('job-application-form').addEventListener('submit', function(event) {
  if (!this.checkValidity()) {
    event.preventDefault(); // Prevent submission if invalid
    alert('Please fill out all required fields correctly.');
  }
});
