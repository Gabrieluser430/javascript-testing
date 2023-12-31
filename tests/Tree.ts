class Tree {
    root: TreeNode | null;
    size: number;

    constructor() {
        this.root = null;
        this.size = 0;
    }

    insert(value) {
        let currentNode;

        if(this.root === null) {
            currentNode = new TreeNode(value);
            this.root = currentNode;
            this.size++;
        } else if (this.root) {
            currentNode = this.root;
            this.insertRecursively(currentNode, value)
            this.size++;
        }
    }  

    insertRecursively(currentNode:TreeNode, value) {

        if (value < currentNode.value) {
            if(currentNode.left === null) {
                currentNode.left = new TreeNode(value);
            } else {
                this.insertRecursively(currentNode.left, value);
            }
        } else {
            if(currentNode.right === null) {
                currentNode.right = new TreeNode(value);
            } else {
                this.insertRecursively(currentNode.right, value);
            }
        }
    }

    search(target:any) {
        if (this.size === 0) return false;

        const currentNode = this.root;
        return this.searchRecursively(currentNode, target);
    }

    searchRecursively(currentNode, target) {
        if (currentNode === null) {
            return false;
        }  

        if(currentNode?.value === target) {
            return true;
        } else if(currentNode?.value > target) {
            return this.searchRecursively(currentNode?.left, target);
        } else if(currentNode?.value < target) {
            return this.searchRecursively(currentNode?.right, target);
        }
    }

    minValue() {
        if (this.size === 0) return null;

        let currentNode = this.root;
        return this.minValueRecursively(currentNode);
    }

    minValueRecursively(currentNode: TreeNode | null | undefined) {
        if (currentNode?.left === null) {
            return currentNode?.value;
        } else {
            return this.minValueRecursively(currentNode?.left)
        }
    }
    
}

class TreeNode {
    value: any;
    left: TreeNode | null
    right: TreeNode | null
    
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

export default Tree;