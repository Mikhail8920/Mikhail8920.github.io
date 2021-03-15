$(".product__item-text").each(function () {
  $(this)
    .children("a")
    .on("click", function () {
      $(this).parent().toggleClass("show");
      $(this).text(
        $(this).parent().hasClass("show") ? "Show Less" : "Lern more"
      );
    });
});

// document.querySelectorAll(".product__item-text").forEach(function (p) {
//   p.querySelector("a").addEventListener("click", function () {
//     p.classList.toggle("show");
//     this.textContent = p.classList.contains("show") ? "Show Less" : "Lern more";
//   });
// });

$(".button__view__all").on("click", function () {
  $(".product__all").toggleClass("show");
  $(".product__all").hasClass("show")
    ? ($(".button__view__all").css({ marginTop: "180px" }), "Less products")
    : ($(".button__view__all").css({ marginTop: "0px" }),
      "View All Our Products");
});

// document.querySelectorAll(".product__all").forEach(function (p) {
//   p.querySelector(".button__view__all").addEventListener("click", function () {
//     p.classList.toggle("show");
//     this.textContent = p.classList.contains("show")
//       ? ((document.querySelector(".button__view__all").style.marginTop =
//           "180px"),
//         "Less products")
//       : ((document.querySelector(".button__view__all").style.marginTop = "0px"),
//         "View All Our Products");
//   });
// });

$("#menu__toggle").click(function () {
  $("#menu__toggle,.navbar-nav").toggleClass("active");
});


