//ตัวแปรเก็บข้อมูลสำหรับแสดงผล
let display = document.getElementById('display');
let currentOperand = '';
let previousOperand = '';
let operation = undefined;

// ฟังก์ชั่นเพิ่มตัวเลขหรือจุดทศนิยม
function appendNumber(number) {
    if (number === '.' && currentOperand.includes('.')) {
        return;
    }
    currentOperand = currentOperand.toString() + number.toString();
    updateDisplay();
    console.log(currentOperand)
}

// ฟังก์ชั่นเลือกเครื่องหมายคำนวณ
function chooseOperator(operator) {
    if (currentOperand === '') {
        return;
    }
    if (previousOperand !== '') {
        calculate();
    }
    operation = operator;
    previousOperand = currentOperand;
    currentOperand = '';
    // console.log(operation)
}

// ฟังก์ชั่นคำนวณผลลัพธ์
function calculate() {
    let result;
    let prev = parseFloat(previousOperand);
    let current = parseFloat(currentOperand);

    if (isNaN(prev) || isNaN(current)) {
        return;
    }
    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case 'x':
            result = prev * current;
            break;
        case '÷':
            result = prev / current;
            break;
        default:
            return;
    }
    currentOperand = result;
    operation = undefined;
    previousOperand = '';
    updateDisplay();
    // console.log(result)
}

// ฟังก์ชั่นล้างข้อมูลแสดงผล
function clearDisplay() {
    currentOperand = '';
    previousOperand = '';
    operation = undefined;
    updateDisplay();
}

// ฟังก์ชั่นอัพเดทข้อมูลแสดงผล
function updateDisplay() {
    display.value = currentOperand;
    // console.log(display.value = currentOperand)
}