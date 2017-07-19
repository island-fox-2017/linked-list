class LinkedList {
  constructor (arr) {
    this.arr = arr;
    this.linkedList = [];
    for (let i = 0; i < this.arr.length; i++) {
      this.linkedList.push([]);
      this.linkedList[i][0] = this.arr[i];
      this.linkedList[i][1] = i + 1;
    }
    this.linkedList[this.arr.length - 1][1] = null;
  }

  printAll () {
    return this;
  }

  getLength () {
    return this.linkedList.length;
  }

  getHead () {
    return this.linkedList[0][0];
  }

  getTail() {
    return this.linkedList[this.linkedList.length - 1][0];
  }

  push(y) {
    this.linkedList[this.linkedList.length - 1][1] = this.linkedList.length;
    this.linkedList.push([y, null]);
  }

  pop() {
    this.linkedList.pop();
    this.linkedList[this.linkedList.length - 1][1] = null;
  }
}


let list = new LinkedList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(list.getLength());
console.log(list.getHead());
console.log(list.getTail());
list.push(11);
list.pop();
