function specialNumbers(n) {

    let result = '';
    let numAsString = '';
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        numAsString = String(i);
        for (let a = 0; a < numAsString.length; a++) {
            sum += Number(numAsString[a]);
        }
        
        if (sum === 5 || sum === 7 || sum === 11) {
            result = 'True';
        } else {
            result = 'False';
        }

        console.log(`${i} -> ${result}`);
        sum = 0;

    }

}

specialNumbers(15);