import Node from "./Node.js";

class Tree {
    constructor(array = []) {
        this.rootNode = this.buildTree(array);
    }

    buildTree(array) {
        if (!Array.isArray(array)) {
            return undefined;
        }
        if (array.length === 0) {
            return null;
        }

        array = array.sort((a, b) => a - b);
        
        const mid = Math.floor(array.length / 2);

        const node = new Node(array[mid]);

        node.left = this.buildTree(array.slice(0, mid));
        node.right = this.buildTree(array.slice(mid + 1));
        
        return node;
    }

    insert(value) {
        const newNode = new Node(value);

        if (this.rootNode === null) {
            this.rootNode = newNode;
            return this;
        }

        this.#insertNode(this.rootNode, newNode);
        return this;
    }

    #insertNode(currentNode, newNode) {
        if (newNode.value < currentNode.value) {
            if (currentNode.left === null) {
                currentNode.left = newNode;
            } else {
                this.#insertNode(currentNode.left, newNode);
            }
            return;
        }

        else if (newNode.value > currentNode.value) {
            if (currentNode.right === null) {
                currentNode.right = newNode;
            } else {
                this.#insertNode(currentNode.right, newNode);
            }
            return;
        }
        return;
    }

    find(value) {
    }

    deleteItem(value) {
    }

    includes(value) {
    }

    levelOrderForEach(callback) {
    }

    inOrderForEach(callback) {
    }

    preOrderForEach(callback) {
    }

    postOrderForEach(callback) {
    }

    height(value) {
    }

    depth(value) {
    }

    isBalanced() {
    }

    rebalance() {
    }
}

export default Tree;