import { describe, test, expect } from "@jest/globals";
import Tree from "../src/bst.js";

describe ("Binart Search Tree", () => {
    test("builds a balanced tree from an array", () => {
        const tree = new Tree([1, 2, 3, 4, 5, 6, 7]);

        expect(tree.rootNode.value).toBe(4);
        expect(tree.rootNode.left.value).toBe(2);
        expect(tree.rootNode.right.value).toBe(6);
    });
});

test("insert into an empty tree", () => {
    const tree = new Tree([]);

    tree.insert(5);

    expect(tree.rootNode.value).toBe(5);
});


test("value that is larger than the root node must be put to the right", () => {
    const tree = new Tree([1, 2, 3, 4, 5, 6, 7]);

    tree.insert(8);

    expect(tree.rootNode.value).toBe(4);
    expect(tree.rootNode.right.value).toBe(6);
    expect(tree.rootNode.right.right.value).toBe(7);
    expect(tree.rootNode.right.right.right.value).toBe(8);
});

test("value that is smaller than the root node must be put to the left", () => {
    const tree = new Tree([3, 7, 8, 9, 10, 4, 11]);

    tree.insert(6);

    expect(tree.rootNode.value).toBe(8);
    expect(tree.rootNode.left.value).toBe(4);
    expect(tree.rootNode.left.right.value).toBe(7);
    expect(tree.rootNode.left.right.left.value).toBe(6);
    expect(tree.rootNode.left.left.value).toBe(3);
})