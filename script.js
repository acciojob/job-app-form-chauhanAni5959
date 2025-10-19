document.getElementById('jobForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const requiredFields = ['name', 'email', 'age', 'dob', 'password'];
  for (const field of requiredFields) {
    const input = document.getElementById(field);
    if (!input.value.trim()) {
      alert('Please fill all required fields.');
      return;
    }
  }

  alert('Form submitted successfully!');
  this.reset();
});
