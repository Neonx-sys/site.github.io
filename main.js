window.addEventListener('DOMContentLoaded', () => {
  const tg = window.Telegram.WebApp;

  // Отримуємо user_id
  const userId = tg.initDataUnsafe?.user?.id;
  const username = tg.initDataUnsafe?.user?.username;

  console.log("User ID: "+ userId+", Username: "+ username);

});
