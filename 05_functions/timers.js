'use strict';

// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

// Сделайте два варианта решения.

// Используя setInterval.
// Используя рекурсивный setTimeout.

function printNumbersInterval(from, to) {
    const inter = setInterval(() => {
        console.log(from);
        if (from === to) clearInterval(inter);
        from++;
    }, 1000)
}

printNumbersInterval(14, 20);


function printNumbersTimoutRecursive(from, to) {

    setTimeout(() => {

        console.log(`from: ${from} to: ${to}`);
        if ( from === to) {
            return;
        }
        from++;
        printNumbersTimoutRecursive(from, to);

    }, 1000);

}

// printNumbersTimoutRecursive(7, 11);



function printNumbersTimeout(from, to) {

    for (let i = from, k = 0; i <= to; i++, k++) {
        setTimeout(() => console.log(`printNumbersInterval(${from}, ${to}): ${i}`), k * 1000);
    }

}

// printNumbersInterval(4, 8);

