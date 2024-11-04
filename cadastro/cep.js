//Validação Cep

const cep = document.querySelector('#cep');
const address= document.querySelector('#address');
const bairro= document.querySelector('#bairro');
const cidade = document.querySelector('#cidade');
const estado = document.querySelector('#estado');
const message = document.querySelector('#message');


cep.addEventListener('focusout', async () => {
    const onlyNumbers = /^[0-9]+$/;
    const cepValid = /^[0-9]{8}$/;
    
    try {

      let cep_pesquisa = cep.value.replace(/\D/g, '');
        
    if(!onlyNumbers.test(cep_pesquisa) || !cepValid.test(cep_pesquisa)) {
        throw { cep_error: 'Cep Inválido'};
    }   
    

    const response = await fetch (`https://viacep.com.br/ws/${cep_pesquisa}/json/`)
    if(!response.ok){
        throw await response.json();}
        
        const responseCep = await response.json();        
    
        address.value = responseCep.logradouro;
        bairro.value = responseCep.bairro;
        cidade.value = responseCep.localidade;
        estado .value = responseCep.uf;
        
    
    
    } catch (error) {
        if(error?.cep_error){
   
            alert(error.cep_error)
            
        }
      console.log(error);
    }   

}
)
// Validação CPF

function ajustaCpf(v) {
    v.value = v.value.replace(/\D/g, "");
    v.value = v.value.replace(/^(\d{3})(\d)/, "$1.$2");
    v.value = v.value.replace(/(\d{3})(\d)/, "$1.$2");
    v.value = v.value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  }
     
  function validarCPF(cpf) {	
	cpf = cpf.value.replace(/[^\d]+/g,'');	
	if(cpf == '') return false;	
	// Elimina CPFs invalidos conhecidos	
	if (cpf.length != 11 || 
		cpf == "00000000000" || 
		cpf == "11111111111" || 
		cpf == "22222222222" || 
		cpf == "33333333333" || 
		cpf == "44444444444" || 
		cpf == "55555555555" || 
		cpf == "66666666666" || 
		cpf == "77777777777" || 
		cpf == "88888888888" || 
		cpf == "99999999999")
    confirm("CPF inválido")
			return false;

	// Valida 1o digito	
	add = 0;	
	for (i=0; i < 9; i ++)		
		add += parseInt(cpf.charAt(i)) * (10 - i);	
		rev = 11 - (add % 11);	
		if (rev == 10 || rev == 11)		
			rev = 0;	
		if (rev != parseInt(cpf.charAt(9)))	
    confirm("CPF inválido")	
			return false;		
	// Valida 2o digito	
	add = 0;	
	for (i = 0; i < 10; i ++)		
		add += parseInt(cpf.charAt(i)) * (11 - i);	
	rev = 11 - (add % 11);	
	if (rev == 10 || rev == 11)	
		rev = 0;	
	if (rev != parseInt(cpf.charAt(10)))
  confirm("CPF inválido")
		return false;		
	return true;   
};

// cep

const inputcep = document.querySelector('#cep');

inputcep.addEventListener('keypress', () => {  
    inputlength = inputcep.value.length 
    
    if(inputlength == 5) {
        inputcep.value += '-'
     }
}
)

//validar tel

function ajustaNumeros(v){
  //Remove os caracteres não numéricos.
  v.value = v.value.replace(/\D/g, "");

}

function ajustaTelefone(v){

  v.value = v.value.replace(/\D/g, "");
  //add parêntese no DDD
  v.value = v.value.replace(/^(\d\d)(\d)/g, "($1) $2");
  //add hifen no tel
  v.value = v.value.replace(/(\d{4})(\d)/, "$1-$2");

}
/*const telefone = document.getElementById('idTelefone');
const mascaratelfone = Imask(telefone, {
  mask: '(+55) 00 0000 0000',
  lazy: true
});
*/

// Validar Cell

function ajustaNumeros(v){
  //Remove os caracteres não numéricos.
  v.value = v.value.replace(/\D/g, "");

}

function ajustaCelular(v){

  v.value = v.value.replace(/\D/g, "");
  //add parêntese no DDD
  v.value = v.value.replace(/^(\d\d)(\d)/g, "($1) $2");
  //add hifen no tel
  v.value = v.value.replace(/(\d{5})(\d)/, "$1-$2");

}

// REGEX : SÃO PARA MANIPULAR EXPRESSÕES REGULARES

// Validar Email

function validarEmail(){
  const email = document.getElementById('emailValid').value;
  const regex =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (regex.test(email)){
    confirm('Email Válido');
  }
  else {
    alert('Email Inválido');

    
  }

};

// validar Senhas

function validarSenha(){
  let senha = document.getElementById('senha').value;
  let confirm = document.getElementById('confirmSenha').value;
    if(senha!= confirm){
      alert('Senhas precisam ser iguais');
  
    }
};

// Local Storage:

const form = document.getElementById('id_form');


form.addEventListener('submit', function(event){
  event.preventDefault();
  
  const nome = document.getElementById('validarNome').value;
  const documento = document.getElementById('cpfValid').value;
  const celular = document.getElementById('idCelular').value;
  const login = document.getElementById('loginUsuario').value;
  const senha = document.getElementById('senha').value;

  let usuario  = {
    nome: nome,
    documento: documento,
    celular: celular,
    login: login,
    senha: senha,
  };
  localStorage.setItem("usuario", JSON.stringify(usuario));
    confirm('Usuário Cadastrado com Sucesso!'); 
    window.location.href = "../login/login.html";
    
  });
