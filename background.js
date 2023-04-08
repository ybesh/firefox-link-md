browser.contextMenus.create({
  id: "copy-page-link",
  title: "Copy This Page Link in Markdown",
  contexts: ["page"]
});

browser.contextMenus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId == "copy-page-link") {
    var pageTitle = tab.title;
    var pageUrl = tab.url;

    // Check if the page is a YouTube video page
    if (pageUrl.includes("youtube.com/watch")) {
      // Remove query parameters from YouTube video page URL
      pageUrl = pageUrl.split('?')[0];
    }

    var markdownLink = "[" + pageTitle + "](" + pageUrl + ")";
    navigator.clipboard.writeText(markdownLink);
  }
});

