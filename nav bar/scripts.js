document.addEventListener("DOMContentLoaded", () => {
    const body = document.querySelector("body"),
          sidebar = body.querySelector(".sidebar"),
          toggle = body.querySelector(".toggle"),
          modeSwitch = body.querySelector(".toggle-switch"),
          modeText = body.querySelector(".mode-text");

    console.log(sidebar, toggle, modeSwitch, modeText);

    toggle.addEventListener("click", () => {
        sidebar.classList.toggle("close");
    });

    modeSwitch.addEventListener("click", () => {
        body.classList.toggle("dark");
        if (body.classList.contains("dark")) {
            modeText.innerText = "Dark mode";
        } else {
            modeText.innerText = "Light mode";
        }
    });
});
