let currentWeek = 0;
const slidesData = [
  {
    title: "New This Week:",
    description: `This week the holidays are in full swing why not have a refreshing glass of eggnog. Old St. Nick's old fashioned eggnog is available in 750 ml. bottles made with rum at 25 proof.`,
    images: ["Images/New/eggnog-12-21-15.jpg"]
  },
  {
    title: "December 1, 2015:",
    description: `This week brings a new entrant to the rootbeer flavored beer category named Best Damn Rootbeer. We now have in stock 16 ounce cans and 6 pack 12 ounce bottles 5.5% by volume.`,
    images: ["Images/New/rootbeer-12-1-15.jpg"]
  },
  {
    title: "August 10, 2015:",
    description: `This week finds pumpkin in season. We now have in stock 4 new brands of pumpkin flavored beer.
    Blue Moon Harvest Pumpkin Ale in 6 pack 12 ounce bottles 5.7% alcohol by volume.
    Schlafly Pumpkin Ale in 6 pack 12 ounce bottles 8.0% alcohol by volume.
    Shock Top Pumpkin Wheat in 6 pack 12 ounce bottles 5.1% alcohol by volume.
    Travelers Brewing Company Jack-O in 6 pack 12 ounce bottles 4.4% alcohol by volume.`,
    images: ["Images/New/pumpkin-8-10-15.jpg", "Images/New/pumkin2-8-10-15.jpg"]
  },
  {
    title: "August 3, 2015:",
    description: `This week finds root beer in season. We now have in stock 3 new brands of root beer flavored beer.
    Coney Island brewery's Hard root beer in 6 pack 12 ounce bottles 5.8% alcohol by volume.
    Root Sellers Row Hard root beer in 4 pack 16 ounce cans 6.7% alcohol by volume. Contains no wheat, barley and gluten free.
    Small Town brewery's Not Your Father's Root Beer in 6 pack 12 ounce bottles 5.9% alcohol by volume.`,
    images: ["Images/New/rootbeer-8-3-15.jpg"]
  }
];

function generateSlides(){
  const slidesContainer = document.getElementById('slides-container');
  slidesData.forEach(function(slide, index){
    const slideDiv = document.createElement('div');
    slideDiv.classList.add('week-content');
    if(index === 0){
      slideDiv.classList.add('active');
    }
    if(slide.images.length > 1){
      slideDiv.classList.add('multiple-images');
    }
    const slideText = document.createElement('div');
    slideText.classList.add('text');
    const slideTitle = document.createElement('h2');
    slideTitle.innerText = slide.title;
    const slideDescription = document.createElement('p');
    slideDescription.innerText = slide.description;
    slideText.appendChild(slideTitle);
    slideText.appendChild(slideDescription);
    const slideImagesContainer = document.createElement('div');
    slideImagesContainer.classList.add('images');
    slide.images.forEach(function(image){
      const img = document.createElement('img');
      img.src = image;
      img.alt = slide.title;
      slideImagesContainer.appendChild(img);
    });
    slideDiv.appendChild(slideText);
    slideDiv.appendChild(slideImagesContainer);
    slidesContainer.appendChild(slideDiv);
  });
}

function moveSlide(direction){
  const slides = document.querySelectorAll('.week-content');
  slides[currentWeek].classList.remove('active');
  currentWeek += direction;
  if(currentWeek >= slides.length){
    currentWeek = 0;
  }
  if(currentWeek < 0){
    currentWeek = slides.length - 1;
  }
  slides[currentWeek].classList.add('active');
}

document.addEventListener("DOMContentLoaded", function(){
  generateSlides();
});