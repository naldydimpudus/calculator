const numbers = document.querySelectorAll(".number")
console.log(numbers)
numbers.forEach((number) => {
  console.log(number)
  number.addEventListener("click", (event) => {
    inputNumber(event.target.value)
    updateScreen(event.target.value)
    console.log(event.target.value)
  })
})

const calculatorScreen = document.querySelector('.calculator-screen')
const updateScreen = (number) => {
  calculatorScreen.value = number
}

let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'

const inputNumber = (number) => {
  if (currentNumber === '0') {
      currentNumber = number
  } else {
    currentNumber += number
  }
}

const operators = document.querySelectorAll(".operator")
operators.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    console.log(event.target.value)
  })
})
