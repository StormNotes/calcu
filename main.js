class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
      this.previousOperandTextElement = previousOperandTextElement
      this.currentOperandTextElement = currentOperandTextElement
      this.clear()
    }
  

    clear(){
        this.operation = '';
        console.log('operation is undefined')
        this.previousOperand = '';
        console.log('operand is null')
        this.currentOperand = '';
        console.log('operand is null')

    }

    delete(){
        this.currentOperand = this.currentOperand.toString().slice(0,-1);
    }

    appendNumber(number){
        if(number === '.' && this.currentOperand.includes('.')) return;
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    chooseOperation(operation){
        if(this.currentOperand === '') return;
        if(this.previousOperand !== ''){
            this.compute()
            this.previousOperand = '';
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }

    compute(){

        let computation;
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if(isNaN(prev)|| isNaN(current)) return;
        switch(this.operation){
            case '+' : computation = prev + current
            console.log(this.computation)
            break;

            case '-' : computation = prev - current
            console.log(this.computation)
            break;

            case '/' : computation = prev / current
            console.log(this.computation)
            break;

            case '*' : computation = prev * current
            console.log(this.computation)
            break;

            default: return;
        }
        this.currentOperand = computation;
        console.log(this.currentOperand);
        this.operation = null;
        this.previousOperand = "";
    
     
    }

    updateDisplay(){
        this.currentOperandTextElement.innerText = this.currentOperand;
        if(this.operation != null){
            this.previousOperandTextElement.innerText = ` ${this.previousOperand}  ${this.operation} `;
        }        
    }
}

const numberButtons = document.querySelectorAll('[data-number]');
const operatorsButtons = document.querySelectorAll('[data-operator]');
const equalButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const clearButton = document.querySelector('[data-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
  })
})

operatorsButtons.forEach(button => {
    button.addEventListener('click', () => {
      calculator.chooseOperation(button.innerText)
      calculator.updateDisplay()
    })
  })
  

equalButton.addEventListener('click', button => {
    calculator.compute();
    calculator.updateDisplay();
})

clearButton.addEventListener('click',button =>{
    calculator.clear();
    calculator.updateDisplay();
})

deleteButton.addEventListener('click',button =>{
    calculator.delete();
    calculator.updateDisplay();
})