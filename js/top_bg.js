
function resize(el, margin) {
    var heights = window.innerHeight - margin;
    var element = document.getElementById(el);
    if(element != null) {
        element.style.height = heights + "px";
    }    
}

resize("top_bg_home", 0);
resize("top_bg_book", 120);

window.addEventListener('resize', bg_resize);
function bg_resize() {
    resize("top_bg_book", 120);
    resize("top_bg_home", 0);
};

window.addEventListener('scroll', bg_move);
function bg_move() {
    var windowYOffset = window.pageYOffset;
    var elBackgrounPos = "left " + (windowYOffset * 0.4) + "px";
    var bubble2 = document.getElementById('parallax');
    bubble2.style.backgroundPosition = elBackgrounPos
 };