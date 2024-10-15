export const formatDate = (isoString: string): string => {
  const date = new Date(isoString);
  const day = date.getDate();
  const month = date.getMonth() + 1; // Tháng bắt đầu từ 0
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  // Định dạng cho day, month, hours, minutes
  const formattedDay = day < 10 ? `0${day}` : day; // Sử dụng backticks để tạo chuỗi
  const formattedMonth = month < 10 ? `0${month}` : month; // Sử dụng backticks
  const formattedHours = hours < 10 ? `0${hours}` : hours; // Sử dụng backticks
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes; // Sử dụng backticks

  // Trả về chuỗi định dạng mong muốn
  return `${formattedDay}/${formattedMonth}/${year} ${formattedHours}:${formattedMinutes}`; // Sử dụng backticks
};
