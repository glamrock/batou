// detect if speech/aural stylesheet exists
// use that stylesheet instead of the screen stylesheet

/* 

1: inject javascript to toggle speech stylesheet on
2: button should have ability to toggle this content script on/off
3: ideally, should fall back to aural and then all if speech not available

*/

function batou {
    var sheet = document.getElementsByTagName('link');
// if it <link> exists
    for (var a = sheet.length - 1; a >= 0; a--)
    { if (sheet[a].getAttribute('media').indexOf('style')> -1 && sheet[a].getAttribute('title'))
    
    
}




function changeStyle(title) {
var lnks = document.getElementsByTagName('link');
for (var i = lnks.length - 1; i >= 0; i--) {
if (lnks[i].getAttribute('rel').indexOf('style')> -1 && lnks[i].getAttribute('title')) {
lnks[i].disabled = true;
if (lnks[i].getAttribute('title') == title) lnks[i].disabled = false;
}}}