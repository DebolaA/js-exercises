export const findNextNumber = (nums, n) => {
    if (nums === undefined) throw new Error('nums is required')
    if (n === undefined) throw new Error('n is required')
    // Your code here!
    let position = nums.findIndex((num) => num === n)
    if (position > -1 && position !== nums.length - 1) return nums[position + 1]
    return null
}

export const count1sand0s = (str) => {
    if (str === undefined) throw new Error('str is required')
    // Your code here!
    let ones = 0,
        zeros = 0
    const key1 = parseInt('1')
    const key2 = parseInt('0')

    for (let i = 0; i < str.length; i++) {
        if (parseInt(str[i])) ones += 1
        else zeros += 1
    }
    let countResult = {}
    countResult[key1] = parseInt(ones)
    countResult[key2] = parseInt(zeros)
    return countResult
}

export const reverseNumber = (n) => {
    if (n === undefined) throw new Error('n is required')
    // Your code here!
    const strArr = n.toString().split('')
    return parseInt(strArr.reverse().join(''))
}

export const sumArrays = (arrs) => {
    if (arrs === undefined) throw new Error('arrs is required')
    // Your code here!
    let total = 0
    arrs.forEach((numberArr) => {
        const itemTotal = numberArr.reduce((acc, currentVal) => {
            return acc + currentVal
        })
        total += itemTotal
    })
    return total
}

export const arrShift = (arr) => {
    if (arr === undefined) throw new Error('arr is required')
    // Your code here!
    if (arr.length < 2) return arr
    const firstItem = arr[arr.length - 1]
    const lastItem = arr[0]
    arr[0] = firstItem
    arr[arr.length - 1] = lastItem
    return arr
}

export const findNeedle = (haystack, searchTerm) => {
    if (haystack === undefined) throw new Error('haystack is required')
    if (searchTerm === undefined) throw new Error('searchTerm is required')
    // Your code here!

    const valuesArr = Object.values(haystack)

    let responseArr = []

    for (let item of valuesArr) {
        if (
            item
                .toString()
                .toLowerCase()
                .includes(searchTerm.toString().toLowerCase())
        ) {
            responseArr = [...responseArr, item]
        }
    }

    return responseArr && responseArr.length > 0
}

export const getWordFrequencies = (str) => {
    if (str === undefined) throw new Error('str is required')
    // Your code here!
    const punctuationStrippedStr = str.replace(/[^\w\s]/gi, '')
    const punctuationStrippedStrArr = punctuationStrippedStr.split(' ')
    const frequencyObj = {}
    for (let strItem of punctuationStrippedStrArr) {
        const keyVal = strItem.toLowerCase()
        frequencyObj[keyVal]
            ? (frequencyObj[keyVal] += 1)
            : (frequencyObj[keyVal] = 1)
    }
    return frequencyObj
}
