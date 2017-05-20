var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var tailIndex = 0;
  var headIndex = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[tailIndex++] = value;
  };

  someInstance.dequeue = function() {
    if (tailIndex - headIndex > 0) {
      return storage[headIndex++];
    }
  };

  someInstance.size = function() {
    return tailIndex - headIndex;
  };

  return someInstance;
};
