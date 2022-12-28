const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operator]");
const equalButton = document.querySelector("[data-equal]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const previousOperandTextElement = document.querySelector(
  "[data-previous-operand]"
);
const currentOperandTextElement = document.querySelector(
  "[data-current-operand]"
);

class Calculator { //Classe principal com funções da calculadora.
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear()
  }

chooseOperation(operation) {
  if(this.previousOperand != '') {
    this.calculate()
  }
  this.operation = operation;
  this.previousOperand = `${this.currentOperand} ${this.operation}`; //Concatena o número com o sinal de operação
  this.currentOperand = "";
}

  appendNumber(number) {
    if (this.currentOperand.includes(',') && number == ",") return; //Impede usuário de inserir mais de uma vírgula na operação.
this.currentOperand = `${this.currentOperand}${number.toString()}`;
  }
  
  clear() {  //Limpa variáveis
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }

  updateDisplay() { //Atualiza o display através dos elementos HTML
    this.previousOperandTextElement.innerText = this.previousOperand;
    this.currentOperandTextElement.innerText = this.currentOperand;
  }
}

const calculator = new Calculator(
  previousOperandTextElement,
  currentOperandTextElement
);

for (const numberButton of numberButtons) {
  numberButton.addEventListener('click', () => {
    calculator.appendNumber(numberButton.innerText);
    calculator.updateDisplay();
});
}

for(const operationButton of operationButtons){
  operationButton.addEventListener('click', () => {
    calculator.chooseOperation(operationButton.innerText);
    calculator.updateDisplay();
  })
}

allClearButton.addEventListener("click", () => { //Determina função do botão AC
  calculator.clear();
  calculator.updateDisplay();
});