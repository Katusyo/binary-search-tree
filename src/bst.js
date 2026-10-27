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
        let currentNode = this.rootNode;

        while (currentNode !== null) {
            if (value === currentNode.value) {
                return currentNode;
            }

            if (currentNode.value > value) {
                currentNode = currentNode.left;
            } else {
                currentNode = currentNode.right;
            }
        }
        return null;
    }

    deleteItem(value) {
        let currentNode = this.rootNode;
        let parentNode = null;

        while (currentNode !== null && currentNode.value !== value) {
            parentNode = currentNode;

            if (value < currentNode.value) {
                currentNode = currentNode.left;
                } else {
                    currentNode = currentNode.right;
                }
            }

        if (currentNode === null) {
            return false;
        }

        if (currentNode.left === null || currentNode.right === null) {
            const nextNode = currentNode.left !== null ? currentNode.left : currentNode.right;
            
            if (parentNode === null) {
                this.rootNode = nextNode;
            } else if (parentNode.left === currentNode) {
                parentNode.left = nextNode;
            } else {
                parentNode.right = nextNode;
            }
        }

        else {
            let successorParent = currentNode;
            let successor = currentNode.right;

            while (successor.left !== null) {
                successorParent = successor;
                successor = successor.left;
            }

            currentNode.value = successor.value;

            if (successorParent.left === successor) {
                successorParent.left = successor.right;
            } else {
                successorParent.right = successor.right;
            }
        }
        return true;
    }

    includes(value) {
         let currentNode = this.rootNode;

        while (currentNode) {
            if (value === currentNode.value) {
                return true;
            }

            if (currentNode.value > value) {
                currentNode = currentNode.left;
            } else {
                currentNode = currentNode.right;
            }
        }
        return false;
    }

    levelOrderForEach(callback) {
        if (typeof callback !== "function") {
            throw new Error("A callback function is required");
        }

        if (!this.rootNode) {
            return undefined;
        }

        const queue = [this.rootNode];
            
        while (queue.length > 0) {
            const currentNode = queue.shift();
            callback(currentNode.value);
            
            if (currentNode.left !== null) {
                queue.push(currentNode.left);
            }

            if (currentNode.right !== null) {
                queue.push(currentNode.right);
            }
        }
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