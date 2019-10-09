export const generateElements = (name, elementsCount) => {
    let elements = [];

    for (let i = 1; i <= elementsCount; i += 1) {
        elements.push(`${name} ${i}`)
    }

    return elements;
}

export const plural = (_number, one, two, five) => {
    let number = Math.abs(_number) % 100;

    if (number >= 5 && number <= 20) {
        return five;
    }

    number %= 10;

    if (number === 1) {
        return one;
    }
    if (number >= 2 && number <= 4) {
        return two;
    }

    return five;
}

export const getNumberFromStr = (str) => parseInt(str.match(/\d+/)[0]);