// Inicializando uma variavel para armazenar o id do próximo elemento a ser inserido na lista de tarefas
let itemId = 0
 
function salvarTarefa() {
  // Atribuindo o input a uma variavel
  let input = document.querySelector('#valor')
 
  // Atribuindo a lista a uma variavel
  let elementoLista = document.querySelector('#lista')
 
  // Caso o input com a nova tarefa esteja vazio, vai exibir um alerta
  if (input.value === '') {
    alert('Digite uma nova tarefa')
    return
  }
 
  // "Escrevendo" o html de um novo card na lista de tarefas
  elementoLista.innerHTML +=
  `
  <div class='card' id='item-${itemId}'>
    <p>${input.value}</p>
    <button class="botaoExcluir" onclick='excluir("item-${itemId}")'>Excluir</button>
  </div>
  `
 
  // Limpando o input
  input.value = ''
 
  // Alterando o numero Id para próximo item a ser inserido na lista
  itemId++
}
 
function excluir(valor) {
  // Selecionando o elemento a ser excluido
  let elemento = document.querySelector(`#${valor}`)
 
  // Excluindo o elemento selecionado
  elemento.remove()
}

