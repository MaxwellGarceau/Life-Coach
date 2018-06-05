export default (startTime, endTime) => {
  const elapsedTimeNumArr = calculateTimeBetween(startTime, endTime);
  return convertNumbersToTime(elapsedTimeNumArr);
};

const calculateTimeBetween = (startTime, endTime) => {
  const endNum = convertTimeToNumber(endTime);
  const startNum = convertTimeToNumber(startTime);
  let elapsedTimeArr = [];
  let timeDifference = endNum - startNum;
  // To account for notes that end before they begin
  if (timeDifference < 0) {
    timeDifference += 24;
  }
  for (let i = 0; i <= timeDifference; i++) {
    elapsedTimeArr.push(i + startNum);
  }
  return elapsedTimeArr.map((num) => (num > 23 ? num - 24 : num));
};

const convertTimeToNumber = (origTime) => {
  let num = origTime.replace(/\D+/g, '');
  let amOrPm = origTime.replace(/\d+/g, '');
  num = parseInt(num, 10);
  num === 12 ? (num -= 12) : num;
  amOrPm === 'pm' ? (num += 12) : num;
  return num;
};

const convertNumbersToTime = (numArr) => {
  // Maybe refactor to avoid so many if statements
  return numArr.map((num) => {
    if (num === 0) {
      return `${String(num + 12)}am`;
    }
    if (num === 12) {
      return `${String(num)}pm`;
    }
    return num < 12 ? `${String(num)}am` : `${String(num - 12)}pm`;
  });
};
