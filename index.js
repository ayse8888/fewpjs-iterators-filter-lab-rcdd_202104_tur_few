// Code your solution here

const driverNames = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "bobby"]
const findMatching = (arr, str) => {
  return arr.filter(drivers => drivers.toLowerCase() === str.toLowerCase())
}
console.log(findMatching(driverNames))
findMatching(driverNames)


const fuzzyMatch= (arr, str) => {    
  return arr.filter(drivers => drivers[0] === str[0] )
};
fuzzyMatch(driverNames,"bobby")
console.log(fuzzyMatch(driverNames,"bobby"))

const matchName = (arr, str) => {
    return arr.filter(drivers => driverName.name === str )
};
matchName(driverNames)
