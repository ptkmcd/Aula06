function verificarPermissoes(idade) {
    if (idade >= 18) {
        alert("Você pode votar.");
    } else {
        alert("Você ainda não pode votar.");
    }

    if (idade >= 18 && idade >= 18) {
        alert("Você pode tirar sua habilitação para dirigir.");
    } else {
        alert("Você ainda não pode tirar sua habilitação para dirigir.");
    }
}

// Solicita que o usuário insira a idade
var idade = prompt("Digite sua idade:");
idade = parseInt(idade);

// Chama a função para verificar permissões com a idade inserida
verificarPermissoes(idade);
