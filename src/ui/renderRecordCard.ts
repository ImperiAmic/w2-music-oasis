import { Record } from "../records/types.js";

export const renderRecordCard = (
  record: Record,
  recordCard: HTMLElement
): void => {
  const recordCover = recordCard.querySelector(
    ".record-cover"
  ) as HTMLImageElement;

  recordCover.src = record.coverUrl;
  recordCover.alt = `${record.artist} ${record.name}`;

  const infoRecord = recordCard.querySelector(".record-name")!;
  infoRecord.textContent = `${record.name} (${record.artist})`;

  const originalPriceRecord = recordCard.querySelector(".price-original")!;
  if (!record.originalPrice) {
    originalPriceRecord?.remove();
  }

  const discountRecord = recordCard.querySelector(".record-discount")!;
  if (!record.originalPrice) {
    discountRecord?.remove();
  }

  const typeDigitalRecord = recordCard.querySelector(".digital")!;
  if (record.type === "VINYL") {
    typeDigitalRecord?.remove();
  }

  const typeVinylRecord = recordCard.querySelector(".vinyl")!;
  if (record.type === "DIGITAL") {
    typeVinylRecord?.remove();
  }
};
