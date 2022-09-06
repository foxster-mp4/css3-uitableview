/**
 * uitableview.js
 * css3-uitableview (github.com/therealFoxster/css3-uitableview)
 * 
 * Copyright (c) 2022 Foxster (therealFoxster on GitHub)
 * MIT License
 */

// Remove uitableview.auto-dark.css if it's linked
const badCSS = document.querySelector("link[href*='uitableview.auto-dark.css']");
if (badCSS) badCSS.parentNode.removeChild(badCSS);

/**
 * IMPORTANT
 * Using this file with uitableview.auto-dark.css is not recommended, since the page will default to match the system's appearance and calls to the functions below may not produce any visible effect.
 */

/**
 * Call these functions to trigger an appearance change 
 * @returns nothing
 */
const uiTableViewDark = () => document.getElementById("uitableview").classList.add("dark");
const uiTableViewLight = () => document.getElementById("uitableview").classList.remove("dark");