/*
 * Hash Table - Double Hashing
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
    if (this.isFull()) {
        return "table full";
    }

    // get hash index
    var i = base = key % this.array.length;

    var step = 1;
    var secondary = 1 + key % (this.array.length - 2);

    // handle collision
    while(this.array[i]) {
        i = (base+step*secondary) % this.array.length;
        step++;
    }

    // insert
    this.array[i] = new HashEntry(key, value);
    this.count++;
}

HashTable.prototype.find = function(key) {
    // get hash index
    var i = base = key % this.array.length;

    var step = 1;
    var secondary = 1 + key % (this.array.length - 2);

    while(true) {
        if (!this.array[i]) {
            return "key not found";
        }
        else if (this.array[i].key === key) {
            return this.array[i].value;
        }
        else {
            i = (base+step*secondary) % this.array.length;
        }
    }

}

HashTable.prototype.remove = function(key) {
    // get hash index
    var i = base = key % this.array.length;

    var step = 1;
    var secondary = 1 + key % (this.array.length - 2);

    while(true) {
        if (!array[i]) {
            return "key not found";
        }
        else if (this.array[i].key === key) {
            this.array[i] = -1;
            this.count--;
            break;
        }
        else {
            i = (base+step*secondary) % this.array.length;
        }
    }
}

var table = new HashTable(5);
table.insert(8);
table.insert(3);
table.insert(8);
table.insert(8);
table.insert(8);
table.insert(9);
