// Open external links in new tab
function external_new_window() {
    for(var c = document.getElementsByTagName("a"), a = 0;a < c.length;a++) {
        var b = c[a];
        if(b.getAttribute("href") ) {
            b.target = "_blank";
            b.rel = "noopener";
        }
    }
}
external_new_window();