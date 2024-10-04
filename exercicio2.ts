import { eventNames } from "process";
import { isStringObject } from "util/types";

let lista: Array<{id, name, bio}> = new Array();
lista = [
  {
    id: 1,
    name: 'Ada Lovelace',
    bio: 'Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina',
  },
  {
    id: 2,
    name: 'Alan Turing',
    bio: 'Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial',
  },
  {
    id: 3,
    name: 'Nikola Tesla',
    bio: 'Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada.',
  },
  {
    id: 4,
    name: 'Nicolau Copérnico',
    bio: 'Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar.',
  },
];

function getBioFuncional (id : number) : string {
  return lista.find(item => item.id == id)?.bio || "-1";
}

function getNameFuncional (id : number) : string {
  return lista.find(item => item.id == id)?.name || "-1";
}

function removeFuncional (id : number) : void {
  lista = lista.filter(item => item.id != id);
}

function updateBioFuncional(id : number, bio : string) {
  lista.forEach(item => {
    if( item.id == id )
      item.bio = bio;
  })
}

function updateNameFuncional(id : number, name : string) {
  lista.forEach(item => {
    if( item.id == id )
      item.name = name;
  })
}

function getBioImperativo (id : number) : string {
  let result = "-1";
  for( let item of lista) {
    if( item.id == id ){
      result = item.bio;
      break;
    }
  }
  return result;
}

function getNameImperativo (id : number) : string {
  let result = "-1";
  for( let item of lista) {
    if( item.id == id ){
      result = item.name;
      break;
    }
  }
  return result;
}

function removeImperativo (id : number) : void {
  for( let [index, item] of lista.entries() ) {
    if( item.id == id ){
      lista.splice(index, 1);
    }
  }
}

function updateBioImperativo(id : number, bio : string) {
  for( let [index, item] of lista.entries() ) {
    if( item.id == id ){
      lista[index].bio = bio;
    }
  }
}

function updateNameImperativo(id : number, name : string) {
  for( let [index, item] of lista.entries() ) {
    if( item.id == id ){
      lista[index].name = name;
    }
  }
}

const botaoGetNomeFunc = document.getElementById('get-nome-func') as HTMLButtonElement;
const botaoUpdNomeFunc = document.getElementById('upd-nome-func') as HTMLButtonElement;
const botaoGetBioFunc = document.getElementById('get-bio-func') as HTMLButtonElement;
const botaoUpdBioFunc = document.getElementById('upd-bio-func') as HTMLButtonElement;
const botaoRemItemFunc = document.getElementById('rem-item-func') as HTMLButtonElement;

const botaoGetNomeImp = document.getElementById('get-nome-imp') as HTMLButtonElement;
const botaoUpdNomeImp = document.getElementById('upd-nome-imp') as HTMLButtonElement;
const botaoGetBioImp = document.getElementById('get-bio-imp') as HTMLButtonElement;
const botaoUpdBioImp = document.getElementById('upd-bio-imp') as HTMLButtonElement;
const botaoRemItemImp = document.getElementById('rem-item-imp') as HTMLButtonElement;

const inputId = document.getElementById('input-id') as HTMLInputElement;
const inputString = document.getElementById('input-string') as HTMLInputElement;

const saida = document.getElementById('saida-exec2') as HTMLOutputElement;

let funcaoSelecionada: string | null = null;

botaoGetNomeImp?.addEventListener('click', function() {
  inputId.value = inputString.value = "";
  document.getElementById('entradas')?.classList.remove("hidden")
  inputId?.classList.remove('hidden');
  inputString?.classList.add('hidden');
  funcaoSelecionada = 'get-nome-imp';
  saida.innerHTML = "";

});
botaoGetBioImp?.addEventListener('click', function() {
  inputId.value = inputString.value = "";
  document.getElementById('entradas')?.classList.remove("hidden")
  inputId?.classList.remove('hidden');
  inputString?.classList.add('hidden');
  funcaoSelecionada = 'get-bio-imp';
  saida.innerHTML = "";

});
botaoUpdNomeImp?.addEventListener('click', function() {
  inputId.value = inputString.value = "";
  document.getElementById('entradas')?.classList.remove("hidden")
  inputId?.classList.remove('hidden');
  inputString?.classList.remove('hidden');
  funcaoSelecionada = 'upd-nome-imp';
  saida.innerHTML = "";

});
botaoUpdBioImp?.addEventListener('click', function() {
  inputId.value = inputString.value = "";
  document.getElementById('entradas')?.classList.remove("hidden")
  inputId?.classList.remove('hidden');
  inputString?.classList.remove('hidden');
  funcaoSelecionada = 'upd-bio-imp';
  saida.innerHTML = "";

});
botaoRemItemImp?.addEventListener('click', function() {
  inputId.value = inputString.value = "";
  document.getElementById('entradas')?.classList.remove("hidden")
  inputId?.classList.remove('hidden');
  inputString?.classList.add('hidden');
  funcaoSelecionada = 'rem-item-imp';
  saida.innerHTML = "";

});

