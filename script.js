/* CODE STORAGE */

/*
// 1)
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
let sum = 0;
for(let i = 0; i<arr.length; i++){
    sum += arr[i]
}

// 2)
const footballClubs = [
    {
        name: "Manutd",
        playInFirstLeague: true, 
        wonLeague: [1919, 1922, 1933, 1948, 1992, 2020]
    },
    { 
        name: "Arsenal", 
        playInFirstLeague: true, 
        wonLeague: [1919, 1922, 1948, 1992, 2020]
    },
    { 
        name: "Everton", 
        playInFirstLeague: false, 
        wonLeague: []
    },
    {
        name: 'idk1',
        playInFirstLeague: false,
        wonLeague:[],
    },
    {
        name: 'BiH',
        playInFirstLeague: true,
        wonLeague:[2000]
    }
]

// 3)
const wonLeagueAtLeastOnce = []

for(let i = 0; i<footballClubs.length; i++){
    if(footballClubs[i].wonLeague.length>0){
        wonLeagueAtLeastOnce.push(footballClubs[i])
    }
}

// 4)
/*const playInFirstLeauge = []

for(let i = 0; i<footballClubs.length; i++){
    if(footballClubs[i].playInFirstLeague){
        playInFirstLeauge.push(footballClubs[i])
    }
}

// 5)
let wonBefore = 2022 - footballClubs[0].wonLeague[footballClubs[0].wonLeague.length-1]
console.log(wonBefore)

// 6)
for(let i = 0; i<footballClubs.length; i++){
    if(footballClubs[i].wonLeague.length > 1){
        console.log(footballClubs[i].name)
    }
}*/


/*
const btn = document.querySelector('#btn');
const div = document.querySelector('.container');



addEventListener('click', counter)

const colors = ['#e6194b', '#3cb44b', '#ffe119', '#4363d8', '#f58231', '#911eb4', '#46f0f0', '#f032e6', '#bcf60c', '#fabebe', '#008080', '#e6beff', '#9a6324', '#fffac8', '#800000', '#aaffc3', '#808000', '#ffd8b1', '#000075', '#808080', '#ffffff', '#000000']
let sec = 0;
div.innerHTML = sec
div.style.color = colors[0]

function counter() {
    btn.style.display = 'none'
    let i = 1; 
    const myInterval2 = setInterval(() => {
        i++
        sec++
        div.innerHTML= sec
        if(i<colors.length){
            div.style.color = colors[i]
        }
        if(sec > 20){
            div.style.color = colors[0]
            window.clearInterval(myInterval2)
            sec = 0
            div.innerHTML = 0
            btn.style.display = 'flex'
            div.style.color = colors[0]
        }
    }, 1000);
}


*/


/*
let array =[];
for(let i = 0; i<products.length; i++){
    if(products[i].onStock){
        array.push(products[i])
    }
}
*/





//table


