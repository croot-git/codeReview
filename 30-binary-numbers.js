'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}



function main() {
    const n = parseInt(readLine(), 10).toString(2);
    let out = 0;
    let count = 0;
    
    for(let i=0;i<=n.length;i++) {
        if(n[i] == 1) {
            ++count
        } else {
            out = Math.max(out,count)
            count = 0
        }
    }
    
    console.log(out)
}
