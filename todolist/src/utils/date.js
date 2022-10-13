const getTimeStartOfToday = function () {
  const startOfToday = new Date();
  startOfToday.setUTCHours(0, 0, 0, 0);
  return startOfToday;
};

const getTimeAfterAWeekFromToday = function () {
  const date = new Date();
  date.setUTCHours(23, 59, 59, 999);
  date.setDate(date.getDate() + 7);
  return date;
};

const getDateString = function (date) {
  const yyyy = date.getFullYear();
  let mm = date.getMonth() + 1; // Months start at 0!
  let dd = date.getDate();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;

  const dateFormatted = dd + "/" + mm + "/" + yyyy;
  return dateFormatted;
};

const getDateTodayString = function () {
  return getDateString(new Date());
};

const getDaysLeft = function (deadline) {
  const currentDate = new Date();

  var daysLeft =
    (deadline.getTime() - currentDate.getTime()) / (1000 * 3600 * 24);
  if (daysLeft > 0) {
    daysLeft = Math.ceil(daysLeft);
  } else if (daysLeft < 0) {
    daysLeft = Math.floor(daysLeft);
  }
  return daysLeft;
};
const getDeadlineString = function (days) {
  if (days > 0) {
    return days === 1 ? "Ngày mai" : `Còn ${days} ngày nữa`;
  } else if (days < 0) {
    return `Trễ hạn ${Math.abs(days)} ngày`;
  } else {
    return "Hôm nay";
  }
};

export {
  getDateString,
  getTimeStartOfToday,
  getTimeAfterAWeekFromToday,
  getDateTodayString,
  getDaysLeft,
  getDeadlineString,
};
