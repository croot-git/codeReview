function solution(operations) {
    var answer = [];
    
    const queue = []
    
    operations.forEach((op) => {
        const inum = op.split(' ')
        switch(inum[0]) {
            case 'I':
                queue.push(inum[1])
                break
            case 'D':
                if (queue.length > 0) {
                    let idx = -1
                    if(inum[1] === "1") {
                        idx = queue.indexOf(""+Math.max.apply(Math, queue))
                    } else {
                        idx = queue.indexOf(""+Math.min.apply(Math, queue))
                    }
                    
                    queue.splice(idx, 1)
                }
                break
        }
    })
    if(queue.length) {
        answer = [Math.max.apply(Math, queue), Math.min.apply(Math, queue)]
    } else {
        answer = [0,0]
    }
    
    return answer;
}