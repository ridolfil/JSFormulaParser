var testobj = {
    scope:null
    //function calculate({})
}


var add = (a,b) => (a*b);
var mult = (a,b) => (a+b);

testobj.scope = {
        n1:3, 
        n2:4,
        n3:2
    };

testobj[0] = add;//(this.scope.n1,3)
testobj[1] = mult;//(1, this.first)

testobj.first(testobj.scope.n1,9)
/*
    @param a:Number
*/
Console.log(testobj.cal)
