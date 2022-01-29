function solution(numbers, hand) {
    var answer = '';
    const getPos = (value) => {
        switch (value.toString()) {
            case "1": return [0, 3]
            case "2": return [1, 3]
            case "3": return [2, 3]
            case "4": return [0, 2]
            case "5": return [1, 2]
            case "6": return [2, 2]
            case "7": return [0, 1]
            case "8": return [1, 1]
            case "9": return [2, 1]
            case "0": return [1, 0]
        }
    }
    const calcDis = (from, to) => {
        return Math.abs(from[0] - to[0]) + Math.abs(from[1] - to[1])
    }
    const choose = (leftDis, rightDis) => {
        if (leftDis > rightDis) {
            return 'R'
        } else if(rightDis > leftDis) {
            return 'L'
        } else {
            return (hand === 'left')? 'L' : 'R'
        }
    }
    let left = [0, 0]
    let right = [2, 0]
    numbers.forEach((number) => {
        let next = null
        const pos = getPos(number)
        if ([1,4,7].includes(number)) {
            next = 'L'
        } else if ([3,6,9].includes(number)) {
            next = 'R'
        } else {
            next = choose(calcDis(pos, left), calcDis(pos, right))
        }
        
        if (next === 'L') {
            left = pos
        } else {
            right = pos
        }
        answer += next
    })
    return answer;
}

/*
numbers	 hand	result
[1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5]	"right"	"LRLLLRLLRRL"
[7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2]	"left"	"LRLLRRLLLRR"
[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]	"right"	"LLRLLRLLRL"
 */