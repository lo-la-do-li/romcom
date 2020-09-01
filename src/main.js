// Create variables targetting the relevant DOM elements here 👇
var cover =  document.querySelector('.cover-image');
var title = document.querySelector('.cover-title');
var descriptor1 = document.querySelector('.tagline-1');
var descriptor2 = document.querySelector('.tagline-2');

var randomCoverButton = document.querySelector('.random-cover-button');
var myoCoverButton = document.querySelector('.make-new-button')

var homeButton = document.querySelector('.home-button');
var saveCoverButton = document.querySelector('.save-cover-button')
var viewSavedButton = document.querySelector('.view-saved-button')
var hiddenForm = document.querySelector('.form-view')
var homeView = document.querySelector('.home-view')
var savedView = document.querySelector('.saved-view')


// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇

window.addEventListener("load", function(){
  getRandomBook();
});

randomCoverButton.addEventListener("click", function(){ 
  getRandomBook();
 }); 

myoCoverButton.addEventListener("click", function() {
  hiddenForm.classList.remove('hidden')
  homeView.classList.add('hidden')
  saveCoverButton.classList.add('hidden')
  randomCoverButton.classList.add('hidden')
  homeButton.classList.remove('hidden')
})

viewSavedButton.addEventListener("click", function(){
  savedView.classList.remove('hidden')
  homeView.classList.add('hidden')
  hiddenForm.classList.add('hidden')
  homeButton.classList.remove('hidden')
  saveCoverButton.classList.add('hidden')
  randomCoverButton.classList.add('hidden')
})

// Create your event handlers and other functions here 👇
function getRandomBook() {
  var randomCover = getRandomIndex(covers);
  var randomTitle = getRandomIndex(titles);
  var randomDescriptor = getRandomIndex(descriptors);
  var randomDescriptor2 = getRandomIndex(descriptors);

  var currentCover = new Cover(randomCover, randomTitle, randomDescriptor, randomDescriptor2);

  cover.src = currentCover.cover
  title.innerText = currentCover.title
  descriptor1.innerText = currentCover.tagline1
  descriptor2.innerText = currentCover.tagline2

  console.log(currentCover);
}

// We've provided one function to get you started
function getRandomIndex(arr) {
  // return Math.floor(Math.random() * arr.length);
   return arr[Math.floor(Math.random() * arr.length)]
}
//
// getRandomIndex(covers)
// getRandomIndex(descriptors)
// getRandomIndex(titles)
