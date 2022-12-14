export const testDate = (dateToTest: string | number | Date): boolean => {
  const today = new Date().toISOString().substring(0, 10);
  const test = new Date(dateToTest).toISOString().substring(0, 10);
  console.log(`TODAY -> ${today} - TEST -> ${test}`);
  
  return test === today;
};
