//import Queue from 'queue';
const Queue = require('queue');

class CustomerRequest {
    constructor(name, id, contactNumber, description, dateTime) {
        this.name = name;
        this.id = id;
        this.contactNumber = contactNumber;
        this.description = description;
        this.dateTime = dateTime;
    }
}

// Create a new queue
const queue = new Queue();

// Add customer requests to the queue
queue.push(new CustomerRequest("Ankit Tiwari", "C1", "1234567890", "Issue with account", new Date()));
queue.push(new CustomerRequest("Ram Singh", "C2", "9876543210", "Payment discrepancy", new Date()));

// Display all requests in the queue
console.log("All requests in the queue:");
console.log(queue.toArray());


//import Stack from 'stack';
const Stack = require('stack');

class BrowserHistoryEntry {
    constructor(url, dateTime) {
        this.url = url;
        this.dateTime = dateTime;
    }
}

// Create a new stack
const historyStack = new Stack();

// Add browser history entries to the stack
historyStack.push(new BrowserHistoryEntry("https://example.com/page1", new Date()));
historyStack.push(new BrowserHistoryEntry("https://example.com/page2", new Date()));

// Display all entries in the stack
console.log("All entries in the stack:");
console.log(historyStack.toArray());
