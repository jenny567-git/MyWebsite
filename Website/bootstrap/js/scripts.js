function validation(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
    var errorMessage = document.getElementById("errorMessage");
    var text;

    errorMessage.style.padding = "10px";

    if(name.length < 5){
        text = "Please enter a valid name";
        errorMessage.innerHTML = text;
        return false;
    }

    // this logic is implemented in bootstrap
    // if(email.indexOf("@") ==-1){
    //     text = "Please enter a valid email";
    //     errorMessage.innerHTML = text;
    //     return false;
    // }

    alert("Submit success");
    return true;
}