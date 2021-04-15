function logar(){

    var chavedeAcesso = document.getElementById("chavedeAcesso").value;
    var senha = document.getElementById("senha").value;
   
   if(chavedeAcesso == "teste1" && senha == "12345"){
        window.location.href="http://www.devmedia.com.br/";
        // localStorage.setItem("acesso", true);
        }else{
        alert("Chave de Acesso ou Senha invalidos!");
    }
}