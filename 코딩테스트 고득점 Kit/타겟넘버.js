function solution(numbers, target) {
    var answer = 0;

    var len = numbers.length
    var checked = new Array(numbers.length).fill(false)

    const find = (arr,index)=>{
        checked[index] = true

        if (index === len) {
            let sum = arr.reduce((acc,cur,i)=>{ return (Number(acc) + Number(cur)) }, 0)
            if (sum === target) {
                answer += 1
            }
        }

        if (index < len) {
            find([...arr, numbers[index] * 1], index + 1)
            find([...arr, numbers[index] * -1], index + 1)
        }
    }
    find([], 0)

    return answer;
}