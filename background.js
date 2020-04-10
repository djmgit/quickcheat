function searchBingAction(info, tab) {
  var search_term = info.selectionText.replace(/ /g, '+');
  var search_url = "http://www.bing.com/search?q=" + search_term + "&qs=n&form=QBLH&sp=-1&pq=" + search_term + "&sc=8-14&sk=&cvid=56D81D26436548CF9AA1B6296219240E";
  var searchTab = chrome.tabs.create({url: search_url});
}

function searchDuckDuckGoAction(info, tab) {
  var search_term = info.selectionText.replace(/ /g, '+');
  var search_url = "https://beta.duckduckgo.com/?q=" + search_term + "&t=ha";
  var searchTab = chrome.tabs.create({url: search_url});
}

chrome.contextMenus.create({
  id: "duck",
  title: "Search duckduckgo",
  contexts: ["selection"],
  "onclick": searchDuckDuckGoAction
});

chrome.contextMenus.create({
  id: "bing",
  title: "Search bing",
  contexts: ["selection"],
  "onclick": searchBingAction
});
