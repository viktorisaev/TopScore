console.log("Start JS code for the page");

setInterval(function () {
  const timestamp = new Date().getTime();
  console.log("In timer..." + timestamp);

  document.getElementsByClassName("score leftpanel")[0].textContent = timestamp
    .toString()
    .slice(10, 12);
  document.getElementsByClassName("score rightpanel")[0].textContent = timestamp
    .toString()
    .slice(11, 13);
}, 978);
