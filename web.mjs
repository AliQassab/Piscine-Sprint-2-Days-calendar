import { currentMonth, currentYear } from "./config.mjs";
import { populateMonthYearSelectors } from "./ui/dropdowns.mjs";

import { createCalendarGrid } from "./calendar/calendarRenderer.mjs";
import {
  updateCalendar,
  prevMonth,
  nextMonth,
} from "./calendar/navigation.mjs";

window.onload = function () {
  createCalendarGrid(currentYear, currentMonth);
  populateMonthYearSelectors(updateCalendar);
  document.querySelector("#prevMonth").addEventListener("click", prevMonth);
  document.querySelector("#nextMonth").addEventListener("click", nextMonth);
  document.querySelector("#close-description").addEventListener("click", () => {
    document.querySelector("#description-box").style.display = "none";
  });
};
