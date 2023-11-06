function integerAndFloat(a, b, c) {

    let sum = a + b + c;
    let result = '';

    if (sum % 1 === 0) {
        result = 'Integer';
    } else {
        result = 'Float';
    }

    console.log(`${sum} - ${result}`);

}

integerAndFloat(9, 100, 1.1);