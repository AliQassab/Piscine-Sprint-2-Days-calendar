// //This is a placeholder file which shows how you can access functions and data defined in other files.
// // It can be loaded into index.html.
// // Note that when running locally, in order to open a web page which uses modules, you must serve the directory over HTTP e.g. with https://www.npmjs.com/package/http-server
// // You can't open the index.html file using a file:// URL.
// import { calculateSpecialDay } from "./common.mjs";
// import daysData from "./days.json" with { type: "json" };

// const monthNames = [
//     "January", "February", "March", "April", "May", "June",
//     "July", "August", "September", "October", "November", "December"
// ];

// let currentMonth = new Date().getMonth();
// let currentYear = new Date().getFullYear();

// function createCalendarGrid(year, month) {
//     document.querySelector('#calendar').innerHTML = '';

//     const firstDay = (new Date(year, month).getDay() + 6) % 7;

//     const daysInMonth = new Date(year, month + 1, 0).getDate();

//     const calendarTable = document.createElement("table");
//     const headerRow = document.createElement("tr");
//     const dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    
//     dayNames.forEach(dayName => {
//         const th = document.createElement("th");
//         th.innerText = dayName;
//         headerRow.appendChild(th);
//     });

//     calendarTable.appendChild(headerRow);

//     let day = 1;
//     for (let i = 0; i < 6; i++) {
//         const row = document.createElement("tr");
//         for (let j = 0; j < 7; j++) {
//             const cell = document.createElement("td");
//             if (i === 0 && j < firstDay) {
//                 cell.innerText = '';
//             } else if (day <= daysInMonth) {
//                 cell.innerText = day;
//                 const today = new Date();
//                 if (today.getFullYear() === year && today.getMonth() === month && today.getDate() === day) {
//                     cell.style.backgroundColor = "#FFD700";
//                     cell.style.fontWeight = "bold";
//                     cell.style.color = "black";
//                     cell.style.padding = "10px";
//                 }
//                 // Highlight & interact with special days
//                 daysData.forEach(d => {
//                     if (d.monthName === monthNames[month]) {
//                         const specialDayDate = calculateSpecialDay(year, month, d);
//                         if (specialDayDate === day) {
//                             cell.style.backgroundColor = "#FFD700";
//                             cell.style.fontWeight = "bold";
//                             cell.style.color = "black";
//                             cell.style.padding = "10px";

//                             const dayName = document.createElement("div");
//                             dayName.style.fontSize = "12px";
//                             dayName.style.marginTop = "5px";
//                             dayName.style.textAlign = "center";
//                             dayName.innerText = d.name;
//                             cell.appendChild(dayName);

//                             cell.addEventListener("click", () =>{
//                                 fetchSpecialDayDescription(d.descriptionURL, d.name);
                               
//                             } );
//                         }
//                     }
//                 });

//                 day++;
//             }
//             row.appendChild(cell);
//         }
//         calendarTable.appendChild(row);
//         if (day > daysInMonth) break;
//     }

//     // document.querySelector('#calendar').innerHTML = '';
//     document.querySelector('#calendar').appendChild(calendarTable);
//     document.querySelector("#close-description").addEventListener("click", () => {
//         document.querySelector("#description-box").style.display = "none";
//       });
      
// }



// function prevMonth() {
//     if (currentMonth === 0) {
//         currentMonth = 11;
//         currentYear--;
//     } else {
//         currentMonth--;
//     }
//     updateCalendar();
// }

// function nextMonth() {
//     if (currentMonth === 11) {
//         currentMonth = 0;
//         currentYear++;
//     } else {
//         currentMonth++;
//     }
//     updateCalendar();
// }

// function updateCalendar() {
//     createCalendarGrid(currentYear, currentMonth);
//     document.querySelector("#monthSelector").value = currentMonth;
//     document.querySelector("#yearSelector").value = currentYear;
//     document.querySelector("#description-box").style.display = "none";
// }

// async function fetchSpecialDayDescription(url, dayName) {
//     try {
//         const response = await fetch(url);
//         const text = await response.text();
//         document.querySelector("#description-box").style.display = "block";
//         document.querySelector("#description-title").innerText = dayName;
//         document.querySelector("#description-text").innerText = text;
//     } catch (error) {
//         console.error("Error fetching description:", error);
//     }
// }

  
// function populateMonthYearSelectors() {
//     const monthSelector = document.querySelector("#monthSelector");
//     const yearSelector = document.querySelector("#yearSelector");

    
  
