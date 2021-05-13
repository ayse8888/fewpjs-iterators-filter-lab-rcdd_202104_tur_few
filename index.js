// Code your solution here

const driverNames = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "bobby"]
// const findMatching = (arr, str) => {
//   return arr.filter(drivers => drivers.toLowerCase() === str.toLowerCase())
// }
// console.log(findMatching(driverNames))
// findMatching(driverNames)

// const fuzzyMatch = (arr, str) => {
//   const result = arr.filter(drivers => drivers).map(item => item[0])
//   console.log(result === str.split(" ")[0])
//   return result
// }
// console.log(fuzzyMatch(driverNames))

function fuzzyMatch(array, name){    return array.filter(driverName => {return driverName[0] === name[0] })
};

fuzzyMatch(driverNames,"bobby")
console.log(fuzzyMatch(driverNames,"bobby"))

