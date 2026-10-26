
let contador = 0;
let contadorEstoqueBaixo = 0;
let safraMaisAntiga;
let nomeVinhoMaisAntigo;
let continuar = 'sim';
let relatorio = '===== CADASTRO DO VINHO =====\n';

let nome1, tipo1, safra1, quantidade1, classificacao1;
let nome2, tipo2, safra2, quantidade2, classificacao2;
let nome3, tipo3, safra3, quantidade3, classificacao3;
let nome4, tipo4, safra4, quantidade4, classificacao4;
let nome5, tipo5, safra5, quantidade5, classificacao5;
let nome6, tipo6, safra6, quantidade6, classificacao6;
let nome7, tipo7, safra7, quantidade7, classificacao7;
let nome8, tipo8, safra8, quantidade8, classificacao8;
let nome9, tipo9, safra9, quantidade9, classificacao9;
let nome10, tipo10, safra10, quantidade10, classificacao10;

alert('Seja bem-vindo ao sistema de cadastro e avaliação de estoque da Vinheria Agnello!');

function validarNome() {
    let nome = prompt('Qual o nome do vinho?');

    while (nome == '') {
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
        return 'Antigo';
    }
}

function mostrarRelatorio(relatorio, contador, contadorEstoqueBaixo, nomeVinhoMaisAntigo, safraMaisAntiga) {
    alert('Cadastros finalizados! Veja os detalhes no console.');

    console.log(relatorio);
    console.log('Total de cadastros realizados: ' + contador);
    console.log('Vinhos com estoque baixo: ' + contadorEstoqueBaixo);
    console.log('Vinho com a safra mais antiga: ' + nomeVinhoMaisAntigo);
    console.log('Safra mais antiga: ' + safraMaisAntiga);
}

while (continuar == 'sim' && contador < 10) {

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

    switch (contador) {
        case 0:
            nome1 = nome;
            tipo1 = tipo;
            safra1 = safra;
            quantidade1 = quantidade;
            classificacao1 = classificacao;

            relatorio +=
                'Nome: ' + nome1 + '\n' +
                'Tipo: ' + tipo1 + '\n' +
                'Safra: ' + safra1 + '\n' +
                'Quantidade: ' + quantidade1 + '\n' +
                'Classificação: ' + classificacao1 + '\n' +
                '--------------------------------------------\n';
            break;

        case 1:
            nome2 = nome;
            tipo2 = tipo;
            safra2 = safra;
            quantidade2 = quantidade;
            classificacao2 = classificacao;

            relatorio +=
                'Nome: ' + nome2 + '\n' +
                'Tipo: ' + tipo2 + '\n' +
                'Safra: ' + safra2 + '\n' +
                'Quantidade: ' + quantidade2 + '\n' +
                'Classificação: ' + classificacao2 + '\n' +
                '--------------------------------------------\n';
            break;

        case 2:
            nome3 = nome;
            tipo3 = tipo;
            safra3 = safra;
            quantidade3 = quantidade;
            classificacao3 = classificacao;

            relatorio +=
                'Nome: ' + nome3 + '\n' +
                'Tipo: ' + tipo3 + '\n' +
                'Safra: ' + safra3 + '\n' +
                'Quantidade: ' + quantidade3 + '\n' +
                'Classificação: ' + classificacao3 + '\n' +
                '--------------------------------------------\n';
            break;

        case 3:
            nome4 = nome;
            tipo4 = tipo;
            safra4 = safra;
            quantidade4 = quantidade;
            classificacao4 = classificacao;

            relatorio +=
                'Nome: ' + nome4 + '\n' +
                'Tipo: ' + tipo4 + '\n' +
                'Safra: ' + safra4 + '\n' +
                'Quantidade: ' + quantidade4 + '\n' +
                'Classificação: ' + classificacao4 + '\n' +
                '--------------------------------------------\n';
            break;

        case 4:
            nome5 = nome;
            tipo5 = tipo;
            safra5 = safra;
            quantidade5 = quantidade;
            classificacao5 = classificacao;

            relatorio +=
                'Nome: ' + nome5 + '\n' +
                'Tipo: ' + tipo5 + '\n' +
                'Safra: ' + safra5 + '\n' +
                'Quantidade: ' + quantidade5 + '\n' +
                'Classificação: ' + classificacao5 + '\n' +
                '--------------------------------------------\n';
            break;

        case 5:
            nome6 = nome;
            tipo6 = tipo;
            safra6 = safra;
            quantidade6 = quantidade;
            classificacao6 = classificacao;

            relatorio +=
                'Nome: ' + nome6 + '\n' +
                'Tipo: ' + tipo6 + '\n' +
                'Safra: ' + safra6 + '\n' +
                'Quantidade: ' + quantidade6 + '\n' +
                'Classificação: ' + classificacao6 + '\n' +
                '--------------------------------------------\n';
            break;

        case 6:
            nome7 = nome;
            tipo7 = tipo;
            safra7 = safra;
            quantidade7 = quantidade;
            classificacao7 = classificacao;

            relatorio +=
                'Nome: ' + nome7 + '\n' +
                'Tipo: ' + tipo7 + '\n' +
                'Safra: ' + safra7 + '\n' +
                'Quantidade: ' + quantidade7 + '\n' +
                'Classificação: ' + classificacao7 + '\n' +
                '--------------------------------------------\n';
            break;

        case 7:
            nome8 = nome;
            tipo8 = tipo;
            safra8 = safra;
            quantidade8 = quantidade;
            classificacao8 = classificacao;

            relatorio +=
                'Nome: ' + nome8 + '\n' +
                'Tipo: ' + tipo8 + '\n' +
                'Safra: ' + safra8 + '\n' +
                'Quantidade: ' + quantidade8 + '\n' +
                'Classificação: ' + classificacao8 + '\n' +
                '--------------------------------------------\n';
            break;

        case 8:
            nome9 = nome;
            tipo9 = tipo;
            safra9 = safra;
            quantidade9 = quantidade;
            classificacao9 = classificacao;

            relatorio +=
                'Nome: ' + nome9 + '\n' +
                'Tipo: ' + tipo9 + '\n' +
                'Safra: ' + safra9 + '\n' +
                'Quantidade: ' + quantidade9 + '\n' +
                'Classificação: ' + classificacao9 + '\n' +
                '--------------------------------------------\n';
            break;

        case 9:
            nome10 = nome;
            tipo10 = tipo;
            safra10 = safra;
            quantidade10 = quantidade;
            classificacao10 = classificacao;

            relatorio +=
                'Nome: ' + nome10 + '\n' +
                'Tipo: ' + tipo10 + '\n' +
                'Safra: ' + safra10 + '\n' +
                'Quantidade: ' + quantidade10 + '\n' +
                'Classificação: ' + classificacao10 + '\n' +
                '--------------------------------------------\n';
            break;
    }

    contador = contador + 1;

    if (contador < 10) {
        continuar = prompt('Deseja cadastrar outro vinho? (sim ou não)');
    } else {
        alert('Limite de 10 cadastros atingido.');
        continuar = 'não';
    }
}

mostrarRelatorio(relatorio, contador, contadorEstoqueBaixo, nomeVinhoMaisAntigo, safraMaisAntiga);