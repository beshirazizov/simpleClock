setInterval(function () {
    var ms = new Date().getMilliseconds()/166.6;
    var s = 6 * new Date().getSeconds() + ms;
    var m = 6 * new Date().getMinutes() + s/60;
    var h = 30 * (new Date().getHours() % 12) + m/12;
    document.querySelector("#s").style.transform = "rotate("+s+"deg)";
    document.querySelector("#m").style.transform = "rotate("+m+"deg)";
    document.querySelector("#h").style.transform = "rotate("+h+"deg)";
}, 1)