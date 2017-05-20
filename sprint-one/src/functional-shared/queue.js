var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};
  instance.headIndex = 0;
  instance.tailIndex = 0;
  instance.storage = {};
  _.extend(instance, queueMethods);
  return instance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.tailIndex++] = value;
};

queueMethods.dequeue = function() {
  if (this.tailIndex - this.headIndex > 0) {
    return this.storage[this.headIndex++];
  }
}; 

queueMethods.size = function() {
  return this.tailIndex - this.headIndex;
};
