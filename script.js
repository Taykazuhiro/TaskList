// Inicializando uma variavel para armazenar o id do próximo elemento a ser inserido na lista de tarefas
let itemId = 0
 
function salvarTarefa() {
  // Atribuindo o input a uma variavel
  //querySelector é um método que retorna o primeiro que corresponde ao seletor CSS. Pode ser uma tag <p>, <h1> ou um iD como no caso abaixo
  let input = document.querySelector('#valor')
  // JS não tem diferenciação entre aspas duplas "" ou simples '' para strings
 
  // Atribuindo a lista a uma variavel
  let elementoLista = document.querySelector('#lista')
 
  // Caso o input com a nova tarefa esteja vazio, vai exibir um alerta
  if (input.value === '') {
    alert('Digite uma nova tarefa')
    return
  }
 
  // "Escrevendo" o html de um novo card na lista de tarefas
  // innerHTML é um método que define ou retorna o conteúdo HTML de um elemento.
  //Nesse caso colocamos o elemento <section> dentro da varialvel elementoLista e com esse método estamos alterando o conteúdo do elemento
  // o operador += é um operador de adição para númericos e de concatenação para strings
  // o elemento ` permite adicionar strings de várias linhas
  elementoLista.innerHTML +=
  `
  <div class='card' id='item-${itemId}'>
    <p>${input.value}</p>
    <button class="botao-concluir" onclick='concluir("item-${itemID}")'>Concluir</button>
    <button class="botao-excluir" onclick='excluir("item-${itemId}")'>Excluir</button>
  </div>
  `
 //${...} é a sintaxe usada para interpolação de strings. Interpolação de Strings = inserir expressões em uma string. Nesse caso, a variavel.

  // Limpando o input
  input.value = ''
 
  // Alterando o numero Id para próximo item a ser inserido na lista. Numero do ID+1
  itemId++
}


function excluir(valor) {
//valor aqui funciona como uma variavel que vai receber o parâmetro ou é o ID valor?
  // Selecionando o elemento a ser excluido
  let elemento = document.querySelector(`#${valor}`)
  //estou usando interpolação para adicionar o # e chamar o ID da classe
 
  // Excluindo o elemento selecionado
  elemento.remove()
}

