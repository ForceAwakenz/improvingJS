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

    if (Object.values(gestureWon).reduce((won, acc) => won + acc, 0)) {
        return 'tie';
    } else {
        for (let gest in gestureWon) {
            if (gestureWon[gest] < 1) {
                delete gestureWon[gest];
            }
        }
        const resultArr = [];
        Object.keys(gestureWon).forEach( g => {
            resultArr.push(g);
        });
        
        console.log(resultArr);

        return resultArr.join('/');
    }
  }

  oracle(["rock","paper","scissors","rock"]);
  oracle(["paper","scissors","scissors"]);