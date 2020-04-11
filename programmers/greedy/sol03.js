/**
 * 큰 수 만들기
 * 어떤 숫자에서 k개의 수를 제거했을때 가장 큰 수를 구하라.
 * 
 * @param {String} number 숫자
 * @param {number} k 제거하려는 숫자의 갯수
 */
function solution(number, k) {
    const numberArr = number.split("");
    let answer = '';
    let stack = [];
    numberArr.map(num => {
        while(stack[stack.length - 1] < num && k > 0){
            stack.pop();
            k -= 1;
        }
        stack.push(num);
    });
    
    stack = k > 0 ? stack.slice(0, numberArr.length - k) : stack;
    answer = stack.join("");
    
    return answer;
}

// solution("1924", 2);
// solution("1231234", 3);
// solution("4177252841", 4);
// solution("1111", 2);
// solution("10000", 2);