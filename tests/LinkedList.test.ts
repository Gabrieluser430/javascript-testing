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
            expect(linkedList.head).toBe(10);
        })
    })
})


