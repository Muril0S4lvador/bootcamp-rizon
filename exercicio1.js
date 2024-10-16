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
/**
 * Conta a quantidade de vogais em uma palavra
 * @param palavra palavra a contar vogais
 * @returns quantidade de vogais
 */
function contVogais(palavra) {
    var e_1, _a;
    var a = "aäàáâã";
    var e = "eëèéê";
    var i = "iïìíî";
    var o = "oöòóôõ";
    var u = "uüùúû";
    // Seta a quantidade inicial de vogais para 0
    var qtdVogais = 0;
    try {
        // Itera sobre cada caracter da palavra
        for (var palavra_1 = __values(palavra), palavra_1_1 = palavra_1.next(); !palavra_1_1.done; palavra_1_1 = palavra_1.next()) {
            var p = palavra_1_1.value;
            // Seta o caracter para caixa baixa (minúsculo)
            // Caso seja pego pelo switch, incrementa qtdVogais
            // Pega vogais com acento também
            p = p.toLowerCase();
            if (a.includes(p))
                qtdVogais++;
            if (e.includes(p))
                qtdVogais++;
            if (i.includes(p))
                qtdVogais++;
            if (o.includes(p))
                qtdVogais++;
            if (u.includes(p))
                qtdVogais++;
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (palavra_1_1 && !palavra_1_1.done && (_a = palavra_1.return)) _a.call(palavra_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return qtdVogais;
}
// Teste usando console
console.log("Vogais em RizOn BootCAmp:", contVogais("RizOn BootCAmp"));
// Teste usando formulario
var forms = document.getElementById('Formulario');
if (forms) {
    forms.addEventListener('submit', function (event) {
        event.preventDefault();
        var palavraInput = document.getElementById('palavra');
        var palavra = String(palavraInput.value);
        if (palavra != null) {
            var result = document.getElementById('resultado');
            if (result) {
                result.innerText = "A palavra \"".concat(palavra, "\" tem ").concat(contVogais(palavra), " vogais.");
            }
            else {
                console.log(contVogais(palavra));
            }
        }
    });
}
else {
    console.log("Formulário não encontrado");
}
;
