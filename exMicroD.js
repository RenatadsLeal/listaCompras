// Exercício PG Programação Imperativa - "Lista de Compras"

// Crie um array que contenha nomes de produtos para compra.
let listaCompras = ["Abacaxi", "Kiwi", "Morango", "Acelga", "Pepino"];
console.log(listaCompras);
console.log(listaCompras.length);

/*Após isso, exiba no console os resultados das funções relacionadas aos arrays,
que são: Join, Pop, Push, Shift e Unshift.
Também se deve escrever com suas palavras, o que cada função realiza.*/

// Método .pop
console.log("Método .pop - remove o último elemento do array e o retorna");
let ultimoItem = listaCompras.pop();
console.log(listaCompras);
console.log(listaCompras.length);
console.log(ultimoItem);

// Método .push
console.log("Método .push - adiciona um ou mais elementos no final do array");
listaCompras.push("Tomate", "Cebola");
console.log(listaCompras);
console.log(listaCompras.length);

// Método .shift
console.log("Método .shift - Remove o primeiro elemento do array e o retorna");
let elementoEliminado = listaCompras.shift();
console.log(listaCompras);
console.log(listaCompras.length);

// Método .unshift
console.log("Método .unshift - adiciona um ou mais elemento ao início do array");
listaCompras.unshift("Banana");
console.log(listaCompras);
console.log(listaCompras.length);

// Método .join
console.log("Método .join - junta os elementos do array usando um seprador especificado. Se não for especificado usará vírgula");
let separandoComTraco = listaCompras.join(" - ");
console.log(separandoComTraco);


