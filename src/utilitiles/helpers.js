export function formatDate(date) {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const parseDate = new Date(date);
  const year = parseDate.getFullYear();
  const month = parseDate.getMonth();
  const day = parseDate.getDate();

  const formattedDate = `${day} ${months[month]} ${year}`;
  return formattedDate;
}
