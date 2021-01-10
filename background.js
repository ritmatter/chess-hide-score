chrome.runtime.onInstalled.addListener(function(details) {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
      chrome.declarativeContent.onPageChanged.addRules([{
          conditions: [
              new chrome.declarativeContent.PageStateMatcher({
                  pageUrl: { hostEquals: 'www.chess.com' },
              }),
          ],
          actions: [new chrome.declarativeContent.ShowPageAction()]
      }]);
  });
});
