import { currentMonth, currentYear, setDate } from "../config.mjs";
import { createCalendarGrid } from "./calendarRenderer.mjs";

// Updates the calendar UI to reflect the current month and year
export function updateCalendar() {
  // Generate and display the calendar grid for the selected month/year
  createCalendarGrid(currentYear, currentMonth);

  document.querySelector("#monthSelector").value = currentMonth;
  document.querySelector("#yearSelector").value = currentYear;

  document.querySelector("#description-box").style.display = "none";
}

// Goes to the previous month and updates the calendar
export function prevMonth() {
  if (currentMonth === 0) {
    // If currently in January, move to December of the previous year
    setDate(11, currentYear - 1);
  } else {
    // Otherwise, go to the previous month in the same year
    setDate(currentMonth - 1, currentYear);
  }
  updateCalendar();
}

// Goes to the next month and updates the calendar
export function nextMonth() {
  if (currentMonth === 11) {
    // If currently in December, move to January of the next year
    setDate(0, currentYear + 1);
  } else {
    // Otherwise, go to the next month in the same year
    setDate(currentMonth + 1, currentYear);
  }
  updateCalendar();
}
