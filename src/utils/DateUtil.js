function DateParser(updateDate) {
  var date_str = "";
  date_str +=
    (updateDate.getMonth() + 1 < 10
      ? "0" + (updateDate.getMonth() + 1)
      : updateDate.getMonth() + 1) + "-";
  date_str +=
    (updateDate.getDate() + 1 < 10
      ? "0" + updateDate.getDate()
      : updateDate.getDate()) + " ";
  date_str +=
    Array(Math.max(2 - String(updateDate.getHours()).length + 1, 0)).join(0) +
    updateDate.getHours() +
    ":";
  date_str +=
    Array(Math.max(2 - String(updateDate.getMinutes()).length + 1, 0)).join(0) +
    updateDate.getMinutes();
  return date_str;
}
export { DateParser };
