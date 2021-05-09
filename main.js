var slide = 1;
var slides = ["one", "two", "three", "four", "five", "six"];
var show = 1;
var count;
var button;
var hover;
var leave;
function start() {
    show = slide;
    showorhide();
    button = slide;
    setbuttoncolor();
}
function showorhide() {
    for (count = 0; count <= 5; count++) {
        if ((count + 1) == show) {
            document.getElementById("image" + (count + 1)).style.display = "block";
        }
        else {
            document.getElementById("image" + (count + 1)).style.display = "none";
        }
    }
}
function setbuttoncolor() {
    for (count = 0; count <= 5; count++) {
        if ((count + 1) == button) {
            document.getElementById(slides[(button - 1)]).style.backgroundColor = "#4287f5";
            document.getElementById(slides[(button - 1)]).style.borderBottom = "solid 3px #316ac4";
            document.getElementById(slides[(button - 1)]).style.fontFamily = " 'Libre Franklin', sans-serif";
        }
        else {
            document.getElementById(slides[count]).style.backgroundColor = "#808080";
            document.getElementById(slides[count]).style.borderBottom = "solid 3px #666666";
            document.getElementById(slides[count]).style.fontFamily = " 'Libre Franklin', sans-serif";
        }
    }
}
function prev() {
    if (slide > 1) {
        slide--;
        show = slide;
        showorhide();
        button = slide;
        setbuttoncolor();
    }
}
function next() {
    if (slide < 6) {
        slide++;
        show = slide;
        showorhide();
        button = slide;
        setbuttoncolor();
    }
}
function one() {
    slide = 1;
    show = slide;
    showorhide();
    button = slide;
    setbuttoncolor();
}
function two() {
    slide = 2;
    show = slide;
    showorhide();
    button = slide;
    setbuttoncolor();
}
function three() {
    slide = 3;
    show = slide;
    showorhide();
    button = slide;
    setbuttoncolor();
}
function four() {
    slide = 4;
    show = slide;
    showorhide();
    button = slide;
    setbuttoncolor();
}
function five() {
    slide = 5;
    show = slide;
    showorhide();
    button = slide;
    setbuttoncolor();
}
function six() {
    slide = 6;
    show = slide;
    showorhide();
    button = slide;
    setbuttoncolor();
}
function o1() {
    if (slide != 1) {
        hover = 1;
        over();
    }
}
function o2() {
    if (slide != 2) {
        hover = 2;
        over();
    }
}
function o3() {
    if (slide != 3) {
        hover = 3;
        over();
    }
}
function o4() {
    if (slide != 4) {
        hover = 4;
        over();
    }
}
function o5() {
    if (slide != 5) {
        hover = 5;
        over();
    }
}
function o6() {
    if (slide != 6) {
        hover = 6;
        over();
    }
}
function over() {
    for (count = 0; count <= 5; count++) {
        if ((count + 1) == hover) {
            document.getElementById(slides[count]).style.backgroundColor = "#656565";
            document.getElementById(slides[count]).style.borderBottom = "solid 3px #515151";
            document.getElementById(slides[count]).style.fontFamily = " 'Libre Franklin', sans-serif";
        }
    }
}
function l1() {
    if (slide != 1) {
        leave = 1;
        out();
    }
}
function l2() {
    if (slide != 2) {
        leave = 2;
        out();
    }
}
function l3() {
    if (slide != 3) {
        leave = 3;
        out();
    }
}
function l4() {
    if (slide != 4) {
        leave = 4;
        out();
    }
}
function l5() {
    if (slide != 5) {
        leave = 5;
        out();
    }
}
function l6() {
    if (slide != 6) {
        leave = 6;
        out();
    }
}
function out() {
    for (count = 0; count <= 5; count++) {
        if ((count + 1) == leave) {
            document.getElementById(slides[count]).style.backgroundColor = "#808080";
            document.getElementById(slides[count]).style.borderBottom = "solid 3px #666666";
            document.getElementById(slides[count]).style.fontFamily = " 'Libre Franklin', sans-serif";
        }
    }
}