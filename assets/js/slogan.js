const text = document.querySelector(".first-text");
const textLoad = () => {
    setTimeout(() => {
      text.textContent = "...";
    }, 0);
    setTimeout(() => {
      text.textContent = "Win";
    }, 2000);
    setTimeout(() => {
      text.textContent = "success";
    }, 4000);
    setTimeout(() => {
      text.textContent = "Improve";
    }, 6000);
  }
  textLoad();
  setInterval(textLoad, 12000);