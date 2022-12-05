"use strict";
// let a:number = 10;
// let b:number = 20;
// function sum(a:number, b:number):number {
//   return a + b;
// }
// console.log("sum pro. in ts", sum(a, b));
const people = [
    { age: 10 },
    { age: 11 },
    { age: 08 },
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
