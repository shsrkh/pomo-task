export const formatAllTime = (currentTasksTime: number): string => {
  let formatTime: string = '';

  if (currentTasksTime < 60) {
    if (currentTasksTime * 10 % 10 === 0) {
      formatTime = `${currentTasksTime} min`;
    } else {
      formatTime = `${currentTasksTime.toFixed(2).toString()} min`;
    }

  } else if (currentTasksTime%60 !== 0) {
    formatTime = `${Math.floor(currentTasksTime / 60)} h ${(currentTasksTime%60)} min`;
  } else {
    formatTime = `${Math.floor(currentTasksTime / 60)} h`;
  }
  return formatTime;
}
