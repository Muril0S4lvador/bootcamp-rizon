let lista = new Array()
lista = [
  {
    id: 1,
    name: "Ada Lovelace",
    bio:
      "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"
  },
  {
    id: 2,
    name: "Alan Turing",
    bio:
      "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial"
  },
  {
    id: 3,
    name: "Nikola Tesla",
    bio:
      "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."
  },
  {
    id: 4,
    name: "Nicolau Copérnico",
    bio:
      "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."
  }
]

/**
 * @param id id do item da lista desejado
 * @returns retorna a bio de acordo com o paradigma funcional usando o método find.
 * Caso não encontre o id especificado, retorna "-1".
 */
function getBioFuncional(id) {
  return lista.find(item => item.id == id)?.bio || "-1"
}

/**
 * @param id id do item da lista desejado
 * @returns retorna o nome de acordo com o paradigma funcional usando o método find.
 * Caso não encontre o id especificado, retorna "-1".
 */
function getNameFuncional(id) {
  return lista.find(item => item.id == id)?.name || "-1"
}

/**
 * @param id id do item da lista desejado
 * Exclui o item com a id passada por parâmetro usando o método filter.
 */
function removeFuncional(id) {
  lista = lista.filter(item => item.id != id)
}

/**
 * @param id id do item da lista desejado
 * Atualiza a bio do item com a id passada. Procura o item com forEach e atualiza-o.
 */
function updateBioFuncional(id, bio) {
  lista.forEach(item => {
    if (item.id == id) item.bio = bio
  })
}

/**
 * @param id id do item da lista desejado
 * Atualiza o nome do item com a id passada. Procura o item com forEach e atualiza-o.
 */
function updateNameFuncional(id, name) {
  lista.forEach(item => {
    if (item.id == id) item.name = name
  })
}

/**
 * @param id id do item da lista desejado
 * @returns retorna a bio de acordo com o paradigma imperativo. É feita uma iteração na lista usando o for para encontrar o item.
 * Caso não encontre o id especificado, retorna "-1".
 */
function getBioImperativo(id) {
  let result = "-1"
  for (let item of lista) {
    if (item.id == id) {
      result = item.bio
      break
    }
  }
  return result
}

/**
 * @param id id do item da lista desejado
 * @returns retorna o nome de acordo com o paradigma imperativo. É feita uma iteração na lista usando o for para encontrar o item.
 * Caso não encontre o id especificado, retorna "-1".
 */
function getNameImperativo(id) {
  let result = "-1"
  for (let item of lista) {
    if (item.id == id) {
      result = item.name
      break
    }
  }
  return result
}

/**
 * @param id id do item da lista desejado
 * Itera sobre a iista, guardando o objeto e seu índice. Ao encontrar o objeto com a id especificada,
 * remove-o utilizando o método splice.
 */
function removeImperativo(id) {
  for (let [index, item] of lista.entries()) {
    if (item.id == id) {
      lista.splice(index, 1)
    }
  }
}

/**
 * @param id id do item da lista desejado
 * Atualiza a bio do item com a id passada. Itera sobre a iista, guardando o objeto e seu índice. Ao encontrar o objeto com a id especificada,
 * atualiza-o, acessando como array.
 */
function updateBioImperativo(id, bio) {
  for (let [index, item] of lista.entries()) {
    if (item.id == id) {
      lista[index].bio = bio
    }
  }
}

/**
 * @param id id do item da lista desejado
 * Atualiza o nome do item com a id passada. Itera sobre a iista, guardando o objeto e seu índice. Ao encontrar o objeto com a id especificada,
 * atualiza-o, acessando como array.
 */
function updateNameImperativo(id, name) {
  for (let [index, item] of lista.entries()) {
    if (item.id == id) {
      lista[index].name = name
    }
  }
}

/*
  Neste espaço, atribui variáveis para todos os elementos interativos usados para o exercício 2.
  Aqui, fiz dessa forma para que fique simplificado manipular os eventos que ocorrem sobre eles,
  além de não precisar ficar pegando o elemento por Id várias vezes.

  Nesse projeto, temos dois inputs, o id do item da lista - que é sempre necessário - e a string para atualizar o nome
  ou a bio - que só énecessária em dois casos. Para que não ficasse muitas caixas de input na tela, fiz apenas duas:
  inputId: recebe a id do item;
  inputStr: recebe a string para ser atualizada.

  Dessa forma, fiz também com que cada função chame somente a input box que precisa, deixando o design mais intuitivo.

  Cada função possui o seu próprio botão com o seu próprio id, para que seja feita a seleção da função de forma mais
  intuitiva.

  A variável <funcaoSelecionada> foi criada no intuito de fazer o controle de qual função foi selecionada,
  visto que os dados para cada função são pegos pelas mesmas estruturas, que são o inputId e o inputStr.
  Quando nenhuma função é selecionada, ela possui valor null, para que, mesmo que por acaso os inputs sejam enviados,
  nenhuma função receba por engano.

*/

