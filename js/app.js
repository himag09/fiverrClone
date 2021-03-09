window.onscroll = () => {
    // console.log(window.scrollY);
    // selecciona div header-scroll
    if (screen.width >= 992) {
        let scroll = window.scrollY;
        const headerScroll = document.querySelector('.header-scroll');
        if (scroll >= 200) {
            console.log("sip");
            headerScroll.classList.add('activo');
        } else {
            headerScroll.classList.remove('activo');

        }
    }
}
eventListener();
function eventListener() {
    var menuBtn = document.querySelector('#btnsidebar');
    menuBtn.addEventListener("click", addSB);

    var overlay = document.querySelector(".sidebar-overlay");
    overlay.addEventListener("click", removeSB);

    function addSB(e) {
        e.preventDefault();
        document.querySelector("body").classList.add("menu-shown");
    }
    function removeSB(e) {
        e.preventDefault();
        document.querySelector('body').classList.remove('menu-shown');
    }
}