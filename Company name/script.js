document.querySelectorAll(".product__item-text").forEach(function (p) {
  p.querySelector("a").addEventListener("click", function () {
    p.classList.toggle("show");
    this.textContent = p.classList.contains("show") ? "Show Less" : "Lern more";
  });
});

document.querySelectorAll(".product__all").forEach(function (p) {
  p.querySelector(".button__view__all").addEventListener("click", function () {
    p.classList.toggle("show");
    this.textContent = p.classList.contains("show")
      ? ((document.querySelector(".button__view__all").style.marginTop =
          "180px"),
        "Less products")
      : ((document.querySelector(".button__view__all").style.marginTop = "0px"),
        "View All Our Products");
  });
});

document.querySelector("#menu__toggle").onclick = function change2() {
  let off = document.querySelector("#menu__toggle");
  if (
    document.querySelector(".navbar-nav").style.visibility == "hidden" &&
    off.checked == true
  ) {
    document.querySelector(".navbar-nav").style.visibility = "visible";
  } else if (
    document.querySelector(".navbar-nav").style.visibility == "visible" &&
    off.checked == false
  ) {
    document.querySelector(".navbar-nav").style.visibility = "hidden";
  } else if (off.checked == true) {
    document.querySelector(".navbar-nav").style.visibility = "visible";
  }
};

for (item of document.querySelector("nav-link")) {
  item.onclick = function () {
    const navigation = document.querySelector("navbar-nav");
    navigation.style.visibility = "hidden";
    let off = document.querySelector("#menu__toggle");
    off.checked = false;
  };
}
