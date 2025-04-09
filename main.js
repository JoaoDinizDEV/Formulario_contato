document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("form-cadastro");
    const tabela = document.getElementById('tabela-cadastro');
    const numeroLimpo = [];

    form.addEventListener("submit", function(event) {
        event.preventDefault(); 

        let nome = document.getElementById("nome-cadastro").value.trim();
        let numero = document.getElementById("numero-cadastro").value.trim();

        let numeroLimpo = numero.replace(/\D/g, "");

        if (nome === "" || numero === "") {
            alert("Dados incorretos, preencha novamente.");
            return;
        }

        if (numeroLimpo.length < 10 || numeroLimpo.length > 11) {
            alert("Por favor digite somente os números");
            return;
        }

        let contatos = document.querySelectorAll("#tabela-contatos tr td:nth-child(2)");
        for (let contato of contatos) {
            if (contato.textContent === numeroLimpo) {
                alert("Número cadastrado!");
                return;
            }
        }

        let novaLinha = tabela.insertRow();
        let colunaNome = novaLinha.insertCell(0);
        let colunaNumero = novaLinha.insertCell(1);

        colunaNome.textContent = nome;
        colunaNumero.textContent = numero;

        form.reset();
    });
});