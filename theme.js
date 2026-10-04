(function () {

  const DEFAULT_THEME = "xp_bleu.css";

  function applyTheme(theme) {

    if (!theme) {
      theme = DEFAULT_THEME;
    }

    let link = document.getElementById("domsun-theme");

    if (!link) {

      link = document.createElement("link");

      link.id = "domsun-theme";
      link.rel = "stylesheet";

      document.head.appendChild(link);
    }

    link.href = theme;

    localStorage.setItem("domsunTheme", theme);

    console.log("DOMSUN theme:", theme);
  }

  window.setTheme = function (theme) {
    applyTheme(theme);
  };


  const savedTheme =
    localStorage.getItem("domsunTheme");

  applyTheme(savedTheme || DEFAULT_THEME);

})();
