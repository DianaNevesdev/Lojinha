/*function aalterarqtd(produto) {
    const qtd = document.getElementById('qtd_' + produto);
    const valor = document.getElementById('valor_' + produto);
    const total = document.getElementById('total_' + produto);
    
    // Incrementar a quantidade
    qtd.innerHTML = Number(qtd.innerHTML) + 1;
    
    // Calcular o novo total
    const resultado = parseFloat(qtd.innerHTML) * parseFloat(valor.innerHTML.replace('$', '').replace(',', ''));
   
    // Exibir o novo total
    total.innerHTML = '$' + resultado.toFixed(2);
}

function alterarqtd(produto) {
    const qtd = document.getElementById('qtd_' + produto);
    const valor = document.getElementById('valor_' + produto);
    const total = document.getElementById('total_' + produto);

    // Decrementar a quantidade
    qtd.innerHTML--;

    // Calcular o novo total
    const resultado = parseFloat(qtd.innerHTML) * parseFloat(valor.innerHTML.replace('$', '').replace(',', ''));

    // Exibir o novo total
    total.innerHTML = '$' + resultado.toFixed(2);
}


function somar(produto) {
    const qtd = document.getElementById('qtd_' + produto);
    const valor = document.getElementById('valor_' + produto);
    const total = document.getElementById('total_' + produto);

    // Incrementar a quantidade
    qtd.innerHTML++;

    // Calcular o novo total
    const resultado = parseFloat(qtd.innerHTML) * parseFloat(valor.innerHTML.replace('$', '').replace(',', ''));

    // Exibir o novo total
    total.innerHTML = '$' + resultado.toFixed(2);
}

/*function subtrair(produto) {
    const qtd = document.getElementById('qtd_' + produto);
    const valor = document.getElementById('valor_' + produto);
    const total = document.getElementById('total_' + produto);

    // Decrementar a quantidade
    qtd.innerHTML--;

    // Garantir que a quantidade não seja menor que zero
    if (parseInt(qtd.innerHTML) < 0) {
        qtd.innerHTML = '0';
    }

    // Calcular o novo total
    const resultado = parseFloat(qtd.innerHTML) * parseFloat(valor.innerHTML.replace('$', '').replace(',', ''));

    // Exibir o novo total
    total.innerHTML = '$' + resultado.toFixed(2);
}*/

/*function alterarqtd(produto, acao) {
    const qtd = document.getElementById('qtd_' + produto);
    const valor = document.getElementById('valor_' + produto);
    const total = document.getElementById('total_' + produto);
    
    if(acao =='-'  && qtd.innerHTML == 0){
      alert('Atençao! A quantidade nao pode ser menor que 0. ')
    } else{
        acao=='='? qtd.innerHTML++ : qtd.innerHTML--
    total.innerHTML = qtd.innerHTML * valor.innerHTML
}*/
    
/*   
function alterarqtd(produto, acao) {
    const qtd = document.getElementById('qtd_' + produto);
    const valor = document.getElementById('valor_' + produto);
    const total = document.getElementById('total_' + produto);
    
    if (acao === '-' && parseInt(qtd.innerHTML) === 0) {
        alert('Atenção! A quantidade não pode ser menor que 0.');
    } else {
        if (acao === '=') {
            qtd.innerHTML++;
        } else {
            qtd.innerHTML--;
        }
        total.innerHTML = parseInt(qtd.innerHTML) * parseFloat(valor.innerHTML);
    }
}

function soma() {
    let totalSoma = 0;
    const produtos = document.querySelectorAll('[id^="total_"]');
    
    produtos.forEach(produto => {
        totalSoma += parseFloat(produto.innerHTML);
    });

    return totalSoma;
}
*/

function alterarqtd(id, operacao) {
    // Obtém o elemento de quantidade e total pelo ID
    var qtdElement = document.getElementById('qtd_' + id);
    var totalElement = document.getElementById('total_' + id);
    
    // Obtém o valor atual de quantidade e preço unitário pelo ID
    var qtdAtual = parseInt(qtdElement.innerText);
    var precoUnitario = parseFloat(document.getElementById('valor_' + id).innerText.replace('$', '').replace(',', ''));

    // Calcula o novo valor de quantidade e total com base na operação
    if (operacao === '+') {
        qtdAtual++;
    } else if (operacao === '-' && qtdAtual > 0) {
        qtdAtual--;
    }

    // Atualiza a quantidade
    qtdElement.innerText = qtdAtual;

    // Calcula e atualiza o total
    var novoTotal = (qtdAtual * precoUnitario).toFixed(2);
    totalElement.innerText = '$' + novoTotal;
}


    