/*
const products = [
    {name: 'milk', price:'22', onStock:true},
    {name: 'apple', price:'12', onStock:false},
    {name: 'coffe', price:'5', onStock:true},
    {name: 'chocolate', price:'5', onStock:false},
    {name: 'oil', price:'18', onStock:true}
]



const div = document.querySelector('.container')
const table = document.createElement('table');

const head = document.createElement('tr');
const product = document.createElement('th');
const price = document.createElement('th');
const onStock = document.createElement('th');
product.innerHTML='Product'
price.innerHTML='Price'
onStock.innerHTML='On Stock'
head.appendChild(product)
head.appendChild(price)
head.appendChild(onStock)
table.appendChild(head)


products.forEach((product)=>{
    const row = document.createElement('tr');
    const coll=document.createElement('td');
    const coll2 = document.createElement('td');
    const coll3 = document.createElement('td');
    coll.innerHTML= product.name
    coll2.innerHTML= product.price
    coll3.innerHTML= product.onStock
    row.appendChild(coll)
    row.appendChild(coll2)
    row.appendChild(coll3)
    table.appendChild(row)
})
div.appendChild(table)






//2) return the square of array of numbers




const numbers = [1, 2, 4, 5, 10]

const square = numbers.map((number)=>{
    return Math.pow(number, 2)
})

console.log('2) return the square of array of numbers  ' + square)



//3) return name initial

const string = 'George Raymond Richard Martin'

const initials = string.split(' ').map((string)=>{
    return string[0]
}).join('')

console.log('3) return name initial  ' + initials)






//4) return the youngest, oldest and the age difference




const people = [
{
    name: 'John',
    age: 13
},
{
    name: 'Mark',
    age: 56,
},
{
    name: 'Rachel',
    age: 45,
},
{
    name: 'Nate',
    age: 67,
},
{
    name: 'Jeniffer',
    age: 65,
}
];

const age = people.map((person)=>{
    return person.age
})

const result = [Math.min(...age), Math.max(...age), Math.max(...age) - Math.min(...age)]

console.log('4) return the youngest, oldest and the age difference   '+ result)



*/
/*const artists = ['Drake',
    'Olivia Rodrigo',
    'the Weeknd',
    'Justin Bieber',
    'Doja Cat',
    'Ariana Grande',
    'DaBaby',
    'Lil Baby',
    'Lil Nas X',
    'Dua Lipa',
    'BTS',
    'Lil Durk',
    'SZA',
    'GIVEON',
    'Young Thug',
    'the Kid LAROI',
    'Bruno Mars/Anderson.Paak (Silk Sonic) (tie)',
    'Ed Sheeran',
    'Megan Thee Stallion',
    'Pop Smoke',
    'Billie Eilish',
    '24kGoldn/iann dior (tie)',
    'Cardi B',
    'J. Cole',
    'Daniel Caesar',
    'Polo G',
    'Jack Harlow',
    'Kanye West',
    'Chris Brown',
    'Taylor Swift'
]



const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const artist = document.querySelector('.artist');


prev.addEventListener('click', prevSong);
next.addEventListener('click', nextSong);

let currentIndex = 0;
artist.innerHTML = artists[currentIndex];
if(currentIndex === 0){
    prev.classList.add('disabled')
}
else{
    prev.classList.remove('disabled')
}
function prevSong(){
    if(currentIndex === 0){
        prev.classList.add('disabled')
    }
    else if(currentIndex  > 0){
        prev.classList.remove('disabled')
        artist.classList.add('slider')
        setTimeout(()=>{
            artist.classList.remove('slider')
        }, 2500)
        artist.innerHTML = artists[currentIndex];
        currentIndex--;
    }
}

function nextSong(){
    if(currentIndex === artists.length - 2){
        next.classList.add('disabled')
    }
    artist.classList.add('slider')
    setTimeout(()=>{
        artist.classList.remove('slider')
    }, 2500)
    currentIndex++;
    artist.innerHTML = artists[currentIndex];
}
*/

/*const arr = ['damir', 'sandi', 'ivan', 'mak', 'nidal']

function upperCase(array){
    let newArray = [];
    for(let i = 0; i<array.length; i++){
        newArray.push(array[i].charAt(0).toUpperCase() + array[i].slice(1))
    }
    return newArray
}

console.log(upperCase(arr))*/



/*function isValueSame(num1, num2){
    let newValue
    let num
    if(num1 === num2){
        num = num1+num2
    }
    return num * 3
}

console.log(isValueSame(10, 10))*/



/*function py(string){
    if(string.startsWith('Py')){
        return string
    }
    else{
        return 'Py'+string
    }
}

console.log(py('ohdH'))*/

/*
function start(string){
    return string.charAt(0) + string + string.charAt(0)
}*/


/*function getDate(){
    const date = new Date();
    const day = date.getDay();
    const days = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
    console.log("Today is : " + days[day] + ".");
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    console.log('Current time is: ' + hour + ' : ' + minute + ' : ' + second)
}
*/



/*
const btn1 = document.querySelector('#button1')
const div1 = document.querySelector('.div1')
const btn2 = document.querySelector('#button2')
const div2 = document.querySelector('.div2')
const btn3 = document.querySelector('#button3')
const div3 = document.querySelector('.div3')

const randomColor = () =>  {
    return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
}
const randomFontSize = () => {
    return Math.floor(Math.random()*40) + 'px'
}

btn1.addEventListener('click', ()=>{changeColor(div1)})
btn2.addEventListener('click', ()=>{changeColor(div2)})
btn3.addEventListener('click', ()=>{changeColor(div3)})

function changeColor(div){
    const color = randomColor()
    div.style.backgroundColor = color;
    div.style.fontSize = randomFontSize();
    if(color === '#000000'){
        div.style.color = 'white'
    }
}
*/
/*
/*function arrayplusone(array) {
  const newArray = [];
  for(let i = 0; i<array.length; i++){
    newArray.push(array[i] + 1);
  }
  return newArray;
}

console.log(arrayplusone([2, 4, 7,]))*/




