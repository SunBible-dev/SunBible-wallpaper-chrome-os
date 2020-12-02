chrome.app.runtime.onLaunched.addListener(function() {
    chrome.app.window.create('../chrome-app.html', {
      'outerBounds': {
        'width': 850,
        'height': 550
      }
    });
  });