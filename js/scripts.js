// Scrivi una procedura:
// vengono passati due parametri: un intero (chiamato 'fine') ed una stringa (chiamata 'tipo').
// Stampa in standard output i numeri da 1 a 'fine'.
// Sulla stessa riga del numero, stampa la stringa 'dot' ogni 3 numeri, e la stringa 'cross' ogni 5 numeri.
// Se 'tipo' è uguale a 'D', al posto della precedente direttiva, stampa la stringa 'mar' ogni 3 numeri, e la stringa 'print' ogni 5 numeri.
// Assicurarsi che siano gestiti eventuali errori dovuti a valori inopportuni dei parametri ricevuti.

function procedura(fine, tipo) {
    // Se il tipo di fine non è un numero || fine <= 0 || non è un intero. restituisci errore
    if (typeof fine !== 'number' || fine <= 0 || !Number.isInteger(fine)) {
        throw new Error("Il valore inserito per 'fine' deve essere un intero positivo");
    }
    // Se il tipo di tipo non è una stringa || tipo diverso da lettera alfabeto(regex). restituisci errore
    if (typeof tipo !== 'string' || !/[a-zA-Z]/.test(tipo) || tipo.length !== 1) {
        throw new Error("Il valore inserito per 'tipo' deve essere una singola lettera dell'alfabeto");
    }

    // Utilizzo l'operatore ternario invece di un IF
    let threeStep = tipo === 'D' ? 'mar' : 'dot';
    let fiveStep = tipo === 'D' ? 'print' : 'cross';

    // Ciclo per stampare i valori associati
    for (let i = 1; i <= fine; i++) {
        let output = i.toString();
        if (i % 3 === 0) {
            output += threeStep;
        }
        if (i % 5 === 0) {
            output += fiveStep;
        }
        console.log(output);
    }
}

//Test
procedura(15, 'D');
console.log(`----------`)
procedura (15, 'fsdsdf');
