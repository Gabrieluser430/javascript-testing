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

    fromValues(...values: number[]) {
        for (let i = values.length - 1; i >= 0; i-- ) {
            this.insertAtHead(values[i]);
        }
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
