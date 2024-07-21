var welcomElent = document.getElementById("welcom");
var logOut = document.getElementById("Logout")


if(localStorage.getItem('userName') != null){
    welcomElent.innerHTML = `Welcom ${localStorage.getItem('userName')}`
}


function logout(){
    localStorage.clear()
}