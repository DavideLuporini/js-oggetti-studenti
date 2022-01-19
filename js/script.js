console.log('js ok')

// Descrizione:
// 1. Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// 2. Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
// 3. Creare un array di oggetti di studenti (ossìa oggetti con le proprietà sopra descritte).
// 4. Ciclare su tutti gli studenti e stampare per ognuno di essi: nome e cognome.
// 5. Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere all’array creato in precedenza, un nuovo oggetto studente inserendo nell’ ordine: 
// nome, cognome e età.
// BONUS:
// Usiamo il DOM per stampare e chiedere le informazioni all'utente!
// Consigli del giorno
// - Scriviamo sempre prima in italiano i passaggi che vogliamo fare
// - Scriviamo sempre solo un pezzetto di codice alla volta e verifichiamo (il console.log è nostro amico), se funziona allora andiamo avanti.

// prelevo elemento dove stampare
let printDatas = document.getElementById('datas')
    // 1. Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
const student = {
    nome: 'Davide ',
    cognome: 'Luporini ',
    età: '25 ',
}

// console.log(students.nome)
// console.log(students.cognome)
// console.log(students.età)



// 2. Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
for (let key in student) {
    console.log(key);
    printDatas.innerText += student[key];
}

// 3. Creare un array di oggetti di studenti (ossìa oggetti con le proprietà sopra descritte).
const studentsList = [{
        name: 'Giovanni',
        surname: 'Mucciaccia',
        age: 58,
    },

    {
        name: 'Giorgio',
        surname: 'vanni',
        age: 61,
    },

    {
        name: 'Davide',
        surname: 'Luporini',
        age: 25,
    },
]