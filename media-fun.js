let notas = [7.5, 8.0, 6.0, 9.5, 5.0, 8.5, 7.0, 10.0, 6.5, 9.0];
let soma = 0;
let maiorNota = notas[0];
let menorNota = notas[0];
let notasAcimaMedia = 0;
let notasAbaixoMedia = 0;

function total(num) {
    for (let i = 0; i < notas.length; i++) {
        soma += notas[i];
        return soma;
    }
}

function Maior() {
    for (let i = 0; i < notas.length; i++) {
        if (notas[i] > maiorNota) {
            maiorNota = notas[i];
        }
    }
    return maiorNota;
}

function Menor() {
    for (let i = 0; i < notas.length; i++) {
        if (notas[i] < menorNota) {
            menorNota = notas[i];
        }
    }
    return menorNota;
}

function Acima() {
    for (let i = 0; i < notas.length; i++) {
        if (notas[i] >= 6) {
            notasAcimaMedia++;
        }
    }
    return notasAcimaMedia;
}
function Abaixo() {
    for (let i = 0; i < notas.length; i++) {
        if (notas[i] < 6) {
            notasAbaixoMedia++;
        }
    }
    return notasAbaixoMedia;
}
function adicionar() {
    notas.push(8.0);
}

function imprimir() {
    for (let i = 0; i < notas.length; i++) {
        console.log(notas[i]);
    }
}

adicionar();
console.log(total());
console.log(Maior());
console.log(Menor());
console.log(`temos ${Acima()} notas acima da média`);
console.log(`temos ${Abaixo()} notas abaixo da média`);
console.log(`aqui está a lista de notas:`);
imprimir();