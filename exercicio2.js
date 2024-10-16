"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var lista = new Array();
lista = [
    {
        id: 1,
        name: "Ada Lovelace",
        bio: "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina",
    },
    {
        id: 2,
        name: "Alan Turing",
        bio: "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial",
    },
    {
        id: 3,
        name: "Nikola Tesla",
        bio: "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada.",
    },
    {
        id: 4,
        name: "Nicolau Copérnico",
        bio: "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar.",
    },
];
/**
 * @param id id do item da lista desejado
 * @returns retorna a bio de acordo com o paradigma funcional usando o método find.
 * Caso não encontre o id especificado, retorna "-1".
 */
function getBioFuncional(id) {
    var _a;
    return ((_a = lista.find(function (item) { return item.id == id; })) === null || _a === void 0 ? void 0 : _a.bio) || "-1";
}
/**
 * @param id id do item da lista desejado
 * @returns retorna o nome de acordo com o paradigma funcional usando o método find.
 * Caso não encontre o id especificado, retorna "-1".
 */
function getNameFuncional(id) {
    var _a;
    return ((_a = lista.find(function (item) { return item.id == id; })) === null || _a === void 0 ? void 0 : _a.name) || "-1";
}
/**
 * @param id id do item da lista desejado
 * Exclui o item com a id passada por parâmetro usando o método filter.
 */
function removeFuncional(id) {
    lista = lista.filter(function (item) { return item.id != id; });
}
/**
 * @param id id do item da lista desejado
 * Atualiza a bio do item com a id passada. Procura o item com forEach e atualiza-o.
 */
function updateBioFuncional(id, bio) {
    lista.forEach(function (item) {
        if (item.id == id)
            item.bio = bio;
    });
}
/**
 * @param id id do item da lista desejado
 * Atualiza o nome do item com a id passada. Procura o item com forEach e atualiza-o.
 */
function updateNameFuncional(id, name) {
    lista.forEach(function (item) {
        if (item.id == id)
            item.name = name;
    });
}
/**
 * @param id id do item da lista desejado
 * @returns retorna a bio de acordo com o paradigma imperativo. É feita uma iteração na lista usando o for para encontrar o item.
 * Caso não encontre o id especificado, retorna "-1".
 */
