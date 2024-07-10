

// funzione per la creazione dei numeri casuali
 function number (){
    // creo un array vuoto in cui andranno i miei numeri che ho generato 
const contenitorenumeri = [];
    //creo il mio ciclo per generare 5 numeri random da andare ad inserire nel mio array
    while(contenitorenumeri.length < 5){
        // qui inserirò la mia operazione matematica per generare numeri random casuali
        let randomNumbers = Math.floor(Math.random() * 100) + 1;
        //creo la mia condizione per far si che dentro al mio array ci siano tutti numeri diversi.
        if(!contenitorenumeri.includes(randomNumbers)){
            contenitorenumeri.push(randomNumbers);
        }
    }
    
} 
// richiamo la mia funzione per farla funzionare
number();



 
