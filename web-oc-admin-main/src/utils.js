export const formatCurrency = num => num ? `${num.toLocaleString('de-DE')}` : 0

export function formatDate(str) {
  if (!str) return ''
  const date = new Date(str)
  let hours = date.getHours();
  let minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  const strTime = hours + ':' + minutes + ' ' + ampm;
  return date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear() + "   " + strTime;
}
