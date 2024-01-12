const sumAll = function (numberBegin, numberEnd) {
  if (typeof numberBegin != "number" || typeof numberEnd != "number" || numberBegin < 0 || numberEnd < 0) return "ERROR";
  let sum = 0;
  if (numberBegin <= numberEnd) for (let i = numberBegin; i <= numberEnd; i++) sum += i;
  else for (let i = numberBegin; i >= numberEnd; i--) sum += i;
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
