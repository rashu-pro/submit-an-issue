/**
 * -------------------------------------
 * 1. VARIABLES
 * -------------------------------------
 */

let mainWrapperSelector = '.main-wrapper-js';
let headerSelector = '.header-js';
let footerSelector = '.footer-js';

fixHeight();

let formSupport = document.getElementById('form-support-js');
formSupport.addEventListener('submit', ()=>{
  document.querySelector('.loader-div').classList.add('active');
})

if(document.querySelector('.alert-holder-js')){
  setTimeout(()=>{
    document.querySelector('.alert-holder-js').remove();
  },20000)
}

/**
 * -------------------------------------
 * 2. FUNCTION DEFINITION
 * -------------------------------------
 */

/**
 *
 * @effects gives body a min height so that the footer always stay in the bottom of the page
 * -------- event if the page doesn't have enough contents
 */
function fixHeight() {
  if (!document.querySelector(mainWrapperSelector)) return;
  let headerHeight = document.querySelector(headerSelector).clientHeight,
    footerHeight = document.querySelector(footerSelector).clientHeight,
    mainWrapperMarginTop = parseInt(window.getComputedStyle(document.querySelector(mainWrapperSelector)).marginTop),
    mainWrapperMarginBottom = parseInt(window.getComputedStyle(document.querySelector(mainWrapperSelector)).marginBottom);
  document.querySelector(mainWrapperSelector).style.minHeight = "calc(100vh - " + (headerHeight + footerHeight + mainWrapperMarginTop + mainWrapperMarginBottom + 2) + "px)";
}
