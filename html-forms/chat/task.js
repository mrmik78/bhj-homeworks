const chatWidget = document.querySelector('.chat-widget');
const messages = document.querySelector('.chat-widget__messages');
const chatWidgetInput = document.getElementById('chat-widget__input');
const botMessages = [
        'Добрый день, мы ещё не проснулись. Позвоните через 10 лет',
        'В следующую субботу устраиваю вечеринку. Приедешь?',
        'Давай я тебя тут со всеми познакомлю.',
        'Что-то я тебя не узнаю. Ты что ник сменил?',
        'Плесни текиллы,старичок!)',
        'До свидания, у меня другие дела',
        'Не спорь со мной. Я читал об этом в одной очень умной книжке.',
        'Тсс...я форум читаю!',
        'Оставь меня, старушка, я в печали.'
      ];

chatWidget.addEventListener('click', () => {
  chatWidget.classList.add('chat-widget_active');
});

chatWidgetInput.addEventListener('keydown', event => {
  if (event.key === 'Enter' && chatWidgetInput.value !== '' && chatWidgetInput.value.trim() ) {
    
    messages.innerHTML += `
      <div class="message message_client">
        <div class="message__time">${new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</div>
        <div class="message__text">${chatWidgetInput.value.trim()}</div>       
      </div> 
    `
    chatWidgetInput.value = '';
    

    messages.innerHTML += `
      <div class="message">
        <div class="message__time">${new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</div>
        <div class="message__text">${botMessages[Math.floor(Math.random() * botMessages.length)]}</div>
      </div>
    `
document.querySelector('.chat-widget__messages-container').scrollTo(0, 1000);
  timer();
  
  }
});