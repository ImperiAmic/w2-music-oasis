export const filters = document.querySelectorAll(".main-header__filter");

filters.forEach((filter) => {
  filter.addEventListener("click", () => {
    document
      .querySelector(".filter--active")
      ?.classList.remove("filter--active");
    filter.classList.add("filter--active");
  });
});
