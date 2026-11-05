# Binary Search Tree

A balanced binary search tree implementation in JavaScript, built from scratch. It includes a full set of operations, all four traversals, balance checking and rebalancing, plus a Jest test suite and a driver script that demonstrates the whole lifecycle of the tree.

**Demo:** the driver runs in the console -- clone the repo and run `node src/index.js`, or open the live page (https://katusyo.github.io/binary-search-tree/) with theDevTools console open to see the output.

## Built with

- JavaScript (ES modules)
- Jest for testing
- webpack for the browser build

  ## Features

  - `buildTree` -- builds a balanced tree from an array (sorted, duplicates removed)
  - `insert` and `deleteItem` -- including the two-children delete case, handled with the in-order successor
  - `find` -- locate a value in the tree
  - Trversals, all callback-based: level-order, in-order, pre-order and post-order
  - `height` and `depth` for any node
  - `isBalanced` -- checks every subtree, not just the root
  - `rebalance` -- rebuilds a balanced tree from the in-order traversal when the tree becomes skewed
  - `prettyPrint` -- renders the tree structure in the console
 
  ## The driver script

  `src/index.js` generate 15 random unique numbers,builds a balanced tree, prints all four traversals, deliberately unbalances the tree by inserting 101-105, then rebalances it and prints the traversals again to verify the result.

  ## What I learned

  - Recursion as the natural shape of tree algorithms -- most operations are a few lines once the base case is clear
  - Designing a callback-based traversal API instead of returning arrays, and what that means for callers
  - Why deleting a node with two children is the hard case, and how the in-order successor solves it
  - That a root-only balance check is not enough -- `isBalanced` has to verify every subtree
  - Testing data structures with Jest, including edge cases like duplicate inserts and deleting leaf, one-child and two-child nodes

  ## Run it locally

    git clone https://github.com/Katusyo/binary-search-tree.git
    cd binary-search-tree
    npm install
    node src/index.js  # run the driver script
    npm test      # run the Jest test suite

  ## About

  Built as part of The Odin Project's JavaScript course (Binary Search Tree project).
