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
            let currentNode = this.head;

            for(let i = 0; i < index - 1; i++){
                currentNode = currentNode.next; //currentNode를 다음 노드로 이동
            }

            newNode.next = currentNode.next;
            currentNode.next = newNode;

        }

        this.count++;
    }

    printAll(){
        let currentNode = this.head;
        let text = "["

        while(currentNode != null){
            text += currentNode.data;

            if(currentNode.next != null){
                text += ", ";
            }
            currentNode = currentNode.next; // 루프 안으로 옮기기
        }
        text += "]"
        console.log(text);

    }

    clear(){
        this.head = null;
        this.count = 0;
    }

    insertLast(data){
        this.insertAt(this.count, data);

    }

    deleteAt(index){
        if(index < 0 || index >= this.count){
            throw new Error("index 범위를 벗어났습니다");
        }

        let currentNode = this.head;

        if(index == 0){
            let deleteNode = this.head;
            this.head = currentNode.next;
            this.count--;
            return deleteNode;
        }
        else{
            let prevNode = this.head;

            for(let i = 0; i < index - 1; i++){
                prevNode = prevNode.next;
            }
        
            let deleteNode = prevNode.next;
            prevNode.next = deleteNode.next;
            this.count--;

            return deleteNode;
        }
    }

    deleteLast(){
        return this.deleteAt(this.count - 1);
    }

    getNodeAt(index){
        if(index < 0 || index >= this.count){
            throw new Error("index 범위를 벗어났습니다");
        }

        let currentNode = this.head;

        for(let i = 0; i < index; i++){
            currentNode = currentNode.next;
        }

        return currentNode.data;
    }
}

export {Node, LinkedList};
