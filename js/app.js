// hh:mm to minutes
function convertToMins(time) {
  // Splits minutes and hours into array of substrings
  const split = time.split(":");
  return split[0] * 60 + +split[1];
}

// Minutes to hh:mm format
function timeMins(mins) {
  function a(n) {
    return (n < 10 ? "0" : "") + n;
  }
  let hours = ((mins / 60) | 0) % 24;
  let minutes = mins % 60;
  return a(hours) + ":" + a(minutes);
}

// Adds both times into a hh:mm format
function addTime(time0, time1) {
  return timeMins(convertToMins(time0) + convertToMins(time1));
}

let time = document.getElementById("time").value;

let sleepCycles = document.getElementById("sleepCycles");

function calculateSleep() {
  let time = document.getElementById("time").value;
  let timeNeeded = document.getElementById("time-needed").value;
  timeNeeded = timeMins(timeNeeded);
  console.log(timeNeeded);
  time = addTime(time, timeNeeded);
  console.log(time);

  let twoSleepCycles = addTime(time, "3:00");
  console.log(twoSleepCycles);
  let threeSleepCycles = addTime(time, "4:30");
  console.log(threeSleepCycles);
  let fourSleepCycles = addTime(time, "6:00");
  let fiveSleepCycles = addTime(time, "7:30");
  let sixSleepCycles = addTime(time, "9:00");

  sleepCycles.innerHTML =
    "<h3> Sleep time: " +
    time +
    " (" +
    timeNeeded +
    " added for time to fall asleep)" +
    "</h3><div class='sleep-cycles'><ul> <li> <p>Two Sleep Cycles: " +
    twoSleepCycles +
    "</p><p> 3 Hours - Not Recommended</p> <span class='emoji'>&#129503;</span>" +
    "</li>" +
    "<li> <p> Three Sleep Cycles: " +
    threeSleepCycles +
    "</p><p> 4.5 Hours -  Not Recommended </p> <span class='emoji'>&#128564;</span> </li>" +
    "<li><p> Four Sleep Cycles: " +
    fourSleepCycles +
    "</p> <p> 6 Hours - Okay</p> <span class='emoji'>&#128524;</span> </li>" +
    "<li> <p> Five Sleep Cycles: " +
    fiveSleepCycles +
    " </p> <p>7.5 Hours - Recommended</p> <span class='emoji'>&#128516; </span> </li>" +
    "<li> <p> Six Sleep Cycles: " +
    sixSleepCycles +
    "</p> <p> 9 Hours - Recommended</p> <span class='emoji'>&#128515;</span> </li> </ul><div>";
}
