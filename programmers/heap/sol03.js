/**
 * 디스크 컨트롤러
 * 하드디스크는 한 번에 하나의 작업만 수행할 수 있습니다.
 *
 * @param {Array} jobs [작업이 요청되는 시점, 작업의 소요시간] 을 담은 배열
 */
function solution(jobs) {
  let answer = 0;

  // 요청 시간 빠른 순 + 소요 시간 적은 순으로 정렬
  jobs.sort((a, b) => {
    // if(a[0] === b[0]){
    //     console.log(a, b);

    //     return a[1] - b[1]
    // }
    return a[0] - b[0];
  });

  let sortedJobs = [...jobs];
  let jobsCompleted = 0,
    currTime = 0;

  while (sortedJobs.length > 0) {
    // sortedJobs.sort((a,b) => a[1] - b[1]);
    console.log(sortedJobs);

    const firstJob = sortedJobs[0];
    const startTime = firstJob[0];
    const timeTook = firstJob[1];
    currTime += timeTook;

    if (currTime > startTime) {
      jobsCompleted += currTime - startTime;
      sortedJobs.splice(0, 1);
    }
  }

  answer = jobsCompleted / jobs.length;

  // console.log(answer);

  return answer;
}

solution([
  [0, 3],
  [1, 9],
  [2, 6],
]);
// solution([[2, 9], [0, 1], [2, 6], [1, 11]]);
