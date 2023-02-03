let a="Good morning today is Friday";
let count=0;
for(let i=0; i<a.length; i++){
  if(a[i] == " "){
    count++
  }
}
console.log(count+1,"Words In Array")