var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.tailIndex = 0;
};

Stack.prototype.push = function(value) {
  this.storage[this.tailIndex++] = value;
};

Stack.prototype.pop = function() {
  if (this.tailIndex > 0) {
    var value = this.storage[this.tailIndex - 1];
    delete this.storage[--this.tailIndex];
    return value;
  }
};

Stack.prototype.size = function() {
  return this.tailIndex;
};
