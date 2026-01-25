//console.log("Hello World");
//var a=5;
//var a=10;
//console.log(a);

// let arr = [10,20,30,40];
// // for .. in loop
// // for(variable variable_name in array_name){
// // statement
// // }
// for (let i in arr){
//     console.log(i,arr[i]);
// }

//var obj={
//    name:"Pushpa",
//    age:19
//}

//for (let i in obj){
//    console.log(i,obj[i]);
//}
// //for (variable variable_name of array_name){
// //statement
// //}
// for (let val of arr){
//     console.log(val);
// }

// let arr=[1,2,3,4,15,30];
// //map
// var double_arr=arr.map((i)=>(i*2));
// console.log(double_arr);

// //filter
// var even = arr.filter((i)=>(i%2===0))
// console.log(even);

// //reduse
// var total=arr.reduce((sum,i)=>(sum+i),0);
// console.log(total);

// var total_sum=arr.map((num)=>num*2).filter((num)=>(num%2===0)).reduce((sum,num)=>(sum+num),0);
// console.log(total_sum);

// var n=7;
// var flag=true;
// if(n<=1) flag=false;
// else{
//     for ( let i=2;i<=n/2;i++){
//         if(n%i===0){
//             flag=false;
//             break;
//         }
//     }
// }
// console.log(flag?"Prime":"Not Prime");

// var name="Pushpa";
// console.log(`My name is ${name}`);

// arr.forEach((value,index)=>{
//     console.log(index,value);
// })

// //Function calling
// var add=(a,b,callback)=>{
//     var result=a+b;
//     callback(result);
// }
// add(10,20,(res)=>{console.log(res)});

// var main=(callBack)=>{
//     console.log("I am main");
//     callBack()
// }
// var demo=()=>{
//     console.log("I am callBack");
// }
// demo()
// main(demo)


// var promise=new Promise((resolve,reject)=>{
//     var success=false;
//     if(success){
//         resolve("Promise resolved");
//     }
//     else{
//         reject("Promise rejected");
//     }
// })
// promise.then((res)=>console.log(res))
// .catch((err)=>console.log(err))


// var promise=new Promise((resolve,reject)=>{
//     var success=true;
//     if(success){
//         setTimeout(()=>{
//             resolve("Promise resolved")
//         },5000)
//     }
//     else{
//         reject("Promise rejected");
//     }
// })
// promise.then((res)=>console.log(res))
// .catch((err)=>console.log(err))


// const getData=()=>{
//     return fetch('https://jsonplaceholder.typicode.com/posts')
// }
// getData().then((res)=>res.json())
// .then((data)=>console.log(data))
// .catch(err=>console.log(err))

const getData=async()=>{
    try{
        var res=await fetch("https://jsonplaceholder.typicode.com/posts")
        var data=await res.json();
        console.log(data);
    }
    catch(err){
        console.log(err);
    }
}
getData();

