//연결 리스트 구현하기
class Node{
    constructor(data, next = null){
        this.data = data;
        this.next = next;   //멤버변수, js에서는 properties라고 부름
    }
}

class LinkedList{
    constructor(){
        this.head = null; 
        this.count = 0;
    }

    insertAt(index, data) {     //연결리스트 인덱스 삽입
        if(index > this.count || index < 0){
            throw new Error("index 범위를 벗어났습니다");
        }

        let newNode = new Node(data); 

        if(index == 0){
            newNode.next = this.head; //head를 newNode의 next로 연결
            this.head = newNode;
        
        }
        else{
            let currntNode = this.head;
            for(let i = 0; i < index - 1; i++){
                currentNode = currentNode.next; //currentNode를 다음 노드로 이동
            }

            newNode.next = currntNode.next;
            currntNode.next = newNode;

        }

        count++;
    }
}



export {Node, LinkedList};
