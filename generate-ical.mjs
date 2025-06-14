// This is a placeholder file which shows how you can access functions and data defined in other files. You can delete the contents of the file once you have understood how it works.
// It can be run with `node`.

import { getCommemorativeDays } from "./common.mjs";
import fs from "fs";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function formatDate(date) {
  return date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
}

async function generateICS() {
  let icsContent =
    "BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//Commemorative Days Calendar//EN\n";

  // Generate events for years 2020-2030
  for (let year = 2020; year <= 2030; year++) {
    for (let month = 0; month < 12; month++) {
      const commemorativeDays = getCommemorativeDays(year, month);

      for (const day of commemorativeDays) {
        const eventDate = new Date(year, month, day.date);

        // Fetch description if available
        let description = "";
        try {
          const response = await fetch(day.descriptionURL);
          description = await response.text();
        } catch (error) {
          console.error(`Error fetching description for ${day.name}:`, error);
        }

        icsContent += `BEGIN:VEVENT\n`;
        icsContent += `DTSTART:${formatDate(eventDate)}\n`;
        icsContent += `DTEND:${formatDate(
          new Date(eventDate.getTime() + 24 * 60 * 60 * 1000)
        )}\n`;
        icsContent += `SUMMARY:${day.name}\n`;
        if (description) {
          icsContent += `DESCRIPTION:${description.replace(/\n/g, "\\n")}\n`;
        }
        icsContent += `END:VEVENT\n`;
      }
    }
  }

  icsContent += "END:VCALENDAR";

  fs.writeFileSync("days.ics", icsContent);
  console.log("Generated days.ics file successfully!");
}

generateICS().catch(console.error);
