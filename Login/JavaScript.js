function logar(){

    var chavedeAcesso = document.getElementById("chavedeAcesso");
    var senha = document.getElementById("senha");

    console.log(chavedeAcesso.value + senha.value);

    if (chavedeAcesso == "teste1" && senha == "12345"){
        localStorage.setItem("acesso", true);

        window.location.href ="www.google.com";
    }else{
        alert("Chave de Acesso ou Senha invalidos!");
    }
}