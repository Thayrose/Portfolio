const botao = document.querySelector('.mobile-menu')
const closeBotao = document.querySelector('.cabecalho-menu svg')

botao.addEventListener('click', () => {
  const menu = document.querySelector('.cabecalho-menu')

  menu.classList.add('cabecalho-menu-ativo')
})

closeBotao.addEventListener('click', () => {
  const menu = document.querySelector('.cabecalho-menu')

  menu.classList.remove('cabecalho-menu-ativo')
})