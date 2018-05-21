'use strict';

const Node = require('./node.js');

class LinkedList {

  constructor() {
    this.head = null;
  }

  append(value) {

    let node = new Node(value); // This happens if the list is empty    
    if(! this.head) {
      this.head = node;
      return this;
    }    
    let currentNode = this.head; // If we have stuff, need add to end
    while(currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    return this;
  }
  prepend(value) {

    let node = new Node(value);
    if(! this.head) {
      this.head = node;
      return this;
    }
    let newHead = node;
    if(this.head){
      newHead.next = this.head;
      this.head = newHead; 
    }   
  }
  // reverse(list){
  //   let nodesArray = [];
  //   let current = this.head;

  //   while (current) {
  //     nodesArray.push(current);
  //     current = current.next;
  //   };

  //   let reversedLL = new LinkedList();
  //   reversedLL.head = nodesArray.pop();
  //   current = reversedLL.head

  //   let newNodes = nodesArray.pop();

  //   while(newNodes){
  //     newNodes.next = null;
  //     current.next = newNodes;

  //     current = current.next;
  //     newNodes = nodesArray.pop();
  //   }
  //   return reversedLL;    
  // } 
  reverse() {
    let currentNode = this.head;
    let nextNode = null;
    let prevNode = null;

    while (currentNode) {
      nextNode = currentNode.next;
      currentNode.next = prevNode;
      prevNode = currentNode;
      currentNode = nextNode;
    }

    this.head = prevNode;

    return this;
  }
}
module.exports = LinkedList;