// https://programmers.co.kr/learn/courses/30/lessons/43163

function solution(begin, target, words) {
    var answer = 0;

    const len = begin.length
    const minCount = begin.split('').reduce((acc, cur, i) => {
        if (cur !== target[i]) {
            acc += 1
        }
        return acc
    }, 0)

    let resultArr = []
    const used = new Array(words.length).fill(false)
    const match = (before, count) => {
        if (used.includes(before)) { return 0 }
        used.push(before)
        
        for (let i=0; i<words.length; i++) {
            const diffCount = words[i].split('').filter((v, i) => (v !== before[i])).length
            
            if (diffCount === 1) {
                if (words[i] === target) {
                    resultArr.push(count + 1)
                } else {
                    const result = match(words[i], count+1)
                    if (result) {
                        resultArr.push(result)
                    }
                }
            }
        }
    }

    match(begin, 0)
    if(resultArr.length) {
        answer = Math.min.apply(Math, resultArr)
    }

    return answer;
}