function currencyConverter(valorDespesa, valorCurrency) {
  if (valorDespesa === 'Não especificado') return 0;
  return (valorDespesa * valorCurrency).toFixed(2);
}

export default currencyConverter;
