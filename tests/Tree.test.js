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