/*function sumtrue(x, y){
  if(x + y <= 10){
    return true;
  }
  else{
    return false;
  }
}

console.log(sumtrue(1, 11))*/


/*function returnlength(string){
  return string.length;
}*/



/*function parameter(text){
  if(text === undefined){
    return false;
  }
  if(typeof(text) !== "string"){
    return false;
  }
  if(text.length<=4){
    return false;
  }
  return true
}

console.log(parameter("ja sam emel"))*/


/*function smthn(array){
  const newArray = [];
  if(array === undefined){
    return false;
  }
  if(array.length<3){
    return false;
  }
  for(let i = 0; i<array.length; i++){
    newArray.push(array[i].toUpperCase())
  }
  return newArray
}

console.log(smthn([]))*/





/*function prosjekOcjena(array){
  let sum = 0
  for(let i = 0; i<array.length; i++){
    sum += array[i]
  }
  let prosjek = sum / array.length
  return prosjek;
}

const matematika = [1, 2, 3, 4, 5, ];
const bosanski = [3, 4, 5, 4, 5, 5,];
const engleski = [5, 4, 5, 3,];

function suma(array1, array2, array3){
  let prosjek = 0;
  let prosjek1 = prosjekOcjena(array1);
  let prosjek2 = prosjekOcjena(array2);
  let prosjek3 = prosjekOcjena(array3);

  const Prosjeksum = prosjek1+prosjek2+prosjek3;
  return Math.round(Prosjeksum/3)
}





function changeImageSource(){
  const randomNumber = Math.floor(Math.random()*4)+1;
  const img = document.getElementById("img1");
  img.src = "/img/img"+randomNumber+".jpg"
}*/

/*console.log("for calculating the pythagorean theroem in centimeters type pitagorinaTeoremaCM");
console.log("for calculating the pythagorean theroem in meters type pitagorinaTeoremaM");
console.log("for calculating the pythagorean theroem in milimeters type pitagorinaTeoremaMM");
function pitagorinaTeoremCM(x, y){
  return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2))+" "+"cm2";
}

function pitagorinaTeoremM(x, y){
  return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2))+" "+"m2";
}

function pitagorinaTeoremMM(x, y){
  return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2))+" "+"mm2";
}*/




/*const mat = [5, 5, 4, 2, 5];
const fiz = [4, 4, 5, 4];
const hem = [5, 5, 3, 2, 5, 4]
const eng = [5, 5, 5, 5, 4, 5, 4, 4]
  function prosjekPredmeta(predmet){
      let sum = 0;
      for(let i = 0; i<predmet.length; i++){
          sum += predmet[i];
      }
      const prosjek = sum / predmet.length;
      return prosjek;
  }
  function fullProsjek(predmet1, predmet2, predmet3, predmet4){
      const predmetprosjek1 = prosjekPredmeta(predmet1);
      const predmetprosjek2 = prosjekPredmeta(predmet2);
      const predmetprosjek3 = prosjekPredmeta(predmet3);
      const predmetprosjek4 = prosjekPredmeta(predmet4);
    const zbirProsjeka = predmetprosjek1+predmetprosjek2+predmetprosjek3+predmetprosjek4;
    return zbirProsjeka / 4;
  }*/

/*const obj = {
  ime: "Emel",
  prezime: "Kesten",
  razred: "VIII-2",
  daLiUci: () => {
    console.log(false);
  }
}*/





/*const days = ["monday", "tuesday", "wensday", "thursday", "friday", "saturday", "sunday"];


function printDays(days){
  const randomNumber = Math.floor(Math.random()*days.length)
  console.log(days[randomNumber])
  if(days[randomNumber]===days[5] || days[randomNumber]===days[6]){
    console.log("ok")
  }
}

printDays(days)*/


