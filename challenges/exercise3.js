export function findSmallNums(nums) {
    if (!nums) throw new Error('nums is required')
    // Your code here
    let arrOfSmallNums = nums.filter((x) => x < 1)
    return arrOfSmallNums
}

export function findNamesBeginningWith(names, char) {
    if (!names) throw new Error('names is required')
    if (!char) throw new Error('char is required')
    // Your code here
    let newNameArray = names.filter((name) => name.startsWith(char))
    return newNameArray
}

export function findVerbs(words) {
    if (!words) throw new Error('words is required')
    // Your code here
    const char = 'to '
    let verbArray = words.filter((word) => word.startsWith(char))
    return verbArray
}

export function getIntegers(nums) {
    if (!nums) throw new Error('nums is required')
    // Your code here
    let intergerArray = nums.filter((numb) => Number.isInteger(numb))
    return intergerArray
}

export function getCities(users) {
    if (!users) throw new Error('users is required')
    // Your code here
    let cityArray = users.map((user) => user.data.city.displayName)
    return cityArray
}

export function getSquareRoots(nums) {
    if (!nums) throw new Error('nums is required')
    // Your code here
    let sqrtArray = nums.map((num) => {
        const sqrt = Math.sqrt(num)
        if (Number.isInteger(sqrt)) return sqrt
        return parseFloat(sqrt.toFixed(2))
    })
    return sqrtArray
}

export function findSentencesContaining(sentences, str) {
    if (!sentences) throw new Error('sentences is required')
    if (!str) throw new Error('str is required')
    // Your code here
    let newSentenceArr = sentences.filter((sentence) =>
        sentence.toLowerCase().match(str.toLowerCase())
    )
    return newSentenceArr
}

export function getLongestSides(triangles) {
    if (!triangles) throw new Error('triangles is required')
    // Your code here
    const arrOfLongestSide = triangles.map((numArr) => {
        const sortedArr = numArr.sort(compareNumbers)
        return sortedArr[sortedArr.length - 1]
    })
    return arrOfLongestSide
}

function compareNumbers(a, b) {
    return a - b
}
