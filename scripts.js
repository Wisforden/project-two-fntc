const monthsWith28Days = ["february"];
const monthsWith30Days = ["april", "june", "september", "november"];
const monthsWith31Days = [
  "january",
  "march",
  "may",
  "july",
  "august",
  "october",
  "december",
];
function getMonth() {
  const daysEl = document.querySelector(".how_many_days");
  console.log(daysEl);

  while (true) {
    let monthInput = prompt("Type in your Month");
    console.log(monthInput);

    if (monthInput === null) {
      alert("Gurl BYE.");
      return;
    }

    const cleanInput = monthInput.toLowerCase().trim();
    const formattedMonth =
      cleanInput.charAt(0).toUpperCase() + cleanInput.slice(1);

    if (monthsWith28Days.includes(cleanInput)) {
      daysEl.innerText = `The Month of ${formattedMonth}, has 28 Days!`;
      return;
    } else if (monthsWith30Days.includes(cleanInput)) {
      daysEl.innerText = `The Month of ${formattedMonth}, has 30 Days!`;
      return;
    } else if (monthsWith31Days.includes(cleanInput)) {
      daysEl.innerText = `The Month of ${formattedMonth}, has 31 Days!`;
      return;
    } else {
      alert("Try Again, That wasn't a month!");
    }
  }
}

getMonth();
