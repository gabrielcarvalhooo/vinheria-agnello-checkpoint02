let contador = 0;
let continuar = 'sim';
let relatorio = '===== CADASTRO DO VINHO =====\n';

alert('Seja bem-vindo ao sistema de cadastro e avaliação de estoque da Vinheria Agnello!');

while (continuar == 'sim') {

    let nome = prompt('Qual o nome do vinho?');
    let tipo = prompt('Qual o tipo do vinho? (Tinto, Branco, Rosé, Espumante ou Licoroso)');
    let safra = parseInt(prompt('Qual a safra?'));
    let quantidade = parseInt(prompt('Qual a quantidade em estoque?'));
    

    relatorio = relatorio +
    'Nome: ' + nome + '\n' +
    'Tipo: ' + tipo + '\n' +
    'Safra: ' + safra + '\n' +
    'Quantidade no estoque: ' + quantidade + '\n' +
    '--------------------------------------------\n';

    contador = contador + 1;

    continuar = prompt('Deseja cadastrar outro vinho? (sim ou não)');
}

alert('Cadastros finalizados! Veja os detalhes no console.');

console.log(relatorio);
console.log('Total de cadastros realizados: ' + contador);