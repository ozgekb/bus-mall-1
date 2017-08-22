'use strict';

function Product (name, path, id) {
  this.name = name;
  this.path = path;
  this.votes = 0;
  this.id = id;
  this.displayed = 0;
  productList.push(this);
};

var productList = [];
var lastThree = [];

var bag = new Product ('bag', 'img/bag.jpg', 'bag');
var banana = new Product ('banana', 'img/banana.jpg', 'banana');
var bathroom = new Product ('bathroom', 'img/bathroom.jpg', 'bathroom');
var boots = new Product ('boots', 'img/boots.jpg', 'boots');
var breakfast = new Product ('breakfast', 'img/breakfast.jpg', 'breakfast');
var bubblegum = new Product ('bubblegum', 'img/bubblegum.jpg', 'bubblegum');
var chair = new Product ('chair', 'img/chair.jpg', 'chair');
var cthulhu = new Product ('cthulhu', 'img/cthulhu.jpg', 'cthulhu');
var dogDuck = new Product ('dog duck', 'img/dog-duck.jpg', 'dogDuck');
var dragon = new Product ('dragon', 'img/dragon.jpg', 'dragon');
var pen = new Product ('pen', 'img/pen.jpg', 'pen');
var petSweep = new Product ('pet-sweep', 'img/pet-sweep.jpg', 'petSweep');
var scissors = new Product ('scissors', 'img/scissors.jpg', 'scissors');
var shark = new Product ('shark', 'img/shark.jpg', 'shark');
var sweep = new Product ('sweep', 'img/sweep.png', 'sweep');
var tauntaun = new Product ('tauntaun', 'img/tauntaun.jpg', 'tauntaun');
var unicorn = new Product ('unicorn', 'img/unicorn.jpg', 'unicorn');
var usb = new Product ('usb', 'img/usb.gif', 'usb');
var waterCan = new Product ('water-can', 'img/water-can.jpg', 'waterCan');
var wineGlass = new Product ('wine-glass', 'img/wine-glass.jpg', 'wineGlass');

var lastThree = [];

function renderThree () {
  var imgOne = document.getElementById('one');
  var firstImg = document.createElement('img');
  var randomOne = Math.floor(Math.random() * productList.length);
  while (lastThree.includes(randomOne)) {
    randomOne = Math.floor(Math.random() * productList.length);
  }
  firstImg.src = productList[randomOne].path;
  imgOne.appendChild(firstImg);
  firstImg.id = 'oneclick';
  var imgTwo = document.getElementById('two');
  var secondImg = document.createElement('img');
  var randomTwo = Math.floor(Math.random() * productList.length);
  while (randomOne === randomTwo || lastThree.includes(randomTwo)) {
    randomTwo = Math.floor(Math.random() * productList.length);
  }
  secondImg.src = productList[randomTwo].path;
  imgTwo.appendChild(secondImg);
  secondImg.id = 'twoclick';
  var imgThree = document.getElementById('three');
  var thirdImg = document.createElement('img');
  var randomThree = Math.floor(Math.random() * productList.length);
  while (randomThree === randomTwo || randomThree === randomOne || lastThree.includes(randomThree)) {
    randomThree = Math.floor(Math.random() * productList.length);
  }
  thirdImg.src = productList[randomThree].path;
  imgThree.appendChild(thirdImg);
  thirdImg.id = 'threeclick';
  lastThree = [];
  lastThree.push(randomOne, randomTwo, randomThree);
  productList[randomOne].displayed += 1;
  productList[randomTwo].displayed += 1;
  productList[randomThree].displayed += 1;
};
renderThree();

var oneClick = document.getElementById('oneclick');
oneClick.addEventListener('click', vote);

var twoClick = document.getElementById('twoclick');
twoClick.addEventListener('click', vote);

var threeClick = document.getElementById('threeclick');
threeClick.addEventListener('click', vote);

function voteOne(event) {
  event.preventDefault();
  productList()
  renderThree();
}

function vote (event) {
    event.preventDefault();
    console.log(event);
}
