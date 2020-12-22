let counter = 1;

function mostraNota() {

    var newNode = document.createElement('div');
    newNode.className = 'row';

    var numero = document.createElement('div');
    numero.className = "col";
    numero.innerHTML = counter;
    newNode.appendChild(numero);

    var nome = document.createElement('div');
    nome.className = "col";
    nome.innerHTML = document.getElementById("nome").value;
    newNode.appendChild(nome);

    var primeiraNota = document.createElement('div');
    primeiraNota.className = "col";
    primeiraNota.innerHTML = document.getElementById("primeiraNota").value;
    newNode.appendChild(primeiraNota);

    var segundaNota = document.createElement('div');
    segundaNota.className = "col";
    segundaNota.innerHTML = document.getElementById("segundaNota").value;
    newNode.appendChild(segundaNota);

    var notaFinal = document.createElement('div');
    notaFinal.className = "col";
    let resultado = ((document.getElementById("primeiraNota").value +
        document.getElementById("segundaNota").value) / 2);
    notaFinal.innerHTML = resultado;
    newNode.appendChild(notaFinal);

    document.getElementById('resultados').appendChild(newNode);

    if ((resultado >= 7) && document.getElementById("frequencia").value > 70) {
        let color = "aprovado";
    } else {
        let color = "reprovado";
    }



    counter++;
}