var formulario = document.getElementById('id_formulario');

formulario.addEventListener('submit', function(event){
    event.preventDefault();

    //get

    let login = document.getElementById('login_usuario').value;
    let senha = document.getElementById('senha_usuario').value;

    let ls = localStorage.getItem("usuario");
    
    let obj = JSON.parse(ls);

    if(login == obj.login && senha == obj.senha){
        confirm('Usuário Logado com Sucesso')
        window.location.href = "../PagInicial/pag_inicial.html";
    }
    else{
        confirm('Usuário ou Senha invalidos.')
    }
})