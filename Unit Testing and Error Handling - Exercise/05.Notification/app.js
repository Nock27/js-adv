function notify(message) {
  notificationElement = document.getElementById('notification');
  notificationElement.innerText = message;
  notificationElement.style.display = 'block';
  notificationElement.addEventListener('click',() => {
    notificationElement.style.display = 'none';
  })
}