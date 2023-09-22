// Solicitar ao usuário que insira a temperatura
var temperatura = parseFloat(prompt("Digite a temperatura:"));

// Verificar se a temperatura está acima de 38 graus (febre)
if (!isNaN(temperatura)) {
    if (temperatura > 38) {
        alert("Você está com febre");
    } else {
        alert("Nada de febre");
    }
} else {
    alert("Valor inválido. Por favor, insira um número válido.");
}