const botaoGetNomeFunc = document.getElementById("get-nome-func")
const botaoUpdNomeFunc = document.getElementById("upd-nome-func")
const botaoGetBioFunc = document.getElementById("get-bio-func")
const botaoUpdBioFunc = document.getElementById("upd-bio-func")
const botaoRemItemFunc = document.getElementById("rem-item-func")

const botaoGetNomeImp = document.getElementById("get-nome-imp")
const botaoUpdNomeImp = document.getElementById("upd-nome-imp")
const botaoGetBioImp = document.getElementById("get-bio-imp")
const botaoUpdBioImp = document.getElementById("upd-bio-imp")
const botaoRemItemImp = document.getElementById("rem-item-imp")

const inputId = document.getElementById("input-id")
const inputString = document.getElementById("input-string")

const saida = document.getElementById("saida-exec2")

let funcaoSelecionada = null

/*
  A parte abaixo foi idealizada para o surgimento das caixas de entrada sob demanda,
  ou seja, de acordo com a seleção do botão de cada função.

  Elas sempre aparecem sem nenhum conteúdo, para que não aconteça de envio de lixo
  para as funções.

  A ativação de algum botão de função também limpa a saída (variável <saida>). Isso foi feito para que
  toda a saída na caixa de saída seja referente a saída do botão selecionado, visto que
  algumas funções não retornam saída.
  
  Dessa forma, se houver algum texto de saída na caixa de saída e for chamada alguma função que não
  retorne saída alguma, a caixa não vai guardar o resultado da função anterior - isto é - vai ser limpa.
*/

// Funçoes Imperativo -------------------------------------------------------------------

botaoGetNomeImp?.addEventListener("click", function() {
  inputId.value = inputString.value = ""
  document.getElementById("entradas")?.classList.remove("hidden")
  inputId?.classList.remove("hidden")
  inputString?.classList.add("hidden")
  funcaoSelecionada = "get-nome-imp"
  saida.innerHTML = ""
})
botaoGetBioImp?.addEventListener("click", function() {
  inputId.value = inputString.value = ""
  document.getElementById("entradas")?.classList.remove("hidden")
  inputId?.classList.remove("hidden")
  inputString?.classList.add("hidden")
  funcaoSelecionada = "get-bio-imp"
  saida.innerHTML = ""
})
botaoUpdNomeImp?.addEventListener("click", function() {
  inputId.value = inputString.value = ""
  document.getElementById("entradas")?.classList.remove("hidden")
  inputId?.classList.remove("hidden")
  inputString?.classList.remove("hidden")
  funcaoSelecionada = "upd-nome-imp"
  saida.innerHTML = ""
})
botaoUpdBioImp?.addEventListener("click", function() {
  inputId.value = inputString.value = ""
  document.getElementById("entradas")?.classList.remove("hidden")
  inputId?.classList.remove("hidden")
  inputString?.classList.remove("hidden")
  funcaoSelecionada = "upd-bio-imp"
  saida.innerHTML = ""
})
botaoRemItemImp?.addEventListener("click", function() {
  inputId.value = inputString.value = ""
  document.getElementById("entradas")?.classList.remove("hidden")
  inputId?.classList.remove("hidden")
  inputString?.classList.add("hidden")
  funcaoSelecionada = "rem-item-imp"
  saida.innerHTML = ""
})

// Funçoes Funcionais -------------------------------------------------------------------

botaoGetNomeFunc?.addEventListener("click", function() {
  inputId.value = inputString.value = ""
  document.getElementById("entradas")?.classList.remove("hidden")
  inputId?.classList.remove("hidden")
  inputString?.classList.add("hidden")
  funcaoSelecionada = "get-nome-func"
  saida.innerHTML = ""
})
botaoGetBioFunc?.addEventListener("click", function() {
  inputId.value = inputString.value = ""
  document.getElementById("entradas")?.classList.remove("hidden")
  inputId?.classList.remove("hidden")
  inputString?.classList.add("hidden")
  funcaoSelecionada = "get-bio-func"
  saida.innerHTML = ""
})
botaoUpdNomeFunc?.addEventListener("click", function() {
  inputId.value = inputString.value = ""
  document.getElementById("entradas")?.classList.remove("hidden")
  inputId?.classList.remove("hidden")
  inputString?.classList.remove("hidden")
  funcaoSelecionada = "upd-nome-func"
  saida.innerHTML = ""
})
botaoUpdBioFunc?.addEventListener("click", function() {
  inputId.value = inputString.value = ""
  document.getElementById("entradas")?.classList.remove("hidden")
  inputId?.classList.remove("hidden")
  inputString?.classList.remove("hidden")
  funcaoSelecionada = "upd-bio-func"
  saida.innerHTML = ""
})
botaoRemItemFunc?.addEventListener("click", function() {
  inputId.value = inputString.value = ""
  document.getElementById("entradas")?.classList.remove("hidden")
  inputId?.classList.remove("hidden")
  inputString?.classList.add("hidden")
  funcaoSelecionada = "rem-item-func"
  saida.innerHTML = ""
})

