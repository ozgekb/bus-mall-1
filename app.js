'use strict';

function Product (name, path) {
  this.name = name;
  this.path = path;
  this.votes = 0;
  this.displayed = 0;
  productList.push(this);
};

var productList = [];
var lastThree = [];

var bag = new Product ('bag', 'img/bag.jpg');
var banana = new Product ('banana', 'img/banana.jpg');
var bathroom = new Product ('bathroom', 'img/bathroom.jpg');
var boots = new Product ('boots', 'img/boots.jpg');
var breakfast = new Product ('breakfast', 'img/breakfast.jpg');
var bubblegum = new Product ('bubblegum', 'img/bubblegum.jpg');
var chair = new Product ('chair', 'img/chair.jpg');
var cthulhu = new Product ('cthulhu', 'img/cthulhu.jpg');
var dogDuck = new Product ('dog duck', 'img/dog-duck.jpg');
var dragon = new Product ('dragon', 'img/dragon.jpg');
var pen = new Product ('pen', 'img/pen.jpg');
var petSweep = new Product ('pet-sweep', 'img/pet-sweep.jpg');
var scissors = new Product ('scissors', 'img/scissors.jpg');
var shark = new Product ('shark', 'img/shark.jpg');
var sweep = new Product ('sweep', 'img/sweep.png');
var tauntaun = new Product ('tauntaun', 'img/tauntaun.jpg');
var unicorn = new Product ('unicorn', 'img/unicorn.jpg');
var usb = new Product ('usb', 'img/usb.gif');
var waterCan = new Product ('water-can', 'img/water-can.jpg');
var wineGlass = new Product ('wine-glass', 'img/wine-glass.jpg');

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
  firstImg.className = 'click';
  var imgTwo = document.getElementById('two');
  var secondImg = document.createElement('img');
  var randomTwo = Math.floor(Math.random() * productList.length);
  while (randomOne === randomTwo || lastThree.includes(randomTwo)) {
    randomTwo = Math.floor(Math.random() * productList.length);
  }
  secondImg.src = productList[randomTwo].path;
  imgTwo.appendChild(secondImg);
  secondImg.className = 'click';
  var imgThree = document.getElementById('three');
  var thirdImg = document.createElement('img');
  var randomThree = Math.floor(Math.random() * productList.length);
  while (randomThree === randomTwo || randomThree === randomOne || lastThree.includes(randomThree)) {
    randomThree = Math.floor(Math.random() * productList.length);
  }
  thirdImg.src = productList[randomThree].path;
  imgThree.appendChild(thirdImg);
  thirdImg.className = 'click';
  lastThree = [];
  lastThree.push(randomOne, randomTwo, randomThree);
  productList[randomOne].displayed += 1;
  productList[randomTwo].displayed += 1;
  productList[randomThree].displayed += 1;
};
renderThree();

// var picClick = document.getElementsByClassName('click');
// picClick.addEventListener('click', rockTheVote);
//
// function rockTheVote(event) {
//   event.preventDefault();
//
//   renderThree();
// }
