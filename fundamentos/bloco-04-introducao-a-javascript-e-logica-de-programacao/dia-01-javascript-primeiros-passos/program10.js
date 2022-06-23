const custo = 10;
const valorVenda = 15;
const impostoSobreOCusto = custo * 0.2;
const custoTotal = custo + impostoSobreOCusto
const lucro = valorVenda - custoTotal


if (custo < 0 || valorVenda < 0){
    console.log('Valor Invalido');
}

console.log(lucro * 1000);
