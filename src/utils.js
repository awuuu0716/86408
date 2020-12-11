export const getToday = () => {
  const dateTime = new Date();
  const dateArray = dateTime.toDateString().split(' ');

  return `${dateArray[1]} ${dateArray[2]} ${dateArray[3]}`;
};
export const initAvailableTime = () => [
  { time: '11:00', index: 0, isAvailable: true },
  { time: '11:30', index: 1, isAvailable: true },
  { time: '12:00', index: 2, isAvailable: true },
  { time: '12:30', index: 3, isAvailable: true },
  { time: '13:00', index: 4, isAvailable: true },
  { time: '18:00', index: 5, isAvailable: true },
  { time: '18:30', index: 6, isAvailable: true },
  { time: '19:00', index: 7, isAvailable: true },
  { time: '19:30', index: 8, isAvailable: true },
  { time: '20:00', index: 9, isAvailable: true },
];
