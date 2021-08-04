let obj={
    firstname:"Reena",
    lastName:"Kumari",
    age:21,
    aggress:"Navgurukul"
}
let c=0
for (let x in obj){
    c=c+1
    console.log(x)
}
console.log(c)
console.log(Object.keys(obj).length)