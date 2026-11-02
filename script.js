const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');

if (form) {
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
      status.textContent = 'Please fill out all fields before sending your message.';
      status.classList.add('error');
      return;
    }

    if (!email.value.includes('@')) {
      status.textContent = 'Please enter a valid email address.';
      status.classList.add('error');
      return;
    }

    status.textContent = `Thanks, ${name.value}! Your corgi message has been sent.`;
    status.classList.remove('error');
    form.reset();
  });
}
