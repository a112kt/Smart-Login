var user_Email = document.getElementById("email");
var user_Password = document.getElementById("password");
var loginBtn = document.getElementById("login")
var message = document.getElementById("message");


var userContainer=[] ;
if(localStorage.getItem('user') != null){
    userContainer = JSON.parse(localStorage.getItem('user'))
}else{
    userContainer = [];
}

function logIn(){
    if(user_Email.value =='' || user_Password.value==''){
        message.innerHTML = `<p class='text-center text-danger'>All input is required</p>`
    }else{
        if(checkEmailPassword() == true){
            window.location.href='home.html';
            clear()
    
        }
        else{
            message.innerHTML = `<p class='text-center text-danger'>Account dosn't Exist </p>`
        }
        

    }

}
function checkEmailPassword(){
    for(var i=0; i < userContainer.length ; i++){
        if(userContainer[i].email == user_Email.value &&  userContainer[i]. password == user_Password.value){
            localStorage.setItem('userName',userContainer[i].Name)
            return true
        }
    }
}
function clear(){
    user_Email.value ='';
    user_Password .value = '';


}

   