import { monthNames } from "../config.mjs";
import daysData from "../data/days.json" with { type: "json" };
import { calculateSpecialDay } from "../utils/common.mjs";
import { fetchSpecialDayDescription } from "../ui/descriptionService.mjs";

export function createCalendarGrid(year, month) {
  const calendar = document.querySelector("#calendar");
  calendar.innerHTML = "";

  const grid = document.createElement("div");
  grid.className = "calendar-grid";

  const firstDay = (new Date(year, month).getDay() + 6) % 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  dayNames.forEach(day => {
    const dayEl = document.createElement("div");
    dayEl.className = "day-name";
    dayEl.innerText = day;
    grid.appendChild(dayEl);
  });

  for (let i = 0; i < firstDay; i++) {
    grid.appendChild(document.createElement("div"));
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const cell = document.createElement("div");
    cell.innerText = day;

    const today = new Date();
    if (today.getFullYear() === year && today.getMonth() === month && today.getDate() === day) {
      cell.classList.add("today");
    }

    daysData.forEach(d => {
      if (d.monthName === monthNames[month]) {
        const specialDayDate = calculateSpecialDay(year, d);
        if (specialDayDate === day) {
          cell.style.backgroundColor = "#FFD700";
          cell.style.fontWeight = "bold";
          cell.style.color = "black";
          cell.style.padding = "10px";

          const dayName = document.createElement("div");
          dayName.style.fontSize = "12px";
          dayName.style.marginTop = "5px";
          dayName.style.textAlign = "center";
          dayName.innerText = d.name;
          cell.appendChild(dayName);

          cell.addEventListener("click", () => {
            fetchSpecialDayDescription(d.descriptionURL, d.name);
          });
        }
      }
    });

    grid.appendChild(cell);
  }

  calendar.appendChild(grid);
}
