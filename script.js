// function foo(){
//     const res=document.getElementById("email").value;
//     //console.log(res)
//     if(res=='test@gmail.com'){
//         alert("Valid User")
//     }
//     else(
//         alert("Invalid User")
//     )
// }

// let res=prompt("Enter Age")
// console.log(res);

// const button= document.createElement("button")
// button.setAttribute("type","button")
// button.id="btn"
// button.classList.add("btn","btn-danger")
// button.innerText="Click here to Wish"
// button.addEventListener("click",()=>{
//     alert("Good Morning")
// })

// document.body.append(button)

// const div=document.getElementById("container")
// const red=document.getElementById("red")

// red.addEventListener("click",()=> div.style.backgroundColor="red")
// green.addEventListener("click",()=> div.style.backgroundColor="green")
// black.addEventListener("click",()=> div.style.backgroundColor="blue")
// reset.addEventListener("click",()=> div.style.backgroundColor="white")

//normal function setTimeout
// function foo(){
//     window.alert("Hi")
// }
// setTimeout(foo,5000)

//anonymous function setTimeout
// setTimeout(function(){
//     alert("Hello")
// },2000)

//arrow function setTimeout
// let res=setTimeout(()=>alert("Fine"),3000);

// let id;
// function starttimer(){
//     id=setTimeout(()=>alert("Welcome"),2000)
//     console.log("started");
// }
// function resettimer(){
//     clearTimeout(id)
//     console.log("Ended");
// }

// const timer=document.getElementById("timer")
// const btn=document.getElementById("btn")
// const btn1=document.getElementById("btn1")
// const btn2=document.getElementById("btn2")

// let count=0;
// let id;
// btn.addEventListener("click",function(){
//    id= setInterval(()=>{
//         count +=1;
//         timer.textContent=count;
//     },1000);
// })

// btn1.addEventListener("click",function(){
//     clearInterval(id);
// })

// btn2.addEventListener("click",function(){
//     clearInterval(id);
//     count =0;
//     timer.textContent=count;
// })

const button=document.createElement("button")
const span=document.createElement("span")
button.setAttribute("type","button")
button.id="btn"
button.classList.add("btn","btn-danger");
button.innerText="Click Here";
document.body.append(button,span);
button.addEventListener("click",foo);
function foo(){
    const element=prompt("Enter your Age")
    span.innerHTML=`<b>${element}</b>`;
}