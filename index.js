const monthNameEl = document.getElementById("monthName");
const dayhNameEl = document.getElementById("dayName");
const dayNumberEl = document.getElementById("dayNumber");
const yearEl = document.getElementById("year");

const date = new Date();

// to get an specific part of the date variable that we have defined, we can use this bext line. for example :date.getSpecific()
// and insted of psecific we can use: Date for day, Month , FullYaer
const month = date.getMonth();
// now in the next line we first get what we want and replace the inner thext of elements that we have. then we convert the specific part that we get into string.
monthNameEl.innerText = date.toLocaleString("en", {
  month: "long",
});

dayhNameEl.innerText = date.toLocaleDateString("en", {
  weekday: "long",
});

dayNumberEl.innerText = date.getDate();
yearEl.innerText = date.getFullYear();
