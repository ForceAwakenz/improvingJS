'use strict';

// Rock Paper Scissors Oracle
// https://www.codewars.com/kata/580535462e7b330bd300003d/train/javascript

function oracle(gestures){

    const gestureTotal = {rock: 0, paper: 0, scissors: 0};
    gestures.forEach(gest => gestureTotal[gest]++);

    console.log(gestureTotal);

    const gestureWon = {};
    gestureWon.rock = gestureTotal.scissors - gestureTotal.paper;
    gestureWon.paper= gestureTotal.rock - gestureTotal.scissors;
    gestureWon.scissors = gestureTotal.paper - gestureTotal.rock;

    console.log(gestureWon);

    if (Object.values(gestureWon).every(gest => gest === 0)) {
        return 'tie';
    } else {
        const resultArr = [];
        for (let gest in gestureWon) {
            if (gestureWon[gest] > 0) {
                resultArr.push(gest);
            }
        }
        
        console.log(resultArr.join('/'));

        return resultArr.join('/');
    }
  }

  oracle(["rock","paper","scissors","rock"]);
  oracle(["paper","scissors","scissors"]);
  oracle(["paper","scissors","rock"]);

// ========== Interesting solves:

//   function oracle(gestures) {
//     let result = [];
    
//     let obj = {
//       "rock": 0,
//       "paper": 0,
//       "scissors": 0
//     }
    
//     for (let i = 0; i < gestures.length; i++) {
//       let gesture = gestures[i];
//       obj[gesture]++;
//     }
    
//     if (obj.scissors > obj.paper) result.push("rock"); // !
//     if (obj.rock > obj.scissors) result.push("paper");
//     if (obj.paper > obj.rock) result.push("scissors");
    
//     return result.join("/") || "tie"; // !
//   }

// ========================================================================== 
// ==========================================================================



