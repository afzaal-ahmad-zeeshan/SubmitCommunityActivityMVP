chrome.browserAction.onClicked.addListener(function(tab) {
  // Get the details
  var _url, _title;
  
  chrome.tabs.query({ active: true }, function (tabs) { 
      var tab = tabs[0];
      
      // Do not proceed if the website open is the one we are going to load.
      if(tab.url.includes("mvp.microsoft.com/en-us/Bookmarklet/Auth")) { return false; }
      
      // Forward the request to the function.
      loadPage(encodeURIComponent(tab.url), encodeURIComponent(tab.title), tab.index);
    }
  );
});

// This function loads the web page.
function loadPage(pageUrl, pageTitle, pageIndex) {
  chrome.tabs.create({ url: "https://mvp.microsoft.com/en-us/Bookmarklet/Auth?url=" + pageUrl + "&title=" + pageTitle, active: false, index: pageIndex + 1 });
}
