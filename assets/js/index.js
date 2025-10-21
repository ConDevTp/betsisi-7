/* section1 */
function ShowHambergerMenu() {
    if (document.getElementById("hambergerbox").classList.contains("menu-header-hamberger"))

    {
        document.getElementById("hambergerbox").classList.remove("menu-header-hamberger");
        document.getElementById("hambergerbox").classList.add("menu-header-hambergerCLS");
        document.getElementById("baricon").classList.add("fa-bars");
        document.getElementById("baricon").classList.remove("fa-times");
    } else {
        document.getElementById("hambergerbox").classList.add("menu-header-hamberger");
        document.getElementById("hambergerbox").classList.remove("menu-header-hambergerCLS");
        document.getElementById("baricon").classList.remove("fa-bars");
        document.getElementById("baricon").classList.add("fa-times");
    }
}
/* section1 */

/* section8 */

function openticket(obj, obj1) {
    if (document.getElementById(obj).classList.contains('boxitemshow'))

    {
        document.getElementById(obj).classList.remove("boxitemshow");
        document.getElementById(obj).classList.add("boxitemshowclose");
        document.getElementById(obj1).src = "./assets/img/minus-square.png";
    } else {
        document.getElementById(obj).classList.add("boxitemshow");
        document.getElementById(obj).classList.remove("boxitemshowclose");
        document.getElementById(obj1).src = "./assets/img/add.png";
    }
}
/* section8 */