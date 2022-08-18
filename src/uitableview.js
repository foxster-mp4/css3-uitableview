/**
 * uitableview.js
 * css3-uitableview (github.com/foxster-mp4/css3-uitableview)
 * 
 * Copyright (c) 2022 Foxster (foxster-mp4 on GitHub)
 * MIT License
 */

// Call these functions to trigger appearance change 
// Must not use with @media (prefers-color-scheme: dark)
function uiTableViewDark() {
  document.querySelectorAll("#uitableview, #uitableview .icon, #uitableview .cell, #uitableview .cell-accessory-icon").forEach(e => e.classList.add("dark"));
}
function uiTableViewLight() {
  document.querySelectorAll("#uitableview, #uitableview .icon, #uitableview .cell, #uitableview .cell-accessory-icon").forEach(e => e.classList.remove("dark"));
}