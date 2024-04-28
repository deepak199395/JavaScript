// register
//email
// getotp
//login
//displaydata

function register(callback){
    setTimeout(()=>{
        console.log("register");
        callback()
    },3000)
}
function email(callback){
    setTimeout(() => {
        console.log("email");
        callback()
},5000);
}
function getotp(callback){
    setTimeout(() => {
        console.log("getotp");
         callback()
    },10000);
}
function login(callback){
    setTimeout(() => {
        console.log("login");
         callback()
    },2000);
}
function displaydata(){
console.log("displadata");
}

register(function(){
    email( function(){
        getotp(function(){
            login(function(){
                displaydata()

            })
        })
        
    })
    
})
