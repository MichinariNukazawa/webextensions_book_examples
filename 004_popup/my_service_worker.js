
console.log("loading background script!")

chrome.action.onClicked.addListener((tab) => {
    chrome.action.setIcon({
        path: "icons/light-off-128.png"
    })
})