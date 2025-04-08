// // fot문을 이용해서 책토리얼 구하기 - 상향식 계산 방법
// function factirial(number){
//     let sum = 1;
//     for(let i = 1; i <= number; i++){
//         sum *= i;
//     }

//     return sum;
// }

// console.log(factirial(5));

//재귀함수를 이용해서 책토리얼 구하기 - 하향식 계산 방법
function factirial(number){
    if(number === 1) return 1;
    else return number * factirial(number - 1);

    //number * factirial(number - 1); //RangeError: Maximum call stack size exceeded (기저조건 x)
}

console.log(factirial(5));