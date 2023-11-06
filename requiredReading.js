function requiredReading(pagesCount, pagesPerHour, days) {

    let totalTime = pagesCount / pagesPerHour;
    let requiredTime = totalTime / days;

    console.log(requiredTime);

}

requiredReading(212, 20, 2);