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
    var tmp = list.head;
    var value = tmp.value;
    list.head = list.head.next;
    delete tmp;
    return value;
  };

  list.contains = function(target) {
    var curNode = list.head;
    while (curNode.next !== null) {
      console.log(curNode.value);
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
 */
