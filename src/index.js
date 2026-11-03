import Tree, { prettyPrint } from "./bst.js";

function generateRandomNumbers(size) {
    const numbers = new Set();
    while (numbers.size < size) {
        numbers.add(Math.floor(Math.random() * 100));
    }
    return Array.from(numbers);
}

function runDriverScript() {
    console.log("=== BST DRIVER SCRIPT ===\n");

    const randomArray = generateRandomNumbers(15);
    console.log(`1. Generating 15 unique random numbers:\n [${randomArray.join(', ')}]\n`);

    const bst = new Tree(randomArray);

    console.log("Initial Binary Search Tree:");
    prettyPrint(bst.rootNode);

    console.log(`2. Is the tree balanced? -> ${bst.isBalanced() ? "O YES" : "X NO"}\n`);

    const preOrderElements = [];
    bst.preOrderForEach((value) => preOrderElements.push(value));
    console.log(`3. Pre-Order Elements Traversal:\n [${preOrderElements.join(', ')}]\n`);

    const inOrderElements = [];
    bst.inOrderForEach((value) => inOrderElements.push(value));
    console.log(`3b. In-Order Elements Traversal (should be sorted):\n [$inOrderElements.join(', ')}]\n`);

    const postOrderElements = [];
    bst.postOrderForEach((value) => postOrderElements.push(value));
    console.log(`3c. Post-Order Elements Traversal:\n [${postOrderElements,join(', ')}]`);
    
    console.log("4. Unbalancing the tree by inserting large values (101, 102, 103, 104, 105)...");
    bst.insert(101);
    bst.insert(102);
    bst.insert(103);
    bst.insert(104);
    bst.insert(105);
    console.log(`    Is the tree still balanced -> ${bst.isBalanced() ? "O YES" : "X NO"}\n`);

    console.log("Tree after inserting five values:");
    prettyPrint(bst.rootNode);

    console.log("5. Running bst.rebalance()...");
    bst.rebalance();

    console.log("Tree after rebalancing:");
    prettyPrint(bst.rootNode);

    console.log(`6. Is the tree balanced after rebalancing? -> ${bst.isBalanced() ? "O YES" : "X NO"}\n`);

    let nodeCount = 0;
    bst.levelOrderForEach(() => nodeCount++);
    console.log(`Number of nodes after rebalancing: ${nodeCount}`);

    const postRebalanceElements = [];
    bst.preOrderForEach((value) => postRebalanceElements.push(value));
    console.log(`7. New Pre-Order Elements Traversal:\n  [${postRebalanceElements.join(', ')}]\n`);

    const postRebalanceInOrder = [];
    bst.inOrderForEach((value) => postRebalanceInOrder.push(value));
    console.log(`7B. New In-Order ELements Traversal (Should still be sorted with new items):\n  [${postRebalanceInOrder.join(', ')}]\n`);

    const postRebalancePostOrder = [];
    bst.postOrderForEach((value) => postRebalancePostOrder.push(value));
    console.log(`7c. New Post-Order Elements Traversal:\n [${postRebalancePostOrder.join(', ')}]\n`);

    const newRootValue = bst.rootNode.value;
    console.log(`8. Quick check on the new Root Node (${newRootValue}):`);
    console.log(`  - Depth: ${bst.depth(newRootValue)} (Expected: 0)`);
    console.log(`  - Height: ${bst.height(newRootValue)} (Expected: > 0)\n`);

    console.log("=== BST DRIVER SCRIPT SUCCESSFUL ===");
}

runDriverScript();