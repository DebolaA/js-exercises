export function getSquares(nums) {
    if (nums === undefined) throw new Error('nums is required')
    // Your code here!
    return nums.map((number) => number ** 2)
}

export function camelCaseWords(words) {
    if (words === undefined) throw new Error('words is required')
    // Your code here!
    const finalCamelCaseWord = words.reduce(
        (previousValue, currentValue) =>
            `${previousValue}${
                currentValue[0].toUpperCase() + currentValue.slice(1)
            }`
    )
    return finalCamelCaseWord
}

export function getTotalSubjects(people) {
    if (people === undefined) throw new Error('people is required')
    // Your code here!
    const totalSubjects = 0
    const sumWithTotal = people.reduce(
        (acc, currentValue) => acc + currentValue.subjects.length,
        totalSubjects
    )
    return sumWithTotal
}

export function checkIngredients(menu, ingredient) {
    if (menu === undefined) throw new Error('menu is required')
    if (!ingredient) throw new Error('ingredient is required')
    // Your code here!
    let hasIngredient = false
    menu.forEach((menuItem) => {
        let itemIndex = menuItem.ingredients.findIndex(
            (item) => item === ingredient
        )
        if (itemIndex > -1) hasIngredient = true
    })
    return hasIngredient
}

export function duplicateNumbers(arr1, arr2) {
    if (arr1 === undefined) throw new Error('arr1 is required')
    if (arr2 === undefined) throw new Error('arr2 is required')
    // Your code here!
    const arrOfDuplicateNumbers = arr1.filter((num) => {
        const index = arr2.findIndex((x) => x === num)
        if (index > -1) return arr2[index]
    })
    const arrOfUniqueNumbers = removeDuplicateNumbers(arrOfDuplicateNumbers)
    return arrOfUniqueNumbers.sort(compareNumbers)
}

function compareNumbers(a, b) {
    return a - b
}

function removeDuplicateNumbers(arr) {
    return [...new Set(arr)]
}
