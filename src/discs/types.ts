export type Record = {
  id: number;
  name: string;
  artist: string;
  coverUrl: string;
  type: "VINYL" | "DIGITAL";
  price: number;
  originalPrice?: number;
  isRecordOfTheMonth: boolean;
};
