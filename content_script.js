//alert('content_script.js has been loaded successfully.');

chrome.tabs.executeScript(null,
	{code:"document.body.style.backgroundColor='red'"});
document.write('<link rel="stylesheet" href="/stylesie.css" type="text/css">');
