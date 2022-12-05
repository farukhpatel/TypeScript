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
// function logDirection(dir:'left'|'right'|undefined);

// function logDirection(dir: 'left' | 'right' ='left' ){
//   console.log("direction",dir);
// }
// logDirection('left');

//take boolean only
// function logBoolean(bool:boolean=false){
//   console.log("boolean",bool)
// }
// logBoolean();

// interface Person {
//     firstName:string;
//     lastName:string;
// }
// interface Student extends Person{
//     rollNumber:number;
// }
// const std:Student={
//     firstName:'',
//     lastName:'',
//     rollNumber:NaN,
// }

//Mergin in typeScript it happens only in interface not in type
// interface Book{
//     bookName:string;
// }
// interface Book{
//     bookSize:number;
// }
// const book:Book={
//     bookName:'',
//     bookSize:NaN,
// }
interface HasAge{
    age:number;
}
const people:HasAge[] = [
    {age:10},
    {age:11},
    {age:08},
];
//widthout generics
// function getOld(arr:HasAge[]):HasAge{
//     return arr.sort((a,b)=>a.age - b.age)[0];
// }
// function getOld<T extends HasAge>(arr:T[]):T{
//     return arr.sort((a,b)=>a.age - b.age)[0];
// }
// getOld(people).age;
// interface Player{
//     name:string;
//     age:number;
// }
// const players:Player[]=[
//     {name:'farukh',age:22},
//     {name:'farukh1',age:21},
//     {name:'farukh2',age:20},
// ];
// const oldPlayer=getOld(players);
// // oldPlayer.name; // can't access name property
// //Assertion
// const oldPlayer2=getOld(players) as Player;
// oldPlayer2.name; // now we can access name proprty because we changed the type
// //without assertion with generics
// const oldPlayer3 = getOld(players);