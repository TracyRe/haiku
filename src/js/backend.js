// export function findSyls(line){
//   var splitLine = line.split(" ");
//   for (i=0;i<splitLine.length;i++){
//     if splitLine[i].includes(/)
//   }
// }


const prefixes = ["co","de","dis","em","en","ep","ef","ex","fore","im","in","ir","un","il","pre"];
const suffixes = ["acy", "dom", "ency", "er", "ful", "or", "ism", "ist", "ity", "less", "ment", "ness", "ship"];
const consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "w", "y", "z"];


const string1 = "We at pregamed at the underground, tasteless bar. it was a great wonderful of extreme efficiency"

let sylCounter = stringSplit.length;


//for loop that counts syllables
 for (i = 0; i<stringSplit.length; i++){
   // for loop that counts prefixes
	for (j=0;j<prefixes.length;j++){
  	if (stringSplit[i].startsWith(prefixes[j])){wordsWithCondition.push(stringSplit[i]) 		&& sylCounter++;
  }
 }

 // for loop that counts suffixes
 	for (k=0;k<suffixes.length;k++){
  	if (stringSplit[i].endsWith(suffixes[k])){wordsWithCondition.push(stringSplit[i]) 		&& sylCounter++;
  }
 }

 // for loop that counts combined consonants inside words

//
//   for (l=0; l<consonants.length;l++) {
//     if (consonants.include(word[i])) {
//       word.slice(word[i]-1,word[i]+1)
//     }
//   }
//
// }

// function new_count(word) {
//   word = word.toLowerCase();                                     //word.downcase!
//   if(word.length <= 3) { return 1; }                             //return 1 if word.length <= 3
//     word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');   //word.sub!(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '')
//     word = word.replace(/^y/, '');                                 //word.sub!(/^y/, '')
//     return word.match(/[aeiouy]{1,2}/g).length;                    //word.scan(/[aeiouy]{1,2}/).size
// }
//
// console.log(new_count('she'));
// console.log(new_count('spain'))
// console.log(new_count('softball'))
// console.log(new_count('contagion'))


// (?!st)\B[qwrtplkjhgfdszxcvbnm]{2,}\B
