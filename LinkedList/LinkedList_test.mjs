import {Node} from './LinkedList.mjs';
import {LinkedList} from './LinkedList.mjs';

// let node1 = new Node(1);    //data의 값은 1, next는 null
// let node2 = new Node(2);    //data의 값은 2, next는 null
// let node3 = new Node(3);    //data의 값은 3, next는 null

// node1.next = node2;    //node1의 next는 node2      call by reference......... 주소를 넘깁니다
// node2.next = node3;    //node2의 next는 node3

// console.log(node1.data);    //1
// console.log(node1.next.data);    //2
// console.log(node1.next.next.data);    //3 

let list = new LinkedList();    //head가 null, count가 0인 연결 리스트 생성
list.insertAt(0, 1);    //head가 1인 연결 리스트 생성

list.insertLast(77);
list.insertLast(78);
list.insertLast(79);
list.insertLast(80);
list.insertLast(81);
list.printAll();

console.log("=== deleteAt() 호출 ===");
list.deleteAt(2);
list.printAll();

console.log("=== deleteLast() 호출 ===");
list.deleteLast();  //list.deleteAt(3);
list.printAll();

console.log("=== getNodeAt() 호출 ===");
console.log(list.getNodeAt(2).data); 