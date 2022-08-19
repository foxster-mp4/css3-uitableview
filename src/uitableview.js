/**
 * uitableview.js
 * css3-uitableview (github.com/foxster-mp4/css3-uitableview)
 * 
 * Copyright (c) 2022 Foxster (foxster-mp4 on GitHub)
 * MIT License
 */

// Using this file alongside uitableview.auto-dark.css is not recommended, since the page will default to match the system's appearance and your function calls may not work
const badCSS = document.querySelector("link[href*='uitableview.auto-dark.css']");
if (badCSS) badCSS.parentNode.removeChild(badCSS);

// Call these functions to trigger an appearance change 
const uiTableViewDark = () => document.getElementById("uitableview").classList.add("dark");
const uiTableViewLight = () => document.getElementById("uitableview").classList.remove("dark");