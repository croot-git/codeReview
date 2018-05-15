function processData(input) {
    const arr = input.split('\n')
    const len = Number(arr[0])
    let obj = {}
    
    for(let i=1;i<=len;i++) {
        const row = arr[i].split(' ')
        obj[row[0]] = row[1]
    }
    
    for(let i=1+len;i<arr.length;i++) {
        if(arr[i] in obj) {
            console.log(arr[i]+'='+obj[arr[i]])
        } else {
            console.log('Not found')
        }
    }
} 