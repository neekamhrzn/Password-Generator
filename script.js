//DOM elements
let outputBox = document.getElementById("outputBox")
let length = document.getElementById("length")
let up = document.getElementById("up")
let low = document.getElementById("low")
let num = document.getElementById("num")
let sym = document.getElementById("symbols")
let generateButton = document.getElementById("generateButton")


// get random numbers, symbols , lowercase and uppercase
function randomLowercase() {
  return String.fromCharCode(Math.floor(Math.random() * 26 + 97))
}
function randomUppercase() {
  return String.fromCharCode(Math.floor(Math.random() * 26 + 65))
}
function randomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10 + 48))
}
function randomSymbol() {
  const symb = `!@#$%^&*()_-+={[}]|\:;"'<,>.?/`
  return symb[Math.floor(Math.random() * symb.length)]
}



//Add event listeners
generateButton.addEventListener('click', (e) => {
  //get the number of boxes checked

  const upper = up.checked
  const lower = low.checked
  const number = num.checked
  const symbol = sym.checked
  const typesNum = upper + lower + number + symbol
  console.log("typesNum =  " + typesNum)
  // const pw=generatePassword(upper,lower,number,symbol,typesNum)
  // console.log("Generated Password : " + pw)

  let passw = ''
  for (let i = 0; i < length.value; i++) {
    if (upper == true) {
      passw += randomUppercase()
    }
    if (lower == true) {
      passw += randomLowercase()
    }
    if (number == true) {
      passw += randomNumber()
    }
    if (symbol == true) {
      passw += randomSymbol()
    }
  }
  console.log("Generated Password : " + passw)
  pw = passw.slice(0, length.value)
  console.log("Truncated up to length: " + pw)
  outputBox.value = pw
})

