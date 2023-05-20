const text = document.querySelector(".first-text");
const textLoad = () => {
    setTimeout(() => {
      text.textContent = "...";
    }, 0);
    setTimeout(() => {
      text.textContent = "win";
    }, 1000);
    setTimeout(() => {
      text.textContent = "success";
    }, 2000);
    setTimeout(() => {
      text.textContent = "improve";
    }, 3000);
    /*setTimeout(() => {
      text.textContent = "";
    }, 4000);
    setTimeout(() => {
      text.textContent = "";
    }, 5000);
    setTimeout(() => {
      text.textContent = "";
    }, 6000);
    setTimeout(() => {
      text.textContent = "";
    }, 7000);
    setTimeout(() => {
      text.textContent = "";
    }, 8000);
    */
  }
  textLoad();
  setInterval(textLoad, 12000);