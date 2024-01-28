export function getFillings(sandwich) {
    if (sandwich === undefined) throw new Error('ingredients is required')
    // Your code here!
    return sandwich.fillings
}

export function isFromManchester(person) {
    if (person === undefined) throw new Error('person is required')
    // Your code here!
    const city = 'Manchester'
    return person.city.toLowerCase() === city.toLowerCase()
}

export function getBusNumbers(people) {
    if (people === undefined) throw new Error('people is required')
    // Your code here!
    const busCapacity = 40
    if (people <= busCapacity) return 1
    return Math.ceil(people / busCapacity)
}

export function countSheep(arr) {
    if (arr === undefined) throw new Error('arr is required')
    // Your code here!
    const sheepArr = arr.filter((animal) => animal === 'sheep')
    return sheepArr.length
}

export function hasMPostCode(person) {
    if (person === undefined) throw new Error('person is required')
    // Your code here!
    const city = 'Manchester'
    const alphabet = 'M'
    const result =
        new RegExp(`^${alphabet}`).test(person.address.postCode) &&
        person.address.city.toLowerCase() === city.toLowerCase()
    return result
}
