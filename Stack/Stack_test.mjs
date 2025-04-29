import { Stack } from "./Stack.mjs";

// stack을 배열로 구현하기
// let stack = [];

// stack.push(1);
// stack.push(2);
// stack.push(3);
// stack.push(4);

// console.log(stack); // [1, 2, 3, 4]

// console.log(stack.pop()); // 4 pop
// console.log(stack); // [1, 2, 3]

// console.log(stack.pop()); // 3 pop
// console.log(stack); // [1, 2]

// console.log(stack.pop()); // 2 pop
// console.log(stack); // [1]

// stack을 연결리스트로 구현하기
let stack = new Stack();
console.log("=== 첫 번쨰 출력 ===");
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);

console.log(stack.pop().data);
console.log(stack.pop().data);
console.log(stack.pop().data);
console.log(stack.pop().data);
console.log(stack.pop()); // null

console.log("=== 두 번쨰 출력 ===");
stack.push("일");
stack.push("이");
stack.push("삼");
stack.push("사");
console.log(stack.peek()); // 사

stack.pop();
console.log(stack.peek()); // 삼
console.log(`isEmpty() : ${stack.isEmpty()}`); // false
stack.pop();
stack.pop();
stack.pop();
console.log(`isEmpty() : ${stack.isEmpty()}`); // true
