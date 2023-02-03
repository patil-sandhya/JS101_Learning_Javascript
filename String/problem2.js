let a="Good morning today is Friday";
let count=0;
for(let i=0; i<a.length; i++){
  if(a[i] == " "){
    count++
  }
}
let characters=a.length -count
console.log(characters,"Words In Array")