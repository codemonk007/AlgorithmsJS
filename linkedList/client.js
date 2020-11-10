let l =require('./LinkedList');
let linkedList = l.linkedList;
let client = new linkedList();
client.insertAtStart(10)
client.insertAtStart(20)
client.insertAtStart(30)
client.insertAtpos(1,100)
console.log("____________________________");
console.log(client.head);
console.log("***************************");
// client.deleteAtStart()
// client.deleteAtEnd()
// client.deleteAtpos(1)
// client.deletewithValue(100)
// client.findvalue(1)
// client.findIndex(100)
// console.log(client.isPresent(1001));


