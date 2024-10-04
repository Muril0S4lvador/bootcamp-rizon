/**
 * Conta a quantidade de vogais em uma palavra
 * @param palavra palavra a contar vogais
 * @returns quantidade de vogais
 */
function contVogais (palavra : string) : number {

    const a = "aäàáâã";
    const e = "eëèéê";
    const i = "iïìíî";
    const o = "oöòóôõ";
    const u = "uüùúû";

    // Seta a quantidade inicial de vogais para 0
    var qtdVogais = 0;
    // Itera sobre cada caracter da palavra
    for( let p of palavra ){
        // Seta o caracter para caixa baixa (minúsculo)
        // Caso seja pego pelo switch, incrementa qtdVogais
        // Pega vogais com acento também
        p = p.toLowerCase();
        if( a.includes(p) ) qtdVogais++
        if( e.includes(p) ) qtdVogais++
        if( i.includes(p) ) qtdVogais++
        if( o.includes(p) ) qtdVogais++
        if( u.includes(p) ) qtdVogais++
    }
    return qtdVogais;
}

// Teste usando console
console.log("Vogais em RizOn BootCAmp:", contVogais("RizOn BootCAmp"));

// Teste usando formulario
const forms = document.getElementById('Formulario');
if( forms ){
    forms.addEventListener('submit', (event) => {

        event.preventDefault();
        
        const palavraInput = document.getElementById('palavra') as HTMLInputElement;
        const palavra = String(palavraInput.value);
        
        if (palavra != null) {
            const result = document.getElementById('resultado');
            if( result ){
                result.innerText = `A palavra "${palavra}" tem ${contVogais(palavra)} vogais.`;
            } else {
                console.log(contVogais(palavra))
            }
        }
    });
    
} else {
    console.log("Formulário não encontrado")
};