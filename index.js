// Question 1

function InstagramPost(
  handleOfAuthor,
  content,
  imageLink,
  numberOfViews,
  numberOfLikes
) {
  this.handleOfAuthor = handleOfAuthor;
  this.content = content;
  this.imageLink = imageLink;
  this.numberOfViews = numberOfViews;
  this.numberOfLikes = numberOfLikes;
}

// Question 2
// first post

let post1 = new InstagramPost(
  "@coderholic",
  "Currently learning ReactJS",
  "https://intstagram.com/coderholic",
  1000,
  850
);
console.log(post1);

// post 2

let post2 = new InstagramPost(
  "@Web3_babe",
  "Creating a new Dapp and learning about protocols ❤. Look forward to my next post.",
  "https://intstagram.com/Web3_babe",
  18000,
  12000
);
console.log(post2);

// Question 3a
function createPerson(name, age, location) {
  return {
    name: name,
    age: age,
    location: location,
  };
}
let musa = createPerson("Musa Dawodu", 19, "Lekki, Lagos State");
console.log(musa);

// Question 3b
function createJambScores(eng, govt, lit, crk) {
  return {
    eng: eng,
    govt: govt,
    lit: lit,
    crk: crk,
  };
}
let musaJambScores = createJambScores(70, 85, 82, 94);
console.log(musaJambScores);

musa.jambScores = musaJambScores;
console.log(musa);

// Question 4

// Spread operator
const user = {
  name: "Amina",
  age: 25,
  gender: "female",
};
console.log(user);

let user2 = { ...user };
console.log(user2);

// Object.assign() method
const student = {
  name: "Mohammed",
  age: 22,
  gender: "Male",
};

let student2 = Object.assign({}, student);
console.log(student2);

// JSON.parse() method
const teacher = {
  name: "Adebayo",
  age: 32,
  gender: "Male",
};
let teacher2 = JSON.parse(JSON.stringify(teacher));
console.log(teacher2);

// Question 5
const presidentialCandidates = {
  AAC: "Omoyele Sowore",
  ACCORD: "Christopher Imumolen",
  APC: "Bola Ahmed Tinubu",
  LP: "Peter Obi",
  NNPP: "Rabiu Kwankwaso",
  PDP: "Atiku Abubakar",
};

// using for in
for (let candidate in presidentialCandidates) {
  console.log(
    `${presidentialCandidates[candidate]} is the presidential candidate of ${candidate}`
  );
}
