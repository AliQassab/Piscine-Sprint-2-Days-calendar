// Function to calculate the correct date for a special day based on its occurrence pattern
export function calculateSpecialDay(year, specialDay) {
  const { monthName, dayName, occurence } = specialDay;

  // Get index of the target day (e.g., Monday → 1)
  const targetDayIndex = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ].indexOf(dayName);

  // Convert month name to zero-based month index
  const monthIndex = new Date(`${monthName} 1, ${year}`).getMonth();

  // Collect all matching weekdays in the given month
  const matchingDates = [];
  for (let day = 1; day <= 31; day++) {
    const date = new Date(year, monthIndex, day);
    if (date.getMonth() !== monthIndex) break; // Stop at end of the month
    if (date.getDay() === targetDayIndex) {
      matchingDates.push(day); // Store day number if it matches the target weekday
    }
  }

  // Return the last matching date if specified
  if (occurence === "last") {
    return matchingDates[matchingDates.length - 1];
  }

  // Map ordinal strings to their index positions
  const orderMap = { first: 0, second: 1, third: 2, fourth: 3 };

  // Return the corresponding date, or null if not found
  return matchingDates[orderMap[occurence]] ?? null;
}

export function getGreeting() {
  return "Hello";
}
