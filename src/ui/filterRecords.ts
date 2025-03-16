import { records } from "../records/data.js";
import { Record } from "../records/types.js";
import { renderRecordCard } from "./renderRecordCard.js";
import { renderRecordsList } from "./renderRecordsList.js";

export const filters = document.querySelectorAll(".main-header__filter");

filters.forEach((filter) => {
  filter.addEventListener("click", () => {
    document
      .querySelector(".filter--active")
      ?.classList.remove("filter--active");
    filter.classList.add("filter--active");
  });
});

export const vinylRecords = records.filter((record) => record.type === "VINYL");
export const digitalRecords = records.filter(
  (record) => record.type === "DIGITAL"
);

const filterAllButton = document.querySelector(
  "#filter-all"
) as HTMLButtonElement;
filterAllButton.addEventListener("click", () => {
  renderRecordsList(records);
});

const filterVinylButton = document.querySelector(
  "#filter-vinyl"
) as HTMLButtonElement;
filterVinylButton.addEventListener("click", () => {
  renderRecordsList(vinylRecords);
});

const filterDigitalButton = document.querySelector(
  "#filter-digital"
) as HTMLButtonElement;
filterDigitalButton.addEventListener("click", () => {
  renderRecordsList(digitalRecords);
});
