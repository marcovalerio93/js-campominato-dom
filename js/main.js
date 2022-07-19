/*Consegna
L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata. */
  

const playDom = document.getElementById('play');

playDom.addEventListener('click',

    function () { 
        //creo griglia
        const gridDom = document.getElementById('grid');

        for (let i = 1; i < 101; i++) { 

            const currentElement = createGridSquare(i);

            currentElement.addEventListener('click',
                function (){
                    if (this.classList.contains('clicked')) {
                        this.classList.remove('clicked');
                    } else {
                         this.classList.add('clicked');
                    }
                }
            );
            gridDom.append(currentElement);
        }    
    }
)



function createGridSquare(numero) {
    const currentElement = document.createElement('div');
    currentElement.classList.add('square');
    currentElement.append(numero);
    return currentElement;
}  