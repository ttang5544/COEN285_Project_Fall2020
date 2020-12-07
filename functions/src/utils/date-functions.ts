

export function isLeapYear(date: Date): boolean {
  const year: number = date.getFullYear();
  if ((year & 3) !== 0) {
    return false;
  }
  return ((year % 100) !== 0 || (year % 400) === 0);
}


export function getDayOfYearForDate(date: Date): number {
  const numDaysByMonth: ReadonlyArray<number> = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
  const monthVal: number = date.getMonth();
  const dayVal: number = date.getDate();
  let dayOfYear: number = numDaysByMonth[monthVal] + dayVal;
  if (monthVal > 1 && isLeapYear(date)) {
    dayOfYear++;
  }
  // console.log(`getDOY() - mn: ${ monthVal }  day: ${ dayVal }  day of year: ${ dayOfYear } `);
  return dayOfYear;
}


