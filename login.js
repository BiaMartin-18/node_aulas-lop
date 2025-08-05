function Login(){
    var email = document.getElementById("email_user").value;
    var senha = document.getElementById("senha_user").value;
    
    if(email === "a") {       
        if(senha === "a"){
            window.location.href = "gerenciador.html";
        }
        else{
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Senha Incorreta!",          
            });
        }
    }
    else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "E-mail Incorreto!",
        });
    }
}