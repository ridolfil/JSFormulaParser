/**
 *  Create an object that can 
 *  - hold a list of variables
 *  - calculate and return a value based on the input variables
 *  - hold a number of functions 
 *  
 *  the variables must be bound the the defined function so that 
 *  
 **/

var testobj = {
    scope:null,
    0:32,
    value:0,
    get value() {return value = this[0];}
    //function calculate({})
}

function mult(a,b) { return a*b;}
function add(a,b) {return a+b};

testobj.scope = {
        n1:3, 
        n2:4,
        n3:2
    };

console.log(testobj.value)

testobj[0] = add;//(this.scope.n1,3)
testobj[1] = mult;//(1, this.first)


//var tmp = testobj[0](testobj.scope.n1,testobj[1]);
/*
    @param a:Number
*/


/*
console.log(testobj[0](testobj.scope.n1,testobj[1](testobj.scope.n2,testobj.scope.n3)))

testobj.scope.n2 = 13;

console.log(testobj.value)

*/