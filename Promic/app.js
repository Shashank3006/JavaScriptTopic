let response= new Promise((resolve, reject) => {
    setTimeout(()=>{
        return resolve(" i am working")},20000)
  
})
let response1= new Promise((resolve, reject) => {
    setTimeout(()=>{
        return resolve(" i am  Not working")
    },5000)
  
})
let response2= new Promise((resolve, reject) => {
    setTimeout(()=>{
        return resolve(" both are working")
    },10000)
  
})
let response3= new Promise((resolve, reject) => {
    setTimeout(()=>{
                return reject(" both are  not working")

    },1000)
  
})
let a=1;
let inter=setInterval(() => {
    
Promise.race([response, response1, response2, response3]).then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
})
a++;
if(a>4){
    clearInterval(inter);
}
}
, 3000);


