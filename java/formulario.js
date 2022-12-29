

var adicionarBotao = document.querySelector("#adicionar-paciente")

adicionarBotao.addEventListener('click', function (event){
    event.preventDefault();
    
     //add a lista form
var form = document.querySelector("#form-adiciona") 
var pacientes = dadosPaciente (form);  
var erros = validaPaciente(pacientes) 

if (erros.length > 0){

  mostraMensagemDeErro(erros)

   return;
}


adicionaPacienteNaTabela(pacientes);

var mostraMensagemErroNaTela =document.querySelector('#mensagem');
mostraMensagemErroNaTela.innerHTML ="";   // apaga as mensegens de aviso para não polui a tela


})



function adicionaPacienteNaTabela (pacientes){
  var pacienteTr = montaTr(pacientes);
  var tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr)

}


function mostraMensagemDeErro(erros){
    var ul = document.querySelector('#mensagem');
     ul.innerHTML ="";            // apaga as mensegens de aviso para não polui a tela

      erros.forEach (function(erro){
        var li = document.createElement("li")
        li.textContent = erro;
        ul.appendChild(li)
      })
        
     
}

function dadosPaciente (form) {
    var pacientes = {
         nome: form.nome.value,
         peso: form.peso.value,
         altura: form.altura.value,
         gordura: form.gordura.value,
         imc: calculaImc(form.peso.value, form.altura.value)

        
    }
    
  return pacientes;
    
}

function montaTr(pacientes){

  var pacienteTr = document.createElement("tr");
  pacienteTr.classList.add ("paciente")

  pacienteTr.appendChild(montaTd(pacientes.nome , "info-nome"));
  pacienteTr.appendChild(montaTd(pacientes.peso , "info-peso"));
  pacienteTr.appendChild(montaTd(pacientes.altura , "info-altura"));
  pacienteTr.appendChild(montaTd(pacientes.gordura , "info-gordura"));
  pacienteTr.appendChild(montaTd(pacientes.imc , "info-imc"));

  return pacienteTr;

}

function montaTd(dados, classe){

    var td = document.createElement("td");
    td.classList.add (classe)
    td.textContent = dados;
    

     return td;
}

 function validaPaciente(pacientes){   //validadando paciente
  var   erro = [];
  
  if(pacientes.nome.length ==0){
    erro.push("O nome não pode ser em branco")
  }
  if(!validaPeso (pacientes.peso)){
    erro.push("Peso Invalido")
  }
  if(!validaAltura (pacientes.altura)){
    erro.push("Altura Invalida")
  }

  if(pacientes.peso.length ==0){
    erro.push("O peso não pode ser em branco")
  }

  if(pacientes.altura.length == 0) {
    erro.push("A altura não pode ser em branco")
  }

  if(pacientes.gordura.length == 0) {
    erro.push("A gordura não pode ser em branco")
  }

  return erro;





 }