import Tree from './Tree';
import { describe, expect, it } from "vitest"; 

describe('#insert', () => {
    describe('with no root', () => {
        it('creates a root for our tree', () => {
            const tree = new Tree;
            expect(tree.root).toBeNull;
            tree.insert(5);
            expect(tree.root.value).toBe(5);
            expect(tree.size).toBe(1);
        })
    })

    describe('with value greater than the parent', () => {
        it('inserts a node at the right pointer', () => {
            const tree = new Tree;
            tree.insert(5);
            tree.insert(7);
            expect(tree.size).toBe(2);
            expect(tree.root.right.value).toBe(7);
            expect(tree.root.left).toBeNull;
        })
    })

    describe('with value lesser than the parent', () => {
        it('inserts a node at the left pointer', () => {
            const tree = new Tree;
            tree.insert(5);
            tree.insert(3);
            expect(tree.size).toBe(2);
            expect(tree.root.left.value).toBe(3);
            expect(tree.root.right).toBeNull;
        })
    })
})

describe('#search', () => {
    describe('with a value that is not in the tree', () => { 
        it('returns false', () => {
            const tree = new Tree;
            tree.insert(5);
            tree.insert(7);
            tree.insert(3);
            expect(tree.search(9)).toBe(false);
        })
    })

    describe('with a value that is in the tree', () => {
        it('returns true', () => {
            const tree = new Tree;
            tree.insert(5);
            tree.insert(7);
            tree.insert(3);
            expect(tree.search(7)).toBe(true);
        })
    })

    describe('with an empty tree', () => {
        it('returns false', () => {
            const tree = new Tree;
            expect(tree.search(7)).toBe(false);
        })
    })
})


describe('minValue', () => {
    describe('with a non-empty tree', () => {
        it('returns the minimum value', () => {
            const tree = new Tree;
            tree.insert(5)
            tree.insert(3)
            tree.insert(7)
            tree.insert(9)
            tree.insert(2)
            tree.insert(1)
            tree.insert(0)
            tree.insert(-5)
            expect(tree.minValue()).toBe(-5);
        })
    })
})