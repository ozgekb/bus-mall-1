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

var countDown = 25;
var lastThree = [];

function randNum() {
  return Math.floor(Math.random() * productList.length);
};

function renderThree () {
  var votesLeft = document.getElementById('count-down');
  votesLeft.innerText = 'You have ' + countDown + ' choices left.';
  var imgOne = document.getElementById('one');
  var randomOne = randNum();

  while (lastThree.includes(randomOne)) {
    randomOne = randNum();
  }
  imgOne.children[0].src = productList[randomOne].path;
  imgOne.children[0].id = productList[randomOne].id;
  var imgTwo = document.getElementById('two');
  var randomTwo = randNum();
  while (randomOne === randomTwo || lastThree.includes(randomTwo)) {
    randomTwo = randNum();
  }
  imgTwo.children[0].src = productList[randomTwo].path;
  imgTwo.children[0].id = productList[randomTwo].id;
  var imgThree = document.getElementById('three');
  var randomThree = randNum();
  while (randomThree === randomTwo || randomThree === randomOne || lastThree.includes(randomThree)) {
    randomThree = randNum();
  }
  imgThree.children[0].src = productList[randomThree].path;
  imgThree.children[0].id = productList[randomThree].id;
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
    } else if (voteCounter === maxClicks){
      oneClick.removeEventListener('click', vote);
      twoClick.removeEventListener('click', vote);
      threeClick.removeEventListener('click', vote);
      // var result = document.getElementById('result');
      // var theList = document.createElement('ul');
      // result.appendChild(theList);
      // for (var z = 0; z < productList.length; z++) {
      //   var list = document.createElement('li');
      //   if (productList[z].displayed > 0) {
      //     list.innerText = productList[z].votes + ' votes for the ' + productList[z].name + '.';
      //   } else {
      //     list.innerText = productList[z].name + ' was not displayed.';
      //   }
      //   theList.appendChild(list);
      // }
      data();
      break;
    }
  }
  countDown--;
  // counter();
  renderThree();
};

var nameArr = [];
var votesArr = [];
var displayArr = [];

function data() {
  for (var i = 0; i < productList.length; i++){
    nameArr.push(productList[i].name);
    votesArr.push(productList[i].votes);
    displayArr.push(productList[i].displayed);
  }
  var barChart = new Chart(ctx, chartStuff);
};

// var votesArr = [];
// function votes() {
//   for (var i = 0; i <)
// }
// bar graph

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var chartStuff = {
  type: 'bar',
  data: {
    labels: nameArr,
    datasets: [{
      label: '# of votes',
      data: votesArr,
      backgroundColor: '#f8f8f8',
      borderWidth: 0
    },{
      label: '# times displayed',
      data: displayArr,
      backgroundColor: '#ccccff',
      borderWidth: 0
    }]
  },
  options: {
    legend: {
      display: true,
      text: 'Results',
      labels: {
        fontColor: '#f8f8f8',
        fontSize: 14,
      }
    }
  }
};
