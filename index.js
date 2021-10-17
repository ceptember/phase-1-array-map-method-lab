
const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

/*
const titleCased = function(){ 
  return tutorials.map( x => x.split(" ").map(y => y.toLowerCase()).map(z => z.replace(z.charAt(0), z.charAt(0).toUpperCase())).join(' '))
};
*/

const titleCased = function(){ 
  return tutorials.map( x => x.split(" ").map(z => z.replace(z.charAt(0), z.charAt(0).toUpperCase())).join(' '))
};

 
console.log(titleCased());
