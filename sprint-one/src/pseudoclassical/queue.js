var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.headIndex = 0;
  this.tailIndex = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.tailIndex++] = value;
};

Queue.prototype.dequeue = function() {
  if (this.tailIndex - this.headIndex > 0) {
    var value = this.storage[this.headIndex];
    delete this.storage[this.headIndex++];
    return value;
  }
};

Queue.prototype.size = function() {
  return this.tailIndex - this.headIndex;
};