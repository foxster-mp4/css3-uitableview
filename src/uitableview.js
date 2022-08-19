/**
 * uitableview.js
 * css3-uitableview (github.com/foxster-mp4/css3-uitableview)
 * 
 * Copyright (c) 2022 Foxster (foxster-mp4 on GitHub)
 * MIT License
 */

// Call these functions to trigger appearance change 
// Must not use with uitableview.auto-dark.css
function uiTableViewDark() {
  document.getElementById("uitableview").classList.add("dark");
}
function uiTableViewLight() {
  document.getElementById("uitableview").classList.remove("dark");
}