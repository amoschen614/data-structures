var BinarySearchTree = function(value) {
  // insert, contains, depthFirstLog
    // insert values at the correct location in the tree
    // write separate contains method
  // sorted would be: left, self, right
  var curNode = {};
  curNode.left = null;
  curNode.right = null;
  curNode.value = value;
  
  curNode.insert = function(value) {
    if (value < curNode.value) {
      if (curNode.left) {
        curNode.left.insert(value);
      } else {
        curNode.left = BinarySearchTree(value);
      }
    } else {
      if (curNode.right) {
        curNode.right.insert(value);
      } else {
        curNode.right = BinarySearchTree(value);
      }
    }
  };

  curNode.contains = function(value) {
    if (curNode.value === value) {
      return true;
    } else if (!curNode.left && !curNode.right) {
      return false;
    } else if (curNode.value < value) {
      return curNode.right.contains(value);
    } else if (curNode.value > value) {
      return curNode.left.contains(value);
    }
  };

  curNode.depthFirstLog = function(cb) {
    cb(curNode.value);
    if (curNode.left) {
      curNode.left.depthFirstLog(cb);
    } 
    if (curNode.right) {
      curNode.right.depthFirstLog(cb);
    }
  };

  return curNode;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
