import { LinkedList } from "../LinkedList/LinkedList.mjs";

class Stack{
    constructor(){
        this.list = new LinkedList(); //LinkedList 객체 생성
    }

    push(data){ //스택에 데이터 삽입
        this.list.insertAt(0, data); //연결 리스트의 맨 앞에 삽입
    }

    pop(){  //스택에서 데이터 삭제
        try{
            return this.list.deleteAt(0); //연결 리스트의 맨 앞에서 삭제
        }
        catch(e){
            return null; //스택이 비어있을 때 null 반환
        }
    }

    peek(){
        return this.list.getNodeAt(0); //연결 리스트의 맨 앞의 데이터 반환
    }

    isEmpty(){
        return (this.list.count == 0); //스택이 비어있으면 true 반환
    }
}

export {Stack};