/*function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

// Used like so
var arr = [2, 11, 37, 42];
shuffle(arr);
console.log(arr);*/
/*const timer = document.getElementById('hi');

let hr = 0;
let min = 0;
let sec = 0;
let stoptime = true;

function startTimer() {
  if (stoptime == true) {
        stoptime = false;
        timerCycle();
    }
}
function stopTimer() {
  if (stoptime == false) {
    stoptime = true;
  }
}

function timerCycle() {
    if (stoptime == false) {
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);

    sec = sec + 1;

    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }
    if (min == 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
    }

    if (sec < 10 || sec == 0) {
      sec = '0' + sec;
    }
    if (min < 10 || min == 0) {
      min = '0' + min;
    }
    if (hr < 10 || hr == 0) {
      hr = '0' + hr;
    }

    timer.innerHTML = hr + ':' + min + ':' + sec;

    setTimeout("timerCycle()", 1000);
  }
}

function resetTimer() {
    timer.innerHTML = '00:00:00';
    stoptime = true;
    hr = 0;
    sec = 0;
    min = 0;
}*/




//FACTORY FUNCTION
/*
function pieMaker(weight, color){
  return{
    weight,
    color,
    print(){
      console.log('pie')
    }
  }
}



const pie = pieMaker('2kg', 'blue')

console.log(pie)





//constructor function


function PieMaker(weight, color){
  this.weight = weight;
  this.color = color
  this.print = function(){
    console.log('pie')
  }
}

const pie2 = new PieMaker('2kg', 'blue')
console.log(pie2)*/

/*

const btn = document.querySelector('.btn');
const p = document.querySelector('.errorSpot');



const pc = {
  brand: 'Apple',
  model: 'Macbook Pro',
  get fullNameAndModel(){
    return `${pc.brand} ${pc.model}`
  },
  set fullNameAndModel(value){
    if(!value){
      throw new Error('value is required')
    }
    if(value.length < 2){
      throw new Error('must have name and model')
    }
    const parts = value.split(' ')
    this.brand = parts[0]
    this.model = parts[1]
  }
}
btn.addEventListener('click', tryString)

function tryString(){
  try{
    pc.fullNameAndModel = 'AppleMacBookPro'
  }
  catch(e){
    p.innerHTML = e
  }
}



*/



//const laptop = pc.fullNameAndModel

//console.log(laptop)


/*
function sumNumbers(...numbers){
  let sum = 0;
  for(let i = 0; i<numbers.length; i++){
    sum += numbers[i];
  }
  return sum;
}

console.log(sumNumbers(1,2,3,4,5,6,7,8,9,10))	
*/



/*const video = {
  title: 'Play One',
  tags: ['action', 'adventure', 'comedy'],
  playVideo: function(){
    this.tags.forEach((tag)=>{
      console.log(this.title, tag)
    })
  }
}

video.playVideo()
*/






/*
const div = document.querySelector('.div');
let input = document.getElementById("myInput");
const toDoList = [];

let index = localStorage.getItem('index') || 0;




if(localStorage.getItem('toDoList')){
  const localToDo = JSON.parse(localStorage.getItem('toDoList'));
  toDoList.push(...localToDo);
  toDoList.forEach((item)=>{
    const miniDiv = document.createElement('div');
    miniDiv.className = 'miniDiv';
    const p = document.createElement('p');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('checkbox');
    checkbox.value = item.index
    p.innerHTML = item.text;
    if(item.done){
      miniDiv.classList.add('done');
      checkbox.checked = true;
    }
    miniDiv.appendChild(checkbox)
    miniDiv.appendChild(p);
    div.appendChild(miniDiv);
})
}






function createToDo(input){
  toDoList.push({
    text: input.value,
    done: false,
    index: index
  });
  localStorage.setItem('toDoList', JSON.stringify(toDoList));
  div.innerHTML = "";
  index++;
  localStorage.setItem('index', index);
  toDoList.forEach((item)=>{
    const miniDiv = document.createElement('div');
    miniDiv.className = 'miniDiv';
    const p = document.createElement('p');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('checkbox');
    checkbox.value = item.index
    p.innerHTML = item.text;
    miniDiv.appendChild(checkbox)
    miniDiv.appendChild(p);
    div.appendChild(miniDiv);

})
}



input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    if(input.value){
      createToDo(input);
      input.value = "";
    }

  }
})


const checkbox = document.querySelectorAll(".checkbox");

checkbox.forEach((item)=>{
  item.addEventListener('click', (e)=>{
    isChecked(e);
})
})

function isChecked(e){
  const index = e.target.value;
  const item = toDoList.find((item)=>{
    return item.index == index
  })
  item.done = !item.done;
  localStorage.setItem('toDoList', JSON.stringify(toDoList));
  if(item.done){
    e.target.parentElement.classList.add('done');
  }
  else{
    e.target.parentElement.classList.remove('done');
  }
}
console.log(checkbox)
*/

