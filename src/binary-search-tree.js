const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.treeRoot = null;
  }

  root() {
    return this.treeRoot;
  }

  add(data) {
    const newNode = new Node(data);
    if (this.treeRoot === null) {
      this.treeRoot = newNode;
    } else {
      this.addNode(this.treeRoot, newNode);
    }
  }

  addNode(node, newNode) {
    if (node.data > newNode.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.addNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.addNode(node.right, newNode);
      }
    }
  }

  has(data) {
    let node = this.treeRoot;
    while (node !== null) {
      if (node.data === data) {
        return true;
      }
      if (node.data > data) {
        node = node.left;
      } else {
        node = node.right;
      }
    }
    return false;
  }

  find(data) {
    let node = this.treeRoot;
    while (node !== null) {
      if (node.data === data) {
        return node;
      }
      if (node.data > data) {
        node = node.left;
      } else {
        node = node.right;
      }
    }
    return null;
  }

  remove(data) {
    if (this.has(data)) {
      let parentNode = null;
      let node = this.treeRoot;
      while (node !== null) {
        if (node.data === data) {

          if (node.left === null && node.right === null) {
            if (parentNode.left === node) {
              parentNode.left = null;
            } else {
              parentNode.right = null;
            }
          } else if (node.left === null || node.right === null) {
            if (parentNode === null) {
              if (node.left !== null) {
                this.treeRoot = node.left;
                node.left = null;
              } else {
                this.treeRoot = node.right;
                node.right = null;
              }
            } else {
              if (parentNode.left === node) {
                parentNode.left = node.left ? node.left : node.right;
              } else {
                parentNode.right = node.left ? node.left : node.right;
              }
            }
          } else {
            // const valueOfNextBiggerNode = this.findNextBiggerNode.call(node.right); //node.right.min();
            const nextBiggerNode = this.findNextBiggerNode(node.right);
            if (node.right === nextBiggerNode) {
              node.data = node.right.data;
              node.right = null;
            } else {
              this.remove(nextBiggerNode.data);
              node.data = nextBiggerNode.data;
            }
          }
          break;
        } else {
          parentNode = node;
          if (node.data > data) {
            node = node.left;
          } else {
            node = node.right;
          }
        }
      }
    }
  }

  findNextBiggerNode(nodeRight) {
    let node = nodeRight;
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  }

  min() {
    let node = this.treeRoot;
    while (node.left !== null) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    let node = this.treeRoot;
    while (node.right !== null) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};