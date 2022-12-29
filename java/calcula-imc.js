
var pacientes = document.querySelectorAll(".paciente")

for(var i =0; i < pacientes.length; i++){
      var paciente =  pacientes[i]                                      //aplica o var com a lista com o retorno do for

        var tdPeso = paciente.querySelector(".info-peso");
        var tdAltura =paciente.querySelector(".info-altura");

        var altura = tdAltura.textContent;
        var peso = tdPeso.textContent;
        
        var tdImc = paciente.querySelector(".info-imc");

        var imc = peso / (altura * altura);
        
        tdImc.textContent = imc;
        
         var pesoValido = validaPeso(peso)
         var alturaValida = validaAltura(altura)
        
        function validaPeso (peso){
            if (peso >= 0 && peso <=1000){
                return true;
            }else{
                return false;
            }
         }   
         function validaAltura(altura){
            if (altura >= 0 && altura <= 3.0){
                return true;
            }else {
                return false;
            }
        }
         
         
        if(!pesoValido){
            console.log ("peso inválido")
            tdImc.textContent = ("Peso invalido")
            pesoValido = false
            
        }  
    
        if (!alturaValida){
            console.log ("Altura inválida")
            tdImc.textContent =("Altura invalida")
            alturaValida = false
        }  
           
        if (pesoValido && alturaValida){
                    
            var imc = calculaImc(peso,altura)
        
            tdImc.textContent =imc;
            
        }
        

}

 function calculaImc(peso,altura){
    var imc = 0;

    imc = peso / (altura * altura)

        return imc.toFixed(2);
 }