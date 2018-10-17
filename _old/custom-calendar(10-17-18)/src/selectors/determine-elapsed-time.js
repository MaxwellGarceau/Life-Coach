export default (startTime, endTime) => {
  const elapsedTimeNumArr = calculateTimeBetween(startTime, endTime);
  return elapsedTimeNumArr.map((num) => {
    return convertNumbersToTime(num);
  });
};

// Calculate all the numbers between start and end time
const calculateTimeBetween = (startTime, endTime) => {
  let elapsedTimeArr = [];
  const startNum = convertTimeToNumber(startTime);
  let timeDifference = endTimeStartTimeDifference(startTime, endTime);
  for (let i = 0; i <= timeDifference; i++) {
    elapsedTimeArr.push(i + startNum);
  }
  return elapsedTimeArr.map((num) => (num > 23 ? num - 24 : num));
};

// Calculate start and end time difference
export const endTimeStartTimeDifference = (startTime, endTime) => {
  const endNum = convertTimeToNumber(endTime);
  const startNum = convertTimeToNumber(startTime);
  let timeDifference = endNum - startNum;
  // To account for notes that end before they begin
  if (timeDifference < 0) {
    timeDifference += 24;
  }
  return timeDifference;
}

// Convert time ('1am') to number (1)
export const convertTimeToNumber = (origTime) => {
  // If argument is a number already just return the number
  if (!isNaN(origTime)) {
    return origTime;
  }
  let num = origTime.replace(/\D+/g, '');
  let amOrPm = origTime.replace(/\d+/g, '');
  num = parseInt(num, 10);
  num === 12 ? (num -= 12) : num;
  amOrPm === 'pm' ? (num += 12) : num;
  return num;
};

// Convert numbers (14) to time ('2pm')
const convertNumbersToTime = (num) => {
  // Maybe refactor to avoid so many if statements
  if (num >= 24) {
    num -= 24;
  }
  if (num === 0) {
    return `${String(num + 12)}am`;
  }
  if (num === 12) {
    return `${String(num)}pm`;
  }
  return num < 12 ? `${String(num)}am` : `${String(num - 12)}pm`;
};

// Calculate default end time
export const defaultEndTime = (defaultStartTime, endStartDifference = 2) => {
  let endTimeNum = convertTimeToNumber(defaultStartTime) + endStartDifference;
  return convertNumbersToTime(endTimeNum);
};
