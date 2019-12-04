import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

let last_known_scroll_position = 0;
let ticking = false;

function doSomething(scroll_pos) {
  // Do something with the scroll position
  const deviceHeight = window.innerHeight;
  // scroll pos is at the top of the window
  const maxHeight = document.body.scrollHeight;
  var speedDialFab = document.querySelector('.MuiSpeedDial-fab')
  if (scroll_pos < deviceHeight) {
    // do nothing, color is already set
    speedDialFab.style.setProperty('background', '#00d4ff', 'important')

  } else if (scroll_pos < deviceHeight * 2) {
    speedDialFab.style.setProperty('background', '#fff875', 'important')
  } else if (scroll_pos < deviceHeight * 3) {
  } else if (scroll_pos < deviceHeight * 4) {
    console.log(4)
  }
}

window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(last_known_scroll_position);
      ticking = false;
    });

    ticking = true;
  }
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
