const chainMaker = {
  getLength() {
    return 0;
  },
  addLink(value) {
    return new Node(value);
  },
  removeLink() {
    throw new Error;
  },
  reverseChain() {
    return this;
  },
  finishChain() {
    return "";
  }
};

module.exports = chainMaker;

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }

    addLink(value = "") {
        if (this.next === null) {
            this.next = new Node(value)
        } else {
          this.next.addLink(value);
        }
        return this;
    }
    removeLink(position) {
        if (typeof position !== 'number' || position <= 0) {
            throw new Error;
        }
        let count = 1;
        let table = this;
        while (table !== null) {
          if(position === count) {
            table.value = table.next.value;
            table.next = table.next.next;
            return this;
          }
          count++;
          table = table.next;
        }
        throw new Error;
    }
    reverseChain() {
      let newList = new Node(this.value);
      let table = this.next;
      while(table !== null) {
          newList = this.prepend(newList, table.value);
          table = table.next;
      }
      return newList;
    }
    prepend(list, value) {
      let newList = new Node;
      newList.value = value;
      newList.next = list;
      return newList;
    }
    getLength() {
      let length = 0;
      let table = this;
      while(table !== null) {
        length++;
        table = table.next;
      }
      return length;
    }
    finishChain() {
      let table = this;
      let result = [];
      while(table !== null) {
        result.push( "( " + String(table.value) + " )");
        table = table.next;
      }
      return result.join("~~");
    }
}