// Create variables targetting the relevant DOM elements here 👇

var cover =  document.querySelector('.cover-image');
var title = document.querySelector('.cover-title');
var descriptor1 = document.querySelector('.tagline-1');
var descriptor2 = document.querySelector('.tagline-2');

var randomCoverButton = document.querySelector('.random-cover-button');
var myoCoverButton = document.querySelector('.make-new-button')
var homeButton = document.querySelector('.home-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var viewSavedButton = document.querySelector('.view-saved-button');
var makeMyBookButton = document.querySelector('.create-new-book-button');

var hiddenForm = document.querySelector('.form-view')
var homeView = document.querySelector('.home-view')
var savedView = document.querySelector('.saved-view')
var savedCoversLocation = document.querySelector('.saved-covers-section')

var currentCover = getRandomBook();

var savedCovers = []
//   new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
// ];


// Add your event listeners here 👇

window.addEventListener("load", getRandomBook)
randomCoverButton.addEventListener("click", getRandomBook)
viewSavedButton.addEventListener("click", viewSavedCovers)
myoCoverButton.addEventListener("click", viewUserCoverForm)
saveCoverButton.addEventListener("click", addSavedCover)
homeButton.addEventListener("click", viewHomeView)


makeMyBookButton.addEventListener("click", function() {
  event.preventDefault();

  var userCover = document.getElementById('cover').value;
  var userTitle = document.getElementById('title').value;
  var userDesc1 = document.getElementById('descriptor1').value;
  var userDesc2 = document.getElementById('descriptor2').value;

  var newBook = new Cover (userCover, userTitle, userDesc1, userDesc2);

  showCover(newBook);
  pushMyCoverToArrays(newBook);
  viewHomeView();
})
// Create your event handlers and other functions here 👇

function getRandomIndex(arr) {
  // return Math.floor(Math.random() * arr.length);
  return arr[Math.floor(Math.random() * arr.length)]
}

function getRandomBook() {
  var randomCover = getRandomIndex(covers);
  var randomTitle = getRandomIndex(titles);
  var randomDescriptor = getRandomIndex(descriptors);
  var randomDescriptor2 = getRandomIndex(descriptors);

  currentCover = new Cover(randomCover, randomTitle, randomDescriptor, randomDescriptor2);

  showCover(currentCover);
}

function pushMyCoverToArrays(book) {
  covers.push(book.cover);
  titles.push(book.title);
  descriptors.push(book.tagline1);
  descriptors.push(book.tagline2);
}

function showCover(book) {
  cover.src = book.cover
  title.innerText = book.title
  descriptor1.innerText = book.tagline1
  descriptor2.innerText = book.tagline2
}

function addSavedCover() {
    event.preventDefault();
  if (!savedCovers.includes(currentCover)) {
    savedCovers.push(currentCover)
  };
  // savedCoversLocation.innerHTML = savedCovers
  // savedCoversLocation.push(savedCovers)
  console.log(savedCovers);
}

function viewHomeView() {
  hiddenForm.classList.add('hidden');
  homeView.classList.remove('hidden');
  saveCoverButton.classList.remove('hidden');   randomCoverButton.classList.remove('hidden') ;
  homeButton.classList.add('hidden');
}

function viewSavedCovers() {
  savedView.classList.remove('hidden') 
  homeView.classList.add('hidden') 
  hiddenForm.classList.add('hidden') 
  homeButton.classList.remove('hidden')   saveCoverButton.classList.add('hidden')   randomCoverButton.classList.add('hidden') 
}

function viewUserCoverForm() {
  hiddenForm.classList.remove('hidden');
  homeView.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  randomCoverButton.classList.add('hidden');
  homeButton.classList.remove('hidden')
}
