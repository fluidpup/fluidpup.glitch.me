$(window).on("load", () => {
  function currentTime() {
    let date = new Date().toLocaleString("en-GB", {
      timeZone: "America/New_York"
    });
    let time = date.split(", ")[1];
    let hour = time.split(":")[0];
    let minute = time.split(":")[1];
    let second = time.split(":")[2];
    document.getElementById("clock").innerText = "j's local time is: " + hour + " : " + minute + " : " + second;
    let t = setInterval(() => {
      currentTime();}, 1000);
  }

  currentTime();
});
