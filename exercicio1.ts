const leVogais = (palavra : string) : number => {
    
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

document.getElementById('Formulario')?.addEventListener('submit', (event) => {
    event.preventDefault();
  
    const palavraInput = document.getElementById('palavra') as HTMLInputElement;
    const palavra = String(palavraInput.value);
  
    if (palavra != null) {
        console.log(leVogais(palavra));
    }
});