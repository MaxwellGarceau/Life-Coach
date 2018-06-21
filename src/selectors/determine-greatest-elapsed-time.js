import { convertTimeToNumber } from './determine-elapsed-time';

const determineGreatestElapsedTime = (elapsedTimeArr, lastGroupEndTime) => {
  let greatestElapsedTimeNumArr = elapsedTimeArr.map((time) => convertTimeToNumber(time));
  greatestElapsedTimeNumArr.push(lastGroupEndTime);
  return greatestElapsedTimeNumArr.reduce((a, b) => Math.max(a, b));
}

export default determineGreatestElapsedTime;
