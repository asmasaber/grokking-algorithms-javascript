class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  insert(value) {
    const node = new Node(value);
    if (this.tail) {
      this.tail.next = node;
      this.tail = node;
    } else {
      this.head = this.tail = node;
    }
    this.length++;
    return node;
  }

  insertHead(value) {
    const node = new Node(value);
    if (this.head) {
      node.next = this.head;
      this.head = node;
    } else {
      this.head = this.tail = node;
    }
    this.length++;
    return node;
  }

  insertIndex(index, value) {
    if (index > this.length) {
      throw new Error("Insert index out of bounds");
    }

    if (index === 0) {
      return this.insertHead(value);
    }

    if (index === this.length) {
      return this.insert(value);
    }

    const node = new Node(value);

    let prevNode = null;
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
    node.next = currentNode;
    prevNode.next = node;
    this.length++;
    return node;
  }

  remove() {
    if (this.tail) {
      const tailNode = this.tail;
      let currentNode = this.head;
      let newTail = currentNode;
      while (currentNode.next) {
        newTail = currentNode;
        currentNode = currentNode.next;
      }
      this.tail = newTail;
      this.tail.next = null;
      this.length--;
      if (this.length === 0) {
        this.head = this.tail = null;
      }
      return tailNode;
    }

    return undefined;
  }

  removeHead() {
    if (this.head) {
      const currentHead = this.head;
      this.length--;
      if (!this.head.next) {
        this.head = this.tail = null;
      } else {
        this.head = currentHead.next;
      }
      return currentHead;
    }
    return undefined;
  }

  removeIndex(index) {
    if (index > this.length) {
      throw new Error("Insert index out of bounds");
    }

    if (index === 0) {
      return this.removeHead();
    }

    if (index === this.length - 1) {
      return this.remove();
    }

    let prevNode = null;
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
    prevNode.next = currentNode.next;
    this.length--;
    return currentNode;
  }

  print() {
    let current = this.head;
    if (!current) {
      console.log('Empty List');
    }
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

const list = new LinkedList();
list.insert(1);
list.insert(2);
list.insertHead(3);
list.insert(4);
list.insertIndex(3, 100);
// list.remove();
// list.remove();
// list.remove();

// list.remove();
// list.removeHead();
// list.removeHead();
list.removeIndex(2);
list.removeIndex(2);
list.print();
console.log('length: ', list.length)

