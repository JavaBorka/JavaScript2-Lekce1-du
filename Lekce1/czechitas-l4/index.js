console.log('Funguju!')

// Lekce 1 - Opakování
// Na úvod je potřeba otevřít terminál a zadat npx serve

/********  Cvičení 1 - Rodná čísla *************/

const rodneCislo = Number(prompt('Zadejte svoje rodné číslo'))
const rodneCisloString = String(rodneCislo)
const delka = rodneCisloString.length

if (delka === 10) {
    console.log('Zadané rodné číslo má správně ' + delka + ' znaků')
} else {
    console.log('Uživatel zadal rodné číslo neplatné délky. Počet zadaných znaků: ' + delka)
}

if (Number.isInteger(Number(rodneCisloString))) {
    console.log('Rodné číslo je celé číslo.')
  } else {
    console.log('Rodné číslo obsahuje nepovolené znaky.')
  }

if (rodneCislo % 11 === 0 ) {
    console.log('Rodné číslo je dělitelné 11.')
} else {
    console.log('Rodné číslo není dělitelné číslem 11.')
}

if ((delka === 10) && (Number.isInteger(Number(rodneCislo))) && (rodneCislo % 11 === 0)) {
    console.log('Zadané rodné číslo je platné.')
} else {
    console.log('Uživatel zadal neplatné rodné číslo.')
}

/**********  Cvičení 2 - Platnost jako funkce  ***********/

// 'invalidLength' v případě, že vstup nemá 10 znaků,
// 'notANumber' v případě, že vstup není číslo,
// 'failedChecksum' v případě, že číslo není dělitalné 11,
// 'ok' v případě, že číslo prošlo kontrolou.


const checkBirthID = (birthID) => {
    
    if (birthID.length != 10) {
        return 'invalidLength'
    } else if (Number.isInteger(Number(birthID)) === false) {
        return 'notANumber'
    } else if (Number(birthID) % 11 != 0) {
        return 'failedChecksum'
    } else {
        return 'ok'
    }
}

console.log(checkBirthID('8554038977'))


/********  Cvičení 3 - Pole, cykly, objekty *********/

// Vytvořte pole digits obsahující všechny cifry '0' až '9' jako řetězce.

const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

// Napište funkci isDigit, která na vstup dostane řetězec a vrátí true pokud tento řetězec obsahuje právě jednu cifru. Použijte k tomu pole digits a metodu includes (viz dokumentace). V opačném případě funkce vrátí false.

const isDigit = (digit) => {
    if (digit.length === 1) {
        if (digits.includes(digit)) {
            return true
        } return false
    } return false
    }

// Napište funci logInvalidCharacters. Funkce na vstupu dostane řetězec, ten převede na pole znaků (zkuste vygooglit, jak na to). Následně všechny znaky projde pomocí forEach. Do konzole vypíše ty znaky, které nesplňují podmínky z funkce isDigit. logInvalidCharacters vyzkoušejte například na textu '123č56q8y7' a '7060201236'. V prvním případě by se v konzoli mělo objevit na třech řádcích č, q a y. Pro druhý text by se nemělo vypsat nic.


const logInvalidCharacters = (rodCislo) => {
    const parseNumbers = Array.from(rodCislo)
    parseNumbers.forEach((parseNum) => {

        if (isDigit(parseNum) === false) {
            console.log(parseNum)
        }
    })

}

console.log(logInvalidCharacters('7060201236'))


/***********  Cvičení 4 - Detailní kontrola cifer  *************/

const result = []

const validateCharacters = (rodCislo) => {

    const parseNumbers = Array.from(rodCislo)
    parseNumbers.forEach((parseNum) => {
        const object = `{ char: ${parseNum}, digit: ${isDigit(parseNum)} }`
        result.push(object)
        return result
    })
}

/*
validateCharacters('8554č389tz')
console.log(result)
*/


/**************  Cvičení 5 - DOM a události *********************/
/**************  Cvičení 6 - Cifry jako HTML elementy  **********/

const tlacitko = (event) => {
    event.preventDefault()

    const rodneCisloInput = document.querySelector('#rodneCislo')
    const rodneCislo = rodneCisloInput.value
    console.log('Zadané rodné číslo je: ' + rodneCislo)
    validateCharacters(rodneCislo)
    console.log(result)
    const parseNumbers = Array.from(rodneCislo)

    const vypisElm = document.querySelector('#vypis')
    if (checkBirthID(rodneCislo) === 'ok') {
        vypisElm.textContent = 'V pořádku'
        vypisElm.classList.add('alertOk')

        parseNumbers.forEach((parseNumber) => {
            const digitOneElm = document.querySelector('.flex-container')
            digitOneElm.innerHTML += `<div class="digit-ok">${parseNumber}</div>`
        })

    } else {
        vypisElm.textContent = 'V rodném čísle jsou chyby'
        vypisElm.classList.add('alertNotOk')

        parseNumbers.forEach((parseNumber) => {
            const digitOneElm = document.querySelector('.flex-container')
        
            if (isDigit(parseNumber)) {
                digitOneElm.innerHTML += `<div class="digit-ok">${parseNumber}</div>`
            } else {
                digitOneElm.innerHTML += `<div class="digit-not-ok">${parseNumber}</div>`
            }
        })
    }
}

const formElm = document.querySelector('#validationForm')
formElm.addEventListener('submit', tlacitko)
