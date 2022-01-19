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
// for (let key in student) {
//     console.log(key);
//     printDatas.innerText += student[key];
// }

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

// giro nell'array
for (let i = 0; i < studentsList.length; i++) {
    const currentStudent = studentsList[i];
    // console.log(currentStudent)
    // console.log('nome: ', currentStudent.name);
    // console.log('cognome: ', currentStudent.surname);
    // console.log('età: ', currentStudent.age);
    for (let key in currentStudent) {
        console.log(`${key}: ${currentStudent[key]}`)
    }

}
console.log(studentsList)

// 5. Dare la possibilità all’ utente, attraverso 3 prompt(), di aggiungere all’ array creato in precedenza, un nuovo oggetto studente inserendo nell’ ordine:
// nome, cognome e età.
// const inputNewStudentName = prompt('inserisci il nome');
// const inputNewStudentSurname = prompt('inserisci il tuo cognome');
// const inputNewStudentage = prompt('Quanti anni hai?');



// const newStudentName = inputNewStudentName;
// const newStudentSurname = inputNewStudentSurname;
// const newStudentAge = inputNewStudentage;


// const newStudent = { name: newStudentName, surname: newStudentSurname, age: inputNewStudentage }
// studentsList.push(newStudent);

// console.log(studentsList);

// bonus

// Prendo gli elemnti dal dom
const printResult = document.getElementById('printresult');
const inputNewStudentName = document.getElementById('name');
const inputNewStudentSurname = document.getElementById('surname');
const inputNewStudentAge = document.getElementById('age');
const button = document.getElementById('button');



// Creo nuovo oggetto da pushare in seguito

const newStudent = {
    name: 'name',
    surname: 'surname',
    age: 'age',
};
button.addEventListener('click', function() {
    const newName = inputNewStudentName.value;
    const newLastname = inputNewStudentSurname.value;
    const newAge = inputNewStudentAge.value;

    console.log(newName)
    console.log(newLastname)
    console.log(newAge)

    newStudent.name = newName;
    newStudent.surname = newLastname;
    newStudent.age = newAge;
    console.log(studentsList);
    studentsList.push(newStudent);
    console.table(newStudent);


    for (let i = 0; i < studentsList.length; i++) {
        //* console.table(studentsList[i]);
        // Prendo ogni valore nell'array 
        for (let key in studentsList[i]) {
            if (!(key === 'eta')) {
                // Ad ogni ciclo viene creato un p
                let datas = document.createElement('p');
                // Stampa il valore della key nell array (i)
                let data = studentsList[i][key];

                datas.innerText = key + ': ' + data;
                printResult.appendChild(datas);
            }
        }
    }
})