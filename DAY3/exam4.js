/*문제1
let korean=prompt()
let english=prompt()
let math=prompt()
let ko=Number(korean)
let eg=Number(english)
let ma=Number(math)
let sum1=ko+eg+ma;
let avg1=sum1/3;
console.log(sum1)
console.log(avg1)
*/
/*문제2
let input1=prompt()
result=Number(input1)*Number(input1)*3.14;
console.log(result);
*/
/*문제3
let input1=prompt()
let input2=prompt()
result=(Number(input1)/Number(input2)*100);
console.log(result);
*/
/*문제4
let input1=prompt()
result1=Number(input1)%2==1;
console.log(`${result1}`)
*/
/*문제5
let num=Number(prompt());
let result2=num%7==0;
console.log(`${result2}`);
*/
/*문제6
let id=prompt();
let password=prompt();
if (id==`admin`&& password==`1234`){
    console.log("true");
}
else{
    console.log("false")
}
*/
/* 문제7
let num=Number(prompt());
if (num%2==0 && num%7==0){
    console.log("true")
}
else{
    console.log("false")
}
*/
/*문제8
let num1=Number(prompt());
let num2=Number(prompt());
if (num1+num2>=150){
    console.log("합격")
}
else{
    console.log("불합격")
}
*/

let name1=prompt();
let name2=prompt();
if (name1=="유재석"){
    console.log(name1+"(방장)"+","+name2)
}
else if (name2=="유재석"){
    console.log(name1+","+name2+"(방장)")
}
else{
    console.log(name1+","+name2)
}
