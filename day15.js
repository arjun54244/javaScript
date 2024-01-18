// 1. What will the folling print in javascript console.log("str\"") and count length
// let str = "str\"";
// console.log(str.length);

//2. Explor the includes, strtswith & endwith function of a string

const sentence = 'The quick brown  jumps over the lazy dog.';

const word = 'fox';

console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);
// console.log(`i am trying tamplate litrals${sentence}dsg`);


//3. convert the sentence in lowercase 

// let changed = sentence.toLocaleLowerCase();
// console.log(changed);

//4. Extrect the Amount out of the string "Please gives Rs. 1000"

// let str2 = "Please gives Rs. 1000";
// console.log(Number.parseInt(str2.slice("Please gives Rs.".length)));
// console.log(typeof(Number.parseInt(str2.slice("Please gives Rs.".length))))

