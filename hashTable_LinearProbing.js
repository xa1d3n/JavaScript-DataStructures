/*
 * Hash Table - Linear Probing
*/

var HashEntry = function(key, value) {
    this.key = key;
    this.value = value;
}

var HashTable = function(size) {
    this.array = new Array(size);
    this.count = 0;
}

HashTable.prototype.isFull= function() {
    return this.count === this.array.length;
}

HashTable.prototype.insert = function(key, value) {

    // hashed index
    i = base = key % this.array.length;

    var step = 1;
    // handle collision
    while (this.array[i] && this.array[i].key > 0 ) {
        i = (base + step * 1) % this.array.length;
        step++;
    }
    this.array[i] = new HashEntry(key, value);
    this.count++;
}

HashTable.prototype.find = function(key) {
    // get hashed index
    i = base = key % this.array.length;

    var step = 1;
    while (true) {
        if (!this.array[i]) {
            return "not found";
        }
        else if (this.array[i] && this.array[i].key === key) {
            return this.array[i].value;
        }
        else {
            i = (base + step * 1) % this.array.length;
        }
        step++;
    }
}

HashTable.prototype.delete = function(key) {
    // get hashed index
    i = base = key % this.array.length;

    var step = 1;
    while (true) {
        if (!this.array[i]) {
            return "key not found";
        }
        else if (this.array[i].key === key) {
            this.array[i] = -1; // mark key as deleted
            this.count--;
            break;
        }
        else {
            i = (base + step * 1) % this.array.length;
        }
        step++;
    }
}

var ht = new HashTable(5);
ht.insert(7, "Hello");
ht.insert(7, "hi");
ht.insert(7, "Bye");
