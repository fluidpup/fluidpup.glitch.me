$(window).on("load", () => {
  const helpWindow = document.querySelector("#help");
  const helpOpen = document.querySelector("#help-open");
  const helpClose = document.querySelector("#help-close");

  helpClose.onclick = () => {
    helpWindow.setAttribute("hidden", true);
  };
  helpOpen.onclick = () => {
    helpWindow.removeAttribute("hidden");
  };
});
