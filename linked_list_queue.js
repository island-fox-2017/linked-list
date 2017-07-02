class LinkedList {
  constructor (arr) {
    this.arr = arr;
    this.linkedList = [];
  }

  buildLinkedList() {
    for (let i = 0; i < this.arr.length; i++) {
      this.linkedList[i] = [];
      this.linkedList[i][0] = this.arr[i];
      this.linkedList[i][1] = i+1;
    }
    this.linkedList[this.arr.length - 1][1] = null;
    return this.linkedList;
  }

  getLength () {
    return this.buildLinkedList().length;
  }

  getHead () {
    return this.linkedList[0][0];
  }

  getTail() {
    return this.linkedList[this.linkedList.length - 1][0];
  }

  push(num) {
    this.linkedList[this.linkedList.length - 1][1] = this.linkedList.length;
    this.linkedList.push([num, null]);
  }

  pop() {
    this.linkedList.pop();
    this.linkedList[this.linkedList.length - 1][1] = null;
  }
  printLinkedList () {
    return this;
  }
}

let list = new LinkedList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(list.getLength());
console.log(list.getHead());
console.log(list.getTail());
list.push(11);
console.log(list.getTail());
list.pop();
console.log(list.getTail());
// console.log(list.printLinkedList());
