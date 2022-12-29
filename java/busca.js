var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function() {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function() {
        var erroAjax = document.querySelector("#erro-ajax");

        if (xhr.status == 200) {
            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText;
            var paciente = JSON.parse(resposta);

            paciente.forEach(function(pacientes) {
              adicionaPacienteNaTabela(pacientes);

            });
        } else {
            erroAjax.classList.remove("invisivel");
        }
    });

    xhr.send();
});

