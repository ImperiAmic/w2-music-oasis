import "./ui/filterRecords.js";

import { renderRecordsList } from "./ui/renderRecordsList.js";
import { records } from "./records/data.js";
import { renderRecordOfTheMonth } from "./ui/renderRecordOfTheMonth.js";

renderRecordsList(records);
renderRecordOfTheMonth(records);
