
//1. Write one example explaining how you can write a callback function ?
function call(name, callback) {
    console.log('Hello' + ' ' + name);
    callback();
}
function callMe() {
    console.log('I am callback function');
}
call('Dolly', callMe);

//2. Write callback function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 

/*Explain callback hell.
Numbers
1
2
3
4
5
6
7
*/
function callback (){
    setTimeout(()=>{
        console.log("1")
        setTimeout(()=>{
            console.log("2")
            setTimeout(()=>{
                console.log("3")
                setTimeout(()=>{
                    console.log("4")
                    setTimeout(()=>{
                        console.log("5")
                        setTimeout(()=>{
                            console.log("6")
                            setTimeout(()=>{
                                console.log("7")
                            },7000)
                        },6000)
                    },5000)
                },4000)
            },3000)
        },2000)
    },1000)
}
callback();

//3. Write promise function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 
/*
Numbers
1
2
3
4
5
6
7
*/
function delay(n) {
    return new Promise(resolve => {
        setTimeout(resolve, n);
    });
}
async function print(num) {
    for (let i = 1; i <= num; i++) {

        await delay(i * 1000);

        console.log(i);
    }
}
print(7);

//4. Create a promise function accepting a argument, if yes is passed to the function then it should go to resolved state and print Promise Resolved, and if nothing is passed then it should go to reject state and catch the error and print Promise Rejected .
let x = new Promise((resolve, reject) => {
    let a = prompt("Enter promise function:");
    if(a == "yes"){
        resolve("Promise Resolved")
    }
    else{
        reject("Promise Rejected")
    }
})
function func2(msg){
    console.log(msg);
}
x.then(func2).catch(func2)

//5. Create examples to explain callback function.
function greet(){
    console.log('Hello World');
    }
    function sayName(name) {
        console.log('Hi' + ' ' + name);
    }
    setTimeout(greet, 1000);
    sayName('Siya')

//6. Create examples to explain callback hell function.
function callbackHell(){
    setTimeout(()=>{
       console.log("val 5")
       setTimeout(()=>{
           console.log("val 4")
           setTimeout(()=>{
               console.log("val 3")
               setTimeout(()=>{
                   console.log("val 2")
                   setTimeout(()=>{
                       console.log("val 1")
                   },5000)
               },4000)
           },3000)
       },2000)
   },1000)
    }
    callbackHell();

//7. Create examples to explain promises function.
let promise11 = new Promise((resolve, reject) => {
    resolve('Success!');
  });
  
  promise11.then((value) => {
    console.log(value);

  });
  
  

//8. Create examples to explain async await function.
let promise = new Promise(function (resolve, reject) {
    setTimeout(function(){
        resolve('Promise resolved')}, 1000);
    });
    async function asyncFunc(){
        let result = await promise;

        console.log(result);
        console.log('hello');
    }
    asyncFunc();

//9. Create examples to explain promise.all function.
let promiseA = Promise.resolve(3);
let promiseB= 50;
let promiseC = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'Hey');
});

Promise.all([promiseA, promiseB, promiseC]).then((values) => {
  console.log(values);
});
