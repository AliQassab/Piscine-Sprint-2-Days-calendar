// This is a placeholder file which shows how you can define functions which can be used from both a browser script and a node script. You can delete the contents of the file once you have understood how it works.
// Function to calculate the correct date for a special day based on its occurrence pattern

export function calculateSpecialDay(year, specialDay) {
  const { monthName, dayName, occurence } = specialDay;

  const targetDayIndex = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ].indexOf(dayName);

  const monthIndex = new Date(`${monthName} 1, ${year}`).getMonth();

  const matchingDates = [];
  for (let day = 1; day <= 31; day++) {
    const date = new Date(year, monthIndex, day);
    if (date.getMonth() !== monthIndex) break;
    if (date.getDay() === targetDayIndex) {
      matchingDates.push(day);
    }
  }

  if (occurence === "last") {
    return matchingDates[matchingDates.length - 1];
  }

  const orderMap = { first: 0, second: 1, third: 2, fourth: 3 };
  return matchingDates[orderMap[occurence]] ?? null;
}
