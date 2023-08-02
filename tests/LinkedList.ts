class LinkedList {
    head: LinkedListNode | null;
    length: number;

    constructor() {
        this.head = null;
        this.length = 0;
    }

    insertAtHead(data: any) {
        const newNode = new LinkedListNode(data, this.head);
        this.head = newNode;
        this.length++; 
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

LinkedList.fromValues = function(...values: number[]) {
    const linkedList = new LinkedList;
    for (let i = values.length - 1; i >= 0; i-- ) {
        linkedList.insertAtHead(values[i]);
    }
    return linkedList;
}

export default LinkedList;
