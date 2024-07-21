var user_Name = document.getElementById("Name");
var user_Email = document.getElementById("email");
var user_Password = document.getElementById("password");
var message = document.getElementById("message");

var user_Arr;

if(localStorage.getItem("user") != null){
    user_Arr = JSON.parse(localStorage.getItem('user'))
}else{
    user_Arr = [];
}

function signIn(){

    if(user_Name.value =='' || user_Email.value =='' || user_Password.value==''){
        message.innerHTML = `<p class='text-center text-danger'>All input is required</p>`
    }
    else{
        if(Exist()==true){
             message.innerHTML = `<p class='text-center text-danger'>Email is Exist</p>`

        }
        else{
            if(nameValidation()==true){
                var user = {
                    Name : user_Name.value,
                    email : user_Email.value ,
                    password : user_Password.value,
                    }
            
                    user_Arr.push(user)
                    localStorage.setItem('user',JSON.stringify(user_Arr))
                    clearForm()
                    message.innerHTML = `<p class='text-center text-warning'>Success</p>`    

            }
            
                    

        }
        


    }
 
    }


 
function nameValidation(){
    if(/^[A-Za-z]{3,10}(\s?)$/.test(user_Name.value)){
        return true
    }
    else{
        message.innerHTML = `<p class='text-center text-danger'>Invalid Name</p>`
    }
}  


function clearForm(){
    user_Name.value ='';
    user_Email.value = '';
    user_Password.value = '';

}


   

function Exist(){
    for(var i=0; i<user_Arr.length; i++){
        if(user_Arr[i].email ==user_Email.value){
            return true;
        }
    }
}




