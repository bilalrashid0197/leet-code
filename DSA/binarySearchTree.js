class Node{
	constructor(val){
		this.val = val;
		this.left = null;
		this.right = null;
	}
}


class BST{
	constructor(){
		this.root = null;
	}

	// Depth-First Search
	depthFirstSearch(root=this.root){
		let outputArray = [];
		//this.inorder(root, outputArray); 
		//this.preorder(root, outputArray);
		//this.postorder(root, outputArray);
		return outputArray;
	}

	// Inorder traversal method: left subtree -> root -> right subtree
	inorder(root, array){
	    // If the current node is not null, proceed with the traversal
	    if(root !== null){ 
	        // Recursively traverse the left subtree
	        this.inorder(root.left, array); 
	        // Visit the current node (push its value to the array)
	        array.push(root.val);
	        // Recursively traverse the right subtree
	        this.inorder(root.right, array);
	    }
	    // When the node is null, the function returns implicitly, backtracking to the previous node.
	}

	// Preorder traversal method: root -> left subtree -> right subtree
	preorder(root, array){
	    // If the current node is not null, proceed with the traversal
	    if(root !== null){ 
	        // Visit the current node (push its value to the array)
	        array.push(root.val);
	        // Recursively traverse the left subtree
	        this.preorder(root.left, array);
	        // Recursively traverse the right subtree
	        this.preorder(root.right, array); 
	    }
	    // When the node is null, the function returns implicitly, backtracking to the previous node.
	}

	// Postorder traversal method: left subtree -> root -> right subtree
	postorder(root, array){
	    // If the current node is not null, proceed with the traversal
	    if(root !== null){ 
	        // Recursively traverse the left subtree
	        this.postorder(root.left, array); 
	        // Recursively traverse the right subtree
	        this.postorder(root.right, array); 
	        // Visit the current node (push its value to the array)
	        array.push(root.val);
	    }
	    // When the node is null, the function returns implicitly, backtracking to the previous node.
	}

	// Inserting a value
	insertNode(val){
		const nodeToAdd = new Node(val) // Create the new node that needs to be added
		if(this.root === null){
			this.root = nodeToAdd;
		} else {
			this.addNode(this.root, nodeToAdd)
		}
	}

	// Helper function for insertNode
	addNode(currentNode, newNode){
		if(currentNode.val > newNode.val){ // If the value is greater - move left
 			if(currentNode.left === null){
 				currentNode.left = newNode;
 			} else {
 				this.addNode(currentNode.left, newNode);
 			}
		} else { // Else move right
			if(currentNode.right === null){
				currentNode.right = newNode
			} else {
				this.addNode(currentNode.right, newNode)
			}
		}
	}
	// Add delete a certain node, BFS	
}
