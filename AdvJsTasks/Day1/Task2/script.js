function reverse1(){
let reversed1 =[].slice.apply(arguments);
console.log(reversed1.reverse());

}

reverse1(1,2,3,4,5)


function reverse2(){
    let reversed2 = [].slice.call(arguments);
    console.log(reversed2.reverse());
} 

reverse2(1,2,3,4,5)