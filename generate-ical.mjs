import { calculateSpecialDay } from "./utils/common.mjs";
import daysData from './data/days.json' with { type: 'json' };
import fs from "fs";
function generateICS() {
  let ics = ["BEGIN:VCALENDAR", "VERSION:2.0", "CALSCALE:GREGORIAN"];
  for (let year = 2020; year <= 2030; year++) {
    for (const { monthName, name, descriptionURL, ...dayInfo } of daysData) {
      const month = new Date(`${monthName} 1, ${year}`).getMonth();
      const day = calculateSpecialDay(year, month, dayInfo);
      if (!day) continue;
      const pad = (n) => String(n).padStart(2, "0");
      const dateObj = new Date(year, month, day);
      const dateStr = `${dateObj.getFullYear()}${pad(
        dateObj.getMonth() + 1
      )}${pad(dateObj.getDate())}`;
      ics.push(
        "BEGIN:VEVENT",
        `SUMMARY:${name}`,
        `DTSTART;VALUE=DATE:${dateStr}`,
        `DTEND;VALUE=DATE:${dateStr}`,
        `DESCRIPTION:See ${descriptionURL}`,
        "END:VEVENT"
      );
    }
  }
  ics.push("END:VCALENDAR");
  fs.writeFileSync("days.ics", ics.join("\n"));
}
generateICS();
