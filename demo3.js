// Object destructuring 
const student={
    name: "Abhash",
    age: 20,
    branch: "AIML"
}
// const name=student.name;
// const age=student.age;
// const branch=student.branch;
// const{name,age,branch}=student; // converted above 3 lines of code into single line
// console.log("Name:",name);
const{name:newname,age,branch}=student; // changed variable only 
console.log("Name:",newname);
console.log("Age:",age);
console.log("Branch:",branch);
const num=[11,22,33];
// const a=num[0];
// const b=num[1];
// const c=num[2];
// Array Destructuring 
const [a,b,c]=num;
console.log("a=",a);
console.log("b=",b);
console.log("c=",c);