//   const monthNames = [...Array(12)].map((_, i) => new Date(0, i).toLocaleString("default", { month: "long" }));
//   monthNames.forEach((m, i) => {
//     const opt = document.createElement("option");
//     opt.value = i;
//     opt.textContent = m;
//     monthSelector.appendChild(opt);
//   });
  
//   for (let y = 1900; y <= 2050; y++) {
//     const opt = document.createElement("option");
//     opt.value = y;
//     opt.textContent = y;
//     yearSelector.appendChild(opt);
//   }
//     monthSelector.addEventListener("change", (e) => {
//         currentMonth = parseInt(e.target.value);
//         updateCalendar();
//     });

//     yearSelector.addEventListener("change", (e) => {
//         currentYear = parseInt(e.target.value);
//         updateCalendar();
//     });
//     monthSelector.value = currentMonth;
// yearSelector.value = currentYear;
// }

// window.onload = function () {
//     createCalendarGrid(currentYear, currentMonth);
//     populateMonthYearSelectors();
//     document.querySelector('#prevMonth').addEventListener('click', prevMonth);
//     document.querySelector('#nextMonth').addEventListener('click', nextMonth);
// };
// Rewritten version using CSS Grid instead of <table>
import { calculateSpecialDay } from "./common.mjs";
import daysData from "./days.json" with { type: "json" };

const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();


function createCalendarGrid(year, month) {
  const calendar = document.querySelector("#calendar");
  calendar.innerHTML = "";

  const grid = document.createElement("div");
  grid.className = "calendar-grid";

  const firstDay = (new Date(year, month).getDay() + 6) % 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  dayNames.forEach(day => {
    const dayEl = document.createElement("div");
    dayEl.className = "day-name";
    dayEl.innerText = day;
    grid.appendChild(dayEl);
  });

  for (let i = 0; i < firstDay; i++) {
    grid.appendChild(document.createElement("div"));
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const cell = document.createElement("div");
    cell.innerText = day;

    const today = new Date();
    if (today.getFullYear() === year && today.getMonth() === month && today.getDate() === day) {
      cell.classList.add("today");
    }

    daysData.forEach(d => {
      if (d.monthName === monthNames[month]) {
        const specialDayDate = calculateSpecialDay(year, month, d);
        if (specialDayDate === day) {
          cell.style.backgroundColor = "#FFD700";
          cell.style.fontWeight = "bold";
          cell.style.color = "black";
          cell.style.padding = "10px";

          const dayName = document.createElement("div");
          dayName.style.fontSize = "12px";
          dayName.style.marginTop = "5px";
          dayName.style.textAlign = "center";
          dayName.innerText = d.name;
          cell.appendChild(dayName);

          cell.addEventListener("click", () => {
            fetchSpecialDayDescription(d.descriptionURL, d.name);
          });
        }
      }
    });

    grid.appendChild(cell);
  }

  calendar.appendChild(grid);
  document.querySelector("#close-description").addEventListener("click", () => {
    document.querySelector("#description-box").style.display = "none";
  });
}

function updateCalendar() {
  createCalendarGrid(currentYear, currentMonth);
  document.querySelector("#monthSelector").value = currentMonth;
  document.querySelector("#yearSelector").value = currentYear;
  document.querySelector("#description-box").style.display = "none";
}

function prevMonth() {
  if (currentMonth === 0) {
    currentMonth = 11;
    currentYear--;
  } else {
    currentMonth--;
  }
  updateCalendar();
}

function nextMonth() {
  if (currentMonth === 11) {
    currentMonth = 0;
    currentYear++;
  } else {
    currentMonth++;
  }
  updateCalendar();
}

async function fetchSpecialDayDescription(url, dayName) {
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

function populateMonthYearSelectors() {
  const monthSelector = document.querySelector("#monthSelector");
  const yearSelector = document.querySelector("#yearSelector");

  monthNames.forEach((m, i) => {
    const opt = new Option(m, i);
    monthSelector.appendChild(opt);
  });

  for (let y = 1900; y <= 2050; y++) {
    const opt = new Option(y, y);
    yearSelector.appendChild(opt);
  }

  monthSelector.addEventListener("change", (e) => {
    currentMonth = parseInt(e.target.value);
    updateCalendar();
  });

  yearSelector.addEventListener("change", (e) => {
    currentYear = parseInt(e.target.value);
    updateCalendar();
  });

  monthSelector.value = currentMonth;
  yearSelector.value = currentYear;
}

window.onload = function () {
  createCalendarGrid(currentYear, currentMonth);
  populateMonthYearSelectors();
  document.querySelector('#prevMonth').addEventListener('click', prevMonth);
  document.querySelector('#nextMonth').addEventListener('click', nextMonth);
};