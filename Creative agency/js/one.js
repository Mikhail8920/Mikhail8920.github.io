const animElements = $(".animation__element");

if (animElements.length > 0) {
  window.addEventListener("scroll", animOnScroll);
  function animOnScroll() {
    animElements.each(function () {
      const animElemHeight = $(this).outerHeight();
      const animElemOffset = offset($(this)).top;
      const animStart = 4;

      let animElemPoint = window.innerHeight - animElemHeight / animStart;
      if (animElemHeight > window.innerHeight) {
        animElemPoint = window.innerHeight - window.innerHeight / animStart;
      }
      if (
        pageYOffset > animElemOffset - animElemPoint &&
        pageYOffset < animElemOffset + animElemHeight
      ) {
        $(this).addClass("active__element");
      } else {
        $(this).removeClass("active__element");
      }
    });
  }
  function offset(elem) {
    const rect = elem[0].getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }
  animOnScroll();
}

$("#menu__toggle").click(function (event) {
  $("#menu__toggle,.header__nav").toggleClass("active");
});
