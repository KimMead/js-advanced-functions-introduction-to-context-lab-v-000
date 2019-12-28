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

const createTimeInEvent = (obj, str) => {
  str = str.split(" ")
  obj.timeInEvents.push({
    type: "TimeIn",
    hour: parseInt(str[1], 10),
    date: str[0]
  })
  return obj
}

const createTimeOutEvent = (obj, str) => {
  str = str.split(" ")
  obj.timeOutEvents.push({
    type: "TimeOut",
    hour: parseInt(str[1], 10),
    date: str[0]
  })
  return obj 
}
