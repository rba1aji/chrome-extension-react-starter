const toggle = document.getElementById('toggle-id');
  try {
    chrome.storage.sync.get(['switchVal'], function (result) {
      console.log('Value currently is ' + result.switchVal);
      if (result.switchVal == 'off') {
        toggle.checked = false;
      }
      else {
        toggle.checked = true;
      }
    });
  }
  catch (err) {
    console.log(err);
  }
  try {
    toggle.addEventListener('change', function () {
      if (toggle.checked) {
        chrome.storage.sync.set({ 'switchVal': 'on' }, function () {
          console.log('Value is set to ' + 'on');
        });
      }
      else {
        chrome.storage.sync.set({ 'switchVal': 'off' }, function () {
          console.log('Value is set to ' + 'off');
        });
      }
    });
  }
  catch (err) {
    console.log(err);
  }