var callback = function () {
    window.alert("KIRA HAS SERVED YOU JUSTICE");
};
  
var millisecondsPerWeek = 1000 * 60 * 60 * 24 * 7;
var oneWeekAgo = (new Date()).getTime() - millisecondsPerWeek;

document.getElementById("delete-btn").addEventListener("click", function() {
    chrome.browsingData.remove({
        "since": oneWeekAgo
        }, {
        "appcache": true,
        "cache": true,
        "cacheStorage": true,
        "cookies": true,
        "downloads": true,
        "fileSystems": true,
        "formData": true,
        "history": true,
        "indexedDB": true,
        "localStorage": true,
        "passwords": true,
        "serviceWorkers": true,
        "webSQL": true
        }, callback);
});
