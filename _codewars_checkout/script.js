'use strict';

// Rock Paper Scissors Oracle
// https://www.codewars.com/kata/580535462e7b330bd300003d/train/javascript

function oracle(gestures){

    const gestureTotal = gestures.reduce((gest, total) => {
        return total[gest]++
    }, {rock: 0, paper: 0, scissors: 0});

    const gestureWon = {};
    gestureWon.rock = gestureTotal.scissors - gestureTotal.paper;
    gestureWon.paper= gestureTotal.rock - gestureTotal.scissors;
    gestureWon.scissors = gestureTotal.paper - gestureTotal.rock;

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

        return resultArr.join('/');
    }
  }