"use strict";
//     Lista de Exercícios Funções
// Exercício 1
// Crie uma função que receba uma lista de números como parâmetro e retorne o
// maior número da lista.
function encontrarMaiorNumero(...parametro) {
    let maior = 0;
    for (let i = 0; i < parametro.length; i++) {
        if (parametro[i] > maior) {
            maior = parametro[i];
        }
    }
    return maior;
}
console.log("O Maior numero e:", encontrarMaiorNumero(5, 10, 15, 30, 25, 20));
// Exercício 2
// Desenvolva uma função que receba um número como parâmetro e verifique se
// ele é par ou ímpar. Retorne true se for par e false se for ímpar.
function verificarParOuImpar(x) {
    if (x % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}
console.log("e par?", verificarParOuImpar(1));
console.log("e par?", verificarParOuImpar(2));
// Exercício 3
// Implemente uma função que calcule a média aritmética de um array de números
// e retorne o resultado. Utilize essa função para calcular a média de diferentes
// conjuntos de números.
function calcularMedia(...lista) {
    let soma = 0;
    for (let i = 0; i < lista.length; i++) {
        soma = soma + lista[i];
    }
    return soma / lista.length;
}
console.log("A media do conjunto 1 e:", calcularMedia(10, 5, 1, 20, 15));
console.log("A media do conjunto 2 e:", calcularMedia(2, 4, 6, 8, 10));
// Exercício 4
// Crie uma função que receba uma string como parâmetro e retorne a mesma
// string com todas as letras em caixa alta. Utilize essa função para converter
// diferentes strings.
function retornarcaixaalta(palavras) {
    return palavras.toUpperCase();
}
console.log("exercicio 4:" + retornarcaixaalta("bom dia!"));
// Exercício 5
// Desenvolva uma função que determine se um número é primo ou não. Retorne
// true se for primo e false se não for.
function verificarPrimo(numero) {
    if (numero <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}
console.log("eh primo?", verificarPrimo(10));
console.log("eh primo?", verificarPrimo(7));
// Exercício 6
// Implemente uma função que inverta a ordem dos elementos em um array.
// Utilize essa função para inverter a ordem de diferentes conjuntos de elementos.
function inverterelementos(...variavel1) {
    let novaelementos = "";
    for (let i = variavel1.length - 1; i >= 0; i--) {
        novaelementos += variavel1[i];
    }
    return novaelementos;
}
console.log("exercicio 6:" + inverterelementos(1, 2, 3, 4, 5));
// Exercício 7
// Crie uma função que receba um valor e uma porcentagem como parâmetros. A
// função deve retornar o valor acrescido da porcentagem indicada.
function receberporcentagem(valor, porcentagem) {
    var resultado = 0;
    if (valor === 0) {
        return 0;
    }
    else {
        let conversão = (porcentagem / 100) + 1;
        resultado = valor * conversão;
        return resultado;
    }
}
console.log("exercicio 7:" + receberporcentagem(100, 50));
// Exercício 8
// Crie uma função que receba uma string e retorne a mesma string, mas com as
// palavras em ordem reversa.
function inverterfrase(frase) {
    let resultado = "";
    let palavraAtual = "";
    for (let i = 0; i < frase.length; i++) {
        const char = frase[i];
        if (char === ' ' || i === frase.length - 1) {
            resultado = palavraAtual + ' ' + resultado;
            palavraAtual = '';
        }
        else {
            palavraAtual += char;
        }
    }
    return resultado.trim();
}
console.log("exercicio 8: " + inverterfrase("Socorro subi em um onibus em marrocos"));
console.log("exercicio 8: " + inverterfrase("Luz azul"));
// Exercício 9
// Implemente uma função que retorne a soma de todos os números pares em um
// array.
function somarPar(...numeros) {
    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            soma += numeros[i];
        }
    }
    return soma;
}
console.log("exercicio 9:" + somarPar(1, 2, 3, 4, 5, 6, 7, 8));
// Exercício 10
// Crie uma função que calcule o fatorial de um número. Utilize essa função para
// calcular o fatorial de diferentes números.
function calcularfatorial(numeros) {
    let resultado = 1;
    for (let i = numeros; i >= 1; i--) {
        resultado *= i;
    }
    return resultado;
}
console.log("exercicio 10:" + calcularfatorial(2));
console.log("exercicio 10:" + calcularfatorial(5));
console.log("exercicio 10:" + calcularfatorial(20));
