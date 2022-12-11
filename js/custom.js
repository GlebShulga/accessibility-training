(function () {
  var burger = document.querySelector(".burger");
  var menu = document.querySelector("#" + burger.dataset.target);
  burger.addEventListener("click", function () {
    burger.classList.toggle("is-active");
    menu.classList.toggle("is-active");
  });
})();

document.querySelectorAll("#nav li").forEach(function (navEl) {
  navEl.onclick = function () {
    toggleTab(this.id, this.dataset.target);
  };
});

function toggleTab(selectedNav, targetId) {
  var navEls = document.querySelectorAll("#nav li");

  navEls.forEach(function (navEl) {
    if (navEl.id == selectedNav) {
      navEl.classList.add("is-active");
    } else {
      if (navEl.classList.contains("is-active")) {
        navEl.classList.remove("is-active");
      }
    }
  });

  var tabs = document.querySelectorAll(".tab-pane");

  tabs.forEach(function (tab) {
    if (tab.id == targetId) {
      tab.style.display = "block";
    } else {
      tab.style.display = "none";
    }
  });
}

const trigerNotification = () => {
  const notification = document.getElementById("notification");
  if (notification.classList.contains("visually-hidden")) {
    notification.classList.remove("visually-hidden");
    notification.classList.add("is-visible");
  }

  if (notification.classList.contains("is-visible")) {
    setTimeout(() => {
      notification.classList.remove("is-visible");
      notification.classList.add("visually-hidden");
    }, 5 * 1000);
  }
};

setInterval(trigerNotification, 60 * 1000);
