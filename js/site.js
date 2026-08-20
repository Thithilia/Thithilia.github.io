const toggle = document.querySelector(".nav-toggle");
const menu = document.querySelector("#site-menu");

if (toggle && menu) {
  const closeMenu = () => {
    toggle.setAttribute("aria-expanded", "false");
    menu.classList.remove("active");
  };

  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
    menu.classList.toggle("active", !expanded);
  });

  menu.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      closeMenu();
    }
  });

  document.addEventListener("click", (event) => {
    if (event.target instanceof Node && !menu.contains(event.target) && !toggle.contains(event.target)) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
      toggle.focus();
    }
  });
}

const filterTabs = document.querySelectorAll(".filter-option");
const logItems = document.querySelectorAll(".updates-list li[data-categories]");

filterTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const filter = tab.dataset.filter || "all";

    filterTabs.forEach((item) => {
      item.classList.toggle("is-active", item === tab);
    });

    logItems.forEach((item) => {
      const categories = item.dataset.categories || "";
      item.classList.toggle("is-hidden", filter !== "all" && !categories.includes(filter));
    });
  });
});
