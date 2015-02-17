/*
 * Hash Table - Quadratic Probing
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
    var i = base = key % this.array.length;

    var step = 1;

    // handle collision
    while (this.array[i]) {
        i = (base+step*step) % this.array.length;
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
    while(true) {
        if (!this.array[i]) {
            return "not found"
        }
        else if (this.array[i].key === key) {
            return this.array[i].value;
        }
        else {
            i = (base+step*step) % this.array.length;
        }
        step++;
    }
}

HashTable.prototype.remove = function(key) {
    // get hash index
    var i = base = key % this.array.length;
    
    var step = 1;
    while(true) {
        if (!this.array[i]) {
            return "not found"
        }
        else if (this.array[i].key === key) {
            this.array[i] = -1;  
            this.count--; 
            break;
        }
        else {
            i = (base+step*step) % this.array.length;
        }
        step++;
    }

}

var table = new HashTable(5);
table.insert(8, "hello");
table.insert(3, "bye");
table.insert(8, "hi");
table.find(7);
table.remove(3);
