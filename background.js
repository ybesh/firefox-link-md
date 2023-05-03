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
      // Extract video ID from YouTube video page URL
      var videoId = pageUrl.split("v=")[1];
      if (videoId) {
        var ampersandPosition = videoId.indexOf("&");
        if (ampersandPosition != -1) {
          videoId = videoId.substring(0, ampersandPosition);
        }
        pageUrl = "https://www.youtube.com/watch?v=" + videoId;
      }
    }

    var markdownLink = "[" + pageTitle + "](" + pageUrl + ")";
    navigator.clipboard.writeText(markdownLink);
  }
});

