// import functions that needs testing

import {
    sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
    createMatrix,
    areWeCovered,
} from '../challenges/exercise5'

describe('sumMultiples', () => {
    test('returns a value which is the sum of all multiples of 3 and 5 in the input array', () => {
        expect(sumMultiples([5, 3, 7, 8, 15, 10])).toBe(33)
        expect(sumMultiples([5, 3, 7, 8, 1, 10])).toBe(18)
        expect(sumMultiples([4, 22, 654, 123, 65, 23, 40, 1])).toBe(882)
    })
})

describe('isValidDNA', () => {
    test('return true/false depending on whether it is a valid DNA string - A valid DNA string may contain characters C, G, T or A only', () => {
        //should not be case sensitive
        expect(isValidDNA('ATGCTTCAGAAAGGTCttacy')).toBe(false)
        expect(isValidDNA('ATGCTTCAGAAAGGTCtbacg')).toBe(false)
        expect(isValidDNA('ATGCTTCAGAAAGGTCttacg')).toBe(true)
    })
})

describe('getComplementaryDNA', () => {
    test('return a string of the complementary base pairs', () => {
        expect(getComplementaryDNA('ACTG')).toBe('TGAC')
    })
})

describe('isItPrime', () => {
    test('return true/false depending on whether it is a prime number or not', () => {
        expect(isItPrime(9)).toBe(false)
        expect(isItPrime(193)).toBe(true)
        expect(isItPrime(121)).toBe(false)
        expect(isItPrime(151)).toBe(true)
    })
})

describe('createMatrix', () => {
    const arr1 = [
        ['step', 'step', 'step'],
        ['step', 'step', 'step'],
        ['step', 'step', 'step'],
    ]
    const arr2 = [['step']]
    const arr3 = [
        ['step', 'step'],
        ['step', 'step'],
    ]
    test('return an array of n arrays, each filled with n items', () => {
        expect(createMatrix(3, 'step')).toStrictEqual(arr1)
        expect(createMatrix(1, 'step')).toStrictEqual(arr2)
        expect(createMatrix(2, 'step')).toStrictEqual(arr3)
    })
})

describe('areWeCovered returns true/false depending on whether there are enough staff scheduled for the given day', () => {
    const staff = [
        { name: 'Sally', rota: ['Monday', 'Tuesday', 'Friday'] },
        { name: 'Pedro', rota: ['Saturday', 'Sunday', 'Tuesday', 'Wednesday'] },
        { name: 'Angie', rota: ['Thursday', 'Wednesday', 'Sunday'] },
        { name: 'Pele', rota: ['Monday', 'Wednesday', 'Friday', 'Sunday'] },
        { name: 'Samson', rota: ['Tuesday', 'Wednesday', 'Saturday'] },
        { name: 'Bethany', rota: ['Monday', 'Saturday', 'Friday', 'Sunday'] },
    ]
    test('returns ', () => {
        expect(areWeCovered(staff, 'Monday')).toBe(true)
        expect(areWeCovered(staff, 'Thursday')).toBe(false)
        expect(areWeCovered(staff, 'Sunday')).toBe(true)
    })
})
