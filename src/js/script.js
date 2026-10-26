let contador = 0;
let contadorEstoqueBaixo = 0;
let safraMaisAntiga;
let nomeVinhoMaisAntigo;
let continuar = 'sim';
let relatorio = '===== CADASTRO DO VINHO =====\n';

alert('Seja bem-vindo ao sistema de cadastro e avaliação de estoque da Vinheria Agnello!');

function validarNome() {
    let nome = prompt('Qual o nome do vinho?');

    while (nome == "") {
        alert('Nome inválido!');
        nome = prompt('Qual o nome do vinho?');
    }

    return nome;
}

function validarTipo() {
    let tipo = prompt('Qual o tipo do vinho? (tinto, branco, rose, espumante ou licoroso)');

    while (tipo != 'tinto' && tipo != 'branco' && tipo != 'rose' && tipo != 'espumante' && tipo != 'licoroso') {
        alert('Tipo inválido!');
        tipo = prompt('Qual o tipo do vinho? (tinto, branco, rose, espumante ou licoroso)');
    }

    return tipo;
}

function validarSafra() {
    let safra = parseInt(prompt('Qual a safra?'));

    while (isNaN(safra) || safra < 0 || safra > 2026) {
        alert('Safra inválida! Digite um ano entre 0 e 2026.');
        safra = parseInt(prompt('Qual a safra?'));
    }

    return safra;
}

function validarQuantidade() {
    let quantidade = parseInt(prompt('Qual a quantidade em estoque?'));

    while (isNaN(quantidade) || quantidade < 0 || quantidade % 1 != 0) {
        alert('Quantidade inválida!');
        quantidade = parseInt(prompt('Qual a quantidade em estoque?'));
    }

    return quantidade;
}

function verificarEstoqueBaixo(quantidade) {
    return quantidade < 5;
}

function classificarVinho(safra) {
    let idade = 2026 - safra;

    if (idade <= 3) {
        return 'Jovem';
    } else if (idade <= 10) {
        return 'Amadurecido';
    } else {
        return 'Velho';
    }
}

while (continuar == 'sim') {

    let nome = validarNome();
    let tipo = validarTipo();
    let safra = validarSafra();
    let classificacao = classificarVinho(safra);
    let quantidade = validarQuantidade();

    if (verificarEstoqueBaixo(quantidade)) {
        alert('Atenção: estoque baixo para ' + nome + '!');
        contadorEstoqueBaixo = contadorEstoqueBaixo + 1;
    }

    if (contador == 0 || safra < safraMaisAntiga) {
        safraMaisAntiga = safra;
        nomeVinhoMaisAntigo = nome;
    }

    relatorio = relatorio +
        'Nome: ' + nome + '\n' +
        'Tipo: ' + tipo + '\n' +
        'Safra: ' + safra + '\n' +
        'Quantidade: ' + quantidade + '\n' +
        'Classificação: ' + classificacao + '\n' +
        '--------------------------------------------\n';

    contador = contador + 1;

    continuar = prompt('Deseja cadastrar outro vinho? (sim ou não)');
}

alert('Cadastros finalizados! Veja os detalhes no console.');

console.log(relatorio);
console.log('Total de cadastros realizados: ' + contador);
console.log('Vinhos com estoque baixo: ' + contadorEstoqueBaixo);
console.log('Vinho com a safra mais antiga: ' + nomeVinhoMaisAntigo);
console.log('Safra mais antiga: ' + safraMaisAntiga);