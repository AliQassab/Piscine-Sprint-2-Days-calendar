// Function to calculate the correct date for a special day based on its occurrence pattern

// Calculate the date of a specific weekday occurrence in a given month and year.

// Calculates the day number of a special weekday occurrence in a specific month and year

// export function calculateSpecialDay(year, month, specialDay) {
//   // Extract the target weekday and which occurrence (e.g., third Thursday)
//   const { dayName, occurence } = specialDay;

//   // Convert day name (e.g., "Thursday") to index (0 = Sunday, 6 = Saturday)
//   const targetDayIndex = [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//   ].indexOf(dayName);

//   const firstOfMonth = new Date(year, month, 1);

//   const firstWeekday = firstOfMonth.getDay();

//   // Calculate how many days to skip from the 1st to reach the first occurrence of the target day
//   const offset = (targetDayIndex - firstWeekday + 7) % 7;

//   // Initial day is the first occurrence of the target weekday in the month
//   let day = 1 + offset;

//   // Adjust the day based on the specified occurrence
//   switch (occurence) {
//     case "second":
//       day += 7;
//       break;
//     case "third":
//       day += 14;
//       break;
//     case "fourth":
//       day += 21;
//       break;
//     case "last":
//       // For "last", find the last day of the month
//       const lastOfMonth = new Date(year, month + 1, 0);
//       const lastWeekday = lastOfMonth.getDay();

//       // Calculate how far back the last occurrence of the target weekday is from the last day
//       const diff = (lastWeekday - targetDayIndex + 7) % 7;

//       // Subtract the difference from the last day to get the correct date
//       day = lastOfMonth.getDate() - diff;
//       break;
//   }

//   return day;
// }
// Finds the day number (e.g. 19) for a specific weekday in a month
// Example: "third Thursday" of June 2025 → 19
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

export function getGreeting() {
  return "Hello";
}
