const form = document.getElementById('book-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  console.log(formData)
  fetch('http://localhost:3000/create', {
    method: 'POST',
    body: formData,
  })
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
  window.location.href = './index.html';
});