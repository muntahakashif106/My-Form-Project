let arr=[45, 1, 34]
// array map method
arr.map((value, index, array)=>{
    console.log(value, index, array)
    return value + index
})
console.log(a)

// array filter method
let aar2 = [24, 56, 78, 3, 4, 8]
let a2 = arr2.filter((a)=>{
    return a<15
})
console.log(a2)

// array reduce method
let arr3 = [3, 5, 7, 8, 4, 9]
 let newarr3 = arr3.reduce((h1, h2)=>{
    return h1 + h2
})
console.log(newarr3)