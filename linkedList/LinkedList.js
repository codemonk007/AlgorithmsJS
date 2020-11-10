let N = require('./Node');
let Node = N.node;
module.exports.linkedList = class linkedList {

    constructor() {
        this.head = null;
    }

    insertAtStart(value) {
        if (!this.head) {
            this.head = new Node(value)
        }
        else {
            let temp = new Node(value)
            this.head.next = temp
        }
        return this.head;
    }
    insertAtEnd(value) {
    let temp = this.head;
    while(temp.next !=null){
        temp= temp.next;
    }
    temp.next= new Node(value);
    return this.head; 
    }
    insertAtpos(pos,value) {
    let count=0;
    let temp = this.head;
    let prev = null;
    while(count!= pos){
        prev = temp
        temp = temp.next;
        count++;
    }
    if(count === pos){
        prev.next=new Node(value);
        prev.next.next=temp;
    }
    return this.head;
     }
    deleteAtStart() {
        let temp = this.head
        this.head =temp.next;
        return this.head;
     }
    deleteAtEnd() {
    
        let temp = this.head;
        let prev =null;
        while(temp.next != null){
            prev =temp;
            temp = temp.next
        }
        prev.next = null;
        return this.head;
    }
    deleteAtpos(index) {
        let count = 0;
        let temp = this.head;
        let prev = null;
        while(count != index){
            prev = temp
            temp = temp.next;
            count++;
        }
        if(count == index){
            prev.next = temp.next;
        }
        return this.head;
     }
    deletewithValue(value) {
        let temp = this.head;
        let prev= null;
        while(temp.value != value && temp.next != null){
            prev = temp
            temp = temp.next
        }
        if(temp.value === value){
            prev.next = temp.next;
        }
        return this.head;
    }
    findvalue(index) {
        let temp = this.head;
        let count = 0;
        if(index <0 ) return null;
         while(count != index){
            temp = temp.next
            count++;
         }
         if(count == index){
             return temp.value;
         }
         return null;
    }

    findIndex(value) {
        let temp = this.head;
        let count = 0;
         while(value != temp.value && temp.next !=null){
            temp = temp.next
            count++;
         }
         if(temp.value == value){
             return count;
         }
         return null;
    }
    isPresent(value) {
        let temp = this.head;
        let count = 0;
         while(value != temp.value && temp.next !=null){
            temp = temp.next
         }
         if(temp.value == value){
             return true;
         }
         return false;
     }

}