'use strict';

// Rock Paper Scissors Oracle
// https://www.codewars.com/kata/580535462e7b330bd300003d/train/javascript


// function oracle(gestures){

//     const gestureTotal = {rock: 0, paper: 0, scissors: 0};
//     gestures.forEach(gest => gestureTotal[gest]++);

//     const gestureWon = {};
//     gestureWon.rock = gestureTotal.scissors - gestureTotal.paper;
//     gestureWon.paper= gestureTotal.rock - gestureTotal.scissors;
//     gestureWon.scissors = gestureTotal.paper - gestureTotal.rock;

//     if (Object.values(gestureWon).every(gest => gest === 0)) {
//         return 'tie';
//     } else {
//         const resultArr = [];
//         for (let gest in gestureWon) {
//             if (gestureWon[gest] > 0) {
//                 resultArr.push(gest);
//             }
//         }

//         return resultArr.join('/');
//     }
//   }

//   oracle(["rock","paper","scissors","rock"]);
//   oracle(["paper","scissors","scissors"]);
//   oracle(["paper","scissors","rock"]);

// // ========== Interesting solves:

// //   function oracle(gestures) {
// //     let result = [];
    
// //     let obj = {
// //       "rock": 0,
// //       "paper": 0,
// //       "scissors": 0
// //     }
    
// //     for (let i = 0; i < gestures.length; i++) {
// //       let gesture = gestures[i];
// //       obj[gesture]++;
// //     }
    
// //     if (obj.scissors > obj.paper) result.push("rock"); // !
// //     if (obj.rock > obj.scissors) result.push("paper");
// //     if (obj.paper > obj.rock) result.push("scissors");
    
// //     return result.join("/") || "tie"; // !
// //   }

// ========================================================================== 
// ==========================================================================

// Last Survivor
// https://www.codewars.com/kata/609eee71109f860006c377d1/train/javascript


// function lastSurvivor(letters, coords) {
    
//     if (letters.length === 1) return letters.toString();
//     [...letters] = letters;
//     letters.splice(coords[0], 1);
//     coords.shift();
//     return lastSurvivor(letters, coords);

// }

// console.log(lastSurvivor('kbc', [0, 1]));

// // ========== Interesting solves:

// function lastSurvivor(letters, coords) {
    //     letters = letters.split('');
    //     for (let i = 0; i < coords.length; i++) {
//        letters.splice(coords[i], 1)
//     }
//     return letters.join('')
//  }

// // ==========

// function lastSurvivor(string, indices) {
    //     const arr = [...string];
    //     for (const i of indices) arr.splice(i, 1)
    //     return arr[0];
    //   }
    
    // // ==========
    
    // function lastSurvivor(letters, coords) {
        //     const arr = [...letters]
        //     coords.map((el, i, ar) => arr.splice(el, 1) )
//     return arr[0]
// }

// // ==========

// function lastSurvivor(letters, coords) {
    //     for (let c of coords)
    //       letters = letters.substr(0, c) + letters.substr(c+1);
    //     return letters;
    // }

    
    // // ==========

    // function lastSurvivor(letters,coords) { 
    //     return coords.reduce( (letters,coord) => letters.slice(0,coord) + letters.slice(coord+1) , letters ); 
    // }
    
// // ==========

// ========================================================================== 
// ==========================================================================


// Last Survivor Ep.2
// https://www.codewars.com/kata/60a1aac7d5a5fc0046c89651/train/javascript

function lastSurvivors(str) {

}

/*
'azzzb'

0. set counter to 0
1. take first letter
2. check if there is matches
3. remove match1 and match2
4. add match+1 letter to the end of the string
5. if match letter is z - return a


*/

