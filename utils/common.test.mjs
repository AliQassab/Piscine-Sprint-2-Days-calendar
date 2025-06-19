import { calculateSpecialDay } from "./common.mjs";
import { setDate, currentMonth, currentYear } from "../config.mjs";

describe("calculateSpecialDay", () => {
  it("should return the correct date for the first Monday of January 2023", () => {
    const specialDay = {
      monthName: "January",
      dayName: "Monday",
      occurence: "first",
    };
    expect(calculateSpecialDay(2023, 0, specialDay)).toBe(2);
  });

  it("should return the correct date for the second Friday of February 2023", () => {
    const specialDay = {
      monthName: "February",
      dayName: "Friday",
      occurence: "second",
    };
    expect(calculateSpecialDay(2023, 1, specialDay)).toBe(10);
  });

  it("should return null for an invalid occurrence", () => {
    const specialDay = {
      monthName: "April",
      dayName: "Wednesday",
      occurence: "fifth",
    };
    expect(calculateSpecialDay(2023, 3, specialDay)).toBeNull();
  });
});

describe("setDate", () => {
  it("should set the current month and year", () => {
    setDate(5, 2023);
    expect(currentMonth).toBe(5);
    expect(currentYear).toBe(2023);
  });
});
