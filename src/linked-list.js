const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) {
        let newNode = new Node(data)
        if (this.length == 0) {
            this._head = newNode;
            this._tail = newNode;
        }
        else {
            this._tail.next = newNode;
            newNode.prev = this._tail;
            this._tail = newNode;
        }
        this.length++;
        return this;
    }

    head() {
        if (!!this._head)
            return this._head.data;
        return null;
    }

    tail() {
        if (!!this._tail)
            return this._tail.data;
        return null;
    }

    at(index) {
        let i = 0;
        let currentNode = this._head;
        while (i++ < index) {
            currentNode = currentNode.next;
        }
        return currentNode.data;
    }

    insertAt(index, data) {
        if (index == 0) {
            this.append(data);
        }
        else {
            let i = 0;
            let currentNode = this._head;
            while (i++ < index - 1) {
                currentNode = currentNode.next;
            }
            let newNode = new Node(data, currentNode, currentNode.next);
            currentNode.next = newNode;
            this.length++;
        }
        return this;
    }

    isEmpty() {
        return this.length == 0
    }

    clear() {
        this._head = null;
        this._tail = null;
        this.length = 0;
        return this;
    }

    deleteAt(index) {
        if (index == 0) {
            return this.clear();
        }
        let i = 0;
        let currentNode = this._head;
        while (i++ < index - 1) {
            currentNode = currentNode.next;
        }
        if (!!currentNode.next) {
            currentNode.next = currentNode.next.next;
            currentNode.next.prev = currentNode;
        }
        this.length--;
        return this;
    }

    reverse() {
        let newHead = this._tail;
        let newTail = this._head;
        let current = newHead;
        while (current != newTail) {
            let newPrev = current.next;
            current.next = current.prev;
            current.prev = newPrev;
            current = current.next;
        }
        this._head = newHead;
        this._tail = newTail;
        return this;
    }

    indexOf(data) {
        let index = 0;
        let currentNode = this._head;
        while (currentNode.data != data) {
            if (currentNode.next == null)
                return -1;
            currentNode = currentNode.next;
            index++;
        }
        return index;
    }
}

module.exports = LinkedList;
