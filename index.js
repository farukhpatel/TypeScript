// let a:number = 10;
// let b:number = 20;
// function sum(a:number, b:number):number {
//   return a + b;
// }
// console.log("sum pro. in ts", sum(a, b));
// union operator in typeScript
// type ID=number | string;
// let id:ID='10';
// type Student={
//   name:string;
//   rollNumber:number;
// }
// const studentObj:Student={
//   name:'',
//   rollNumber:NaN,
// }
// studentObj.firstname;
//logPoint 
// interface Point{
//   x:number;
//   y:number;
// }
// function logPoint(p:Point){
// console.log(`point x:-${p.x} and y:-${p.y}`);
// }
// logPoint({x:22,y:23});
// const a=()=>{
//   return 'ok'
// }
// const addition:(a:number,b:number)=>number = (a,b) =>{
//   return a+b;
// }
//addition of an array
// const ArrayAddition:(arr:number[]) =>number = (arr) =>{
// return arr.reduce((c,p)=>c+p,0);
// }
// ArrayAddition([1,2,3])
//declare a fuction in typeScript
// declare function logDirection(dir:'left'|'right');
function logDirection(dir) {
    if (dir === void 0) { dir = 'left'; }
    console.log("direction", dir);
}
logDirection();
