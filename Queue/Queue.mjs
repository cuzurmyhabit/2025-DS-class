import { DoubleLinkedList } from "./DoubleLinkedList.mjs";

class Queue{
    constructor(){
        this.list = new DoubleLinkedList(); //head = null, tail = null, count = 0
    }

    enqueue(data){
        this.list.insertAt(0, data);
    }

    dequeue(){
        try{
            return this.list.deleteLast();
        }
        catch(e){
            null;
        }
    }

    front(){
        return this.list.tail;
    }

    isEmpty(){
        return this.list.count == 0;
    }
}

export { Queue };