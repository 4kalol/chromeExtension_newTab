chrome.runtime.onMessage.addListener((request, _, sendResponse) => {
  switch (request.type) {
    case "loadContent":
      chrome.storage.sync.get("conent", ({ content }) => {
        sendResponse({ content });
      });
      return true;
    case "saveContent":
      chrome.storage.sync.set({ content: request.content });
      break;
  }
  return;
});
