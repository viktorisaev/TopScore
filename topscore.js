console.log("Start JS code for the page");

setInterval(function () {
  const timestamp = new Date().getTime();
  //  console.log("In timer..." + timestamp);

  document.getElementsByClassName("score leftteam")[0].textContent = timestamp
    .toString()
    .slice(10, 12);
  document.getElementsByClassName("score rightteam")[0].textContent = timestamp
    .toString()
    .slice(11, 13);
}, 978);

window.addEventListener("load", function (e) {
  console.log("Document loaded.");

  el = document.querySelector(".panel");
  el.style.visibility = "hidden";

  requestAnimationFrame(function (e) {
    console.log("in anim frame");

    el = document.querySelector(".panel");
    el.classList.add("fademein");
  });

  // EVENT: keypressed
  addEventListener("keypress", function (event) {
    console.log("Key pressed:", event.key);

    if (event.key == "a") {
      var animEl = this.document.getElementById("anim1");
      if (animEl) {
        animEl.classList.remove("brightend");
        requestAnimationFrame(function (e) {
          animEl.classList.add("brightend");
        });
      } else {
        console.error("anim1 not found!!!");
      }
    }
  });

  // EVENT: animation end
  addEventListener("animationend", function (event) {
    //    console.log("animationend", event);
  });
});
