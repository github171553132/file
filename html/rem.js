(function (doc, win) {
    const design = 750;
    let docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            const clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if (clientWidth >= design) {
                docEl.style.fontSize = '100px';
            } else {
                docEl.style.fontSize = 100 * (clientWidth / design) + 'px';
                const a = (docEl.style.fontSize = 100 * (clientWidth / design) + 'px');
            }
        };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