/*let posts = [
    {title: 'Post One', body: 'This is post one', author:'Mike'},
    {title: 'Post Two', body: 'This is post two', author:'Mike'}
];


function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach(post => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 2000);
}


function createPost(post){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = false;
            if(!error){
                resolve();
            }
            else{
                reject('Error: Something went wrong');
            }
        }, 2000);
    });
}
*/


/*
const baseUrl = 'https://zoo-animal-api.herokuapp.com/animals/rand/10';
const div = document.querySelector('.div');
const container = document.querySelector('.container');

function getAnimals() {
    fetch(baseUrl).then(response => response.json()).then(data => {
            console.log(data);
            let output = '';
            data.forEach(animal => {
                const minidiv = document.createElement('div');
                minidiv.classList.add('animal');
                minidiv.innerHTML = `<p>${animal.name}</p> <p>Type: ${animal.animal_type}</p> <p>Habitat: ${animal.habitat}</p> <p>Place: ${animal.geo_range}</p> <p>Lifespan: ${animal.lifespan} years</p> <br><img class="image" src="${animal.image_link}">`;
                div.appendChild(minidiv);
            });
            if(data){
                container.classList.add('noshow');
            }
        })
        .catch(err => console.log(err));
}



function timeoutFunction() {
    setTimeout(function(){
        getAnimals();
    }, 2000);
}

timeoutFunction()
*/

/*
async function getWeather(city) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
  const data = await response.json();
  weather.temperature.value = Math.floor(data.main.temp - 273.15);
  weather.description = data.weather[0].description;
  weather.iconId = data.weather[0].icon;
  weather.city = data.name;
  weather.country = data.sys.country;
  displayWeather()
}
 */
/*class Cube {
    constructor (_width, _height, _depth) {
        this.width = _width;
        this.height = _height;
        this.depth = _depth;
    }
    getVolume () {
        return this.width * this.height * this.depth;
    }
}
const cube = new Cube(10, 20, 30);
console.log(cube, 'cube');
console.log(cube.getVolume(), 'cube volume');

class Square {
    constructor (_side) {
        this.side = _side;
    }
    get area () {
        return this.side * this.side;
    }
    set area (area) {
        this.side = Math.sqrt(area);
    }
}

const square = new Square(100);
console.log(square, 'square');
console.log(square.area, 'square area');
square.area = 10000;
console.log(square.side, 'square side');

const squareFromArea = new Square();
squareFromArea.area = 10000;

console.log(squareFromArea, 'squareFromArea');
*/
/*
// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log('Hello, world!');


// Challenge 1
function addTwo(num) {
    return num + 2
}

// To check if you've completed it, uncomment these console.logs!
console.log(addTwo(3));
console.log(addTwo(10));


// Challenge 2
function addS(word) {
    return word + 's'
}

// uncomment these to check your work
console.log(addS('pizza'));
console.log(addS('bagel'));


// Challenge 3
function multiply(num){
    return num * 2
}

function map(array, callback) {
    const arr = [];
    array.forEach(num => {
        arr.push(callback(num));
    }
      )
    return arr;
}

console.log(map([1, 2, 3], multiply));


// Challenge 4
function forEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
      callback(array[i]);
  }
}

// see for yourself if your forEach works!
forEach([1,2,3,4], function(element){
  console.log(element)
})

// Challenge 5
/*function mapWith(array, callback) {

}*/

