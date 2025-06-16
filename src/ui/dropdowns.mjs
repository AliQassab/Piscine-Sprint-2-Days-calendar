import { monthNames, currentMonth, currentYear, setDate } from "../config.mjs";

export function populateMonthYearSelectors(updateCalendar) {
  const monthSelector = document.querySelector("#monthSelector");
  const yearSelector = document.querySelector("#yearSelector");

  monthNames.forEach((m, i) => {
    const opt = new Option(m, i);
    monthSelector.appendChild(opt);
  });

  for (let y = 1900; y <= 2050; y++) {
    yearSelector.appendChild(new Option(y, y));
  }

  monthSelector.addEventListener("change", (e) => {
    setDate(parseInt(e.target.value), currentYear);
    updateCalendar();
  });

  yearSelector.addEventListener("change", (e) => {
    setDate(currentMonth, parseInt(e.target.value));
    updateCalendar();
  });

  monthSelector.value = currentMonth;
  yearSelector.value = currentYear;
}
