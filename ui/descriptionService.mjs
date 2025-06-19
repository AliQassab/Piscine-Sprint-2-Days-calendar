export async function fetchSpecialDayDescription(url, dayName) {
  try {
    // Fetch the description content from the provided URL
    const response = await fetch(url);

    // Read the response body as plain text (not JSON or HTML parsing)
    const text = await response.text();

    // Show the description box and display the fetched content
    document.querySelector("#description-box").style.display = "block";
    document.querySelector("#description-title").innerText = dayName;
    document.querySelector("#description-text").innerText = text;
  } catch (error) {
    console.error("Error fetching description:", error);
    // Show the description box with a user-friendly error message
    const box = document.querySelector("#description-box");
    box.style.display = "block";
    document.querySelector("#description-title").innerText = dayName;
    document.querySelector("#description-text").innerText =
      "Sorry, we couldn’t load the description. Please try again later.";
  }
}
