//timer
const finaleDate = new Date("March 15, 2021 00:00:00").getTime();

const timer = () => {
  const now = new Date().getTime();
  let diff = finaleDate - now;
  if (diff < 0) {
    $(".sale__timer").hide();
  }

  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);

  days <= 9 ? (days = ` 0${days}`) : days;
  hours <= 9 ? (hours = ` 0${hours}`) : hours;
  minutes <= 9 ? (minutes = `0${minutes}`) : minutes;
  seconds <= 9 ? (seconds = `0${seconds}`) : seconds;

  $(".days").text(days);
  $(".hours").text(hours);
  $(".minutes").text(minutes);
  $(".seconds").text(seconds);
};
timer();
setInterval(timer, 1000);

//change hexagons
let mainMenArr = [
  "./images/teddy_bear_men/men1.jpg",
  "./images/teddy_bear_men/men2.jpg",
  "./images/teddy_bear_men/men3.jpg",
];

let hexagonMenJacketsArr = [
  'url("./images/teddy_bear_men/men1_1.png")',
  'url("./images/teddy_bear_men/men2_1.png")',
  'url("./images/teddy_bear_men/men3_1.png")',
];

let hexagonMenHoodiesArr = [
  'url("./images/teddy_bear_men/men1_2.png")',
  'url("./images/teddy_bear_men/men2_2.png")',
  'url("./images/teddy_bear_men/men3_2.png")',
];

let hexagonMenShoesArr = [
  'url("./images/teddy_bear_men/men1_3.png")',
  'url("./images/teddy_bear_men/men2_3.png")',
  'url("./images/teddy_bear_men/men3_3.png")',
];

let mainWomanArr = [
  "./images/teady_bear_woman/woman1.jpg",
  "./images/teady_bear_woman/woman2.jpg",
  "./images/teady_bear_woman/woman3.jpg",
];

let hexagonWomanJacetsArr = [
  'url("./images/teady_bear_woman/woman1_1.png")',
  'url("./images/teady_bear_woman/woman2_1.png")',
  'url("./images/teady_bear_woman/woman3_1.png")',
];

let hexagonWomanDenimArr = [
  'url("./images/teady_bear_woman/woman1_2.png")',
  'url("./images/teady_bear_woman/woman2_2.png")',
  'url("./images/teady_bear_woman/woman3_2.png")',
];

let hexagonWomanHeelsArr = [
  'url("./images/teady_bear_woman/woman1_3.png")',
  'url("./images/teady_bear_woman/woman2_3.png")',
  'url("./images/teady_bear_woman/woman3_3.png")',
];

let springSummerWomanHexagon = [
  'url("./images/teady_bear_woman/skull.png")',
  'url("./images/teady_bear_woman/second_layer_hexagon.png")',
];

let mainMen = $(".men__mein-image");
let jacketsMen = $(".men__hexagon-jackets");
let hoodiesMen = $(".men__hexagon-hoodies");
let shoesMen = $(".men__hexagon-shoes");

let mainWoman = $(".woman__mein-image");
let jacketsWoman = $(".woman__hexagon-jackets");
let denimWoman = $(".woman__hexagon-denim");
let heelsWoman = $(".woman__hexagon-heels");
let springSummerWoman = $(".spring-summer__woman-image");

let a = 0;
let b = 0;
let c = 0;
let d = 0;
let e = 0;
let f = 0;
let g = 0;
let h = 0;
let j = 0;

setInterval(function auto() {
  a++;
  if (a === mainMenArr.length) a = 0;
  mainMen.attr("src", mainMenArr[a]);
}, 1000);

setInterval(function auto() {
  b++;
  if (b === hexagonMenJacketsArr.length) b = 0;
  jacketsMen[0].style.backgroundImage = hexagonMenJacketsArr[b];
}, 1000);

setInterval(function auto() {
  c++;
  if (c === hexagonMenHoodiesArr.length) c = 0;
  hoodiesMen[0].style.backgroundImage = hexagonMenHoodiesArr[c];
}, 1000);

setInterval(function auto() {
  d++;
  if (d === hexagonMenShoesArr.length) d = 0;
  shoesMen[0].style.backgroundImage = hexagonMenShoesArr[d];
}, 1000);

setInterval(function auto() {
  e++;
  if (e === mainWomanArr.length) e = 0;
  mainWoman.attr("src", mainWomanArr[e]);
}, 1000);

setInterval(function auto() {
  f++;
  if (f === hexagonWomanJacetsArr.length) f = 0;
  jacketsWoman[0].style.backgroundImage = hexagonWomanJacetsArr[f];
}, 1000);

setInterval(function auto() {
  g++;
  if (g === hexagonWomanDenimArr.length) g = 0;
  denimWoman[0].style.backgroundImage = hexagonWomanDenimArr[g];
}, 1000);

setInterval(function auto() {
  h++;
  if (h === hexagonWomanHeelsArr.length) h = 0;
  heelsWoman[0].style.backgroundImage = hexagonWomanHeelsArr[h];
}, 1000);

setInterval(function auto() {
  j++;
  if (j === springSummerWomanHexagon.length) j = 0;
  springSummerWoman[0].style.backgroundImage = springSummerWomanHexagon[j];
}, 1000);

$("#menu__toggle").click(function (event) {
  $("#menu__toggle,.header__nav-list,.header__select").toggleClass("active");
});
