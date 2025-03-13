import { Record } from "../records/types.js";

export const renderRecordCard = (
  record: Record,
  recordCard: HTMLElement
): void => {
  const recordCover = recordCard.querySelector(
    ".record-cover"
  ) as HTMLImageElement;
  recordCover.src = record.coverUrl;

  const infoRecord = recordCard.querySelector(".record-name")!;
  infoRecord.textContent = `${record.name} (${record.artist})`;
};
