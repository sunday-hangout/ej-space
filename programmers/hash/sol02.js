/**
 * 해시 - 전화번호 목록
 * 
 * @param {Array} phone_book 
 */
function solution(phone_book) {
    let answer = true;
    const len = phone_book.length;
    for (let i = 0; i < len; i++) {
        for (let j = i+1; j < len; j++) {
            if((phone_book[i]+"").startsWith(phone_book[j]+"") || 
            (phone_book[j]+"").startsWith(phone_book[i]+"")){
                answer = false;
                break;
            }  
        } 
    }
    return answer;
}

solution([119, 97674223, 1195524421]);
solution([123,456,789]);
solution([12,123,1235,567,88]);