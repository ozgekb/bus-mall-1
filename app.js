'use strict';

var maxClicks = 25;

function Product (name, path, id) {
  this.name = name;
  this.path = path;
  this.votes = 0;
  this.id = id;
  this.displayed = 0;
  productList.push(this);
};

var productList = [];

// fuction makingProdcuts () {
//   for (var i = 0; i < name.length; i++)
//     new Product
// }

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

function randNum() {
  return Math.floor(Math.random() * productList.length);
};

function renderThree () {
  var imgOne = document.getElementById('one');
  // imgOne.innerHTML = ' ';
  // var firstImg = imgOne.children[0];
  // document.createElement('img');
  var randomOne = randNum();

  // var randomOne = Math.floor(Math.random() * productList.length);
  while (lastThree.includes(randomOne)) {
    randomOne = randNum();
    // randomOne = Math.floor(Math.random() * productList.length);
  }
  imgOne.children[0].src = productList[randomOne].path;
  // imgOne.appendChild(firstImg);
  imgOne.children[0].id = productList[randomOne].id;
  // firstImg.id = productList[randomOne].id;
  var imgTwo = document.getElementById('two');
  // imgTwo.innerHTML = ' ';
  // var secondImg = document.createElement('img');
  var randomTwo = randNum();
  // var randomTwo = Math.floor(Math.random() * productList.length);
  while (randomOne === randomTwo || lastThree.includes(randomTwo)) {
    randomTwo = randNum();
    // randomTwo = Math.floor(Math.random() * productList.length);
  }
  imgTwo.children[0].src = productList[randomTwo].path;
  imgTwo.children[0].id = productList[randomTwo].id;
  // imgTwo.appendChild(secondImg);
  var imgThree = document.getElementById('three');
  // imgThree.innerHTML = ' ';
  // var thirdImg = document.createElement('img');
  var randomThree = randNum();
  // var randomThree = Math.floor(Math.random() * productList.length);
  while (randomThree === randomTwo || randomThree === randomOne || lastThree.includes(randomThree)) {
    randomThree = randNum();
    // randomThree = Math.floor(Math.random() * productList.length);
  }
  imgThree.children[0].src = productList[randomThree].path;
  imgThree.children[0].id = productList[randomThree].id;
  // thirdImg.src = productList[randomThree].path;
  // imgThree.appendChild(thirdImg);
  // thirdImg.id = productList[randomThree].id;
  lastThree = [];
  lastThree.push(randomOne, randomTwo, randomThree);
  productList[randomOne].displayed += 1;
  productList[randomTwo].displayed += 1;
  productList[randomThree].displayed += 1;
};
renderThree();

var oneClick = document.getElementById('one');
oneClick.addEventListener('click', vote);

var twoClick = document.getElementById('two');
twoClick.addEventListener('click', vote);

var threeClick = document.getElementById('three');
threeClick.addEventListener('click', vote);

var voteCounter = 0;

function vote(event) {
  for (var i = 0; i < productList.length; i++) {
    if (productList[i].id === event.target.id && voteCounter < maxClicks) {
      productList[i].votes++;
      voteCounter++;
      console.log(voteCounter);
    } else if (voteCounter === maxClicks){
      oneClick.removeEventListener('click', vote);
      twoClick.removeEventListener('click', vote);
      threeClick.removeEventListener('click', vote);
      var result = document.getElementById('result');
      var theList = document.createElement('ul');
      result.appendChild(theList);
      for (var z = 0; z < productList.length; z++) {
        var list = document.createElement('li');
        if (productList[z].displayed > 0) {
          list.innerText = productList[z].votes + ' votes for the ' + productList[z].name + '.';
        } else {
          list.innerText = productList[z].name + ' was not displayed.';
        }
        theList.appendChild(list);
      }
      break;
    }
  }
  renderThree();
};
