// 인터넷
function solution(priorities, location) {
    var list = priorities.map((t, i) => ({
        my: i === location,
        val: t
    }));
    var count = 0;
    while (true) {
        var cur = list.splice(0, 1)[0];
        if (list.some(t => t.val > cur.val)) {
            list.push(cur);
        }
        else {
            count++;
            if (cur.my) return count;
        }
    }
}

// 해설
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    enqueue(newValue) {
        const newNode = new Node(newValue);
        if (this.head === null) {
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    dequeue() {
        const value = this.head.value;
        this.head = this.head.next;
        return value;
    }

    peek() {
        return this.head.value;
    }
}
function solution2(priorities, location) {
    const queue = new Queue;
    for (let i = 0; i < priorities.length; i++) {
        queue.enqueue([priorities[i], i]);
    }

    priorities.sort((a, b) => b - a);

    let count = 0;
    while (true) {
        const currentValue = queue.peek();
        if (currentValue[0] > priorities[count]) {
            queue.enqueue(queue.dequeue())
        } else {
            const value = queue.dequeue();
            count++;
            if (location === value[1]) {
                return count
            }
            console.log(count)
        }
    }
}

// 직접
function solution3(priorities, location) {
    const arr = priorities.map((a, b) => ({
        loc: b === location,
        value: a
    }))
    let count = 0;
    while (true) {
        let now = arr.splice(0, 1)[0];
        if (arr.some(a => a.value > now.value)) {
            arr.push(now);
        } else {
            count++;
            if (now.loc) console.log(now)
            break
        }
    }
    console.log(arr)
}

solution([2, 1, 3, 2], 2)
solution([1, 1, 9, 1, 1, 1], 0)
solution3([1, 3, 2, 6], 1)