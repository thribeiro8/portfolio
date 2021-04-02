document.querySelector('.hamburguer').addEventListener('click', () => {
  document.querySelector('.container').classList.toggle('show-menu');
});

document.querySelector('#qtd').addEventListener('change', updatePrice);
document.querySelector('#js').addEventListener('change', updatePrice);
document.querySelector('#layout-sim').addEventListener('change', updatePrice);
document.querySelector('#layout-nao').addEventListener('change', updatePrice);
document.querySelector('#prazo').addEventListener('change', () => {
  const prazo = document.querySelector('#prazo').value;
  // prettier-ignore
  document.querySelector('label[for=prazo]').innerHTML = `Prazo: ${prazo} semanas`;
  updatePrice();
});

function updatePrice() {
  const qtd = document.querySelector('#qtd').value;
  const temJS = document.querySelector('#js').checked;
  const incluiLayout = document.querySelector('#layout-sim').checked;
  const prazo = document.querySelector('#prazo').value;

  let preco = qtd * 100;
  if (temJS) preco *= 1.1;
  if (incluiLayout) preco += 500;
  let taxaUrgencia = 1 - prazo * 0.1;
  preco *= 1 + taxaUrgencia;

  document.querySelector('#preco').innerHTML = `R$ ${preco.toFixed(2)}`;
}
