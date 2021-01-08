const animElements = document.querySelectorAll(".animation__element");

if (animElements.length > 0) {
  window.addEventListener("scroll", animOnScroll);
  function animOnScroll() {
    for (let el = 0; el < animElements.length; el++) {
      const animElem = animElements[el];
      const animElemHeight = animElem.offsetHeight;
      const animElemOffset = offset(animElem).top;
      const animStart = 4;

      let animElemPoint = window.innerHeight - animElemHeight / animStart;
      if (animElemHeight > window.innerHeight) {
        animElemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if (
        pageYOffset > animElemOffset - animElemPoint &&
        pageYOffset < animElemOffset + animElemHeight
      ) {
        animElem.classList.add("active__element");
      } else {
        animElem.classList.remove("active__element");
      }
    }
  }
  function offset(elem) {
    const rect = elem.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }
  animOnScroll();
}

document.querySelector("#menu__toggle").onclick = function change2() {
  let off = document.querySelector("#menu__toggle");
  if (
    document.querySelector(".header__nav").style.visibility == "hidden" &&
    off.checked == true
  ) {
    document.querySelector(".header__nav").style.visibility = "visible";
  } else if (
    document.querySelector(".header__nav").style.visibility == "visible" &&
    off.checked == false
  ) {
    document.querySelector(".header__nav").style.visibility = "hidden";
  } else if (off.checked == true) {
    document.querySelector(".header__nav").style.visibility = "visible";
  }
};

for (item of document.querySelector("header__nav__link")) {
  item.onclick = function () {
    const navigation = document.querySelector("header__nav");
    navigation.style.visibility = "hidden";
    let off = document.querySelector("#menu__toggle");
    off.checked = false;
  };
}
