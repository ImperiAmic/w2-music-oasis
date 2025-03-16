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
  if (record.originalPrice) {
    originalPriceRecord.textContent = `$${record.originalPrice.toString()}`;
  }

  const priceRecord = recordCard.querySelector(".price")!;
  priceRecord.textContent = `$${record.price.toString()}`;

  const discountRecord = recordCard.querySelector(".record-discount")!;
  if (!record.originalPrice) {
    discountRecord?.remove();
  }

  const typeDigitalRecord = recordCard.querySelector(".record-type")!;
  if (record.type) {
    typeDigitalRecord.textContent = `${record.type}`;
  }
};
