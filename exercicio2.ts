import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

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

function list(){
  console.log(lista);
}

function menuParadigma() {
  console.log("Escolha um paradigma:");
  console.log("0 - Funcional");
  console.log("1 - Imperativo");
}

function menuFuncao(paradigmaCode : number) {
  const paradigma = paradigmaCode === 0 ? "Funcional" : "Imperativo";
  console.log(`Digite a operação desejada (${paradigma}):`);
  console.log("0 - Retornar bio");
  console.log("1 - Retornar nome");
  console.log("2 - Alterar bio");
  console.log("3 - Alterar nome");
  console.log("4 - Remover item");
  console.log("5 - Listar lista");
  console.log("6 - Trocar de paradigma");
  console.log("7 - Encerrar");
}

async function selecionaFuncao(paradigmaCode: number, opcao: number) {
  let result = "";

  if (paradigmaCode === 0) {
    switch (opcao) {
      case 0:
        result = await getBioFuncional(await leOpcao());
        break;
      case 1:
        result = await getNameFuncional(await leOpcao());
        break;
      case 2:
        await updateBioFuncional(await leOpcao(), await leString());
        break;
      case 3:
        await updateNameFuncional(await leOpcao(), await leString());
        break;
      case 4:
        await removeFuncional(await leOpcao());
        break;
      case 5:
        list();
        break;
      case 6:
        await main();
        return;
      case 7:
        rl.close();
        process.exit(0);
      default:
        result = "Opção Inválida.";
        break;
    }
  } else if (paradigmaCode === 1) {
    switch (opcao) {
      case 0:
        result = await getBioImperativo(await leOpcao());
        break;
      case 1:
        result = await getNameImperativo(await leOpcao());
        break;
      case 2:
        await updateBioImperativo(await leOpcao(), await leString());
        break;
      case 3:
        await updateNameImperativo(await leOpcao(), await leString());
        break;
      case 4:
        await removeImperativo(await leOpcao());
        break;
      case 5:
        list();
        break;
      case 6:
        await main();
        return; 
      case 7:
        rl.close();
        process.exit(0);
      default:
        result = "Opção Inválida.";
        break;
    }
  } else {
    result = "Paradigma escolhido inválido";
  }

  if (result === "-1") result = "Item não encontrado";
  if (result !== "") console.log(`\n${result}\n`);

  menuFuncao(paradigmaCode);
  const novaOpcao = await leOpcao();
  await selecionaFuncao(paradigmaCode, novaOpcao);
}

function leOpcao(): Promise<number> {
  return new Promise((resolve) => {
    rl.question("Digite o índice desejado: ", (input) => {
      const num = Number(input);
      resolve(num);
    });
  });
}

function leString(): Promise<string> {
  return new Promise((resolve) => {
    rl.question("Digite o texto desejado: ", (input) => {
      const str = String(input);
      resolve(str);
    });
  });
}

async function inicioParadigma() : Promise<number> {
  menuParadigma();
  let paradigCode = await leOpcao();
  return paradigCode;
}

async function inicioFuncao(paradigCode : number) {
  menuFuncao(paradigCode);
  let opcao = await leOpcao();
  selecionaFuncao(paradigCode, opcao); 
}

async function main(){

  let paradigCode = await inicioParadigma();
  
  inicioFuncao(paradigCode);  

} 

main();


// a) Crie uma função que retorne a bio do id passado
// b) Crie uma função que retorne o name do id passado
// c) Crie uma função que apague um item da lista a partir de um id passado
// d) Crie uma função que altere a bio ou o name a partir de um id passado
// e) Demonstre todas as funções com o paradigma funcional e com o imperativo

