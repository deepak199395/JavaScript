// register
//email
// getotp
//login
//displaydata

function register(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("register");
            resolve()
        },3000)
    })
   
}
function email(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve()
           console.log("email");
    },5000);
    })
   
}
function getotp(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            return reject("error in get otp")
            console.log("getotp");
            
        },10000);
    })
   
}
function login(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("login");
            resolve()
        },2000);
    })
  
}
function displaydata(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("displadata");
            resolve()
        },1000)
    })
   }
// register(function(){
//     email( function(){
//         getotp(function(){
//             login(function(){
//                 displaydata()

//             })
//         })
        
//     })
    
// })
// register()
// .then(email)
// .then(getotp)
// .then(login)
// .then(displaydata)
// .catch((error)=>{
//     console.log('error',error);
// })

// async function Athontication(){
//     await register()
//     await email()
//     await getotp()
//     await login()
//     await  displaydata()
// }
// Athontication().then(()=>{
//     console.log("the end");
// }).catch((error)=>{
//     console.log(error);
// })

async function Athontication(){
    try {
        await register()
        await email()
        await getotp()
        await login()
        await  displaydata()
    } catch (error) {
        console.log(error);
    }
}
Athontication()