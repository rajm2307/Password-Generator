
const upperEL = document.getElementById("upper")
const lowerEL = document.getElementById("lower")
const symbolsEL = document.getElementById("symbols")
const charactersEL = document.getElementById("characters")
const generateEl = document.getElementById("generate")
const length = document.getElementById("length")
const upperCharacters = "ABCDEFGHIJKLMNOPQSRTUVWXYZ"
const lowerCharacters = "abcdefghijklmnopqrstuvwxyz"
const numbers = "0123456789";
const symbols = "~!@#$%^&*()_*//";
let resultEL = document.getElementById("resultEL")
const buttonel = document.getElementById("button")


buttonel.addEventListener("click", ()=>{
    let GP = resultEL.innerText
    if (GP) {
        return '';
    }
    
    navigator.clipboard.writeText(GP);
    alert("Password copied to clipboard!");
})


generateEl.addEventListener("click", () => {
    const hasupper = upperEL.checked
    const haslower = lowerEL.checked
    const hassymbol = symbolsEL.checked
    const hascharacters = charactersEL.checked
    const haslength = +length.value

    resultEL.innerText = generatePassword(hasupper, haslower, hassymbol, hascharacters, haslength)
    // console.log(generated_password)

})


const randomf = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}


function generatePassword(hasupper, haslower, hassymbol, hascharacters, haslength) {
    let array = [haslower, hasupper, hassymbol, hascharacters]

    let raw_password = ''
    for (let index = 0; index < haslength; index++) {
        let j = 0;
        Object.values(randomf).forEach(func => {
            if (array[j]) {
                let result = func();
                raw_password += result;
            }
            j++;
        });
    }
    let final_password = raw_password.slice(0, haslength)

    return final_password;
}


function getRandomUpper() {
    let gen_upper = upperCharacters[Math.floor(Math.random() * upperCharacters.length)]
    return gen_upper
}

function getRandomLower() {
    let gen_lower = lowerCharacters[Math.floor(Math.random() * lowerCharacters.length)]
    return gen_lower
}

function getRandomNumber() {
    let gen_number = numbers[Math.floor(Math.random() * numbers.length)]
    return gen_number
}

function getRandomSymbol() {
    let gen_symbol = symbols[Math.floor(Math.random() * symbols.length)]
    return gen_symbol
}
