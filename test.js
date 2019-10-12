var testobj = {
    scope:null,
    0:32,
    get value() {return this[0];}
    //function calculate({})
}

function mult(a,b) { return a*b;}
var add = (a,b) => (a+b);

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



console.log(testobj[0](testobj.scope.n1,testobj[1](testobj.scope.n2,testobj.scope.n3)))

testobj.scope.n2 = 13;

console.log(testobj.value)

