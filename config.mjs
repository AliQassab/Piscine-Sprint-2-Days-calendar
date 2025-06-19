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

// Set the initial month and year based on the current date
export let currentMonth = new Date().getMonth();
export let currentYear = new Date().getFullYear();

// Function to update the current month and year values
// Used when navigating the calendar or selecting from dropdowns
export function setDate(month, year) {
  currentMonth = month;
  currentYear = year;
}
