function sendForm()
{
    window.location.href = 'home.html';
}

function confirmEnteredPassword(){
    var inputPass = document.getElementById("inputPassword").value;
    var checkPass = document.getElementById("checkPassword").value;
    if(inputPass === checkPass){
        sendForm();
    }
    else{
      alert("The password that you have entered does not match");
    }
}

function validateForm()
{
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("inputEmail").value;
    var inputPass = document.getElementById("inputPassword").value;
    var checkPass = document.getElementById("checkPassword").value;
    if(firstName != "" && lastName != "" && email != "" && inputPass != "" && checkPass != ""){
      confirmEnteredPassword();
    } 
    else{
      alert("Please ensure that all your fields are filled.");
    }
}


