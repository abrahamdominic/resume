const cards = document.querySelector('#cards');
const images = {
  pricing_panel: '../../img/projectImg/Pricing Panel.png',
  chrome_card: '../../img/projectImg/Chrome Card 2.png',
  blog_page: '../../img/projectImg/Blog page (Front).png',
  landing_page2: '../../img/projectImg/Landing Page - 2.png',
  tripsy: '../../img/projectImg/tripsy.png',
  colorGame: '../../img/projectImg/colorGuessGame.png',
  expandingCards: '../../img/projectImg/expandingCards.png',
  museumOfCandy: '../../img/projectImg/museumOfCandy.png',
  photoGallery: '../../img/projectImg/photoGallery.png',
  purrfectMatch: '../../img/projectImg/purrfectMatch.png',
  yelpcamp: '../../img/projectImg/yelpcamp.jpg',
  cardComponent: '../../img/projectImg/cardComponent.png'
}

const projectName = {
  chrome_card: 'Chrome Admin Card',
  blog_page: 'Blog Page',
  landing_page: 'Bookmarked',
  pricing_panel: 'Pricing Panel',
  tripsy: 'Tripsy',
  colorGame: 'Guess the Color',
  expandingCards: 'Expanding Cards',
  museumOfCandy: 'Museum Of Candy',
  photoGallery: 'Photo Gallery',
  purrfectMatch: 'Purrfect Match',
  yelpcamp: 'Yelpcamp',
  cardComponent: 'Card Component'
};

const description = {
  chrome_card: 'Chrome Identity Card was my first ever project which does nothing, just a replica of google chrome admin card.',
  blog_page: 'This blog page was a task from Udacity, which has a bunch of fake links and some Lorem ipsum paragraphs, which also has a second page, not shown above.',
  landing_page: 'Bookmarked is a landing page for some bestseller books with there behind the book descriptions.',
  pricing_panel: 'This Pricing Panel was a task from \'The Web Developement Bootcamp 2021 - Colt Steele\'.',
  tripsy: 'Tripsy was one of my largest project, which involved fetching data from 3 different API\'s and showing them to the client as requested. A user interactive Weather App, which asks what your current and destination location and returns the weather forcast of the coming week.',
  colorGame: 'Color Guessing Game was a Code Along Project from \'The Web Developement Bootcamp 2021 - Colt Steele\'.',
  expandingCards: 'Expanding Cards was a raw CSS practice webpage which had a theme of a Video Game.',
  museumOfCandy: 'Museum Of Candy was a Code Along Project from \'The Web Developement Bootcamp 2021 - Colt Steele\'.',
  photoGallery: 'This photo gallery was Challenge form \'The Web Developement Bootcamp 2021 - Colt Steele\'.',
  purrfectMatch: 'Purrfect Match was just a Landing Page which takes you nowhere inspired from some webpages.',
  yelpcamp: 'Yelpcamp was my biggest project ever, because it used countless amount of technology, multiple API\'s and a database named MongoDB.',
  cardComponent: 'This Card Component was one of the challenge from Frontend Mentor, which has tons of tasks for Frontend Developers.'
}

// Creat Variables
for (let i = 0; i <= 11; i++) {
  let article = document.createElement('ARTICLE');
  article.setAttribute('class', 'mainCard rounded-lg shadow-xl')

  let image = document.createElement('IMG');
  image.setAttribute('class', 'w-full rounded-tr-lg rounded-tl-lg self-center');

  if (i === 0) {
    image.setAttribute('src', images.blog_page);
  } else if (i === 1) {
    image.setAttribute('src', images.landing_page2);
  } else if (i === 2) {
    image.setAttribute('src', images.pricing_panel);
  } else if (i === 3) {
    image.setAttribute('src', images.expandingCards);
  } else if (i === 4) {
    image.setAttribute('src', images.photoGallery);
  } else if (i === 5) {
    image.setAttribute('src', images.colorGame);
  } else if (i === 6) {
    image.setAttribute('src', images.museumOfCandy);
  } else if (i === 7) {
    image.setAttribute('src', images.yelpcamp);
  } else if (i === 8) {
    image.setAttribute('src', images.purrfectMatch);
  } else if (i === 9) {
    image.setAttribute('src', images.tripsy);
  } else if (i === 10) {
    image.setAttribute('src', images.chrome_card);
  } else if (i === 11) {
    image.setAttribute('src', images.cardComponent);
  }

  let aside = document.createElement('ASIDE');
  aside.setAttribute('class', 'my-3 text-2xl font-bold px-3');

  if (i === 0) {
    aside.innerText = projectName.blog_page;
  } else if (i === 1) {
    aside.innerText = projectName.landing_page
  } else if (i === 2) {
    aside.innerText = projectName.pricing_panel;
  } else if (i === 3) {
    aside.innerText = projectName.expandingCards;
  } else if (i === 4) {
    aside.innerText = projectName.photoGallery;
  } else if (i === 5) {
    aside.innerText = projectName.colorGame;
  } else if (i === 6) {
    aside.innerText = projectName.museumOfCandy;
  } else if (i === 7) {
    aside.innerText = projectName.yelpcamp;
  } else if (i === 8) {
    aside.innerText = projectName.purrfectMatch;
  } else if (i === 9) {
    aside.innerText = projectName.tripsy;
  } else if (i === 10) {
    aside.innerText = projectName.chrome_card;
  } else if (i === 11) {
    aside.innerText = projectName.cardComponent;
  }

  // aside.innerText = 'Pricing Panel'

  let para = document.createElement('P');
  para.setAttribute('class', 'p-3 text-sm');

  if (i === 0) {
    para.innerText = description.blog_page;
  } else if (i === 1) {
    para.innerText = description.landing_page
  } else if (i === 2) {
    para.innerText = description.pricing_panel;
  } else if (i === 3) {
    para.innerText = description.expandingCards;
  } else if (i === 4) {
    para.innerText = description.photoGallery;
  } else if (i === 5) {
    para.innerText = description.colorGame;
  } else if (i === 6) {
    para.innerText = description.museumOfCandy;
  } else if (i === 7) {
    para.innerText = description.yelpcamp;
  } else if (i === 8) {
    para.innerText = description.purrfectMatch;
  } else if (i === 9) {
    para.innerText = description.tripsy;
  } else if (i === 10) {
    para.innerText = description.chrome_card;
  } else if (i === 11) {
    para.innerText = description.cardComponent;
  }

  cards.appendChild(article);
  article.appendChild(image);
  article.appendChild(aside);
  article.appendChild(para);
}