import { monthNames, currentMonth, currentYear, setDate } from "../config.mjs";

export function populateMonthYearSelectors(updateCalendar) {
  const monthSelector = document.querySelector("#monthSelector");
  const yearSelector = document.querySelector("#yearSelector");

  // Populate the month dropdown with all month names
  monthNames.forEach((m, i) => {
    const opt = new Option(m, i); // value = month index, text = month name
    monthSelector.appendChild(opt);
  });

  // Populate the year dropdown with a range from 1900 to 2050
  for (let y = 1900; y <= 2100; y++) {
    yearSelector.appendChild(new Option(y, y));
  }

  // When the month is changed, update the internal state and refresh the calendar
  monthSelector.addEventListener("change", (e) => {
    setDate(parseInt(e.target.value), currentYear); // Keep year unchanged
    updateCalendar();
  });

  // When the year is changed, update the internal state and refresh the calendar
  yearSelector.addEventListener("change", (e) => {
    setDate(currentMonth, parseInt(e.target.value)); // Keep month unchanged
    updateCalendar();
  });

  // Set the initial selected values to match the current date
  monthSelector.value = currentMonth;
  yearSelector.value = currentYear;
}
