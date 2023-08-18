import { describe, it, expect } from "vitest";
import LinkedList from "./LinkedList";


describe('#insertAtHead', () => {
    it('adds the element to the beggining', () => {
            const linkedList = new LinkedList;
            linkedList.insertAtHead(10);
            const oldHead = linkedList.head;
            linkedList.insertAtHead(20);
            expect(linkedList.head?.value).toBe(20);
            expect(linkedList.head?.next).toBe(oldHead);
            expect(linkedList.length).toBe(2);
        })
})

describe('#getByIndex', () => {
    describe('with index less than 0', () => {
        it('returns null', () => {
            const linkedList = new LinkedList;
            linkedList.fromValues(10, 20);
            expect(linkedList.getByIndex(-1)).toBeNull;
        })
    })

    describe('with index greater than the length', () => {
        it('returns null', () => {
            const linkedList = new LinkedList;
            linkedList.fromValues(10, 20);
            expect(linkedList.getByIndex(5)).toBeNull;
        })
    })

    describe('with the 0 zero index', () => {
        it('returns the value at head', () => {
            const linkedList = new LinkedList;
            linkedList.fromValues(10, 20);
            expect(linkedList.getByIndex(0)?.value).toBe(10);
        })
    })

    describe('with the any index', () => {
        it('returns the value at that index', () => {
            const linkedList = new LinkedList;
            linkedList.fromValues(10, 20, 30, 40);
            expect(linkedList.getByIndex(2)?.value).toBe(30);
        })
    })
})

describe('#insertAtIndex', () => {
    describe('with index less than 0', () => {
        it('it does not insert anything', () => {  
            const linkedList = new LinkedList;
            linkedList.fromValues(10, 20)
            linkedList.insertAtIndex(-1, 30);
            expect(linkedList.length).toBe(2);
        })
    })

    describe('with index greather that the list length', () => {
        it('it does not insert anything', () => {  
            const linkedList = new LinkedList;
            linkedList.fromValues(10, 20)
            linkedList.insertAtIndex(30, 5);
            expect(linkedList.length).toBe(2);
        })
    
    })

    describe('with index 0', () => {
        it('insert at the head', () => {
            const linkedList = new LinkedList;
            linkedList.fromValues(10, 20)
            linkedList.insertAtIndex(0, 30);
            expect(linkedList.head?.value).toBe(30);
            expect(linkedList.head?.next?.value).toBe(10);
            expect(linkedList.length).toBe(3);
        })
    })

    describe('with index in the middle', () => {
        it('inserts at a given index', () => {
            const linkedList = new LinkedList;
            linkedList.fromValues(10, 20, 30, 40);
            linkedList.insertAtIndex(2, 50);
            const node = linkedList.getByIndex(2);
            expect(node?.value).toBe(50);
            expect(node?.next?.value).toBe(30);
            expect(linkedList.length).toBe(5);
        })
    })   
})

describe('#removeAtIndex', () => {
    describe('with index 0', () => {
        it('removes at the index 0', () => {
            const linkedList = new LinkedList;
            linkedList.fromValues(10, 20, 30, 40);
            linkedList.removeAtIndex(0);
            expect(linkedList.head?.value).toBe(20);
            expect(linkedList.length).toBe(3);
            expect(linkedList.head?.next?.value).toBe(30);
        })
    })
    
    describe('with last index', () => {
        it('removes at the last index', () => {
            const linkedList = new LinkedList;
            linkedList.fromValues(10, 20, 30, 40);
            linkedList.removeAtIndex(3);
            expect(linkedList.length).toBe(3);
            expect(linkedList.getByIndex(3)).toBeNull;    
        })
    })
    
    describe('with any index', () => {
        it('removes at a given index', () => {
            const linkedList = new LinkedList;
            linkedList.fromValues(10, 20, 30, 40);
            linkedList.removeAtIndex(1);
            expect(linkedList.getByIndex(1)?.value).toBe(30);
            expect(linkedList.head?.next?.value).toBe(30);
            expect(linkedList.length).toBe(3);
        })
    })

    describe('with index greater than the length', () => {
        it('does not remove anything', () => {
            const linkedList = new LinkedList;
            linkedList.fromValues(10, 20, 30, 40);
            linkedList.removeAtIndex(10);
            expect(linkedList.head?.value).toBe(10);
            expect(linkedList.length).toBe(4);
        })
    })

    describe('with index less than 0', () => {
        it('does not remove anything', () => {
            const linkedList = new LinkedList;
            linkedList.fromValues(10, 20, 30, 40);
            linkedList.removeAtIndex(-1);
            expect(linkedList.head?.value).toBe(10);
            expect(linkedList.length).toBe(4);
        })
    })
})




