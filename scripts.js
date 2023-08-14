let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let SizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassoword = document.querySelector("#container-password");

let charset = "qwertyuiopasdfghjklçzxcvbnm123456789!@#$%&*";
let senhaNova = "";

SizePassword.innerHTML = sliderElement.value;

slider.oninput = function(){
    SizePassword.innerHTML = this.value;
}

function gerarPassword(){
    let pass = "";
    for(let i = 0, n = charset.length; i < sliderElement.value; i++){
        pass += charset.charAt(Math.floor(Math.random() * n));
    }

    containerPassoword.classList.remove("hide");
    password.innerHTML = pass;
    senhaNova = pass;
}

function Copy(){
    alert("Sua senha foi copiada!!!")
    navigator.clipboard.writeText(senhaNova);
}

