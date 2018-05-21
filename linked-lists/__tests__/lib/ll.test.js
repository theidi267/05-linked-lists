'use strict';

let LL = require('../../lib/ll.js');

describe('Linked List', () => {

  it('constructor()', ()=> {
    let list = new LL();
    expect(list.head).toBeNull();
  });

  it('append()', ()=> {  // Big O is 1 (constant time)
    let list = new LL();
    let initialValue = 'First One';
    list.append(initialValue);
    expect(list.head.value).toEqual(initialValue);

    let newValue = 'Soemthing Else';
    list.append(newValue);
    expect(list.head.value).toEqual(initialValue);

    let anotherOne = 'Another One';
    list.append(anotherOne);
    expect(list.head.next.next.value).toEqual(anotherOne);
  });

  it('prepend()', () => {  // Big O is 1 (constant time)
    let list = new LL();
    let initialValue = 'First One';
    list.prepend(initialValue);
    expect(list.head.value).toEqual(initialValue);

    let newValue = 'New Head';
    list.prepend(newValue);
    expect(list.head.value).toEqual(newValue);

    let newerValue = 'Brand New Head';
    list.prepend(newerValue);
    expect(list.head.next.value).toEqual(newValue);
  });

  it('reverse()', () => {  // big O is n2
    let list = new LL();
    let initialValue = 'First One';
    list.append(initialValue);
    let secondValue = 'Second Thing';
    list.append(secondValue);
    let thirdValue = 'Third Thing';
    list.append(thirdValue);    
       
    list.reverse();
    console.log(list.head);
    expect(list.head.value).toEqual(thirdValue);
  });
});