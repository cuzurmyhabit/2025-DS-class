class BinaryTree {
    constructor(data, leftTree = null, rightTree = null) {
        this.data = data;
        this.leftSubtree = leftTree;
        this.rightSubtree = rightTree;
    }

    getData() {
        return this.data;
    }

    setData(data) {
        this.data = data;
    }

    getLeftSubTree() {
        return this.leftSubtree;
    }

    getRightSubTree() {
        return this.rightSubtree;
    }

    setLeftSubTree(tree) {
        this.leftSubtree = tree;
    }

    setRightSubTree(tree) {
        this.rightSubtree = tree;
    }

    // 전위 순회: 루트 > 왼쪽 > 오른쪽
    preOrderTraversal(tree) {
        if (tree === null) return;
        console.log(tree.getData());
        this.preOrderTraversal(tree.getLeftSubTree());
        this.preOrderTraversal(tree.getRightSubTree());
    }

    // 중위 순회: 왼쪽 > 루트 > 오른쪽
    inOrderTraversal(tree) {
        if (tree === null) return;
        this.inOrderTraversal(tree.getLeftSubTree());
        console.log(tree.getData());
        this.inOrderTraversal(tree.getRightSubTree());
    }

    postOrderTraversal(tree) {
        if (tree === null) return;
        this.inOrderTraversal(tree.getLeftSubTree());
        this.inOrderTraversal(tree.getRightSubTree());
        console.log(tree.getData());
    }

    removeLeftSubTree(){
        let.deletingNode = this.getLeftSubTree();
        this.setLeftSubTree(null);
        return deletingNode;
    }

    removeRightSubTree(){
        let.deletingNode = this.RightSubTree();
        this.setRightSubTree(null);
        return deletingNode;
    }
}

export { BinaryTree };
