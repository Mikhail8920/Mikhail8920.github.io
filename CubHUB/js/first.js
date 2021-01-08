document.querySelector("#menu__toggle").onclick = function change2() {
  let off = document.querySelector("#menu__toggle");
  if (
    document.querySelector(".header__menu").style.visibility == "hidden" &&
    off.checked == true
  ) {
    document.querySelector(".header__menu").style.visibility = "visible";
  } else if (
    document.querySelector(".header__menu").style.visibility == "visible" &&
    off.checked == false
  ) {
    document.querySelector(".header__menu").style.visibility = "hidden";
  } else if (off.checked == true) {
    document.querySelector(".header__menu").style.visibility = "visible";
  }
};

for (item of document.querySelectorAll("header__menu__nav")) {
  item.onclick = function () {
    const navigation = document.querySelector("header__menu");
    navigation.style.visibility = "hidden";
    let off = document.querySelector("#menu__toggle");
    off.checked = false;
  };
}
