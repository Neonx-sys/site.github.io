document.addEventListener("DOMContentLoaded", () => {
  const tg = window.Telegram.WebApp;

  tg.expand();

  const user = tg.initDataUnsafe?.user;

  if (user) {
    const tg_id = user.id;
    document.getElementById("tg_id").innerHTML = "Telegram ID:"+tg_id;
    document.getElementById("tg_name").innerHTML = "Telegram ID:"+tg_id;
    document.getElementById("clicks").innerHTML = "Telegram ID:"+tg_id;
    /*console.log("Username:", user.username);
    console.log("First name:", user.first_name);*/
  } else {
    document.getElementById("error").innerHTML = "No Telegram user data available";
    //console.warn("No Telegram user data available");
  }
});
