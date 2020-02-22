if (window.innerWidth < 639) {    
    document.querySelector("#menu__toggle").onclick = function change2() {
        let off = document.querySelector('#menu__toggle')
        if ((document.querySelector(".header__nav").style.visibility == "hidden") && (off.checked == true)) {
            document.querySelector(".header__nav").style.visibility = "visible";
        } else if ((document.querySelector(".header__nav").style.visibility == "visible") && (off.checked == false)) {
            document.querySelector(".header__nav").style.visibility = "hidden";
        }
        else if (off.checked == true) {
            document.querySelector(".header__nav").style.visibility = "visible";
        } 
    }



    for (item of document.querySelector('header__nav__link')) {
        item.onclick = function() {
            const navigation = document.querySelector('header__nav')[0];
            navigation.style.visibility = "hidden";
            let off = document.querySelector('#menu__toggle');    
            off.checked = false
        }
    }
}