// Make a function that sets the speceific destination that we select as the active state
// Then display its data from the variable that is named for it 

// Assign variables for content of the page such as img, subheadline, headline, distance, time, paragraph, etc

// Make a function that sets the anchor tag as active when we click on it and highlights it

// Destination Page

let destination = [
    {
        "name": "MOON",
        "images": {
          "png": "./starter-code/assets/destination/image-moon.png",
          "webp": "./starter-code/assets/destination/image-moon.webp"
        },
        "description": "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        "distance": "384,400 KM",
        "travel": "3 Days"
      },
      {
        "name": "MARS",
        "images": {
          "png": "./starter-code/assets/destination/image-mars.png",
          "webp": "./starter-code/assets/destination/image-mars.webp"
        },
        "description": "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
        "distance": "225 mil. KM",
        "travel": "9 Months"
      },
      {
        "name": "EUROPA",
        "images": {
          "png": "./starter-code/assets/destination/image-europa.png",
          "webp": "./starter-code/assets/destination/image-europa.webp"
        },
        "description": "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
        "distance": "628 mil. KM",
        "travel": "3 Years"
      },
      {
        "name": "TITAN",
        "images": {
          "png": "./starter-code/assets/destination/image-titan.png",
          "webp": "./starter-code/assets/destination/image-titan.webp"
        },
        "description": "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
        "distance": "1.6 bil. KM",
        "travel": "7 Years"
      }
]

let crew = [
    {
      "name": "DOUGLAS HURLEY",
      "images": {
        "png": "./starter-code/assets/crew/image-douglas-hurley.png",
        "webp": ".starter-code//assets/crew/image-douglas-hurley.webp"
      },
      "role": "COMMANDER",
      "bio": "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
    },
    {
      "name": "MARK SHUTTLEWORTH",
      "images": {
        "png": "./starter-code/assets/crew/image-mark-shuttleworth.png",
        "webp": "./starter-code/assets/crew/image-mark-shuttleworth.webp"
      },
      "role": "MISSION SPECIALIST",
      "bio": "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
    },
    {
      "name": "VICTOR GLOVER",
      "images": {
        "png": "./starter-code/assets/crew/image-victor-glover.png",
        "webp": "./starter-code/assets/crew/image-victor-glover.webp"
      },
      "role": "PILOT",
      "bio": "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
    },
    {
      "name": "ANOUSHEH ANSARI",
      "images": {
        "png": "./starter-code/assets/crew/image-anousheh-ansari.png",
        "webp": "./starter-code/assets/crew/image-anousheh-ansari.webp"
      },
      "role": "FLIGHT ENGINEER",
      "bio": "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
    }
]

let technology = [
    {
      "name": "SPACEPORT",
      "images": {
        "portrait": "./starter-code/assets/technology/image-spaceport-portrait.jpg",
        "landscape": "./starter-code/assets/technology/image-spaceport-landscape.jpg"
      },
      "description": "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
    },
    {
      "name": "LAUNCH VEHICLE",
      "images": {
        "portrait": "./starter-code/assets/technology/image-launch-vehicle-portrait.jpg",
        "landscape": "./starter-code/assets/technology/image-launch-vehicle-landscape.jpg"
      },
      "description": "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
    },
    {
      "name": "SPACE CAPSULE",
      "images": {
        "portrait": "./starter-code/assets/technology/image-space-capsule-portrait.jpg",
        "landscape": "./starter-code/assets/technology/image-space-capsule-landscape.jpg"
      },
      "description": "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
    }
]

const moonTag = document.getElementById('moon-tag');
const marsTag = document.getElementById('mars-tag');
const europaTag = document.getElementById('europa-tag');
const titanTag = document.getElementById('titan-tag');


let destinationHead = document.getElementById('destinationHead');
let destinationParagraph = document.getElementById('destinationParagraph');
let destinationDistance = document.getElementById('destinationDistance');
let destinationTime = document.getElementById('destinationTime');
let destinationImage = document.getElementById('destination-img')


moonTag.addEventListener('click', () => {
  destinationHead.innerHTML = destination[0].name;
  destinationParagraph.innerHTML = destination[0].description;
  destinationDistance.innerHTML = destination[0].distance;
  destinationTime.innerHTML = destination[0].travel;
  destinationImage.src = destination[0].images.png;
})

marsTag.addEventListener('click', () => {
  destinationHead.innerHTML = destination[1].name;
  destinationParagraph.innerHTML = destination[1].description;
  destinationDistance.innerHTML = destination[1].distance;
  destinationTime.innerHTML = destination[1].travel;
  destinationImage.src = destination[1].images.png;
})

europaTag.addEventListener('click', () => {
  destinationHead.innerHTML = destination[2].name;
  destinationParagraph.innerHTML = destination[2].description;
  destinationDistance.innerHTML = destination[2].distance;
  destinationTime.innerHTML = destination[2].travel;
  destinationImage.src = destination[2].images.png;
})

titanTag.addEventListener('click', () => {
  destinationHead.innerHTML = destination[3].name;
  destinationParagraph.innerHTML = destination[3].description;
  destinationDistance.innerHTML = destination[3].distance;
  destinationTime.innerHTML = destination[3].travel;
  destinationImage.src = destination[3].images.png;
})

// Crew Page

const circleOne = document.getElementById('circle-one');
const circleTwo = document.getElementById('circle-two');
const circleThree = document.getElementById('circle-three');
const circleFour = document.getElementById('circle-four');


let crewSubhead = document.getElementById('crew-subhead');
let crewHead = document.getElementById('crew-head');
let crewParagraph = document.getElementById('crew-paragraph');
let crewImage = document.getElementById('crew-img');

circleOne.addEventListener('click', () => {
  crewSubhead.innerHTML = crew[0].role;
  crewHead.innerHTML = crew[0].name;
  crewParagraph.innerHTML = crew[0].bio;
  crewImage.src = crew[0].images.png;
})

circleTwo.addEventListener('click', () => {
  crewSubhead.innerHTML = crew[1].role;
  crewHead.innerHTML = crew[1].name;
  crewParagraph.innerHTML = crew[1].bio;
  crewImage.src = crew[1].images.png;
})

circleThree.addEventListener('click', () => {
  crewSubhead.innerHTML = crew[2].role;
  crewHead.innerHTML = crew[2].name;
  crewParagraph.innerHTML = crew[2].bio;
  crewImage.src = crew[2].images.png;
})

circleFour.addEventListener('click', () => {
  crewSubhead.innerHTML = crew[3].role;
  crewHead.innerHTML = crew[3].name;
  crewParagraph.innerHTML = crew[3].bio;
  crewImage.src = crew[3].images.png;
})


// Technology Page

const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');

let techHead = document.getElementById('technology-head');
let techParagraph = document.getElementById('technology-paragraph');
let techImage = document.getElementById('technology-img');

one.addEventListener('click', () => {
  techHead.innerHTML = technology[0].name;
  techParagraph.innerHTML = technology[0].description
  techImage.src = technology[0].images.portrait;
})

two.addEventListener('click', () => {
  techHead.innerHTML = technology[1].name;
  techParagraph.innerHTML = technology[1].description
  techImage.src = technology[1].images.portrait;
})

three.addEventListener('click', () => {
  techHead.innerHTML = technology[2].name;
  techParagraph.innerHTML = technology[2].description
  techImage.src = technology[2].images.portrait;
})


// Responsive

const menu =  document.querySelector('.menu');
const menuList = document.querySelector('.rightNav');

menu.addEventListener('click', () => {
  menuList.classList.toggle('active')
})