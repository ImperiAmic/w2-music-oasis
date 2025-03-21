import { Record } from "../records/types.js";

export const renderRecordOfTheMonthCard = (
  record: Record,
  recordOfTheMonthCard: HTMLElement
): void => {
  const recordCover = recordOfTheMonthCard.querySelector(
    ".record-of-the-month__cover"
  ) as HTMLImageElement;
  recordCover.src = record.coverUrl;
  recordCover.alt = `${record.artist} ${record.name}`;

  const infoRecord = recordOfTheMonthCard.querySelector(
    ".record-of-the-month__name"
  )!;
  infoRecord.textContent = `${record.name} (${record.artist})`;

  const priceRecord = recordOfTheMonthCard.querySelector(
    ".record-of-the-month__price"
  )!;
  priceRecord.textContent = `$${record.price.toString()}`;
};

export const renderRecordOfTheMonth = (records: Record[]): void => {
  const dummyRecord = document.querySelector(
    ".record-of-the-month"
  ) as HTMLElement;

  records.forEach((record) => {
    if (record.isRecordOfTheMonth) {
      renderRecordOfTheMonthCard(record, dummyRecord);
    }
  });
};
