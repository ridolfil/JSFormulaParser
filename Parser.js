//export class Parser { }



class Node {
    constructor() {
        this.token = null;
        this.left = null;
        this.right = null;
        this.value = null;
    };
}
/*
Node.prototype.toString(){
    let traversed = false, level =0;

    while(traversed){
        traversed = flase;
        if()
    }
}
*/

var TOKEN_PRIORITY = {
    '*': 1,
    '/': 1,
    '+': 2,
    '-': 2
};

/*
    List of operations and functions
*/

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const OPERATION = {
    "+": add,
    '-': subtract,
    '*': multiply,
    '/': divide,
};

var op_regx = /[\w]+/g;
var tkn_regx = /[\+\-\/\*]/g;

let index_position = 0;
let str = "test1*something+bb/dd";

let test = parse(str, 0);

console.log(test);

function parse(str, ind) {
    let n = new Node();
    op_regx.lastIndex = tkn_regx.lastIndex = ind;      //set the index
    let operand = op_regx.exec(str);
    let tkn = tkn_regx.exec(str)

    if (!tkn) {
        n.value = operand[0];
        return n;
    }

    let next_node = parse(str, tkn_regx.lastIndex)

    n.left = operand[0];
    n.token = tkn[0];

    if (next_node.token && TOKEN_PRIORITY[next_node.token] > TOKEN_PRIORITY[n.token]) {
        n.right = next_node.left;
        next_node.left = n;
        return next_node;
    } else {
        n.right = next_node;
        return n;
    }

}



/*
Todo function that taken the node structure gives back an object containing 
references to functions and a list of objects where to take the inputs
the sequence of the  
example is do moltiplication and then sum


*/



