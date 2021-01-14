document.querySelector("#menu__toggle").onclick = function change2() {
  let off = document.querySelector("#menu__toggle");
  if (
    document.querySelector(".nav-bar__list").style.visibility == "hidden" &&
    off.checked == true
  ) {
    document.querySelector(".nav-bar__list").style.visibility = "visible";
  } else if (
    document.querySelector(".nav-bar__list").style.visibility == "visible" &&
    off.checked == false
  ) {
    document.querySelector(".nav-bar__list").style.visibility = "hidden";
  } else if (off.checked == true) {
    document.querySelector(".nav-bar__list").style.visibility = "visible";
  }
};

for (item of document.querySelector("nav-bar__link")) {
  item.onclick = function () {
    const navigation = document.querySelector("nav-bar__list");
    navigation.style.visibility = "hidden";
    let off = document.querySelector("#menu__toggle");
    off.checked = false;
  };
}
