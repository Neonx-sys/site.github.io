  document.addEventListener("DOMContentLoaded", () => {
    const tg = window.Telegram.WebApp;

    tg.ready();  // Optional, but good to use

    const user = tg.initDataUnsafe.user;

    if (user) {
      alert("User ID:"+ user.id);
      alert("First Name:"+ user.first_name);
      alert("Username:"+ user.username);

      // Example: put user ID into a hidden input
      const input = document.getElementById("telegram_id");
      if (input) input.value = user.id;
    } else {
      alert("No Telegram user data available");
      alert("User ID:"+ user.id);
      alert("First Name:"+ user.first_name);
      alert("Username:"+ user.username);
    }
  });
