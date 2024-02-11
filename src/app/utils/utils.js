export function getNumberOfDays(startDate, endDate) {
  let utc1 = Date.UTC(
    startDate.getFullYear(),
    startDate.getMonth(),
    startDate.getDate()
  );
  let utc2 = Date.UTC(
    endDate.getFullYear(),
    endDate.getMonth(),
    endDate.getDate()
  );
  let millisecondsDiff = Math.abs(utc2 - utc1);
  let daysDiff = Math.floor(millisecondsDiff / (1000 * 60 * 60 * 24));
  return daysDiff + 1;
}
