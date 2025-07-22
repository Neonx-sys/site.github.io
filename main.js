window.addEventListener('DOMContentLoaded', () => {
  const tg = window.Telegram.WebApp;

  // Отримуємо user_id
  const userId = tg.initDataUnsafe?.user?.id;
  const username = tg.initDataUnsafe?.user?.username;

  console.log("User ID: "+ userId+", Username: "+ username);
  alert("User ID: "+ userId+", Username: "+ username)
  tg.WebApp.alert("User ID: "+ userId+", Username: "+ username)

  document.getElementById("tg_id").innerHTML=userId;
  if(userId);
  else{
    document.getElementById("error").innerHTML="Error";
  }

});
