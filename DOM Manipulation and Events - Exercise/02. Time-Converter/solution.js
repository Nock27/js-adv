function attachEventsListeners() {
  let daysButton = document.getElementById("daysBtn");
  let daysInput = document.getElementById("days");

  let hoursButton = document.getElementById("hoursBtn");
  let hoursInput = document.getElementById("hours");

  let minutesButton = document.getElementById("minutesBtn");
  let minutesInput = document.getElementById("minutes");

  let secondsButton = document.getElementById("secondsBtn");
  let secondsInput = document.getElementById("seconds");

  daysButton.addEventListener("click", () => {
    if (!daysInput.value == "") {
      hoursInput.value = 24 * Number(daysInput.value);
      minutesInput.value = 1440 * Number(daysInput.value);
      secondsInput.value = 86400 * Number(daysInput.value);
    }
  });
  hoursButton.addEventListener("click", () => {
    if (!hoursInput.value == "") {
      daysInput.value = Number(hoursInput.value) / 24;
      minutesInput.value = Number(hoursInput.value) * 60;
      secondsInput.value = Number(hoursInput.value) * 3600;
    }
  });
  minutesButton.addEventListener("click", () => {
    if (!minutesInput.value == "") {
      daysInput.value = Number(minutesInput.value) / 1440;
      hoursInput.value = Number(minutesInput.value) / 60;
      secondsInput.value = Number(minutesInput.value) * 60;
    }
  });
  secondsButton.addEventListener("click", () => {
    if (!secondsInput.value == "") {
      daysInput.value = Number(secondsInput.value) / 86400;
      hoursInput.value = Number(secondsInput.value) / 3600;
      minutesInput.value = Number(secondsInput.value) * 60;
    }
  });
}
