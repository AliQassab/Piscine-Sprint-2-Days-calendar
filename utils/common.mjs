// Function to calculate the correct date for a special day based on its occurrence pattern

// Calculate the date of a specific weekday occurrence in a given month and year.

// Calculates the day number of a special weekday occurrence in a specific month and year

export function calculateSpecialDay(year, month, { dayName, occurence }) {
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const targetDay = weekdays.indexOf(dayName); // 0-6 (Sun-Sat)

  // Find first day of month (e.g. June 1st, 2025)
  const firstDay = new Date(year, month, 1).getDay(); // 0-6 (Sun-Sat)

  // Days to add to reach first target weekday
  let daysToAdd = (targetDay - firstDay + 7) % 7;

  // Handle each occurrence
  if (occurence === "second") daysToAdd += 7;
  else if (occurence === "third") daysToAdd += 14;
  else if (occurence === "fourth") daysToAdd += 21;
  else if (occurence === "last") {
    const lastDay = new Date(year, month + 1, 0); // Last day of month
    const daysBack = (lastDay.getDay() - targetDay + 7) % 7;
    return lastDay.getDate() - daysBack;
  }

  return 1 + daysToAdd;
}
