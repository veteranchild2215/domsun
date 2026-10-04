(function () {

  window.setTheme = function (theme) {

    let oldTheme = document.getElementById("domsun-theme");

    if (oldTheme) {
      oldTheme.remove();
    }

    let newTheme = document.createElement("link");

    newTheme.id = "domsun-theme";
    newTheme.rel = "stylesheet";
    newTheme.href = theme;

    document.head.appendChild(newTheme);

    localStorage.setItem("domsunTheme", theme);

  };


  function loadTheme() {

    const saved =
      localStorage.getItem("domsunTheme");

    if (!saved) {
      return;
    }

    const link =
      document.createElement("link");

    link.id = "domsun-theme";
    link.rel = "stylesheet";
    link.href = saved;

    document.head.appendChild(link);

  }


  loadTheme();

})();