/*
// Challenge 6
function sumNum(a, b){
  return a + b
}

function reduce(array, callback, initialValue) {
  let iniit = initialValue;
  for(let i = 0; i < array.length; i++) {
      iniit = callback(iniit, array[i]);
  }
  return iniit
}
console.log(reduce([1,2,3,4], sumNum, 0))


// Challenge 7
function intersection(arrays) {
return arrays.reduce((arr, arr2) => {
  return arr.filter(item => arr2.includes(item));
} , arrays[0]);    
}

console.log(intersection([[5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]]));
// should log: [5, 15]


// Challenge 8
function union(arrays) {
const arr = [];
arrays.forEach(array => {
  array.forEach(item => {
    if(!arr.includes(item)) {
      arr.push(item);
    }
  })
})
return arr;
}

console.log(union([[5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]]));
// should log: [5, 10, 15, 88, 1, 7, 100]


// Challenge 9
function objOfMatches(array1, array2, callback) {
const obj = {};
array1.forEach((item, index) => {
  if(item.toLowerCase()== array2[index].toLowerCase()) {
    obj[item] = callback(array2[index]);
  }
}
)
return obj;
}

console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }


// Challenge 10
function multiMap(arrVals, arrCallbacks) {
const obj = {};
arrVals.forEach((val, index) => {
  obj[val] = arrCallbacks.map(callback => { return callback(val); }) 
}
)
return obj;
}

console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }


// Challenge 11
function objectFilter(obj, callback) {

}

// const cities = {
// London: 'LONDON',
// LA: 'Los Angeles',
// Paris: 'PARIS',
// };
// console.log(objectFilter(cities, city => city.toUpperCase())) // Should log { London: 'LONDON', Paris: 'PARIS'}


// Challenge 12
function majority(array, callback) {
let trues = 0;
let falses = 0;
array.forEach(item => {
  if(callback(item)) {
    trues++;
  } else {
    falses++;
  }
}
)
if(trues > falses) {
  return true;
}
else if (falses = trues) {
  return false;
}
else{
  return false
}

}
*/
// /*** Uncomment these to check your work! ***/
/*
const isOdd = function(num) { return num % 2 === 1; };
console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
console.log(majority([2, 3, 4, 5], isOdd)); // should log: false


// Challenge 13
function prioritize(array, callback) {//return a new array where first come the elements that return true for the callback function
const trueArr = [];
const falseArr = [];
const newArr = [];
array.forEach(item => {
  if(callback(item)) {
    trueArr.push(item);
  } else {
    falseArr.push(item);
  }
})
trueArr.forEach(item => {
  newArr.push(item);
})
falseArr.forEach(item => {
  newArr.push(item);
})
return newArr;
}
*/
// /*** Uncomment these to check your work! ***/
//const startsWithS = function(str) { return str[0] === 's' || str[0] === 'S'; };
//console.log(prioritize(['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends'], startsWithS)); // should log:['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']
/*

// Challenge 14
function countBy(array, callback) {
const obj = {};
array.forEach(item => {
  if(obj[callback(item)]) {
    obj[callback(item)]++;
  } else {
    obj[callback(item)] = 1;
  }
}
)
return obj;
}
*/
/** Uncomment these to check your work! **/
/*console.log(countBy([1, 2, 3, 4, 5], function(num) {
if (num % 2 === 0) return 'even';
else return 'odd';
})); // should log: { odd: 3, even: 2 }


// Challenge 15
function groupBy(array, callback) {
const obj = {};
array.forEach(item => {
  if(obj[callback(item)]) {
    obj[callback(item)].push(item);
  } else {
    obj[callback(item)] = [item];
  }
}
)
return obj;
}
*/
// /*** Uncomment these to check your work! ***/
/*const decimals = [1.3, 2.1, 2.4];
const floored = function(num) { return Math.floor(num); };
console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }


// Challenge 16
function goodKeys(obj, callback) {
}

// /*** Uncomment these to check your work! ***/
//const sunny = { mac: 'priest', dennis: 'calculating', charlie: 'birdlaw', dee: 'bird', frank: 'warthog' };
//const startsWithBird = function(str) { return str.slice(0, 4).toLowerCase() === 'bird'; };
//console.log(goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']

