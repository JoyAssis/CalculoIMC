function calculaImc() {
  let usuario = document.getElementById('usuario').value;
  let alturaInformada = Number(document.getElementById('altura').value.replace(',', '.'));
  let pesoInformado = Number(document.getElementById('peso').value.replace(',', '.'));

  if (isNaN(alturaInformada) || isNaN(pesoInformado) || alturaInformada <= 0 || pesoInformado <= 0) {
    document.getElementById('resultado').innerHTML = "Por favor, insira valores válidos para altura e peso.";
  } else {
    let imc = (pesoInformado / (alturaInformada * alturaInformada)).toFixed(2);
    let resultado = `${usuario}, seu IMC é ${imc}.<br>`;

    if (imc < 18.5) {
      resultado += "Você está abaixo do recomendado.";
    } else if (imc <= 35) {
      resultado += "Seu IMC está excelente!";
    } else {
      resultado += "Você está acima do recomendado.";
    }

    document.getElementById('resultado').innerHTML = resultado
  }
}
