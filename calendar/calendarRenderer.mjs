import { monthNames } from "../config.mjs";
import daysData from "../data/days.json" with { type: "json" };
import { calculateSpecialDay } from "../utils/common.mjs";
import { fetchSpecialDayDescription } from "../ui/descriptionService.mjs";

export function createCalendarGrid(year, month) {
  // Get the calendar container and clear any previous content
  const calendar = document.querySelector("#calendar");
  calendar.innerHTML = "";

  // Create a new grid element for the calendar layout
  const grid = document.createElement("div");
  grid.className = "calendar-grid";

  // Add weekday headers (Mon to Sun) at the top of the calendar
  const dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  dayNames.forEach(day => {
    const dayEl = document.createElement("div");
    dayEl.className = "day-name";
    dayEl.innerText = day;
    grid.appendChild(dayEl);
  });

  // Calculate the day of the week the first day of the month falls on
  // Adjust so Monday is treated as the start of the week
  const firstDay = (new Date(year, month).getDay() + 6) % 7;

  // Get how many days the selected month has
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Add empty grid cells to align the first day of the month correctly
  for (let i = 0; i < firstDay; i++) {
    grid.appendChild(document.createElement("div"));
  }

  // Create a cell for each day in the month
  for (let day = 1; day <= daysInMonth; day++) {
    const cell = document.createElement("div");
    cell.innerText = day;

    // Highlight today's date if it matches the current year, month, and day
    const today = new Date();
    if (
      today.getFullYear() === year &&
      today.getMonth() === month &&
      today.getDate() === day
    ) {
      cell.classList.add("today");
    }

    // Check if this day is marked as a special day in the JSON data
    daysData.forEach(d => {
      // Only process special days for the current month
      if (d.monthName === monthNames[month]) {
        // Calculate which day of the month the special day falls on
        const specialDayDate = calculateSpecialDay(year, month, d);

        // If this calendar cell matches the special day
        if (specialDayDate === day) {
          // Style it to stand out
          cell.style.backgroundColor = "#FFD700"; // gold background
          cell.style.fontWeight = "bold";
          cell.style.color = "black";
          cell.style.padding = "10px";

          // Show the name of the special day under the date number
          const dayName = document.createElement("div");
          dayName.style.fontSize = "12px";
          dayName.style.marginTop = "5px";
          dayName.style.textAlign = "center";
          dayName.innerText = d.name;
          cell.appendChild(dayName);

          // Add click functionality to load the description of that day
          cell.addEventListener("click", () =>
            fetchSpecialDayDescription(d.descriptionURL, d.name)
          );
        }
      }
    });

    // Add the day cell to the calendar grid
    grid.appendChild(cell);
  }

  // Finally, add the whole grid to the calendar container in the DOM
  calendar.appendChild(grid);
}
