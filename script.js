// your code here
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('myForm');
  const urlElement = document.getElementById('url');

  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way

    // Get values from form inputs
    const name = document.getElementById('name').value;
    const year = document.getElementById('year').value;

    // Update the URL content
    const newUrl = `https://localhost:8080/?name=${encodeURIComponent(name)}&year=${encodeURIComponent(year)}`;
    urlElement.textContent = newUrl;
  });
});
