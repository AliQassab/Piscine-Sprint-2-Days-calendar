import { currentMonth, currentYear } from "./config.mjs";
import { createCalendarGrid } from "./calendar/calendarRenderer.mjs";

import { populateMonthYearSelectors } from "./ui/dropdowns.mjs";
import {
  updateCalendar,
  prevMonth,
  nextMonth,
} from "./calendar/navigation.mjs";

window.onload = function () {
  // Initially render the calendar for the current month and year
  createCalendarGrid(currentYear, currentMonth);

  // Populate month/year dropdowns and set up change listeners
  populateMonthYearSelectors(updateCalendar);

  document.querySelector("#prevMonth").addEventListener("click", prevMonth);
  document.querySelector("#nextMonth").addEventListener("click", nextMonth);

  document.querySelector("#close-description").addEventListener("click", () => {
    document.querySelector("#description-box").style.display = "none";
  });
};
