
// List Node Implementation
class ListNode{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

// Linked List Implementation
class LinkedList{

    constructor(head = null){
        this.head = head;
    }

    clear(){ 
        this.head = null;
    }

    size(){ 
        let count = 0;
        let node = this.head
        while(node){
            count++;
            node = node.next
        }
        return count;
    }
    
    getLast(){ 
        let lastNode = this.head;
        if(lastNode){
            while(lastNode.next){
                lastNode = lastNode.next
            }
        }
        return lastNode
    }
    
    getFirst(){ 
        return this.head
    }

    isEmpty(){ 
        return this.head === null;
    }

    print(){ 
        let currentNode = this.head;
        while(currentNode){
            console.log(currentNode.data)
            currentNode = currentNode.next;
        }
    }

    append(data){
        let newNode = new ListNode(data);
        if(!this.head){ 
            this.head = newNode;
            return;
        }
        let lastNode = this.getLast();
        lastNode.next = newNode; 
    }
    prepend(data){
        let newNode = new ListNode(data);
        newNode.next = this.head;
        this.head = newNode;
    }
};
