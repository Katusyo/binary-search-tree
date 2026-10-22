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