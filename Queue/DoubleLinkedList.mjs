class Node{
    constructor(data, next = null, prev = null){
        this.data = data;
        this.next = next;   //멤버변수, js에서는 properties라고 부름
        this.prev = prev;   // 이전 노드를 가리키는 포인터
    }
}

class DoubleLinkedList{
    constructor(){
        this.head = null;  //첫 노드
        this.tail = null;  //마지막 노드
        this.count = 0;
    }

    insertAt(index, data) {     //연결리스트 인덱스 삽입
        if(index > this.count || index < 0){
            throw new Error("index 범위를 벗어났습니다");
        }

        let newNode = new Node(data); 

        //처음에 삽입하는 경우
        if(index == 0){
            newNode.next = this.head; //head를 newNode의 next로 연결
            if(this.head != null) {
                this.head.prev = newNode; // 기존 head의 prev를 newNode로 설정
            }
            this.head = newNode;
        }

        //마지막에 삽입하는 경우
        else if(index == this.count) {
            newNode.next = null; // 새 노드의 next는 null
            newNode.prev = this.tail; // 새 노드의 prev는 현재 tail
            this.tail.next = newNode; // 현재 tail의 next를 새 노드로 설정
        }

        //중간에 삽입하는 경우
        else{
            let currentNode = this.head;

            for(let i = 0; i < index - 1; i++){
                currentNode = currentNode.next; //currentNode를 다음 노드로 이동
            }

            newNode.next = currentNode.next;
            newNode.prev = currentNode; // 새 노드의 prev를 현재 노드로 설정
            currentNode.next = newNode;
            newNode.next.prev = newNode;

        }

        if(newNode.next == null){
            this.tail = newNode; // 새 노드가 마지막 노드인 경우 tail 업데이트
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

        //처음에 있는 걸 삭제하는 경우
        if(index == 0){
            let deleteNode = this.head;

            if(this.head.next == null){
                this.head = null;
                this.tail = null;
            }
            else{
                this.head = this.head.next;
                this.head.prev = null;
            }

            this.count--;
            return deleteNode;
        }

        //마지막에 있는 걸 삭제하는 경우
        else if(index == this.count - 1){
            let deleteNode = this.tail;

            this.tail.prev.next = null;
            this.tail = this.tail.prev;
            this.count--;
            return deleteNode;
        }

        //중간에 있는 걸 삭제하는 경우
        else{
            for(let i = 0; i < index - 1; i++){
                currentNode = currentNode.next;
            }
        
            let deleteNode = currentNode.next;
            currentNode.next = currentNode.next.next;
            currentNode.next.prev = currentNode;
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

export {Node, DoubleLinkedList};
