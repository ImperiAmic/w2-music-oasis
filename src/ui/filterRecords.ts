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
