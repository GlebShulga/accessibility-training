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

  var tabButtons = document.querySelectorAll(".tab-button");

  tabButtons.forEach(function (tabButtons) {
    if (tabButtons.id == targetId) {
      tabButtons.ariaSelected = "true";
    } else {
      tabButtons.ariaSelected = "false";
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

(function () {
  const menuItem = document.getElementById("has-submenu");
  const dropdownOptions = document.getElementById("dropdown-options1");
  const dropdownMenuButton = menuItem.querySelector("button");

  dropdownMenuButton.addEventListener("click", function (event) {
    if (menuItem.classList.contains("has-submenu")) {
      menuItem.className = "navbar-item open";
      dropdownMenuButton.setAttribute("aria-expanded", "true");
      dropdownOptions.classList.remove("dropdown-options");
      dropdownOptions.classList.add("dropdown-options-open");
    } else {
      menuItem.className = "navbar-item has-submenu";
      dropdownMenuButton.setAttribute("aria-expanded", "false");
      dropdownOptions.classList.remove("dropdown-options-open");
      dropdownOptions.classList.add("dropdown-options");
    }
    event.preventDefault();
  });
  window.onclick = function (e) {
    if (
      !(
        e.target.matches(".submenuButton") || e.target.matches(".submenuTitle")
      ) &&
      menuItem.classList.contains("open")
    ) {
      menuItem.className = "navbar-item has-submenu";
      menuItem.querySelector("button").setAttribute("aria-expanded", "false");
      dropdownOptions.classList.remove("dropdown-options-open");
      dropdownOptions.classList.add("dropdown-options");
    }
  };
})();
