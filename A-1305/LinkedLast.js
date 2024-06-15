class Node {
    constructor(data) {
        this.data = data; 
        this.next = null; 
    }
}

let node1 = new Node(10);
let node2 = new Node(20);
let node3 = new Node(30);
let node4 = new Node(40);
let node5 = new Node(50);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

console.log(node1);

function traverseNodes(node) {
    let str = '';
    while (node !== null) {
        str = str + node.data + ' -> ';
        node = node.next;
    }

    console.log(str + ' null '); 
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    prepend(data) {
        let newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        this.size++; 
    }

    // Implementing append method
    append(data) {
        let newNode = new Node(data);

        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }

        this.size++;
    }

    printList() {
        let current = this.head;
        let str = '';
        while (current !== null) {
            str = str + current.data + ' -> ';
            current = current.next;
        }

        console.log(str + ' null ');
    }

    insertAt(data, index) {
        if (index < 0 || index > this.size) {
            return null; 
        }

        let newNode = new Node(data);
        if (index === 0) {
            this.prepend(data); 
            return;
        }

        let current = this.head;
        let previous;
        let count = 0;

        while (count < index) {
            previous = current;
            current = current.next;
            count++;
        }

        newNode.next = current;
        previous.next = newNode;
        this.size++;
    }

    removeFirst() {
        if (!this.head) {
            return null;
        }

        let removedNode = this.head;
        this.head = this.head.next;
        this.size--;
        return removedNode;
    }

    // Implementing removeLast method
    removeLast() {
        if (!this.head) {
            return null;
        }

        if (this.head.next === null) {
            let removedNode = this.head;
            this.head = null;
            this.size--;
            return removedNode;
        }

        let current = this.head;
        let previous = null;

        while (current.next !== null) {
            previous = current;
            current = current.next;
        }

        previous.next = null;
        this.size--;
        return current;
    }

    removeAt(index) {
        if (index < 0 || index >= this.size) {
            return null; 
        }

        if (index === 0) {
            return this.removeFirst();
        }

        let current = this.head;
        let previous;
        let count = 0;

        while (count < index) {
            previous = current;
            current = current.next;
            count++;
        }

        previous.next = current.next;
        this.size--;

        return current.data;
    }

    search(data) {
        let current = this.head;

        while (current !== null) {
            if (current.data === data) {
                return true;
            }
            current = current.next;
        }

        return false;
    }

    updateAt(data, index) {
        if (index < 0 || index >= this.size) {
            return null; 
        }

        let current = this.head;
        let count = 0;

        while (count < index) {
            current = current.next;
            count++;
        }

        current.data = data; 
    }
}

let linkedList = new LinkedList();

// 10 -> null
// 20 -> 10 -> null
// 30 -> 20 -> 10 -> null
linkedList.prepend(10);
linkedList.prepend(20);
linkedList.prepend(30);
linkedList.insertAt(15, 2);
linkedList.updateAt(25, 3);


linkedList.printList();

linkedList.append(50);
linkedList.append(60);


linkedList.printList();

linkedList.removeLast();

linkedList.printList();
