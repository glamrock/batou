// detect if speech/aural stylesheet exists
// use that stylesheet instead of the screen stylesheet

/* 

1: inject javascript to toggle speech stylesheet on
2: button should have ability to toggle this content script on/off
3: ideally, should fall back to aural and then all if speech not available

*/

function batou(media) {
    var sheet = document.getElementsByTagName('link');
// if it <link> exists
    for (var a = sheet.length - 1; a >= 0; a--)
    { if (sheet[a].getAttribute('rel').indexOf('style')> -1 && sheet[a].getAttribute('media')) {
    sheet[a].disabled = true;
    if (sheet[a].getAttribute('media') == media) sheet[a].disabled = false;
}}}

/* 

Check IsMediaType = screen
If screen (despite button being toggled on), then look for appropriate stylesheets
Apply speech, if no speech, apply aural
If no alt style sheets, ding and then use default
Possibly use print style sheet if no other?

*/