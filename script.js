document.getElementById('jobForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const age = document.getElementById('age').value;
  const dob = document.getElementById('dob').value;
  const password = document.getElementById('password').value;

  if (!name || !email || !age || !dob || !password) {
    alert('Please fill all required fields.');
    return;
  }

  alert('Form submitted successfully!');
  this.reset();
});
