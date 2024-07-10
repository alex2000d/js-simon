

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
// faccio una variabile per restituire il valore della mia funzione
let num = number();
// mostro i numeri nel dom
let numbers = document.getElementById('numbers').innerHTML = num;


// creo un timer con la funzione setimeout
 let clock = setTimeout (function numero (){
    // i numeri generati spariscono dopo 30 secondi
     numbers = document.getElementById('numbers').innerHTML = '';


} , 30000)

    // creo un setimeout per il deley delle prompt 
    const utente = setTimeout (function numero (){
        // creo un arrey per i numeri dell'utente
        const numeriutente = [];
        // creo un arrey per i numeri indovinati
        let numeri_indovinati = [];
        // creo ciclo for cosi che l'utente possa inserire i suoi numeri
     for(i = 0; i< 5; i++){
          // chiedo all'utente di inserire il numero 5 volte
          numeriutente.push(parseInt(prompt('inserisci il tuo numero')));
    
        }
          // controllo che i numeri che ho inserito ce ne qualcuno uguale nel mio arrey di numeri casuali
        for(let i = 0; i < 5; i++){
            if(num.includes(numeriutente[i])){
                numeri_indovinati.push(numeriutente[i]);
            }
    
        }
      
    } , 31000)



 
