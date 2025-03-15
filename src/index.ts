import { digitalRecords, vinylRecords } from "./ui/filterRecords.js";

import { renderRecordsList } from "./ui/renderRecordsList.js";
import { records } from "./records/data.js";

renderRecordsList(records);

const allButton = document.querySelector("#filter-all") as HTMLButtonElement;
allButton.addEventListener("click", () => {
  renderRecordsList(records);
});

const vinylButton = document.querySelector(
  "#filter-vinyl"
) as HTMLButtonElement;
vinylButton.addEventListener("click", () => {
  renderRecordsList(vinylRecords);
});

const digitalButton = document.querySelector(
  "#filter-digital"
) as HTMLButtonElement;
digitalButton.addEventListener("click", () => {
  renderRecordsList(digitalRecords);
});
