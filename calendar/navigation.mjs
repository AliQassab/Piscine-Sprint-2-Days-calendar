import { currentMonth, currentYear, setDate } from "../config.mjs";
import { createCalendarGrid } from "./calendarRenderer.mjs";

export function updateCalendar() {
  createCalendarGrid(currentYear, currentMonth);
  document.querySelector("#monthSelector").value = currentMonth;
  document.querySelector("#yearSelector").value = currentYear;
  document.querySelector("#description-box").style.display = "none";
}

export function prevMonth() {
  if (currentMonth === 0) {
    setDate(11, currentYear - 1);
  } else {
    setDate(currentMonth - 1, currentYear);
  }
  updateCalendar();
}

export function nextMonth() {
  if (currentMonth === 11) {
    setDate(0, currentYear + 1);
  } else {
    setDate(currentMonth + 1, currentYear);
  }
  updateCalendar();
}
