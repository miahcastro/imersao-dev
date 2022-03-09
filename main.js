function converterDolar() {
  let valorElemento = document.getElementById("valor");

  let valor = valorElemento.value;
  let valorEmDolarNumerico = parseFloat(valor);

  let valorEmRealDolar = valorEmDolarNumerico * 5;
  console.log(valorEmRealDolar);

  let elementoValorConvertidoDolar = document.getElementById("valorConvertidoDolar");
  let valorConvertidoDolar = "O resultado de Dólar para Real é R$ " + valorEmRealDolar;
  elementoValorConvertidoDolar.innerHTML = valorConvertidoDolar;
}

function converterEuro() {
  let valorElementoEuro = document.getElementById("valor");

  let valor = valorElementoEuro.value;
  let valorEmEuroNumerico = parseFloat(valor);

  let valorEmRealEuro = valorEmEuroNumerico * 5.70;
  console.log(valorEmRealEuro);

  let elementoValorConvertidoEuro = document.getElementById("valorConvertidoEuro");
  let valorConvertidoEuro = "O resultado de Euro para Real é R$ " + valorEmRealEuro;
  elementoValorConvertidoEuro.innerHTML = valorConvertidoEuro;
}