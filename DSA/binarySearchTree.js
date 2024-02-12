class Node {
    constructor(val) {
        this.val = val; // Assign the value passed by the user as the root
        this.left = null; // Set the left value to null
        this.right = null; // Set the right value to null
    }
}

class BST {
    constructor() {
        this.root = null; // Construct the binary search tree without any values
    }

    insert(val) {
        const newNode = new Node(val); // Create the new node to be added

        if (this.root === null) { // If the root of the BST is null we can add the current node as the root of the binary search tree
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode); // Call another function to find out where to add the value.
        }
    }

    // Helper function for the insert function
    insertNode(currentNode, newNode) {
        if (currentNode.val > newNode.val) { // If the value of the current node is greater than the node to be added move left
            if (currentNode.left === null) { // If the subtree on the left side is null
                currentNode.left = newNode; // Assign the whole subtree
            } else {
                this.insertNode(currentNode.left, newNode); // Recursively call the function to the left subtree
            }
        } else { // If the value of the newNode is bigger then the value of the current node move right
            if (currentNode.right === null) { // If the subtree on the right side is null
                currentNode.right = newNode; // Assign the whole subtree
            } else {
                this.insertNode(currentNode.right, newNode); // Recursively call the function to the right subtree
            }
        }
    }
}
