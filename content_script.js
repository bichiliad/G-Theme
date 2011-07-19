//Imports JQuery
var script = document.createElement('script');
script.src = 'http://code.jquery.com/jquery-1.6.2.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);
//This replaces the logo with something more theme-fitting.
$(".a-U-Pg-T img:first").attr('src', 'http://www.technoheads.org/g+/img/white_logo_final.png');
//This adds some theme credit to the bottom.
$(".a-b-Xa-p-T").append('<br>Theme by <a href="http://technoheads.org">Salem Hilal</a>');

//class="a-b-Xa-p-T a-Xa-p-T a-Xa-p-T-vj-oc a-Xa-p-xc-zb"