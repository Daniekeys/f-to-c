



















function checkNumber(F) {
  let final = '';
 let inputpopo = typeof(F);
 if(typeof(F)=== 'string' || typeof(F) === 'number') {
   let one = Number(F);
   let C = (one - 32) * 5 / 9;
   finaly = C.toFixed(4) + " deg C";
   return finaly;
  }
  if(toString.call(F) === "[object Array]") {
   let kuda = [];
   kuda.push(F);
   let shoe =  JSON.stringify(kuda);
   return final = `${shoe} is not a valid number but a/an Array.`
 }
 if(F instanceof Object) {
   let bobo = JSON.stringify(F);
   return finallu = `${bobo} is not a valid number but a/an object.`
  }
 else{
   final = `${dab(F)} is not a valid number but a/an ${inputpopo}.`
   return final;
 }
}

// console.log(checkNumber(['tyty','tortise' ]));
// console.log(checkNumber({por:'sheet', bgd:"opwe"}));
// console.log(checkNumber(true));
// console.log(checkNumber(undefined));
// console.log(checkNumber(dab()));



function dab(item) {
  return item;
}
function popo(item) {
 return typeof(item);
}
// console.log(popo({book:'success'}));
// console.log(dab({book:'success'}));
// console.log(dab(['success']));



const form = document.getElementById('form');
const btn = document.getElementById('btn');
const input = document.getElementById('input');
const answer = document.getElementById('answer');

form.addEventListener('submit', (e)=>{
e.preventDefault();
let optionAnswer = input.value;
let gor = JSON.parse(optionAnswer);
let instruction =  checkNumber(gor);
answer.innerText = instruction;
});


