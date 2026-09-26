(function () {
  const THEMES = ["xp_bleu.css","xp_vert.css","xp_rose.css","xp_gris.css","xp_noir.css"];
  const DEFAULT_THEME = "xp_bleu.css";
  function getThemeLink() {
    let link = document.getElementById("domsun-theme");
    if (!link) { link = document.createElement("link"); link.id = "domsun-theme"; link.rel = "stylesheet"; document.head.appendChild(link); }
    return link;
  }
  function applyTheme(theme) {
    if (!THEMES.includes(theme)) theme = DEFAULT_THEME;
    getThemeLink().href = theme;
    localStorage.setItem("domsunTheme", theme);
  }
  window.setTheme = applyTheme;
  applyTheme(localStorage.getItem("domsunTheme") || DEFAULT_THEME);
})();
