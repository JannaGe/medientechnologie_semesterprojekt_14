function toggledisplay (id, indicator) {
    if (document.getElementById) {
        var obj = document.getElementById(id);
        var pic = document.getElementsByName(indicator);
        obj.style.display = (obj.style.display == 'block' ? 'none' : 'block');
        pic[0].src = (obj.style.display == 'block' ? '../img/KreisAufgeklappt.png' : '../img/KreisZu.png');
    } else if (document.all) {
        // IE
        id.style.display = (id.style.display == 'block' ? 'none' : 'block');
        indicator.src = (id.style.display == 'block' ? '../img/KreisAufgeklappt.png' : '../img/KreisZu.png');
    } else if (document.layers) {
        // Netscape 4.x
        document.id.style.display = (document.id.style.display == 'block' ? 'none' : 'block');
        document.indicator.src = (document.id.style.display == 'block' ? '../img/KreisAufgeklappt.png' : '../img/KreisZu.png');
    }
}