function getBioImperativo(id) {
    var e_1, _a;
    var result = "-1";
    try {
        for (var lista_1 = __values(lista), lista_1_1 = lista_1.next(); !lista_1_1.done; lista_1_1 = lista_1.next()) {
            var item = lista_1_1.value;
            if (item.id == id) {
                result = item.bio;
                break;
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (lista_1_1 && !lista_1_1.done && (_a = lista_1.return)) _a.call(lista_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return result;
}
/**
 * @param id id do item da lista desejado
 * @returns retorna o nome de acordo com o paradigma imperativo. É feita uma iteração na lista usando o for para encontrar o item.
 * Caso não encontre o id especificado, retorna "-1".
 */
function getNameImperativo(id) {
    var e_2, _a;
    var result = "-1";
    try {
        for (var lista_2 = __values(lista), lista_2_1 = lista_2.next(); !lista_2_1.done; lista_2_1 = lista_2.next()) {
            var item = lista_2_1.value;
            if (item.id == id) {
                result = item.name;
                break;
            }
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (lista_2_1 && !lista_2_1.done && (_a = lista_2.return)) _a.call(lista_2);
        }
        finally { if (e_2) throw e_2.error; }
    }
    return result;
}
/**
 * @param id id do item da lista desejado
 * Itera sobre a iista, guardando o objeto e seu índice. Ao encontrar o objeto com a id especificada,
 * remove-o utilizando o método splice.
 */
function removeImperativo(id) {
    var e_3, _a;
    try {
        for (var _b = __values(lista.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
            var _d = __read(_c.value, 2), index = _d[0], item = _d[1];
            if (item.id == id) {
                lista.splice(index, 1);
            }
        }
    }
    catch (e_3_1) { e_3 = { error: e_3_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_3) throw e_3.error; }
    }
}
/**
 * @param id id do item da lista desejado
 * Atualiza a bio do item com a id passada. Itera sobre a iista, guardando o objeto e seu índice. Ao encontrar o objeto com a id especificada,
 * atualiza-o, acessando como array.
 */
function updateBioImperativo(id, bio) {
    var e_4, _a;
    try {
        for (var _b = __values(lista.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
            var _d = __read(_c.value, 2), index = _d[0], item = _d[1];
            if (item.id == id) {
                lista[index].bio = bio;
            }
        }
    }
    catch (e_4_1) { e_4 = { error: e_4_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_4) throw e_4.error; }
    }
}
/**
 * @param id id do item da lista desejado
 * Atualiza o nome do item com a id passada. Itera sobre a iista, guardando o objeto e seu índice. Ao encontrar o objeto com a id especificada,
 * atualiza-o, acessando como array.
 */
function updateNameImperativo(id, name) {
    var e_5, _a;
    try {
        for (var _b = __values(lista.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
            var _d = __read(_c.value, 2), index = _d[0], item = _d[1];
            if (item.id == id) {
                lista[index].name = name;
            }
        }
    }
    catch (e_5_1) { e_5 = { error: e_5_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_5) throw e_5.error; }
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
var botaoGetNomeFunc = document.getElementById("get-nome-func");
var botaoUpdNomeFunc = document.getElementById("upd-nome-func");
var botaoGetBioFunc = document.getElementById("get-bio-func");
var botaoUpdBioFunc = document.getElementById("upd-bio-func");
var botaoRemItemFunc = document.getElementById("rem-item-func");
var botaoGetNomeImp = document.getElementById("get-nome-imp");
var botaoUpdNomeImp = document.getElementById("upd-nome-imp");
var botaoGetBioImp = document.getElementById("get-bio-imp");
var botaoUpdBioImp = document.getElementById("upd-bio-imp");
var botaoRemItemImp = document.getElementById("rem-item-imp");
var inputId = document.getElementById("input-id");
var inputString = document.getElementById("input-string");
var saida = document.getElementById("saida-exec2");
var funcaoSelecionada = null;
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
function resetaEMostraInputs() {
    var _a;
    inputId.value = inputString.value = "";
    (_a = document.getElementById("entradas")) === null || _a === void 0 ? void 0 : _a.classList.remove("hidden");
    inputId === null || inputId === void 0 ? void 0 : inputId.classList.remove("hidden");
    inputString === null || inputString === void 0 ? void 0 : inputString.classList.remove("hidden");
    saida.innerHTML = "";
}
function resetaEMostraIdInput() {
    var _a;
    inputId.value = inputString.value = "";
    (_a = document.getElementById("entradas")) === null || _a === void 0 ? void 0 : _a.classList.remove("hidden");
    inputId === null || inputId === void 0 ? void 0 : inputId.classList.remove("hidden");
    inputString === null || inputString === void 0 ? void 0 : inputString.classList.add("hidden");
    saida.innerHTML = "";
}
// Funçoes Imperativo -------------------------------------------------------------------
botaoGetNomeImp === null || botaoGetNomeImp === void 0 ? void 0 : botaoGetNomeImp.addEventListener("click", function () {
    resetaEMostraIdInput();
    funcaoSelecionada = "get-nome-imp";
});
botaoGetBioImp === null || botaoGetBioImp === void 0 ? void 0 : botaoGetBioImp.addEventListener("click", function () {
    resetaEMostraIdInput();
    funcaoSelecionada = "get-bio-imp";
});
botaoUpdNomeImp === null || botaoUpdNomeImp === void 0 ? void 0 : botaoUpdNomeImp.addEventListener("click", function () {
    resetaEMostraInputs();
    funcaoSelecionada = "upd-nome-imp";
});
botaoUpdBioImp === null || botaoUpdBioImp === void 0 ? void 0 : botaoUpdBioImp.addEventListener("click", function () {
    resetaEMostraInputs();
    funcaoSelecionada = "upd-bio-imp";
});
botaoRemItemImp === null || botaoRemItemImp === void 0 ? void 0 : botaoRemItemImp.addEventListener("click", function () {
    resetaEMostraIdInput();
    funcaoSelecionada = "rem-item-imp";
});
// Funçoes Funcionais -------------------------------------------------------------------
botaoGetNomeFunc === null || botaoGetNomeFunc === void 0 ? void 0 : botaoGetNomeFunc.addEventListener("click", function () {
    resetaEMostraIdInput();
    funcaoSelecionada = "get-nome-func";
});
botaoGetBioFunc === null || botaoGetBioFunc === void 0 ? void 0 : botaoGetBioFunc.addEventListener("click", function () {
    resetaEMostraIdInput();
    funcaoSelecionada = "get-bio-func";
});
botaoUpdNomeFunc === null || botaoUpdNomeFunc === void 0 ? void 0 : botaoUpdNomeFunc.addEventListener("click", function () {
    resetaEMostraInputs();
    funcaoSelecionada = "upd-nome-func";
});
botaoUpdBioFunc === null || botaoUpdBioFunc === void 0 ? void 0 : botaoUpdBioFunc.addEventListener("click", function () {
    resetaEMostraInputs();
    funcaoSelecionada = "upd-bio-func";
});
botaoRemItemFunc === null || botaoRemItemFunc === void 0 ? void 0 : botaoRemItemFunc.addEventListener("click", function () {
    resetaEMostraIdInput();
    funcaoSelecionada = "rem-item-func";
});
/**
 * Ao enviar as entradas, essa função esconde as caixas e manda os valores dela
 * para a função desejada.
 */
function selecionaFuncao() {
    var _a;
    // Esconde os itens de entradas
    (_a = document.getElementById("entradas")) === null || _a === void 0 ? void 0 : _a.classList.add("hidden");
    inputId === null || inputId === void 0 ? void 0 : inputId.classList.add("hidden");
    inputString === null || inputString === void 0 ? void 0 : inputString.classList.add("hidden");
    var id = null;
    var str = null;
    var result = null;
    // Cast para o tipo esperado. id : number e str : string
    if (inputId.value !== "")
        id = Number(inputId.value);
    if (inputString.value !== "")
        str = String(inputString.value);
    // Seleciona a função para mandar as entradas de acordo com a variável de controle <funcaoSelecionada>
    switch (funcaoSelecionada) {
        case "get-nome-imp":
            if (id !== null)
                result = getNameImperativo(id);
            break;
        case "upd-nome-imp":
            if (id !== null && str !== null)
                updateNameImperativo(id, str);
            break;
        case "upd-bio-imp":
            if (id !== null && str !== null)
                updateBioImperativo(id, str);
            break;
        case "get-bio-imp":
            if (id !== null)
                result = getBioImperativo(id);
            break;
        case "rem-item-imp":
            if (id !== null)
                removeImperativo(id);
            break;
        case "get-nome-func":
            if (id !== null)
                result = getNameFuncional(id);
            break;
        case "upd-nome-func":
            if (id !== null && str !== null)
                updateNameFuncional(id, str);
            break;
        case "upd-bio-func":
            if (id !== null && str !== null)
                updateBioFuncional(id, str);
            break;
        case "get-bio-func":
            if (id !== null)
                result = getBioFuncional(id);
            break;
        case "rem-item-func":
            if (id !== null)
                removeFuncional(id);
            break;
    }
    // If para garantir a existencia de <saida>
    if (saida) {
        //  Se result for igual a "-1", quer dizer que o item não foi encontrado. Essa saída só existe para
        // funções que já retornam uma saída. Nas demais, se um item não for encontrado nada acontece.
        if (result === "-1")
            saida.innerHTML = "Item com id ".concat(id, " n\u00E3o encontrado.");
        // Se result for verdadeiro e diferente de "-1", então a resposta desejada está nele e imprimimos na saida
        else if (result)
            saida.innerHTML = result;
    }
    // Limpa os valores dos inputs para evitar lixo
    inputId.value = inputString.value = "";
    // Atribui null para indicar que nenhuma função foi selecionada. Feito para evitar erros de
    // envios à funções erradas
    funcaoSelecionada = null;
    // Imprime a lista novamente para que seja mostrada as mudanças
    showList();
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
        event.preventDefault();
        if (nextInput.value === "" && !nextInput.classList.contains("hidden"))
            nextInput.focus();
        else if (input.value !== "" && nextInput.value !== "")
            selecionaFuncao();
        else if (nextInput.value === "" && nextInput.classList.contains("hidden"))
            selecionaFuncao();
    }
}
// Caso uma caixa identifique um keydown, verificam se foi enter (motivo explicado acima)
inputId === null || inputId === void 0 ? void 0 : inputId.addEventListener("keydown", function (event) {
    nextInput(event, inputId, inputString);
});
inputString === null || inputString === void 0 ? void 0 : inputString.addEventListener("keydown", function (event) {
    nextInput(event, inputString, inputId);
});
/**
 * Mostra lista para usuário
 */
function showList() {
    var e_6, _a;
    // Pega a lista por meio do Id. Essa lista se refere ao elemento <ul> do HTML
    var list = document.getElementById("lista");
    if (list) {
        // Se a lista existir, apague-a
        while (list.firstChild) {
            list.removeChild(list.firstChild);
        }
        try {
            // Para cada elemento do array Lista, é criado um <il> para a lista HTML
            for (var lista_3 = __values(lista), lista_3_1 = lista_3.next(); !lista_3_1.done; lista_3_1 = lista_3.next()) {
                var item = lista_3_1.value;
                var li = document.createElement("li");
                li.innerHTML = "\n          <h3>".concat(item.name, "</h3>\n          <p>").concat(item.bio, "</p>\n          <h6>").concat(item.id, "</h6>\n      ");
                li.classList.add("list-item");
                list.appendChild(li);
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (lista_3_1 && !lista_3_1.done && (_a = lista_3.return)) _a.call(lista_3);
            }
            finally { if (e_6) throw e_6.error; }
        }
    }
    // A exclusão dos il's para depois refazer foi idealizado para garantir que a lista que aparece para o usuário esteja sempre atualizada.
    // Não é o método mais eficiente, mas por ser uma lista pequena de no máximo 4 itens não trás problemas sérios de performance.
}
showList();
