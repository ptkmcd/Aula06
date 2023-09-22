function previsaoRodagem(quantidadeDeGasolina, quilometragemPorLitro) {
    if (quantidadeDeGasolina <= 0 || quilometragemPorLitro <= 0) {
        alert("Por favor, insira valores válidos para litros de gasolina e quilometragem por litro.");
        return;
    }

    var estimativaKmRodados = quantidadeDeGasolina * quilometragemPorLitro;
    alert("Com " + quantidadeDeGasolina + " litros de gasolina e uma quilometragem média de " + quilometragemPorLitro + " km/l, você pode rodar aproximadamente " + estimativaKmRodados.toFixed(2) + " km.");
}

// Solicita que o usuário insira a quantidade de gasolina e a quilometragem por litro
var quantidadeDeGasolina = parseFloat(prompt("Digite a quantidade de litros de gasolina no tanque:"));
var quilometragemPorLitro = parseFloat(prompt("Digite a quilometragem média por litro:"));

// Chama a função para calcular a previsão de rodagem
previsaoRodagem(quantidadeDeGasolina, quilometragemPorLitro);
