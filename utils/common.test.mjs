import { calculateSpecialDay } from "./common.mjs";
import { setDate, currentMonth, currentYear } from "../config.mjs";

/**
 * Test suite for calculateSpecialDay function
 * This function finds which date (e.g., 2nd Monday) a special day falls on
 */
describe("calculateSpecialDay", () => {
  
  // Test case: First Monday of January 2023 should be the 2nd
  it("should return the correct date for the first Monday of January 2023", () => {
    const specialDay = {
      monthName: "January",
      dayName: "Monday",
      occurence: "first",
    };
    expect(calculateSpecialDay(2023, 0, specialDay)).toBe(2); // Jan = 0 in JS Date
  });

  // Test case: Second Friday of February 2023 should be the 10th
  it("should return the correct date for the second Friday of February 2023", () => {
    const specialDay = {
      monthName: "February",
      dayName: "Friday",
      occurence: "second",
    };
    expect(calculateSpecialDay(2023, 1, specialDay)).toBe(10); // Feb = 1 in JS Date
  });

  // Test case: There is no 5th Wednesday in April 2023, should return null
  it("should return null for an invalid occurrence", () => {
    const specialDay = {
      monthName: "April",
      dayName: "Wednesday",
      occurence: "fifth",
    };
    expect(calculateSpecialDay(2023, 3, specialDay)).toBeNull(); // Apr = 3
  });
});

/**
 * Test suite for setDate function
 * This function updates the shared currentMonth and currentYear values
 */
describe("setDate", () => {
  
  // Test case: Setting month to June (5) and year to 2023
  it("should set the current month and year", () => {
    setDate(5, 2023); // June = 5
    expect(currentMonth).toBe(5);
    expect(currentYear).toBe(2023);
  });
});