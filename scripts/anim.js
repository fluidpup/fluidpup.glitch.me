$(window).on("load", () => {
  const text = "info --get fluidpup".split("");
  const command = document.querySelector("#command-text");

  let index = 0;
  function type() {
    let min = 25,
      max = 200;
    var rand = Math.random() * (max - min + 1) + min;

    if (index < text.length) {
      command.append(text[index]);
      setTimeout(type, rand);
      index++;
    } else {
      clearTimeout();
      setTimeout(runCommand, 350);
    }
  }

  function runCommand() {
    document.querySelector("#caret").remove();

    let commandReturn = document.createElement("span");
    commandReturn.setAttribute("id", "command-return");
    commandReturn.textContent = "Retrieving info on @fluidpup...";

    command.parentNode.appendChild(document.createElement("br"));
    command.parentNode.appendChild(commandReturn);

    setTimeout(commandSuccess, 1500);
  }

  function commandSuccess() {
    let commandSuccess = document.createElement("span");
    commandSuccess.setAttribute("id", "command-success");
    commandSuccess.textContent = "Info retrieved! Displaying now...";

    command.parentNode.appendChild(document.createElement("br"));
    command.parentNode.appendChild(commandSuccess);

    setTimeout(() => {
      window.location.href = "/info";
    }, 1000);
  }

  setTimeout(type, 1000);
});
