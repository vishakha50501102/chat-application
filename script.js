const messageList = document.querySelector('.chat-messages');
const messageForm = document.querySelector('.chat-input-form');
const messageInput = document.querySelector('.chat-input-form input');

messageForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const message = messageInput.value;

  const messageElement = document.createElement('li');
  messageElement.textContent = message;
  messageList.appendChild(messageElement);
  messageInput.value = '';
});