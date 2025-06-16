import { currentMonth, currentYear } from "../src/config.mjs";
import { createCalendarGrid } from "../src/calendar/calendarRenderer.mjs";

import { populateMonthYearSelectors } from "../src/ui/dropdowns.mjs";
import {
  updateCalendar,
  prevMonth,
  nextMonth,
} from "../src/calendar/navigation.mjs";

window.onload = function () {
  createCalendarGrid(currentYear, currentMonth);
  populateMonthYearSelectors(updateCalendar);
  document.querySelector("#prevMonth").addEventListener("click", prevMonth);
  document.querySelector("#nextMonth").addEventListener("click", nextMonth);
  document.querySelector("#close-description").addEventListener("click", () => {
    document.querySelector("#description-box").style.display = "none";
  });
};
