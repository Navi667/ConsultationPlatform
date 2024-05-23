export function extractTime(dateString){
    const date = new Date(dateString);
    const hours = padZero(date.getHours());
    const minutes = padZero(date.getMinutes());
    return `${hours}:${minutes}`
}

export function extractDate(dateString){
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getUTCMonth()+1;
    const year = date.getFullYear();

    return `${year}-${month}-${day}`
}

function padZero(number){
    return number.toString().padStart(2,"0");
}