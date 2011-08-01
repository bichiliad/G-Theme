//Fires up JQuery.
var script = document.createElement('script');
script.src = chrome.extension.getURL("jquery.min.js");
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

//image vars
var bgURL= chrome.extension.getURL("/img/bg.jpg");			//Background
var shadeURL = chrome.extension.getURL("/img/shade.png");	//Shading
var circleURL = chrome.extension.getURL("/img/circle.png");	//Circle icon
var sparkURL = chrome.extension.getURL("/img/spark.png");	//Spark icon
var logoURL = chrome.extension.getURL("/img/logo.png");		//Logo

//This replaces the logo with something more theme-fitting.
$(".a-U-Pg-T img:first").attr('src', logoURL);
//This adds some theme credit to the bottom. I need to get a better website soon.
$(".a-b-Xa-p-T").append('<br>Theme by <a href="http://technoheads.org">Salem Hilal</a>');
$(".a-H-Bd-iz").append(' - Theme by <a href="http://technoheads.org" style="color: #6AF !important; font-size: 11px;">Salem Hilal</a>');

//This applies the images to the various parts of the page.
$(".a-la-Rb-h").css('background','url("' + circleURL + '") no-repeat left');	//Circle icon
$(".a-la-GF").css('background','url("' + sparkURL + '") no-repeat left');		//Spark icon
$("body, #content").css('background', 'black url("' + bgURL + '") no-repeat center top'); 	//Background image
$("#contentPane, .a-p-A-xc-zb, .a-b-c-Z-A, .a-p-la-T, .a-p-M-T, .Sa-E-p-T").css("background-image", 'url("' + shadeURL + '")');	//Shading




