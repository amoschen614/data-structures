var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = new Node(value);
    if (list.head === null) {  
      list.head = newNode;
      list.tail = newNode;
    } else { 
      list.tail.next = newNode;
      list.tail = newNode;
    }
  };

  list.removeHead = function() {
    var originalHead = list.head;
    var value = originalHead.value;
    list.head = list.head.next;
    delete originalHead;
    return value;
  };

  list.contains = function(target) {
    var curNode = list.head;
    while (curNode.next !== null) {
      if (curNode.value === target) {
        return true;
      }
      curNode = curNode.next;
    }
    return curNode.value === target;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addToTail is O(1), removeHead is O(1), contains is O(n) 
 */
