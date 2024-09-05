function printMultiplicationTable(number: number, upTo: number): void {
    for (let i = 1; i <= upTo; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
    }
}

function invokeMultiplicationTable() {
    const number = 5;
    const upTo = 10;
    printMultiplicationTable(number, upTo);
}

invokeMultiplicationTable();