export const testDate = (dateToTest) => {
  const today = new Date().toISOString().substring(0, 10);
  const test = new Date(dateToTest).toISOString().substring(0, 10);
  return test === today;
};
