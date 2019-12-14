export const getDateTimeNow = () => {
  const dateTime = new Date();
  return `${dateTime.toLocaleDateString()} ${dateTime.toLocaleTimeString()}`;
};