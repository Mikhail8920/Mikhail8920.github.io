window.addEventListener("DOMContentLoaded", () => renderPosts());

let selectedColorValue = 0;

function changeColorValue() {
  let e = document.getElementById("teddy-monogram__select-color");
  selectedColorValue = e.options[e.selectedIndex].value;
  renderPosts();
}

let selectedSizeValue = 0;

function changeSizeValue() {
  let e = document.getElementById("teddy-monogram__select-size");
  selectedSizeValue = e.options[e.selectedIndex].value;
  renderPosts();
}

let selectedSortingType = 0;

function changeSortingType() {
  let e = document.getElementById("teddy-monogram__select-color");
  selectedSortingType = e.options[e.selectedIndex].value;
  renderPosts();
}

const renderPosts = async () => {
  const res = await fetch("http://localhost:3000/product")
    .then(function (response) {
      if (response.status !== 200) {
        return Promise.reject(new Error(response.statusText));
      }
      return Promise.resolve(response);
    })
    .catch(function (error) {
      console.log("error", error);
    });

  const posts = await res.json();

  let productSize = document.getElementsByClassName("catalog__product-size");
  Array.from(document.getElementsByClassName("catalog__product-item")).forEach(
    (item) => (item.style.display = "block")
  );

  Array.from(productSize).forEach((sizeTag, index) => {
    if (selectedSizeValue) {
      sizeTag.textContent = "";
      if (posts[index].size === selectedSizeValue) {
        sizeTag.textContent = posts[index].size;
      }
    } else {
      sizeTag.textContent = posts[index].size;
    }
    if (sizeTag.textContent === "") {
      sizeTag.parentNode.parentNode.style.display = "none";
    }
  });

  let productColor = document.getElementsByClassName("catalog__product-color");
  Array.from(productColor).forEach((colorTag, index) => {
    if (selectedColorValue) {
      colorTag.textContent = "";
      if (posts[index].color === selectedColorValue) {
        colorTag.textContent = posts[index].color;
      }
    } else {
      colorTag.textContent = posts[index].color;
    }
    if (colorTag.textContent === "") {
      colorTag.parentNode.parentNode.style.display = "none";
    }
  });

  let productName = document.getElementsByClassName("catalog__product-name");
  Array.from(productName).forEach(
    (nameTag, index) => (nameTag.textContent = posts[index].productName)
  );

  let productImage = document.getElementsByClassName("catalog__product-image");

  Array.from(productImage).forEach(
    (imageTag, index) => (imageTag.src = posts[index].image)
  );

  if (selectedSortingType !== 0) {
    posts.sort((a, b) => {
      if (a.price > b.price) {
        return 1;
      }
      if (a.price < b.price) {
        return -1;
      }
      return 0;
    });
  }

  let productPrice = document.getElementsByClassName("catalog__product-price");
  Array.from(productPrice).forEach((priceTag, index) => {
    priceTag.textContent = `руб ${posts[index].price},00`;
  });
};

//hamburger menu
document.querySelector("#menu__toggle").onclick = function change2() {
  let off = document.querySelector("#menu__toggle");
  if (
    document.querySelector(".header__nav-list").style.visibility == "hidden" &&
    document.querySelector(".header__select").style.visibility == "hidden" &&
    off.checked == true
  ) {
    document.querySelector(".header__nav-list").style.visibility = "visible";
    document.querySelector(".header__select").style.visibility = "visible";
  } else if (
    document.querySelector(".header__nav-list").style.visibility == "visible" &&
    document.querySelector(".header__select").style.visibility == "visible" &&
    off.checked == false
  ) {
    document.querySelector(".header__nav-list").style.visibility = "hidden";
    document.querySelector(".header__select").style.visibility = "hidden";
  } else if (off.checked == true) {
    document.querySelector(".header__nav-list").style.visibility = "visible";
    document.querySelector(".header__select").style.visibility = "visible";
  }
};

for (item of document.querySelector("header__nav-link")) {
  item.onclick = function () {
    const navigation = document.querySelector("header__nav-list");
    const navigation2 = document.querySelector("header__select");
    navigation.style.visibility = "hidden";
    navigation2.style.visibility = "hidden";
    let off = document.querySelector("#menu__toggle");
    off.checked = false;
  };
}