/*
// Challenge 17
function commutative(func1, func2, value) {
return func1(func2(value)) === func2(func1(value));
}
*/
// /*** Uncomment these to check your work! ***/
/*const multBy3 = n => n * 3;
const divBy4 = n => n / 4;
const subtract5 = n => n - 5;
console.log(commutative(multBy3, divBy4, 11)); // should log: true
console.log(commutative(multBy3, subtract5, 10)); // should log: false
console.log(commutative(divBy4, subtract5, 48)); // should log: false


// Challenge 18
function objFilter(obj, callback) {
const newObj = {};
for(let item in obj) {
  if(callback(obj[item])) {
    newObj[item] = obj[item];
  }
}
return newObj;
}
*/
// /*** Uncomment these to check your work! ***/
/*const startingObj = {};
startingObj[6] = 3;
startingObj[2] = 1;
startingObj[12] = 4;
const half = n => n / 2;
console.log(objFilter(startingObj, half)); // should log: { 2: 1, 6: 3 }


// Challenge 19
function rating(arrOfFuncs, value) {

}

// /*** Uncomment these to check your work! ***/
// const isEven = n => n % 2 === 0;
// const greaterThanFour = n => n > 4;
// const isSquare = n => Math.sqrt(n) % 1 === 0;
// const hasSix = n => n.toString().includes('6');
// const checks = [isEven, greaterThanFour, isSquare, hasSix];
// console.log(rating(checks, 64)); // should log: 100
// console.log(rating(checks, 66)); // should log: 75

/*
// Challenge 20
function pipe(arrOfFuncs, value) {
let result = value;
arrOfFuncs.forEach(func => {
  result = func(result);
}
)
return result;
}
*/
// /*** Uncomment these to check your work! ***/
/*const capitalize = str => str.toUpperCase();
const addLowerCase = str => str + str.toLowerCase();
const repeat = str => str + str;
const capAddlowRepeat = [capitalize, addLowerCase, repeat];
console.log(pipe(capAddlowRepeat, 'cat')); // should log: 'CATcatCATcat'


// Challenge 21
function highestFunc(objOfFuncs, subject) {
let highest = 0;
for(let item in objOfFuncs) {
  if(objOfFuncs[item](subject) > highest) {
    highest = objOfFuncs[item];
  }
}
return highest;
}
*/

// /*** Uncomment these to check your work! ***/
/*const groupOfFuncs = {};
groupOfFuncs.double = n => n * 2;
groupOfFuncs.addTen = n => n + 10;
groupOfFuncs.inverse = n => n * -1;
console.log('Challenge 21 !! Nije skroz ispravan !!');
console.log(highestFunc(groupOfFuncs, 5)); // should log: 'addTen'
console.log(highestFunc(groupOfFuncs, 11)); // should log: 'double'
console.log(highestFunc(groupOfFuncs, -20)); // should log: 'inverse'


// Challenge 22
function combineOperations(startVal, arrOfFuncs) {
let result = startVal;
arrOfFuncs.forEach(func => {
  result = func(result);
}
)
return result;
}

function add100(num) {
return num + 100;
}

function divByFive(num) {
return num / 5;
}

function multiplyByThree(num) {
return num * 3;
}

function multiplyFive(num) {
return num * 5;
}

function addTen(num) {
return num + 10;
}
*/
// /*** Uncomment these to check your work! ***/
/*console.log(combineOperations(0, [add100, divByFive, multiplyByThree])); // Should output 60 -->
console.log(combineOperations(0, [divByFive, multiplyFive, addTen])); // Should output 10


// Challenge 23
function myFunc(array, callback) {

}

//const numbers = [2, 3, 6, 64, 10, 8, 12];
//const evens = [2, 4, 6, 8, 10, 12, 64];

// /*** Uncomment these to check your work! ***/
// console.log(myFunc(numbers, isOdd)); // Output should be 1
// console.log(myFunc(evens, isOdd)); // Output should be -1


// Challenge 24
/*function myForEach(array, callback) {
for(let i = 0; i < array.length; i++) {
  callback(array[i]);
}
}
let sum = 0;
function addToSum(num) {
sum += num;
}
*/
// /*** Uncomment these to check your work! ***/
/*const nums = [1, 2, 3];
myForEach(nums, addToSum);
console.log(sum); // Should output 6*/

/*function saleHotDog(n){
  return n<5 ? n*100 : n<10 && n>=5 ? n*95 : n>=10 ? n*90 : 0;
}

console.log(saleHotDog(1));
console.log(saleHotDog(5));
console.log(saleHotDog(11));

function countGrades(arr){
  const obj = {
    s: arr.filter(num => num === 100).length,
    a: arr.filter(num => num >= 90 && num < 100).length,
    b: arr.filter(num => num >= 80 && num < 90).length,
    c: arr.filter(num => num >= 60 && num < 80).length,
    d: arr.filter(num => num >= 0 && num < 60).length,
    x: arr.filter(num => num === 0).length
  }
  return obj
}

console.log(countGrades([100, 95, 90, 81]))
*/