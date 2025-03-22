let arr = [-1,0,16.5, 17, 16,500,2]
let arr2 = []

// Push (adds fl a5r) -  unshift(adds fl awl)
// shift (removes mn l awl) -  pop(removes mn l awl)
//reverse 
arr.sort(function(number, next){return number - next}); // (number, next) => (number - next)
for(let i = 0; i < arr.length; i++){
    arr2[i] = arr[i]
}
arr2 = arr2.reverse()
document.writeln(arr, '<br/>')
document.writeln(arr2)
