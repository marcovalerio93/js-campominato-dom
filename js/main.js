/*Consegna
L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata. */
  

//variabili
 
const playDom = document.getElementById('play');


//definisco il numero di celle
const numCell = 100

// definisco numero bombe e le identifico 
const NUM_BOMB = 20; 
const bombList = createBomb(NUM_BOMB, numCell);
//variabile punti
let score = 0;
//fine del gioco
let gameOver = false; 




playDom.addEventListener('click',

    function () { 
        //creo griglia
        const gridDom = document.getElementById('grid');

        for (let i = 1; i < 101; i++) { 
            //creo cella
            const currentElement = createGridSquare(i);
            //effetti al click 
            currentElement.addEventListener('click',
                function (){

                    if (gameOver == false) {
                        if (bombList.includes(i)) {
                            this.classList.add('bomb');
                            gameOver = true;
                            writeScore (`Gave Over ! Punteggio: ${score}`);
                            
                            
                        } else {
                            if (!this.classList.contains('clicked') ){
                                score++;
                                writeScore(`Punteggio: ${score}`);
                                this.classList.add('clicked');
                            }
                        }
                    }
                }
            );
            gridDom.append(currentElement);
        }    
    }     
)







//funzioni

function createGridSquare(numero) {
    const currentElement = document.createElement('div');
    currentElement.classList.add('square');
    currentElement.append(numero);
    return currentElement;
}  



function getNumeroCasuale(min, max) {
    return Math.floor(Math.random() * ( max - min + 1)) + min;
}
  




function getUniqueRandomNumber(listaNumeriUsati, min, max) {

    // creo una variabile che preinizializzo a false e che tenga traccia del fatto che il numero che ho generato sia unico o meno
    let numeroValido = false;
    // e mi creo una variabile che mi ospiti il valore casuale creato
    let numeroCasualeCreato;
    //fintanto che non ho generato un numero valido ripeto questo blocco di codice
    while( numeroValido == false ) { // identico a !numeroValido
        numeroCasualeCreato = getNumeroCasuale( min, max); // genero un nmero a caso
        // e verifico che non sia contenuto nell'array dei numeri già usati. Se non lo è, il numero creato è valido, quindi fermo il ciclo
        if (listaNumeriUsati.includes(numeroCasualeCreato) == false) { //identico a !listaNumeriUsati.includes(numeroCasualeCreato)
            numeroValido = true;
        }
    }
    // e torno il numero trovato
    return numeroCasualeCreato;
}

function createBomb(NUM_BOMB, numCell) {
    const bombList = [];
    for (let i = 0; i < NUM_BOMB; i++) {
        const bomb = getUniqueRandomNumber(bombList, 1,numCell);
        bombList.push(bomb);
    }
    return bombList;

}

function writeScore(text )  {
    const scoreDom = document.getElementById('score');
    scoreDom.innerHTML = text;
}