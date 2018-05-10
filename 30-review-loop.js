function processData(input) {
    let arr = input.split('\n')
    const len = arr.shift()
    
    arr.forEach(function(line){
        let outEven = ''
        let outOdd = ''
        for(let i=0;i<line.length;i++) {
            if(i%2)
                outOdd += line[i]
            else 
                outEven += line[i]
        }
        
        console.log(outEven+' '+outOdd)
    })
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
