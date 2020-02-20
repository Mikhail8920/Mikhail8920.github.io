// document.getElementsByClassName('menu__button')[0].onclick = function() {
//     const navigation = document.getElementsByClassName('header__nav')[0];
//      console.log(navigation)
//     console.log(navigation.classList);
//     [navigation.classList].indexOf('header__nav_open') != -1 ? navigation.classList.remove('header__nav_open') : navigation.classList.add('header__nav_open');
//     }

document.querySelector(".header__nav__link").onclick = function change() {
    document.querySelector(".header__nav").style.visibility = "hidden";
    let off = document.querySelector('#menu__toggle');
    off.checked = false
}
document.querySelector("#menu__toggle").onclick = function change2() {
    let off = document.querySelector('#menu__toggle')
    if ((document.querySelector(".header__nav").style.visibility = "hidden") && (off.checked = true)) {
        document.querySelector(".header__nav").style.visibility = "visible";
    } else if ((document.querySelector(".header__nav").style.visibility = "visible") && (off.checked = true)) {
        document.querySelector(".header__nav").style.visibility = "hidden";
    } else if (off.checked = true) {
        document.querySelector(".header__nav").style.visibility = "visible";
    } 
}

    // for (item of document.getElementsByClassName('header__nav__link')) {
    //     item.onclick = function() {
    //         const navigation = document.getElementsByClassName('header__nav')[0];
    //         navigation.classList.remove('header__nav');
    //     }
    //     item.onclick = function() {
    //         const navigation = document.getElementsByClassName('header__nav')[0];
    //         navigation.classList.remove('header__nav');
    //     }
    //     item.onclick = function() {
    //         const navigation = document.getElementsByClassName('header__nav')[0];
    //         navigation.classList.remove('header__nav');
    //     }
    //     item.onclick = function() {
    //         const navigation = document.getElementsByClassName('header__nav')[0];
    //         navigation.classList.remove('header__nav');
    //     }
    //     item.onclick = function() {
    //         const navigation = document.getElementsByClassName('header__nav')[0];
    //         navigation.classList.remove('header__nav');
    //     }
    // }