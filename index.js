// Your code here
const createEmployeeRecord = (arr) => {
  return {
    firstName: arr[0],
    familyName: arr[1],
    title: arr[2],
    payPerHour: arr[3],
    timeInEvents: [],
    timeOutEvents: []
  }
}

const createEmployeeRecords = (arr) => {
  return arr.map(nested => createEmployeeRecord(nested))

}
