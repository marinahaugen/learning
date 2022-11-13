var MyHashSet = function() {
  this.hashSet = {};
};

MyHashSet.prototype.hash = function(key) {
  return key % 5;
}

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
  let bucketIndex = this.hash(key);
  this.hashSet[bucketIndex] = key;
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
  let bucketIndex = this.hash(key);
  delete this.hashSet[bucketIndex];
};

/**
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
  let bucketIndex = this.hash(key);
  return this.hashSet[bucketIndex] ? true : false;
};

/*
 * Your MyHashSet object will be instantiated and called as such:
*/
let set = new MyHashSet();
let key = 1987;
set.add(key);
console.log(`Added ${key}: ${JSON.stringify(set)}`);
let isInSet = set.contains(key);
console.log(`${key} is in set: ${isInSet}`);
console.log(`${1000} is in set: ${set.contains(1000)}`);
set.remove(key);
console.log(`${key} was removed: ${JSON.stringify(set)}`);

