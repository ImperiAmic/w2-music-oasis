import { Record } from "../records/types.js";
import { renderRecordCard } from "./renderRecordCard.js";

export const renderRecordsList = (records: Record[]): void => {
  const recordsList = document.querySelector(".records")!;
  const dummyRecord = recordsList.querySelector(".record")!;
  recordsList.innerHTML = "";

  records.forEach((record) => {
    const newRecordCard = dummyRecord.cloneNode(true) as HTMLElement;
    renderRecordCard(record, newRecordCard);
    recordsList.appendChild(newRecordCard);
  });
};
