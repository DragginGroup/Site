var scrollingText = document.getElementById('text');

var ADJUSTMENT = 5;

// https://stackoverflow.com/questions/4416505/how-to-take-keyboard-input-in-javascript
// exd5cxd4 and SK-the-learner
window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
      return;
    }
  
    switch (event.key) {
      case "ArrowDown": scrollingText.scrollamount -= ADJUSTMENT;
      case "ArrowUp": scrollingText.scrollamount += ADJUSTMENT;
      default: return;
    }
    event.preventDefault();
  }, true);