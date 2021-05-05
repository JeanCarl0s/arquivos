chrome.tabs.executeScript({ code: "alert('dsff');" }, function() {
    if (chrome.runtime.lastError) {
         console.log("ERROR: " + chrome.runtime.lastError.message);
    }
});
