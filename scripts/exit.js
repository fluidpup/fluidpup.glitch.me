$(window).on("load", () => {
  const close = document.querySelector("#info-close");
  const ok = document.querySelector("#info-ok");

  close.onclick = () => {
    window.location.href = "/exit";
  };
  ok.onclick = () => {
    window.location.href = "/exit";
  };
});
