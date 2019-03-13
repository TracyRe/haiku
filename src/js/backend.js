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
const stringSplit = string1.split(" ");
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
  // ****** PLACEHOLDER **********
  // for (l=0; l<consonants.length;l++) {
  //   if (consonants.include(word[i])) {
  //     word.slice(word[i]-1,word[i]+1)
  //   }
  // }

}
