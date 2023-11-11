
console.log("hello background script!")

chrome.action.onClicked.addListener((tab) => {
    chrome.action.setIcon({
        path: "icons/light-on-128.png"
    })
})