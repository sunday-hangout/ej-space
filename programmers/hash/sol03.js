/**
 * 해시 - 위장 level 2
 * 스파이가 가진 의상을 조합하는 경우의 수를 구한다.
 * 
 * @param {array} clothes 
 */
function solution(clothes) {
    let answer = 1;
    // let closet = {};
    // clothes.map(cloth => {
    //     const name = cloth[0];
    //     const type = cloth[1];
    //     const newName = closet[type] ? [...closet[type], name] : [name];
    //     closet = {...closet, [type]: newName};
    // });
    // {headgear: [], eyegear: []} 형태로 파라미터를 재구성하여 계산하려 했으나 괜히 두 번 계산하는 게 되었다.

    // 스파이가 가진 의상의 갯수를 종류별로 구한다.
    const closet = clothes.reduce((a, element) => {
        const name = element[0];    //  구하는 것은 갯수이므로 의상 이름은 필요 없다.
        const type = element[1];
        a[type] = a[type] ? a[type] + 1 : 1;
        return a;
    }, {})

    for (const x in closet) {
        answer *= closet[x] + 1;    // ex) 모자 A, B를 착용하는 경우의 수: (0, A, B, A+B). 아무 의상도 안 할 경우도 계산해야한다.
    }
    answer -= 1;    // 모든 장신구를 하나도 안했을 경우를 제외한다.
    return answer;
}

solution([["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]]);