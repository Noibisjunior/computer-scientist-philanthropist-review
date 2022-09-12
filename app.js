// local reviews data
const reviews = [
  {
    id: 1,
    name: 'Timothy Berners Lee',
    career: 'English Computer Scientist',
    img: 'TIM.jpg',
    text: 'Sir Timothy John Berners-Lee OM KBE FRS FREng FRSA DFBCS born 8 June 1955,[1] also known as TimBL is an English computer scientist best known as the inventor of the World Wide Web. He is a Professorial Fellow of Computer Science              at the University of Oxford and a professor at the Massachusetts Institute of Technology (MIT). Sir Timothy implemented the first successful communication between a Hypertext Transfer Protocol (HTTP) client and server via the Internet',
  },
  {
    id: 2,
    name: 'Alan Mathison Turing',
    career: 'English Mathematician',
    img: 'Alan turing.jpg',
    text: 'Alan Mathison Turing OBE FRS (Born 23 June 1912 – 7 June 1954) was an English mathematician, computer scientist, logician, cryptanalyst, philosopher, and theoretical biologist. Turing was highly influential in the development of theoretical computer science, providing a formalisation of the concepts of algorithm and computation with the Turing machine, which can be considered a model of a general-purpose computer. He is widely considered to be the father of theoretical computer science and artificial intelligence.',
  },
  {
    id: 3,
    name: 'Grace Hopper',
    career: 'FIrst Female Programmer',
    img: 'hopper.jpg',
    text: 'Grace Brewster Murray Hopper (née Murray; December 9, 1906 – January 1, 1992) was an American computer scientist, mathematician, and United States Navy rear admiral.[1] One of the first programmers of the Harvard Mark I computer, she was a pioneer of computer programming who invented one of the first linkers. Hopper was the first to devise the theory of machine-independent programming languages,',
  },
  {
    id: 4,
    name: 'Bill Gates',
    career: 'Software Developer',
    img: 'bill gates.jpg',
    text: 'William Henry Gates III (born October 28, 1955) is an American business magnate, software developer, investor, author, and philanthropist. He is a co-founder of Microsoft, along with his late childhood friend Paul Allen.[2][3] During his career at Microsoft, Gates held the positions of chairman, chief executive officer (CEO), president and chief software architect, while also being the largest individual shareholder until May 2014.[4] He was a major entrepreneur of the microcomputer revolution of the 1970s and 1980s.',
  },
]
// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const career = document.getElementById("career");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  career.textContent = item.career
  info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  career.textContent = item.career
  info.textContent = item.text;
}
// show next person
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
// show random person
randomBtn.addEventListener("click", function () {
  console.log("hello");

  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});
