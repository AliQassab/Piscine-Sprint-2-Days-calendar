export const monthNames = [
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

export let currentMonth = new Date().getMonth();
export let currentYear = new Date().getFullYear();

export function setDate(month, year) {
  currentMonth = month;
  currentYear = year;
}
