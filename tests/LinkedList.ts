class LinkedList {
    head: LinkedListNode | null;
    length: number;

    constructor() {
        this.head = null;
        this.length = 0;
    }

    getByIndex(index:number) {
        if (index < 0 || index >= this.length) return null;

        let current: LinkedListNode | null | undefined = this.head;
        
        for (let i = 0; i < index; i++) {
            current = current?.next;
        }

        return current;
    }

    insertAtHead(data: any) {
        const newNode = new LinkedListNode(data, this.head);
        this.head = newNode;
        this.length++; 
    }

    insertAtIndex(value:any, index:number) {
        if (index > this.length - 1) return 'error';
        if (index < 0) return 'error';
        if (this.length < 1) return 'error';
        
        let currentNode:any = this.head; 
        let previousNode:any;
        let newNode;

        if(index > 0 && index < this.length - 1) {
            for(let i = 0; i < index; i++) {
                previousNode = currentNode;
                currentNode = currentNode?.next;
            }
            
            newNode = new LinkedListNode(value, currentNode);
            previousNode.next = newNode; 
            this.length++;
        } else if (index === 0) {
            newNode = new LinkedListNode(value, currentNode);
            this.head = newNode;
            this.length++;
        } else if (index === this.length - 1) {
            for (let i = 0; i < index; i++) {
                currentNode = currentNode?.next;    
            }
            newNode = new LinkedListNode(value, null);
            currentNode.next = newNode;
            this.length++;
        }
    }

    fromValues(...values: number[]) {
        for (let i = values.length - 1; i >= 0; i-- ) {
            this.insertAtHead(values[i]);
        }
    }

    print() {
        let output = "";
        let current:any = this.head;
        while(current) {
            for (let i = 0; i < this.length; i++) {
                output += `[${current.value}] -> `
                current = current?.next;
            }
        }
        return output;
    }
}

class LinkedListNode {
    value: any;
    next: LinkedListNode | null;

    constructor(value: any, next: LinkedListNode | null) {
        this.value = value;
        this.next = next;
    }
}


export default LinkedList;
