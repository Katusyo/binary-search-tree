import { describe, test, expect} from "@jest/globals";
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
});

test("value that is being searched for does not exist", () => {
    const tree = new Tree([1, 2, 3, 4, 5]);

    expect(tree.find(6)).toBe(null);
});

test("finds a value that exists", () => {
    const tree = new Tree([1, 2, 3, 4, 5]);

    expect(tree.find(3).value).toBe(3);
});

test("value does not exist that we want to delete", () => {
    const tree = new Tree([1, 2, 3, 4, 5]);

    expect(tree.deleteItem(99)).toBe(false);
});

test("deletes a leaf succesfully", () => {
    const tree = new Tree([1, 2, 3]);

    expect(tree.deleteItem(1)).toBe(true);
    expect(tree.find(1)).toBe(null);
});

test("deletes a node with only a left child", () => {
    const tree = new Tree([8]);
    tree.insert(4);
    tree.insert(2);

    expect(tree.deleteItem(4)).toBe(true);
    expect(tree.find(4)).toBe(null);
    expect(tree.rootNode.left.value).toBe(2);
});

test("deletes a node with only a right child", () => {
    const tree = new Tree([5]);
    tree.insert(7);

    expect(tree.deleteItem(5)).toBe(true);
    expect(tree.find(5)).toBe(null);
    expect(tree.rootNode.value).toBe(7);
});

test("deletes the root with no children", () => {
    const tree = new Tree([8]);

    expect(tree.deleteItem(8)).toBe(true);
    expect(tree.find(8)).toBe(null);
});

test("deleted the root with only one child", () => {
    const tree = new Tree([5, 10]);

    expect(tree.deleteItem(10)).toBe(true);
    expect(tree.find(10)).toBe(null);
    expect(tree.rootNode.value).toBe(5);
});

test("deletes a node with two children", () => {
    const tree = new Tree([1, 2, 3, 4, 5, 6, 7]);

    expect(tree.deleteItem(4)).toBe(true);
    expect(tree.find(4)).toBe(null);
    expect(tree.find(1)).not.toBe(null);
    expect(tree.find(2)).not.toBe(null);
    expect(tree.find(3)).not.toBe(null);
    expect(tree.find(5)).not.toBe(null);
    expect(tree.find(6)).not.toBe(null);
    expect(tree.find(7)).not.toBe(null);
});

test("deleted a root with two children", () => {
    const tree = new Tree([4, 6, 2, 7, 1, 3, 5]);

    expect(tree.deleteItem(4)).toBe(true);
    expect(tree.find(4)).toBe(null);
        expect(tree.find(1)).not.toBe(null);
    expect(tree.find(2)).not.toBe(null);
    expect(tree.find(3)).not.toBe(null);
    expect(tree.find(5)).not.toBe(null);
    expect(tree.find(6)).not.toBe(null);
    expect(tree.find(7)).not.toBe(null);
})

test("returns true when value exists", () => {
    const tree = new Tree([1, 2, 3, 4, 5]);

    expect(tree.includes(5)).toBe(true);
});

test("returns false when value does not exitst", () => {
    const tree = new Tree([1, 2, 3, 4, 5]);

    expect(tree.includes(99)).toBe(false);
});

test("returns false when tree is empty", () => {
    const tree = new Tree([]);

    expect(tree.includes(1)).toBe(false);
});

test("throws an error when callback is missing", () => {
    const tree = new Tree([1, 2, 3]);

    expect(() => tree.levelOrderForEach()).toThrow(
        "A callback function is required"
    );
});

test("handles an empty tree", () => {
    const tree = new Tree([]);
    let called = false;

    tree.levelOrderForEach(() => {
        called = true;
    });

    expect(called).toBe(false);
});

test("visits nodes in level order", () => {
    const tree = new Tree([1, 2, 3, 4, 5, 6, 7]);
    const result = [];

    tree.levelOrderForEach((value) => {
        result.push(value);
    });

    expect(result).toEqual([4, 2, 6, 1, 3, 5, 7]);
});

test("throws an error when callback is missing", () => {
    const tree = new Tree([1, 2, 3]);

    expect(() => tree.inOrderForEach()).toThrow(
        "A callback function is required"
    );
});

test("visits nodes in in-order", () => {
    const tree = new Tree([1, 2, 3, 4, 5, 6, 7]);
    const result = [];

    tree.inOrderForEach((value) => result.push(value));

    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7]);
});

test("throws an error when callback is missing", () => {
    const tree = new Tree([1, 2, 3]);

    expect(() => tree.preOrderForEach()).toThrow(
        "A callback function is required"
    );
});

test("visits nodes in pre-order", () => {
    const tree = new Tree([1, 2, 3, 4, 5, 6, 7]);
    const result = [];

    tree.preOrderForEach((value) => result.push(value));

    expect(result).toEqual([4, 2, 1, 3, 6, 5, 7]);
});

test("throws an error when callback is missing", () => {
    const tree = new Tree([1, 2, 3]);

    expect(() => tree.postOrderForEach()).toThrow(
        "A callback function is required"
    );
});

test("visists nodes in post-order", () => {
    const tree = new Tree([1, 2, 3, 4, 5, 6, 7]);
    const result = [];

    tree.postOrderForEach((value) => result.push(value));

    expect(result).toEqual([1, 3, 2, 5, 7, 6, 4]);
});

test("returns the height of the root", () => {
    const tree = new Tree([1, 2, 3, 4, 5, 6, 7]);

    expect(tree.height(4)).toBe(2);
});

test( "returns the height of a leaf", () => {
    const tree = new Tree([1, 2, 3, 4, 5, 6, 7]);

    expect(tree.height(1)).toBe(0);
});

test("returns the height of a node with one child", () => {
    const tree = new Tree([4]);
    tree.insert(2);
    tree.insert(1);

    expect(tree.height(2)).toBe(1);
});

test("returns undefined when value does not exist", () => {
    const tree= new Tree([1, 2, 3, 4, ,5]);

    expect(tree.height(99)).toBeUndefined();
});

test("returns 0 for the root node", () => {
    const tree = new Tree([10,5, 15, 3, 7, 18]);

    expect(tree.depth(10)).toBe(0);
});

test("returns 1 for immediate children of the root", () => {
    const tree = new Tree([10, 5, 15, 3, 7, 18]);

    expect(tree.depth(5)).toBe(1);
    expect(tree.depth(18)).toBe(1);
});

test("returns the correct depth for leaf nods deeper in the tree", () => {
    const tree = new Tree([10, 5, 15, 3, 7, 18]);

    expect(tree.depth(3)).toBe(2);
    expect(tree.depth(7)).toBe(2);
    expect(tree.depth(15)).toBe(2);
});

test("returns undefined if the value does not exitst", () => {
    const tree = new Tree([10, 5, 15, 3, 7, 18]);

    expect(tree.depth(100)).toBeUndefined();
    expect(tree.depth(0)).toBeUndefined();
});

test("returns undefined when the tree is completely empty", () => {
    const tree = new Tree([]);

    expect(tree.depth(19)).toBeUndefined();
});