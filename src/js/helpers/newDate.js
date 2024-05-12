export default function newDate(date) {
    const currDate = new Date(date);
    const day = currDate.getDate();
    const month = currDate.getMonth() + 1;

    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;

    const year = currDate.getFullYear();
    
    return `${formattedDay}.${formattedMonth}.${year}`;
}