/**
 * Ao enviar as entradas, essa função esconde as caixas e manda os valores dela
 * para a função desejada.
 */
function selecionaFuncao() {
  // Esconde os itens de entradas
  document.getElementById("entradas")?.classList.add("hidden")
  inputId?.classList.add("hidden")
  inputString?.classList.add("hidden")

  let id = null
  let str = null
  let result = null

  // Cast para o tipo esperado. id : number e str : string
  if (inputId.value !== "") id = Number(inputId.value)
  if (inputString.value !== "") str = String(inputString.value)

  // Seleciona a função para mandar as entradas de acordo com a variável de controle <funcaoSelecionada>
  switch (funcaoSelecionada) {
    case "get-nome-imp":
      if (id !== null) result = getNameImperativo(id)
      break
    case "upd-nome-imp":
      if (id !== null && str !== null) updateNameImperativo(id, str)
      break
    case "upd-bio-imp":
      if (id !== null && str !== null) updateBioImperativo(id, str)
      break
    case "get-bio-imp":
      if (id !== null) result = getBioImperativo(id)
      break
    case "rem-item-imp":
      if (id !== null) removeImperativo(id)
      break
    case "get-nome-func":
      if (id !== null) result = getNameFuncional(id)
      break
    case "upd-nome-func":
      if (id !== null && str !== null) updateNameFuncional(id, str)
      break
    case "upd-bio-func":
      if (id !== null && str !== null) updateBioFuncional(id, str)
      break
    case "get-bio-func":
      if (id !== null) result = getBioFuncional(id)
      break
    case "rem-item-func":
      if (id !== null) removeFuncional(id)
      break
  }

  // If para garantir a existencia de <saida>
  if (saida) {
    //  Se result for igual a "-1", quer dizer que o item não foi encontrado. Essa saída só existe para
    // funções que já retornam uma saída. Nas demais, se um item não for encontrado nada acontece.
    if (result === "-1") saida.innerHTML = `Item com id ${id} não encontrado.`
    // Se result for verdadeiro e diferente de "-1", então a resposta desejada está nele e imprimimos na saida
    else if (result) saida.innerHTML = result
  }

  // Limpa os valores dos inputs para evitar lixo
  inputId.value = inputString.value = ""
  // Atribui null para indicar que nenhuma função foi selecionada. Feito para evitar erros de
  // envios à funções erradas
  funcaoSelecionada = null
  // Imprime a lista novamente para que seja mostrada as mudanças
  showList()
}

/**
 * Feito para diferenciar quando um enter é para enviar o formulário e quando é para passar para a próxima
 * caixa de texto.
 * A entrada só é enviada caso todas as caixas de texto que aparecem para o usuário sejam preenchidas
 * @param event Evento ocorrido. No caso o acionamento da tecla Enter
 * @param input Caixa de input que foi acionado o evento
 * @param nextInput Caixa de input que não foi acionado o evento
 */
function nextInput(event, input, nextInput) {
  if (event.key === "Enter") {
    event.preventDefault()
    if (nextInput.value === "" && !nextInput.classList.contains("hidden"))
      nextInput.focus()
    else if (input.value !== "" && nextInput.value !== "") selecionaFuncao()
    else if (nextInput.value === "" && nextInput.classList.contains("hidden"))
      selecionaFuncao()
  }
}

// Caso uma caixa identifique um keydown, verificam se foi enter (motivo explicado acima)
inputId?.addEventListener("keydown", function(event) {
  nextInput(event, inputId, inputString)
})

inputString?.addEventListener("keydown", function(event) {
  nextInput(event, inputString, inputId)
})

/**
 * Mostra lista para usuário
 */
function showList() {
  // Pega a lista por meio do Id. Essa lista se refere ao elemento <ul> do HTML
  const list = document.getElementById("lista")
  if (list) {
    // Se a lista existir, apague-a
    while (list.firstChild) {
      list.removeChild(list.firstChild)
    }

    // Para cada elemento do array Lista, é criado um <il> para a lista HTML
    for (const item of lista) {
      let li = document.createElement("li")
      li.innerHTML = `
          <h3>${item.name}</h3>
          <p>${item.bio}</p>
          <h6>${item.id}</h6>
      `
      li.classList.add("list-item")
      list.appendChild(li)
    }
  }

  // A exclusão dos il's para depois refazer foi idealizado para garantir que a lista que aparece para o usuário esteja sempre atualizada.
  // Não é o método mais eficiente, mas por ser uma lista pequena de no máximo 4 itens não trás problemas sérios de performance.
}

showList()
export {}
