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

        if (value < currentNode) {
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