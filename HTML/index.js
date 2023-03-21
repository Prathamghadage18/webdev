console.log(document)
var a = 10;
let b = 20;
console.log(a,b);
const arr = ["a","B","c"]
arr.push("S")
console.log(arr);
let d = 30;//accesible n whole document
if(true)
{
    let e = 40;//accesible only inside this block
    console.log(d)
    console.log(e)
    //var->allows us to change the values later -i.e.can be redeclared 
    //has a functional scope,in case of let in different blocks,the variables all were different copies,but in case of var 
    //all are same,if wee redeclared a variable using a var within a block,that value persists through the program
    //but in case of 'let' if we redeclare the same variable using let inside anotherr block then that new value persists in that another block and lost once we goes out of that block 
    

}
