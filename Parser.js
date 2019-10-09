/*
    OBJECTIVE: given a string like "str1 + Str2" create a node  



*/

function Node() {
    this.token = '';
    this.left;
    this.right;
}

let str = "test1+something*abc";

let reg = /[\w]+/g;

let ob = [];
let match;

while(match = reg.exec(str)) {
    ob.push(match);
}







