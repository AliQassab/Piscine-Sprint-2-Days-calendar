export async function fetchSpecialDayDescription(url, dayName) {
  try {
    const response = await fetch(url);
    const text = await response.text();
    document.querySelector("#description-box").style.display = "block";
    document.querySelector("#description-title").innerText = dayName;
    document.querySelector("#description-text").innerText = text;
  } catch (error) {
    console.error("Error fetching description:", error);
  }
}
