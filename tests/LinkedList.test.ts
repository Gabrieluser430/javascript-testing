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
    describe('With index less than 0', () => {
        it('returns null', () => {
            const linkedList = new LinkedList;
            linkedList.fromValues(10, 20);
            expect(linkedList.getByIndex(-1)).toBeNull;
        })
    })

    describe('With index greater than the length', () => {
        it('returns null', () => {
            const linkedList = new LinkedList;
            linkedList.fromValues(10, 20);
            expect(linkedList.getByIndex(5)).toBeNull;
        })
    })

    describe('With the 0 zero index', () => {
        it('returns the value at head', () => {
            const linkedList = new LinkedList;
            linkedList.fromValues(10, 20);
            expect(linkedList.getByIndex(0)?.value).toBe(10);
        })
    })

    describe('With the any index', () => {
        it('returns the value at that index', () => {
            const linkedList = new LinkedList;
            linkedList.fromValues(10, 20, 30, 40);
            expect(linkedList.getByIndex(2)?.value).toBe(30);
        })
    })
})