// Funçoes Funcionais -------------------------------------------------------------------

botaoGetNomeFunc?.addEventListener('click', function() {
  inputId.value = inputString.value = "";
  document.getElementById('entradas')?.classList.remove("hidden")
  inputId?.classList.remove('hidden');
  inputString?.classList.add('hidden');
  funcaoSelecionada = 'get-nome-func';
  saida.innerHTML = "";

});
botaoGetBioFunc?.addEventListener('click', function() {
  inputId.value = inputString.value = "";
  document.getElementById('entradas')?.classList.remove("hidden")
  inputId?.classList.remove('hidden');
  inputString?.classList.add('hidden');
  funcaoSelecionada = 'get-bio-func';
  saida.innerHTML = "";

});
botaoUpdNomeFunc?.addEventListener('click', function() {
  inputId.value = inputString.value = "";
  document.getElementById('entradas')?.classList.remove("hidden")
  inputId?.classList.remove('hidden');
  inputString?.classList.remove('hidden');
  funcaoSelecionada = 'upd-nome-func';
  saida.innerHTML = "";

});
botaoUpdBioFunc?.addEventListener('click', function() {
  inputId.value = inputString.value = "";
  document.getElementById('entradas')?.classList.remove("hidden")
  inputId?.classList.remove('hidden');
  inputString?.classList.remove('hidden');
  funcaoSelecionada = 'upd-bio-func';
  saida.innerHTML = "";
  
});
botaoRemItemFunc?.addEventListener('click', function() {
  inputId.value = inputString.value = "";
  document.getElementById('entradas')?.classList.remove("hidden")
  inputId?.classList.remove('hidden');
  inputString?.classList.add('hidden');
  funcaoSelecionada = 'rem-item-func';
  saida.innerHTML = "";

});

function selecionaFuncao(){
  document.getElementById('entradas')?.classList.add("hidden")
  inputId?.classList.add('hidden');
  inputString?.classList.add('hidden');

  let id:     number | null = null;
  let str:    string | null = null;
  let result: string | null = null;

  if ( inputId.value !== "" )  id = Number(inputId.value)
  if ( inputString.value !== "" ) str = String(inputString.value)
  
  switch ( funcaoSelecionada ) {
    
    case 'get-nome-imp':
      if( id !== null ) result = getNameImperativo(id);
      break;
    case 'upd-nome-imp':
      if( id !== null && str !== null ) updateNameImperativo(id, str);
      break;
    case 'upd-bio-imp':
      if( id !== null && str !== null ) updateBioImperativo(id, str)
      break;
    case 'get-bio-imp':
      if( id !== null ) result = getBioImperativo(id);
      break;
    case 'rem-item-imp':
      if( id !== null ) removeImperativo(id);
      break;
    case 'get-nome-func':
      if( id !== null ) result = getNameFuncional(id);
      break;
    case 'upd-nome-func':
      if( id !== null && str !== null ) updateNameFuncional(id, str);
      break;
    case 'upd-bio-func':
      if( id !== null && str !== null ) updateBioFuncional(id, str);
      break;
    case 'get-bio-func':
      if( id !== null ) result = getBioFuncional(id);
      break;
    case 'rem-item-func':
      if( id !== null ) removeFuncional(id);
      break;
  }

  if ( saida ){
    if ( result === "-1" ) saida.innerHTML = `Item com id ${id} não encontrado.`;
    else if ( result ) saida.innerHTML = result;
  }
  
  inputId.value = inputString.value = "";
  funcaoSelecionada = null;
  showList();
}

function nextInput(event, input: HTMLInputElement, nextInput: HTMLInputElement) {
  if( event.key === "Enter" ){
    event.preventDefault();
    if ( nextInput.value === "" && !nextInput.classList.contains("hidden")) 
      nextInput.focus();
    else if ( input.value !== "" && nextInput.value !== "" )
      selecionaFuncao();
    else if ( nextInput.value === "" && nextInput.classList.contains("hidden")) 
      selecionaFuncao();
  }
}

inputId?.addEventListener('keydown', function(event) {
  nextInput(event, inputId, inputString);
})

inputString?.addEventListener('keydown', function(event) {
  nextInput(event, inputString, inputId);
})

function showList() {
  const list = document.getElementById('lista');
  if( list ) {

    while( list.firstChild ){
      list.removeChild(list.firstChild);
    }
    
    for( const item of lista ){
      let li = document.createElement('li');
      li.innerHTML = `
          <h3>${item.name}</h3>
          <p>${item.bio}</p>
          <h6>${item.id}</h6>
      `;
      li.classList.add('list-item');
      list.appendChild(li);
    }
  }
}

showList();