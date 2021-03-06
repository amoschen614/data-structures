var Tree = function(value) {
  var newTree = {};
  newTree.parentNode = null;
  newTree.value = value;

  // your code here
  newTree.children = [];
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var childTree = new Tree(value);
  childTree.parentNode = this;
  this.children.push(childTree);
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  }
  var wasFound = false;
  for (let i = 0; i < this.children.length; i++) {
    wasFound = wasFound || this.children[i].contains(target);
  }
  return wasFound;
};

treeMethods.removeFromParent = function() {
  this.parentNode.children.splice(this.parentNode.children.indexOf(this.value), 1);
  this.parentNode = null;
};



/*
 * Complexity: What is the time complexity of the above functions?
 * addChild is O(1), contains is O(n)
 */
