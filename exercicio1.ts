function contVogais (palavra : string) : number {

    var qtdVogais = 0;
    for( let p of palavra ){
        switch( p.toLowerCase() ){
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                qtdVogais++;
            break;         
        }
    }
    return qtdVogais;
}

console.log(contVogais("RizOn BootCAmp"));

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