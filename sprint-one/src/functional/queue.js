var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var counter = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[counter++] = value;
  };

  someInstance.dequeue = function() {
    
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
