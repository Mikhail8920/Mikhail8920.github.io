document.getElementsByClassName('menu__button')[0].onclick = function() {
    const navigation = document.getElementsByClassName('header__nav')[0];
    // console.log(navigation)
    console.log(navigation.classList);
    [navigation.classList].indexOf('header__nav_open') == -1 ? navigation.classList.add('header__nav_open') : navigation.classList.remove('header__nav_open');
    }

    for (item of document.getElementsByClassName('header__nav__link')) {
        item.onclick = function() {
            const navigation = document.getElementsByClassName('header__nav')[0];
            navigation.classList.remove('header__nav_open');
        }
        item.onclick = function() {
            const navigation = document.getElementsByClassName('header__nav')[0];
            navigation.classList.remove('header__nav_open');
        }
        item.onclick = function() {
            const navigation = document.getElementsByClassName('header__nav')[0];
            navigation.classList.remove('header__nav_open');
        }
        item.onclick = function() {
            const navigation = document.getElementsByClassName('header__nav')[0];
            navigation.classList.remove('header__nav_open');
        }
        item.onclick = function() {
            const navigation = document.getElementsByClassName('header__nav')[0];
            navigation.classList.remove('header__nav_open');
        }
    }