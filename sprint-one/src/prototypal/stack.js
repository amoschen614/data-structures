var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.tailEl = 0;
  someInstance.storage = {};

  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.tailEl++] = value;
};

stackMethods.pop = function() {
  if (this.tailEl > 0) {
    var value = this.storage[this.tailEl - 1];
    delete this.storage[--this.tailEl];
    return value;
  }
};

stackMethods.size = function() {
  return this.tailEl;
};
