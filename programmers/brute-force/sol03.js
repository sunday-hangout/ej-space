/**
 * 완전탐색 - 숫자 야구
 * 숫자와 위치가 모두 맞을 때는 스트라이크
 * 숫자는 맞지만, 위치가 틀렸을 때는 볼
 *
 * @param {Array.<Array<number>} baseball
 */
function solution(baseball) {
  let answerArr = [];

  // 가능한 모든 수를 탐색한다.
  for (let num = 123; num <= 987; num++) {
    const number = num + "";

    // 숫자 중복 제거 + '0' 이 들어가는 숫자 제거
    if (
      number[0] == number[1] ||
      number[1] == number[2] ||
      number[2] == number[0] ||
      number.indexOf("0") > -1
    ) {
      continue;
    }

    let check = true;
    for (let i = 0; i < baseball.length; i++) {
      const bbNum = baseball[i][0] + "";

      let sCount = 0,
        bCount = 0;
      for (const j in bbNum) {
        if (number[j] == bbNum[j]) {
          // 스트라이크 구하기
          sCount += 1;
        } else if (number.indexOf(bbNum[j]) > -1) {
          // 볼 구하기
          bCount += 1;
        }
      }

      const strikeCount = baseball[i][1];
      const ballCount = baseball[i][2];

      // console.log('after count =>', baseball[i], [number, sCount, bCount]);

      // 제시한 조건과 맞지 않은 숫자임. 조건들 중에서 하나라도 틀리면 루프를 나간다.
      if (sCount !== strikeCount || bCount !== ballCount) {
        check = false;
        break;
      }
    }

    // baseball 루프가 끝난 후
    if (check) {
      answerArr.push(number);
    }
  }

  console.log(answerArr);
  return answerArr.length;
}

solution([
  [123, 1, 1],
  [356, 1, 0],
  [327, 2, 0],
  [489, 0, 1],
]);
// solution([[123,2,0], [124,1,0], [153,2,0]]);
// solution([[124, 2, 0], [782, 0, 1]]);
